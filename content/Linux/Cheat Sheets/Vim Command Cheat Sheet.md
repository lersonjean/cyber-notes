# 🐧 Vim Command Cheat Sheet  
**Tags**: #linux #cli #vim #editor #rhcsastudy

## 📘 Vim Basics

| Topic                | Command / Keys   | Description                           |
| -------------------- | ---------------- | ------------------------------------- |
| **Start Vim**        | `vim <filename>` | Opens a file in Vim for editing       |
| **Insert Mode**      | `i`              | Enter insert mode (start typing)      |
|                      | `I`              | Insert at the beginning of the line   |
| **Exit Insert Mode** | `Esc`            | Return to normal mode                 |
| **Save and Quit**    | `:w`             | Write (save) file                     |
|                      | `:q`             | Quit                                  |
|                      | `:wq` or `ZZ`    | Save and quit                         |
|                      | `:q!`            | Quit without saving                   |
| **Navigation**       | `h` `j` `k` `l`  | Move left, down, up, right            |
|                      | `0` / `^`        | Beginning of line (first char)        |
|                      | `$`              | End of line                           |
|                      | `gg` / `G`       | Go to top / bottom of file            |
| **Search**           | `/word`          | Search forward for "word"             |
|                      | `?word`          | Search backward for "word"            |
|                      | `n` / `N`        | Next/previous search result           |
| **Editing**          | `x`              | Delete character under cursor         |
|                      | `dd`             | Delete current line                   |
|                      | `yy`             | Yank (copy) current line              |
|                      | `p`              | Paste below current line              |
|                      | `u`              | Undo last change                      |
|                      | `Ctrl + r`       | Redo change                           |
| **Visual Mode**      | `v`              | Start selecting text (character-wise) |
|                      | `V`              | Line-wise selection                   |
|                      | `d`, `y`, `>`    | Cut, copy, indent after selection     |
| **Command Mode**     | `:`              | Enter command-line mode               |
| **Open Help**        | `:help`          | Access Vim documentation              |
|                      |                  |                                       |
