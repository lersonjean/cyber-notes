
###Exploring the Filesystem Hierarchy
#### 🔹 General Info

| Topic            | Details                                 |
| ---------------- | --------------------------------------- |
| Standard         | Filesystem Hierarchy Standard (FHS)     |
| Maintained By    | Linux Foundation                        |
| Purpose          | Ensure consistency across distributions |
| Root Directory   | `/`                                     |
| Access Root      | `cd /`                                  |
| Confirm Location | `pwd`                                   |

---

#### 📂 Common Directories

| Directory   | Purpose                                                |
|------------|--------------------------------------------------------|
| `/`        | Root of the entire filesystem                          |
| `/etc`     | System configuration files                             |
| `/usr`     | User programs, binaries, documentation                 |
| `/usr/bin` | Executable programs for all users                      |
| `/usr/sbin`| System admin binaries (root access needed)             |
| `/var`     | Variable data (logs, spool, temp runtime files, etc.)  |
| `/var/log` | Log files (traditionally stored here)                  |
| `/tmp`     | Temporary files (writable by any user)                 |
| `~`        | User's home directory                                  |
| `cd`       | Takes you to home if used without arguments            |

---

#### 🧰 Useful Commands

| Command         | Description                                      |
|----------------|--------------------------------------------------|
| `cd /`          | Go to the root directory                         |
| `ls`            | List files/directories                           |
| `cd /etc`       | Enter the `/etc` configuration directory         |
| `cd /usr`       | Go to the `/usr` directory                       |
| `touch hello`   | Create empty file (test write permission)        |
| `pwd`           | Print working directory                          |
| `man hier`      | View man page for filesystem hierarchy           |
| `man 7 hier`    | Show hierarchy under section 7 (misc. docs)      |

---

#### 📚 Man Page Tips

| Topic         | Description                                         |
|---------------|-----------------------------------------------------|
| `man hier`    | Lists directories and their purpose per FHS         |
| Section `7`   | Man pages for miscellaneous conventions/standards   |
| `SEE ALSO`    | Related man pages for deeper learning               |

---

#### 🔗 Reference

| Resource           | Link                                                                 |
|--------------------|----------------------------------------------------------------------|
| FHS Documentation  | [FHS 3.0 - Linux Foundation](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html) |

###Using Essential File Management Commands

#### 🔹 Basic File Management Commands

| Command     | Description                                  |
|-------------|----------------------------------------------|
| `ls`        | List files and directories                   |
| `ls -l`     | Long listing format (shows permissions, etc.)|
| `ls -lrt`   | Long listing sorted by modification time     |
| `mkdir`     | Create a new directory                       |
| `cp`        | Copy files or directories                    |
| `mv`        | Move or rename files                         |
| `rmdir`     | Remove an empty directory                    |
| `rm`        | Remove files                                 |
| `rm -rf`    | Recursively and forcibly remove directories  |

---

#### 📂 Demo Workflow Shown in Video

| Step | Command / Concept | Purpose |
|------|-------------------|---------|
| 1 | `mkdir filedemo` | Create new directory |
| 2 | `ls -lrt` | View most recent files last |
| 3 | `cp output filedemo/` | Copy file to new directory |
| 4 | `ls filedemo` | List contents of that directory |
| 5 | `ls -d filedemo` | Show properties of the directory itself |
| 6 | `cd filedemo` | Navigate into the directory |
| 7 | `cp /etc/ab* .` | Copy files starting with "a" or "b" to current dir |
| 8 | `mv at.deny hello.deny` | Rename file |
| 9 | `rmdir filedemo` | Attempt to remove directory (fails if not empty) |
| 10 | `rm -rf filedemo` | Force-remove non-empty directory |

---

#### ⚠️ Error Scenarios Discussed

| Scenario | Explanation |
|----------|-------------|
| `cp` fails on directory | Use `-r` (recursive) option |
| `Permission denied` | Trying to copy protected file (e.g. API key) |
| `rmdir` fails | Only works on empty directories |

---

#### 🧠 Useful Tips

