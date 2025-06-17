# Dockerfile

# 1) Use Ubuntu LTS as a base for easy vcpkg support
FROM ubuntu:22.04 AS builder

# 2) Build-time arguments (defaults => native x86_64 build)
ARG CROSS_COMPILE_ARM64=OFF
ARG VCPKG_TARGET_TRIPLET=arm64-linux

# 3) Install system build tools
RUN apt-get update \
 && DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
      build-essential \
      cmake \
      git \
      curl \
 && rm -rf /var/lib/apt/lists/*

# 4) Clone & bootstrap vcpkg
ENV VCPKG_ROOT=/opt/vcpkg
RUN git clone --depth=1 https://github.com/microsoft/vcpkg.git ${VCPKG_ROOT} \
 && "${VCPKG_ROOT}/bootstrap-vcpkg.sh"

# 5) Copy your source into the image
WORKDIR /src
COPY . /

# 6) Configure & build
RUN mkdir build \
 && cd build \
 && cmake .. \
      -DCMAKE_BUILD_TYPE=Release \
      -DCMAKE_TOOLCHAIN_FILE=${VCPKG_ROOT}/scripts/buildsystems/vcpkg.cmake \
      -DCROSS_COMPILE_ARM64=${CROSS_COMPILE_ARM64} \
      -DVCPKG_TARGET_TRIPLET=${VCPKG_TARGET_TRIPLET} \
 && cmake --build . -- -j"$(nproc)"

# 7) (Optional) You can add a slim “runtime” stage here if you like, but
#    since rollback-server links dynamically you can just copy it out.
FROM scratch AS export
COPY --from=builder /src/build/rollback-server /rollback-server