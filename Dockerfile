# ---- Build ----
FROM node:20-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

# Fix nested lightningcss for Alpine musl
# lightningcss tries: require('lightningcss-linux-arm64-musl') then ../lightningcss.linux-arm64-musl.node
RUN ARCH=$(uname -m) && \
    if [ "$ARCH" = "aarch64" ]; then PLAT="linux-arm64-musl"; else PLAT="linux-x64-musl"; fi && \
    LC_VER=$(node -e "console.log(require('./node_modules/@tailwindcss/node/node_modules/lightningcss/package.json').version)") && \
    echo "Installing lightningcss-$PLAT@$LC_VER into nested location" && \
    npm pack "lightningcss-$PLAT@$LC_VER" 2>/dev/null && \
    mkdir -p node_modules/@tailwindcss/node/node_modules/lightningcss-$PLAT && \
    tar -xzf lightningcss-$PLAT-*.tgz -C node_modules/@tailwindcss/node/node_modules/lightningcss-$PLAT --strip-components=1 && \
    rm -f lightningcss-$PLAT-*.tgz && \
    node -e "require('./node_modules/@tailwindcss/node/node_modules/lightningcss'); console.log('nested lightningcss: OK')"

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN npm run build

# ---- Production Runner ----
FROM node:20-alpine AS runner
RUN apk add --no-cache libc6-compat && \
    rm -rf /usr/local/lib/node_modules/npm /usr/local/bin/npm /usr/local/bin/npx
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