| Tip | Detail |
|-----|--------|
| `TAB` | Auto-completion of filenames |
| `.` | Refers to current directory |
| `man rm` or `rm --help` | Learn about all `rm` options |
| `mv` | Can also be used to rename files |
| `ls -d` | Use to avoid listing directory contents |



### Finding Files
#### 🔹 Basic Commands Overview

| Command  | Description                                                                   |
| -------- | ----------------------------------------------------------------------------- |
| `ls`     | Lists files (not used for searching)                                          |
| `which`  | Locates executables in your `$PATH`                                           |
| `locate` | Uses a database built by `updatedb` (can be outdated)                         |
| `find`   | Most powerful and flexible tool to search files                               |
| `xargs`  | Converts output of a command (like `find`) into arguments for another command |

---

#### 🔍 `find` Command Examples

| Example | Explanation |
|---------|-------------|
| `find / -name "hosts"` | Search for files named exactly "hosts" starting at root `/` |
| `find / -name "*hosts*"` | Match files containing "hosts" in name |
| `find / -type f -size +100M` | Find regular files larger than 100 MB |
| `find /etc -exec grep -l student {} \;` | Search files in `/etc` containing the word "student" |
| `find /etc -name '*' \| xargs grep 127.0.0.1` | Search all files in `/etc` for 127.0.0.1 |

---

#### ⚙️ Explanation of Complex `find` Usage

| Concept | Details |
|--------|---------|
| `-type f` | Restrict search to regular files only |
| `-size +100M` | Files larger than 100MB |
| `-exec` | Run a command on each file found |
| `{}` | Placeholder for current file found |
| `\;` | Ends `-exec` command (escaped semicolon) |
| `2> /dev/null` | Suppress permission denied errors |
| `mkdir -p find/contents` | Create target directory for copied files |
| `-exec cp {} find/contents/ \;` | Copy matched files into `find/contents/` |

---

#### 🔠 About Escaping Semicolons

| Syntax | Why It's Used |
|--------|---------------|
| `\;` | Tells Bash to **not interpret** `;` as a command separator |
| Used in `find ... -exec ... \;` | Ensures `find` handles `;`, not the shell |

> Example: `ls; who` runs two commands.  
> With `\;`, the semicolon stays part of the `find` command context.

---

#### 🧠 Practical Tips

| Tip | Explanation |
|-----|-------------|
| Use `sudo -i` for full access | Avoids permission errors during full system search |
| Always quote filenames or patterns | e.g., `-name "hosts"` or `"*hosts*"` |
| Use `2> /dev/null` | Silences errors when scanning protected directories |
| Use `xargs` with `grep` | Allows scanning file contents from `find` output |
| Default behavior of `find` | Without `-name`, matches all files |

---

#### 📌 Summary: When to Use What

| Tool | Use Case |
|------|----------|
| `which` | Find executables in `$PATH` |
| `locate` | Quick file search using index (can be outdated) |
| `find` | Deep, flexible search with custom conditions |
| `xargs` | Chain commands and process `find` output |



###Mounting File Systems

### 📁 2025-05-18 - Mounting Filesystems

#### 🔹 What Is Mounting?

| Concept | Description |
|--------|-------------|
| Mounting | Making a storage device accessible at a directory path |
| Filesystem Hierarchy | Linux shows a single tree, but it's composed of multiple devices |
| Use case | USB drive, disk partition, or volume must be mounted before use |

---

#### 📦 Key Mounting Concepts

| Term | Explanation |
|------|-------------|
| Mount point | The directory where the device is accessed (e.g., `/mnt`) |
| `/mnt` | Common temporary mount point for manually mounted devices |
| `/boot` | Often mounted on a separate partition for boot files |
| Device example | `/dev/sdb1`, `/dev/sda1` — block device files |
| Manual mount example | `mount /dev/sdb1 /mnt` |

---

#### 🛠️ Useful Commands

| Command | Description |
|---------|-------------|
| `mount` | Mount a device manually |
| `umount` | Unmount a device safely |
| `findmnt` | Show currently mounted devices with their mount points |
| `lsblk` | List block devices and their mount status |
| `ls /boot` | View files on a specific mount (e.g., `/dev/sda1`) |

