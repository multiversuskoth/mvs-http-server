# syntax=docker/dockerfile:1
FROM arm64v8/node:24

WORKDIR /app

# Copy only production dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy built files and any other needed files
COPY build ./build

# Expose port (change if your app uses a different port)
EXPOSE 3000 8000

# Set the entrypoint to node and command to build/src/index.js
ENTRYPOINT ["node"]
CMD ["build/src/index.js"]
