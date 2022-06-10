---
created: 2022-05-31T12:49:09-04:00
modified: 2022-06-01T13:14:03-04:00
---

# Opensuse MicroOS

Tried it. Didn't work. Have to use nomodeset to boot installer iso. Installed but won't start.
Did boot into command line.

modprobe.blacklist=amdgpu systemd.setenv=GPUMOD=intel rd.driver.blacklist=amdgpu intel.modeset=1 amdgpu.modeset=0

GRUB_GFXMODE=1920X1080
