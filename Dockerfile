FROM ubuntu:20.04

# Install required OS packages
RUN apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install -y build-essential libpixman-1-dev libcairo2-dev libpango1.0-dev libjpeg8-dev libgif-dev pkg-config curl git

# Install nodejs/npm
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

# Install trianglifier
RUN rm -rf /opt/trianglifier
ADD . /opt/trianglifier
WORKDIR /opt/trianglifier
RUN npm install . \
    && npm run build


ENTRYPOINT ["node", "dist/trianglifier.js"]
