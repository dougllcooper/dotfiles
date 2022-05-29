- This install guide wipes an entire physical disk.
- Grub does not and will not work on 4Kn drives with legacy (BIOS) boot.
- |Name|legacy boot|ESP|Boot Pool|swap|Root Pool|Remaining Space|
- |Filesystem||vfat|ZFS|swap|ZFS||
- |Name|Legacy Boot|ESP|Boot Pool|Swap|Root Pool|Remaining Space|
  |--|--|--|--|--|--|--|
  |Filesystem||vat|ZFS|swap|ZFS||
  |Size|1M|2G|4G|depends|||
  |Optional Encryption||Secure Boot||plain dm-crypt|ZFS native encryption||
  |Partition No.|5|1|2|4|3||
  |Mount Point||/boot/efis/disk-part1|/boot||/||
- |Dataset|canmount|mountpoint|container|notes|
  |--|--|--|--|--|
  |bpool|off|/boot|contains sys||
  |rpool|off|/|contains sys||
  |bpool/sys|off|none|contains BOOT||
  |rpool/sys|off|none|contains ROOT|sys is encryptionroot||
  |bpool/sys/BOOT|off|none|contains boot environments||
  |rpool/sys/ROOT|off|none|contains boot environments||
  |rpool/sys/DATA|off|none|contains placeholder “default”||
  |rpool/sys/DATA/default|off|/|contains user datasets|child datsets inherits mountpoint|
  |rpool/sys/DATA/local|off|/|contains /nix datasets|child datsets inherits mountpoint|
  |rpool/sys/DATA/default/ home|on|/home (inherited)|no|user datasets, also called “shared datasets”, “persistent datasets”; also include /var/lib, /srv, …|
  |bpool/sys/BOOT/default|noauto|/boot|no|noauto is used to switch BE. because of noauto, must use fstab to mount|
  |rpool/sys/ROOT/default|noauto|/|no|mounted by initrd zfs hook|
-