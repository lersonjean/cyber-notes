
## 1. Essential Tools

- **Shell Commands**: Basic syntax, I/O redirection (`>`, `>>`, `|`, `2>`)
    
- **grep & Regex**: `grep 'pattern' file`
    
- **Remote Access**: SSH (`ssh user@host`)
    
- **User Management**: Login (`su`, `sudo`, multi-user targets)
    
- **File Archiving & Compression**:
    
    - Archive: `tar -cvf archive.tar dir`
        
    - Compress: `gzip file`, `bzip2 file`
        
    - Extract: `tar -xvf`, `gzip -d`, `bzip2 -d`
        
- **File Operations**: `cp`, `mv`, `rm`, `mkdir`, `touch`
    
- **Links**: `ln file link`, soft link: `ln -s file link`
    
- **Permissions**: `chmod`, `chown`, `ls -l`
    
- **Documentation**: `man`, `info`, `/usr/share/doc`
    
- **Shell Scripting**: Variables, conditional (`if`, `[ ]`), loops (`for`), script inputs (`$1`, `$2`), command substitution (`$(command)`)
    

## 2. System Operations

- **System Control**: Boot (`systemctl reboot`, `shutdown`, boot targets)
    
- **Boot Interruption**: Access recovery mode
    
- **Process Management**:
    
    - Monitor: `top`, `htop`
        
    - Kill: `kill`, `killall`
        
    - Scheduling: `nice`, `renice`
        
    - Tuning: `tuned-adm profile`
        
- **Logs & Journals**:
    
    - View: `journalctl`, `/var/log`
        
    - Preserve: `journalctl --rotate`
        
- **Network Services**: `systemctl start|stop|status service`
    
- **File Transfer**: SCP (`scp file user@host:/path`)
    

## 3. Local Storage

- **Partitions**: `fdisk`, `parted`
    
- **LVM**:
    
    - Physical Volumes (PV): `pvcreate`, `pvremove`
        
    - Volume Groups (VG): `vgcreate`, `vgextend`
        
    - Logical Volumes (LV): `lvcreate`, `lvextend`
        
- **Mounting**:
    
    - Mount by UUID/label (`fstab`)
        
    - Add Swap (`mkswap`, `swapon`, edit `/etc/fstab`)
        
- **File Systems**:
    
    - Create: `mkfs.ext4`, `mkfs.xfs`, `mkfs.vfat`
        
    - Mount/Unmount: `mount`, `umount`
        
    - Network FS (NFS): `mount -t nfs server:/path /mnt`
        
    - AutoFS Configuration: `/etc/auto.master`, `/etc/auto.misc`
        
    - Extend LV: `lvextend -L +size /dev/vg/lv && resize2fs`
        
    - Set-GID for collaboration: `chmod g+s directory`
        

## 4. System Deployment & Maintenance

- **Task Scheduling**:
    
    - One-time: `at`
        
    - Recurring: `crontab -e`
        
- **Service Management**: Enable services at boot (`systemctl enable service`)
    
- **Time Synchronization**: Chrony (`chronyc sources`, `/etc/chrony.conf`)
    
- **Package Management**: `yum install|update|remove`
    
- **Bootloader**: Modify (`/etc/default/grub`, `grub2-mkconfig`)
    

## 5. Networking Basics

- **IP Configuration**: `nmcli`, edit `/etc/sysconfig/network-scripts`
    
- **Hostname Resolution**: `/etc/hosts`, `/etc/resolv.conf`
    
- **Firewall**: `firewall-cmd`, zones, services, ports
    

## 6. User & Group Management

- **Users**: `useradd`, `userdel`, `usermod`
    
- **Passwords & Aging**: `passwd`, `chage`
    
- **Groups**: `groupadd`, `groupdel`, `groupmod`
    
- **Superuser Access**: `/etc/sudoers`, `visudo`
    

## 7. Security Management

- **Firewall**: Rules management (`firewall-cmd`)
    
- **File Permissions Defaults**: `umask`
    
- **SSH Key Authentication**: Key generation (`ssh-keygen`), `~/.ssh/authorized_keys`
    
- **SELinux**:
    
    - Modes: `setenforce`, `getenforce`
        
    - Contexts: `ls -Z`, `restorecon`
        
    - Ports & Booleans: `semanage port -a`, `setsebool`
        
    - Troubleshoot: `ausearch -m avc -ts recent`
        

## 8. Container Management

- **Containers**: Retrieve (`podman pull`), inspect (`skopeo inspect`)
    
- **Basic Management**:
    
    - Run: `podman run`
        
    - Start/Stop: `podman start|stop`
        
    - List: `podman ps`
        
    - Persistent Storage: `podman volume`
        
- **Service in Container**:
    
    - Systemd integration: `podman generate systemd`, enable service at boot
        

---

**Tags**: #RHCSA #Linux #SysAdmin #ObsidianNotes