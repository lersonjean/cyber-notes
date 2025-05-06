---
tags: [ccna, cisco, ios, cheat-sheet]
cssclass: cheat-sheet
---
---
tags: [ccna, cisco, ios, cheat-sheet]
cssclass: cheat-sheet
---

Use this sheet when you need a lightning‑fast refresher on essential Cisco IOS commands for the CCNA “Introduction to Networks” course. It’s trimmed to first‑hop configuration, verification, and troubleshooting tasks you’ll meet every day in Packet Tracer labs or on real gear.

<details>
<summary>🗂️ Master Outline</summary>

- **Quick‑Start commands**
- **Routers**
  - Configuration
  - Verification / Monitoring
  - Troubleshooting
- **Switches**
  - Configuration
  - Verification / Monitoring
  - Troubleshooting
- **Cross‑platform commands**

</details>

---

### Quick‑Start Commands {#Quick-Start}

| Mode | Command (syntax placeholders in _italics_) | Purpose | Example output snippet |
|---|---|---|---|
| User EXEC ➜ Priv EXEC | ```enable``` | Enter privileged EXEC mode | ```Switch>enable``` [[#Quick-Start|↩︎]] |
| Priv EXEC ➜ Global CFG | ```configure terminal``` | Enter global configuration mode | ```Switch#conf t``` [[#Quick-Start|↩︎]] |
| Global CFG | ```hostname _<name>_``` | Name the device (router or switch) | ```Switch(config)#hostname SW1``` [[#Quick-Start|↩︎]] |
| Global CFG | ```no ip domain-lookup``` | Prevent IOS from trying DNS on typos | ```SW1(config)#no ip domain-lookup``` [[#Quick-Start|↩︎]] |
| Global ➜ Line CFG | ```line console 0``` | Enter console line config | ```SW1(config)#line con 0``` [[#Quick-Start|↩︎]] |
| Line CFG | ```password _<pass>_``` | Set console password | ```SW1(config-line)#password lab``` [[#Quick-Start|↩︎]] |
| Line CFG | ```login``` | Require password on console | ```SW1(config-line)#login``` [[#Quick-Start|↩︎]] |
| Priv EXEC | ```copy running-config startup-config``` | Save initial config | ```Building configuration...``` [[#Quick-Start|↩︎]] |

---

### Routers‑Configuration {#Routers-Configuration}

| Mode | Command (syntax placeholders in _italics_) | Purpose | Example output snippet |
|---|---|---|---|
| User EXEC ➜ Priv EXEC | ```enable``` | Enter privileged EXEC mode | ```Router>enable``` [[#Routers-Configuration|↩︎]] |
| Priv EXEC ➜ Global CFG | ```configure terminal``` | Enter global configuration | ```Router#conf t``` [[#Routers-Configuration|↩︎]] |
| Global CFG | ```hostname _<name>_``` | Set device name | ```Router(config)#hostname R1``` [[#Routers-Configuration|↩︎]] |
| Global ➜ Int CFG | ```interface _<type/num>_``` | Select interface | ```R1(config)#int g0/0``` [[#Routers-Configuration|↩︎]] |
| Int CFG | ```ip address _<ipv4> <mask>_``` | Assign IPv4 address | ```R1(config-if)#ip add 10.1.1.1 255.255.255.0``` [[#Routers-Configuration|↩︎]] |
| Int CFG | ```no shutdown``` | Enable interface | ```R1(config-if)#no shut``` [[#Routers-Configuration|↩︎]] |
| Int CFG | ```description _<text>_``` | Label interface | ```R1(config-if)#desc Link_to_SW``` [[#Routers-Configuration|↩︎]] |
| Priv EXEC | ```copy running-config startup-config``` | Save to NVRAM | ```Building configuration...``` [[#Routers-Configuration|↩︎]] |

---

### Routers‑Verification / Monitoring {#Routers-Verification-Monitoring}

| Mode | Command | Purpose | Example output snippet |
|---|---|---|---|
| Priv EXEC | ```show running-config``` | View active config | ```! truncated``` [[#Routers-Verification-Monitoring|↩︎]] |
| Priv EXEC | ```show ip interface brief``` | Quick IP / status view | ```Gig0/0 10.1.1.1 up up``` [[#Routers-Verification-Monitoring|↩︎]] |
| Priv EXEC | ```show interfaces _<type/num>_``` | Detailed int stats | ```Gig0/0 is up``` [[#Routers-Verification-Monitoring|↩︎]] |
| Priv EXEC | ```show version``` | IOS, uptime, hardware | ```Cisco IOS XE 17.x``` [[#Routers-Verification-Monitoring|↩︎]] |
| Priv EXEC | ```show ip route``` | Routing table | ```C 10.1.1.0/24 is directly connected``` [[#Routers-Verification-Monitoring|↩︎]] |
| Priv EXEC | ```show cdp neighbors``` | Discover Cisco neighbors | ```Device ID: SW1``` [[#Routers-Verification-Monitoring|↩︎]] |
| Priv EXEC | ```show logging``` | View syslog buffer | ```%LINEPROTO-5-UPDOWN``` [[#Routers-Verification-Monitoring|↩︎]] |

---

### Routers‑Troubleshooting {#Routers-Troubleshooting}

| Mode | Command | Purpose | Example output snippet |
|---|---|---|---|
| Priv EXEC | ```ping _<destination>_``` | Test reachability | ```!!!!!``` [[#Routers-Troubleshooting|↩︎]] |
| Priv EXEC | ```traceroute _<destination>_``` | Path discovery | ```1 10.1.1.2  2 192.168.1.1``` [[#Routers-Troubleshooting|↩︎]] |
| Priv EXEC | ```debug ip icmp``` | Live ICMP debug | ```ICMP: echo reply``` [[#Routers-Troubleshooting|↩︎]] |
| Priv EXEC | ```show ip arp``` | ARP cache | ```10.1.1.2 0030.a3ff.1a01``` [[#Routers-Troubleshooting|↩︎]] |
| Priv EXEC | ```clear ip arp _[interface]_``` | Flush ARP entries | ```Router#clear ip arp``` [[#Routers-Troubleshooting|↩︎]] |
| Priv EXEC | ```show controllers _<type/num>_``` | Physical layer counters | ```CRC 0, input errors 0``` [[#Routers-Troubleshooting|↩︎]] |

---

### Switches‑Configuration {#Switches-Configuration}

| Mode | Command | Purpose | Example output snippet |
|---|---|---|---|
| User EXEC ➜ Priv EXEC | ```enable``` | Enter privileged EXEC | ```Switch>enable``` [[#Switches-Configuration|↩︎]] |
| Priv EXEC ➜ Global CFG | ```configure terminal``` | Enter global configuration | ```Switch#conf t``` [[#Switches-Configuration|↩︎]] |
| Global CFG | ```hostname _<name>_``` | Set switch name | ```Switch(config)#hostname SW1``` [[#Switches-Configuration|↩︎]] |
| Global ➜ VLAN CFG | ```vlan _<id>_``` | Create VLAN | ```SW1(config)#vlan 10``` [[#Switches-Configuration|↩︎]] |
| VLAN CFG | ```name _<name>_``` | Label VLAN | ```SW1(config-vlan)#name Sales``` [[#Switches-Configuration|↩︎]] |
| Global ➜ Int CFG | ```interface _<type/num>_``` | Select port | ```SW1(config)#int f0/1``` [[#Switches-Configuration|↩︎]] |
| Int CFG | ```switchport mode access``` | Set access mode | ```SW1(config-if)#sw mode access``` [[#Switches-Configuration|↩︎]] |
| Int CFG | ```switchport access vlan _<id>_``` | Assign access VLAN | ```SW1(config-if)#sw acc vlan 10``` [[#Switches-Configuration|↩︎]] |
| Priv EXEC | ```copy running-config startup-config``` | Save to NVRAM | ```Building configuration...``` [[#Switches-Configuration|↩︎]] |

---

### Switches‑Verification / Monitoring {#Switches-Verification-Monitoring}

| Mode | Command | Purpose | Example output snippet |
|---|---|---|---|
| Priv EXEC | ```show running-config``` | View current config | ```! truncated``` [[#Switches-Verification-Monitoring|↩︎]] |
| Priv EXEC | ```show vlan brief``` | VLAN table | ```10  Sales  active``` [[#Switches-Verification-Monitoring|↩︎]] |
| Priv EXEC | ```show mac address-table``` | MAC learning | ```10  0030.a3ff.1a01  Fa0/1``` [[#Switches-Verification-Monitoring|↩︎]] |
| Priv EXEC | ```show interfaces status``` | Port status summary | ```Fa0/1 connected``` [[#Switches-Verification-Monitoring|↩︎]] |
| Priv EXEC | ```show spanning-tree``` | STP state | ```Root ID 32778``` [[#Switches-Verification-Monitoring|↩︎]] |
| Priv EXEC | ```show version``` | IOS & hardware info | ```C2960X Software``` [[#Switches-Verification-Monitoring|↩︎]] |
| Priv EXEC | ```show cdp neighbors``` | Discover neighbors | ```Device ID: R1``` [[#Switches-Verification-Monitoring|↩︎]] |

---

### Switches‑Troubleshooting {#Switches-Troubleshooting}

| Mode | Command | Purpose | Example output snippet |
|---|---|---|---|
| Priv EXEC | ```ping _<destination>_``` | Reachability test | ```!!!!!``` [[#Switches-Troubleshooting|↩︎]] |
| Priv EXEC | ```traceroute _<destination>_``` | Path discovery | ```1 10.1.1.1``` [[#Switches-Troubleshooting|↩︎]] |
| Priv EXEC | ```show interface _<type/num>_ counters errors``` | Port error counters | ```CRC 0``` [[#Switches-Troubleshooting|↩︎]] |
| Priv EXEC | ```show errdisable recovery``` | Err‑disable info | ```timeout 300``` [[#Switches-Troubleshooting|↩︎]] |
| Priv EXEC | ```show port-security interface _<type/num>_``` | Port‑security stats | ```SecurityViolation 0``` [[#Switches-Troubleshooting|↩︎]] |
| Priv EXEC | ```clear counters _[interface]_``` | Reset counters | ```Clear "show interface" counters``` [[#Switches-Troubleshooting|↩︎]] |

---

### Cross‑platform Commands {#Cross-platform-commands}

| Mode | Command | Purpose | Example output snippet |
|---|---|---|---|
| Priv EXEC | ```reload _[in <minutes>]_``` | Reboot device | ```Proceed with reload?``` [[#Cross-platform-commands|↩︎]] |
| Global CFG | ```banner motd # _<text>_ #``` | Set MOTD banner | ```Enter TEXT message.``` [[#Cross-platform-commands|↩︎]] |
| Global CFG | ```service password-encryption``` | Obfuscate passwords | ```SW1(config)#service password-encryption``` [[#Cross-platform-commands|↩︎]] |
| Global CFG | ```no ip domain-lookup``` | Stop DNS lookups on typos | ```SW1(config)#no ip domain-lookup``` [[#Cross-platform-commands|↩︎]] |
| Global CFG | ```enable secret _<pass>_``` | Secure enable mode | ```SW1(config)#enable secret cisco123``` [[#Cross-platform-commands|↩︎]] |
| Global ➜ Line CFG | ```line console 0``` | Enter console line config | ```SW1(config)#line con 0``` [[#Cross-platform-commands|↩︎]] |
| Line CFG | ```password _<pass>_``` | Set console password | ```SW1(config-line)#password lab``` [[#Cross-platform-commands|↩︎]] |
| Line CFG | ```login``` | Require login | ```SW1(config-line)#login``` [[#Cross-platform-commands|↩︎]] |

---

## Common Shortcuts & Keystrokes
- **Ctrl + Z** — End configuration mode, return to privileged EXEC  
- **Ctrl + C** — Abort current command or ping  
- **Tab** — Auto‑complete command / keyword  
- **Ctrl + A / Ctrl + E** — Jump to beginning / end of line  
- **Arrow ▲▼ / Ctrl + P / N** — Command history navigation  
- **?** — Context‑sensitive help at cursor position  

## Glossary
- **ACL** — Access Control List: packet‑filtering rule set  
- **ARP** — Address Resolution Protocol: IP ↔ MAC mapping  
- **CDP** — Cisco Discovery Protocol: neighbor discovery  
- **MOTD** — Message of the Day banner shown on login  
- **STP** — Spanning Tree Protocol: loop‑prevention algorithm  
- **VLAN** — Virtual Local Area Network: logical L2 broadcast domain  

> [!info] Resources  
> - [Cisco IOS Command References](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/fundamentals)  
> - [Download Cisco Packet Tracer](https://www.netacad.com/portal/resources/packet-tracer)  
> - [Cisco Learning Network](https://learningnetwork.cisco.com/)



This is a change to test the commit