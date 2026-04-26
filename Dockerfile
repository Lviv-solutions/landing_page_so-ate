FROM node:20-alpine AS builder

WORKDIR /app

# Install deps
COPY package.json package-lock.json* ./
COPY .npmrc ./
RUN npm ci

# Copy project files
COPY . .

# Build app
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Remove dangerous binaries that attackers can abuse (nc, wget, curl, etc.)
RUN apk --no-cache del busybox-extras curl wget || true && \
    rm -f /usr/bin/nc /usr/bin/ncat /usr/bin/wget /usr/bin/curl 2>/dev/null || true

# Copy only what's needed from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json* ./
COPY --from=builder /app/.npmrc ./
RUN npm ci --omit=dev && npm install --save-exact typescript

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/next-i18next.config.js ./

# Set ownership and run as non-root user
RUN chown -R node:node /app
USER node

EXPOSE 3000

# Start normally (NO standalone)
CMD ["npm", "start"]