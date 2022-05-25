# https://support.endlessos.org/en/dev/toolbox-debian

# Create a Debian container using Toolbox

# Create Dockerfile.debian file:

FROM docker.io/library/debian:testing

LABEL com.github.containers.toolbox="true" \
      com.github.debarshiray.toolbox="true"

RUN apt-get update && \
    apt-get -y install sudo libcap2-bin && \
    apt-get clean

RUN sed -i -e 's/ ALL$/ NOPASSWD:ALL/' /etc/sudoers

RUN touch /etc/localtime
RUN echo VARIANT_ID=container >> /etc/os-release

CMD /bin/bash

# change debian:testing to stable or unstable, whatever you want

# Build the image

podman build -t debian-toolbox -f Dockerfile.debian

# Create the Toolbox container

toolbox create -i localhost/debian-toolbox:latest

# Gave me an error when I did this but it worked

Created container: debian-toolbox-latest
Enter with: toolbox enter debian-toolbox-latest

# worked with toolbox enter debian-toolbox-latest
