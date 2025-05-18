# 🐧 Shell Environment Cheat Sheet  
**Tags**: #linux #cli #environment #variables #rhcsastudy

## 📘 Shell Environment Overview

| Topic | Command / File | Description |
|-------|----------------|-------------|
| **View All Environment Variables** | `env` | Displays all environment variables in the current shell |
| **Create Variable** | `VAR=value` | Define a variable (no spaces around `=`) |
| **Read Variable** | `echo $VAR` | Display the value of a variable |
| **Example Variable** | `LANG=en_US.UTF-8` | Controls language and regional settings |
| **PATH Variable** | `echo $PATH` | Shows directories used to search for commands |
| **Temporary Variable** | `NAME=value` (in session) | Only exists during current session/shell |
| **Permanent Variable** | Add to `.bashrc` / `.bash_profile` | To persist across sessions |

---

## 🧩 Environment Configuration Files

| File | Purpose |
|------|---------|
| `/etc/profile` | Global login shell settings for all users |
| `/etc/bashrc` | Global settings for interactive **subshells** |
| `~/.bash_profile` | User-specific login shell settings |
| `~/.bashrc` | User-specific subshell configuration |

> 💡 Login shell = first shell after login  
> 💡 Subshell = any new shell opened from the login shell

To keep a consistent environment, source `~/.bashrc` from `~/.bash_profile`:
```bash
if [ -f ~/.bashrc ]; then
    . ~/.bashrc
fi
```

## 📢 Login Message Files

|File|Description|
|---|---|
|`/etc/motd`|Message shown **after login** (Message of the Day)|
|`/etc/issue`|Message shown **before login** at console|