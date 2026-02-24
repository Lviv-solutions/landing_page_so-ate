FROM node:20-alpine

WORKDIR /app

# Install deps
COPY package.json package-lock.json* ./
COPY .npmrc ./
RUN npm install

# Copy project files
COPY . .

# Build app
RUN npm run build

# Set production env
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Start normally (NO standalone)
CMD ["npm", "start"]