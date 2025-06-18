# syntax=docker/dockerfile:1
FROM --platform=linux/arm64 arm64v8/node:24

WORKDIR /app

# Copy only production dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy built files and any other needed files
COPY build ./build

# Expose port (change if your app uses a different port)
EXPOSE 3000

# Start the application (env vars will be set at runtime)
CMD ["node", "build/src/index.js"]