---

#### 🧪 Example Flow

| Step | Command | Purpose |
|------|---------|---------|
| 1 | `lsblk` | List available block devices |
| 2 | `mount /dev/sdb1 /mnt` | Mount `/dev/sdb1` on `/mnt` |
| 3 | `findmnt` | View where devices are mounted |
| 4 | `ls /mnt` | View contents of the mounted device |
| 5 | `umount /mnt` | Safely unmount the device |

---

#### ⚠️ Notes & Tips

| Tip | Explanation |
|-----|-------------|
| You can mount the same device to multiple locations | Linux allows remounting but can cause conflicts |
| Always `umount` before removing a device | Prevents data loss and ensures clean unmount |
| `findmnt` is better than `mount` for human-readable output |
| These topics (fstab, auto-mounting) will be covered later in the course |




###Using Links
### 📁 2025-05-18 - Using Links (Hard & Symbolic)

#### 🔹 What Are Links?

| Concept | Description |
|--------|-------------|
| Link | A pointer to another file (like a shortcut) |
| Hard Link | A direct name to an inode (the file itself) |
| Symbolic Link | A file that points to another filename (not directly to the inode) |
| Command to create hard link | `ln original hardlink` |
| Command to create symbolic link | `ln -s target symlink` |

---

#### 🧱 Filesystem Internals

| Term | Explanation |
|------|-------------|
| Inode | Metadata structure pointing to file blocks on disk |
| Hard Link | Multiple filenames pointing to the **same inode** |
| Symbolic Link | Separate file with its own inode that stores the path of the target file |

---

#### ⚙️ Hard Link vs Symbolic Link

| Property | Hard Link | Symbolic Link |
|----------|-----------|----------------|
| Points to | Inode (actual data) | File path |
| Inode | Same as original | Different |
| Survives if original is deleted? | ✅ Yes | ❌ No |
| Permissions | Shared with original | Separate, but irrelevant (follows target) |
| Relative path? | Not applicable | Yes, by default |

---

#### 📂 Practical Commands

| Command | Purpose |
|---------|---------|
| `ls -il` | Show inode numbers of files |
| `ln file1 file2` | Create a hard link |
| `ln -s target linkname` | Create a symbolic link |
| `echo hello >> file` | Append content to file (affects all hard links) |
| `rm file` | Deleting original affects symbolic links only |

---

#### 🧪 Demonstration Breakdown

| Step | Action | Result |
|------|--------|--------|
| `ls -il /etc/hosts` | See inode of `/etc/hosts` |
| `ln /etc/hosts myhosts` | Create hard link `myhosts` |
| `ls -il` | Shows both have same inode |
| `echo hello >> myhosts` | Affects `/etc/hosts` too |
| `ln -s myhosts symhosts` | Create symbolic link to `myhosts` |
| `ls -il` | Shows different inode for `symhosts` |
| `cat symhosts` | Displays target file contents |
| `rm myhosts` | Breaks symbolic link |
| `cat symhosts` | Results in "No such file or directory" |
| `ln /etc/hosts myhosts` | Restores original link |
| `cat symhosts` | Works again if target exists |

---

#### ⚠️ Important Notes

| Warning | Explanation |
|---------|-------------|
| Symbolic links use relative paths by default | Moving them may break the link |
| Symbolic links have their own inode | But permissions follow the target |
| Broken symlink still exists | But can’t be used until target is restored |

---

#### 🧠 Real-world Example (Instructor's Use Case)

| Scenario | Description |
|----------|-------------|
| One file (e.g. `kube-setup.sh`) used in multiple courses |
| Hard links created across course directories |
| Modify any linked file → all reflect changes automatically |

###Archiving Files
### 📁 2025-05-18 - Archiving Files with `tar`

#### 🔹 About `tar`

| Feature | Description |
|--------|-------------|
| Tool Name | `tar` (Tape Archiver) |
| Original Purpose | Archive data to tape (no compression) |
| Current Use | Archive & compress files/directories |
| Common Functions | Create, list, extract archives |
| File extensions | `.tar`, `.tar.gz`, `.tar.bz2`, `.tar.xz`, `.tgz` |

