# --- Build Stage ---
# Use the official Bun image to install dependencies and compile
FROM oven/bun AS build

# Set the working directory
WORKDIR /app

# Copy lock file and package.json first to leverage Docker's build cache
COPY bun.lock .
COPY package.json .

# Copy all source code
COPY . .

# Install production dependencies
RUN bun install --frozen-lockfile --production

# Compile the application into a single binary named 'cli'
# Replace './src/index.ts' with your application's entry point
RUN bun run build

# --- Production Stage ---
# Use a minimal base image (e.g., Ubuntu or Alpine) for the final runtime
FROM ubuntu:24.04

# Set the working directory in the final image
WORKDIR /app

# Copy the compiled binary from the 'build' stage
COPY --from=build /app/mvsi /app/mvsi

# Execute the binary when the container starts
CMD ["/app/mvsi"]