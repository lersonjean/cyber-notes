# 🐧 Alias Command Cheat Sheet  
**Tags**: #linux #cli #alias #rhcsastudy

## 📘 alias Command Usage

| Topic                        | Command / Section                                    | Description                                                        |
| ---------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------ |
| **View All Aliases**         | `alias`                                              | Lists all currently defined aliases                                |
| **Create Alias**             | `alias ll='ls -lah'`                                 | Defines a new alias (`ll` as shortcut for `ls -lah`)               |
| **Use Quotes**               | `alias gs='git status'`                              | Quotes are recommended when alias includes spaces                  |
| **Temporary Alias**          | `alias c='clear'`                                    | Works only in the current session                                  |
| **Permanent Alias**          | Add to `~/.bashrc`, `~/.bash_aliases`, or `~/.zshrc` | Make alias persist after reboot or new terminal                    |
| **Apply Changes**            | `source ~/.bashrc`                                   | Reload shell config to apply new aliases                           |
| **Remove Alias (Temporary)** | `unalias <name>`                                     | Remove an alias for the current session                            |
| **Remove All Aliases**       | `unalias -a`                                         | Deletes all aliases in the current shell session                   |
| **View Alias Definition**    | `type <alias>` or `alias <name>`                     | Shows what a specific alias does                                   |
| **Best Practice**            | Use meaningful, short names                          | Avoid overriding essential commands (like `rm`) unless intentional |
| **Check Conflicts**          | `type <command>`                                     | See if a command is aliased or a real command                      |
