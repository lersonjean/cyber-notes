
| Topic                 | Command / Section                         | Description                             |
| --------------------- | ----------------------------------------- | --------------------------------------- |
| **Basic Usage**       | `man <command>`                           | Open the manual page for a command      |
|                       | `q`                                       | Quit the man viewer                     |
|                       | `/text`                                   | Search forward for a string             |
|                       | `n` / `N`                                 | Repeat last search forward/backward     |
|                       | `G`                                       | Jump to the bottom of the man page      |
| **Useful Sections**   | `SEE ALSO`, `EXAMPLES`                    | Found at the bottom of most man pages   |
| **Keyword Search**    | `man -k <keyword>` or `apropos <keyword>` | Search man page summaries for a keyword |
| **Command Summary**   | `man -f <command>` or `whatis <command>`  | Show a short description of a command   |
| **Section Filtering** | `man -k <keyword> \| grep <section>`      | Filter search results by section number |
| **Common Sections**   | `1`                                       | User commands and programs              |
|                       | `5`                                       | File formats and configuration files    |
|                       | `8`                                       | System administration tools             |
| **Examples**          | `man -k password \| grep 5`               | Show password-related config files      |
|                       | `man -k partition \| grep 8`              | Show partition tools for administrators |
|                       | `man -f ls`                               | Show summary description for `ls`       |