---

#### 📦 Basic `tar` Commands

| Command | Function |
|---------|----------|
| `tar -cvf archive.tar dir/` | Create archive from `dir/` |
| `tar -tvf archive.tar` | List contents of the archive |
| `tar -xvf archive.tar` | Extract archive contents to current dir |
| `tar -xvf archive.tar -C /path` | Extract to specific directory |

---

#### 🗜️ Compression Options with `tar`

| Option | Compression Type | Extension |
|--------|------------------|-----------|
| `-z` | gzip | `.tar.gz` or `.tgz` |
| `-j` | bzip2 | `.tar.bz2` |
| `-J` | xz | `.tar.xz` |

---

#### 🛠️ Example Commands Used in Demo

| Step | Command | Purpose |
|------|---------|---------|
| 1 | `tar -cvf /tmp/archive.tar /home /etc` | Create archive without compression |
| 2 | `tar -czvf /tmp/archive.tgz /home /etc` | Create gzip-compressed archive |
| 3 | `tar -cjvf /tmp/archive.tar.bz2 /home /etc` | Create bzip2-compressed archive |
| 4 | `tar -cJvf /tmp/archive.tar.xz /home /etc` | Create xz-compressed archive |
| 5 | `ls -l /tmp/archive.t*` | Compare archive sizes |

---

#### 📊 Compression Comparison (as observed)

| Format | Compression | Speed | Notes |
|--------|-------------|-------|-------|
| `.tgz` | Gzip | Fast | Standard default |
| `.tar.bz2` | Bzip2 | Medium | Better compression |
| `.tar.xz` | XZ | Slow | Best compression ratio |

---

#### 📂 Viewing & Extracting Archives

| Task | Command |
|------|---------|
| List archive contents | `tar -tvf /tmp/archive.tar` |
| Extract archive | `tar -xvf /tmp/archive.tar` |
| Extract to specific dir | `tar -xvf archive.tar -C /desired/path/` |

---

#### 🧠 Notes & Tips

| Tip | Explanation |
|-----|-------------|
| Extensions don’t matter to Linux | But help humans understand format |
| `tar` auto-detects compression | No need to specify decompression method manually |
| Verbose `-v` | Shows file names as they're processed |
| Always keep `-f` followed by archive name | Never put other options in between `-f` and the filename |


###Working with Compressed Files
### 📁 2025-05-18 - Working with Compressed Files

#### 🔹 Overview

| Topic | Description |
|-------|-------------|
| Compression in Linux | Built into `tar` or used as standalone utilities |
| Trade-offs | Balance between **compression ratio** and **speed** |
| Most common tools | `gzip`, `bzip2`, `xz`, `zip` |
| Used with `tar` | Compression flags: `-z`, `-j`, `-J` |

---

#### 🗜️ Compression Tools Comparison

| Tool | Tar Flag | Speed | Compression Ratio | Common Use |
|------|----------|-------|-------------------|-------------|
| `gzip` | `-z` | ✅ Fast | Medium | Most widely used |
| `bzip2` | `-j` | ⚠️ Slower | Better than gzip | Less common now |
| `xz` | `-J` | ❌ Slow | ✅ Best | Increasingly popular |
| `zip` | *(not used with tar)* | Medium | Medium | For Windows compatibility |

---

#### 🔧 Notes on Usage

| Note | Explanation |
|------|-------------|
| `gzip` and `xz` | Most common on Linux systems today |
| `zip` | Rarely used on Linux but good for Windows compatibility |
| Tar handles decompression automatically | You don’t need to manually extract with `gzip`, `xz`, etc. if using `tar` |
| Choose based on need | Use `gzip` for speed, `xz` for best compression |

---

#### 🧠 Quick Tar Flags Recap

| Flag | Function |
|------|----------|
| `-z` | Use `gzip` compression |
| `-j` | Use `bzip2` compression |
| `-J` | Use `xz` compression |












