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
| User EXEC ➜ Priv EXEC | ```enable``` | Enter privileged EXEC mode | ```Switch>enable``` <strong>#Quick-Start|↩︎</strong> |
| Priv EXEC ➜ Global CFG | ```configure terminal``` | Enter global configuration mode | ```Switch#conf t``` <strong>#Quick-Start|↩︎</strong> |
| Global CFG | ```hostname _<name>_``` | Name the device (router or switch) | ```Switch(config)#hostname SW1``` <strong>#Quick-Start|↩︎</strong> |
| Global CFG | ```no ip domain-lookup``` | Prevent IOS from trying DNS on typos | ```SW1(config)#no ip domain-lookup``` <strong>#Quick-Start|↩︎</strong> |
| Global ➜ Line CFG | ```line console 0``` | Enter console line config | ```SW1(config)#line con 0``` <strong>#Quick-Start|↩︎</strong> |
| Line CFG | ```password _<pass>_``` | Set console password | ```SW1(config-line)#password lab``` <strong>#Quick-Start|↩︎</strong> |
| Line CFG | ```login``` | Require password on console | ```SW1(config-line)#login``` <strong>#Quick-Start|↩︎</strong> |
| Priv EXEC | ```copy running-config startup-config``` | Save initial config | ```Building configuration...``` <strong>#Quick-Start|↩︎</strong> |

---

### Routers‑Configuration {#Routers-Configuration}

| Mode | Command (syntax placeholders in _italics_) | Purpose | Example output snippet |
|---|---|---|---|
| User EXEC ➜ Priv EXEC | ```enable``` | Enter privileged EXEC mode | ```Router>enable``` <strong>#Routers-Configuration|↩︎</strong> |
| Priv EXEC ➜ Global CFG | ```configure terminal``` | Enter global configuration | ```Router#conf t``` <strong>#Routers-Configuration|↩︎</strong> |
| Global CFG | ```hostname _<name>_``` | Set device name | ```Router(config)#hostname R1``` <strong>#Routers-Configuration|↩︎</strong> |
| Global ➜ Int CFG | ```interface _<type/num>_``` | Select interface | ```R1(config)#int g0/0``` <strong>#Routers-Configuration|↩︎</strong> |
| Int CFG | ```ip address _<ipv4> <mask>_``` | Assign IPv4 address | ```R1(config-if)#ip add 10.1.1.1 255.255.255.0``` <strong>#Routers-Configuration|↩︎</strong> |
| Int CFG | ```no shutdown``` | Enable interface | ```R1(config-if)#no shut``` <strong>#Routers-Configuration|↩︎</strong> |
| Int CFG | ```description _<text>_``` | Label interface | ```R1(config-if)#desc Link_to_SW``` <strong>#Routers-Configuration|↩︎</strong> |
| Priv EXEC | ```copy running-config startup-config``` | Save to NVRAM | ```Building configuration...``` <strong>#Routers-Configuration|↩︎</strong> |

---

### Routers‑Verification / Monitoring {#Routers-Verification-Monitoring}

| Mode | Command | Purpose | Example output snippet |
|---|---|---|---|
| Priv EXEC | ```show running-config``` | View active config | ```! truncated``` <strong>#Routers-Verification-Monitoring|↩︎</strong> |
| Priv EXEC | ```show ip interface brief``` | Quick IP / status view | ```Gig0/0 10.1.1.1 up up``` <strong>#Routers-Verification-Monitoring|↩︎</strong> |
| Priv EXEC | ```show interfaces _<type/num>_``` | Detailed int stats | ```Gig0/0 is up``` <strong>#Routers-Verification-Monitoring|↩︎</strong> |
| Priv EXEC | ```show version``` | IOS, uptime, hardware | ```Cisco IOS XE 17.x``` <strong>#Routers-Verification-Monitoring|↩︎</strong> |
| Priv EXEC | ```show ip route``` | Routing table | ```C 10.1.1.0/24 is directly connected``` <strong>#Routers-Verification-Monitoring|↩︎</strong> |
| Priv EXEC | ```show cdp neighbors``` | Discover Cisco neighbors | ```Device ID: SW1``` <strong>#Routers-Verification-Monitoring|↩︎</strong> |
| Priv EXEC | ```show logging``` | View syslog buffer | ```%LINEPROTO-5-UPDOWN``` <strong>#Routers-Verification-Monitoring|↩︎</strong> |

---

### Routers‑Troubleshooting {#Routers-Troubleshooting}

| Mode | Command | Purpose | Example output snippet |
|---|---|---|---|
| Priv EXEC | ```ping _<destination>_``` | Test reachability | ```!!!!!``` <strong>#Routers-Troubleshooting|↩︎</strong> |
| Priv EXEC | ```traceroute _<destination>_``` | Path discovery | ```1 10.1.1.2  2 192.168.1.1``` <strong>#Routers-Troubleshooting|↩︎</strong> |
| Priv EXEC | ```debug ip icmp``` | Live ICMP debug | ```ICMP: echo reply``` <strong>#Routers-Troubleshooting|↩︎</strong> |
| Priv EXEC | ```show ip arp``` | ARP cache | ```10.1.1.2 0030.a3ff.1a01``` <strong>#Routers-Troubleshooting|↩︎</strong> |
| Priv EXEC | ```clear ip arp _[interface]_``` | Flush ARP entries | ```Router#clear ip arp``` <strong>#Routers-Troubleshooting|↩︎</strong> |
| Priv EXEC | ```show controllers _<type/num>_``` | Physical layer counters | ```CRC 0, input errors 0``` <strong>#Routers-Troubleshooting|↩︎</strong> |

---

### Switches‑Configuration {#Switches-Configuration}

| Mode | Command | Purpose | Example output snippet |
|---|---|---|---|
| User EXEC ➜ Priv EXEC | ```enable``` | Enter privileged EXEC | ```Switch>enable``` <strong>#Switches-Configuration|↩︎</strong> |
| Priv EXEC ➜ Global CFG | ```configure terminal``` | Enter global configuration | ```Switch#conf t``` <strong>#Switches-Configuration|↩︎</strong> |
| Global CFG | ```hostname _<name>_``` | Set switch name | ```Switch(config)#hostname SW1``` <strong>#Switches-Configuration|↩︎</strong> |
| Global ➜ VLAN CFG | ```vlan _<id>_``` | Create VLAN | ```SW1(config)#vlan 10``` <strong>#Switches-Configuration|↩︎</strong> |
| VLAN CFG | ```name _<name>_``` | Label VLAN | ```SW1(config-vlan)#name Sales``` <strong>#Switches-Configuration|↩︎</strong> |
| Global ➜ Int CFG | ```interface _<type/num>_``` | Select port | ```SW1(config)#int f0/1``` <strong>#Switches-Configuration|↩︎</strong> |
| Int CFG | ```switchport mode access``` | Set access mode | ```SW1(config-if)#sw mode access``` <strong>#Switches-Configuration|↩︎</strong> |
| Int CFG | ```switchport access vlan _<id>_``` | Assign access VLAN | ```SW1(config-if)#sw acc vlan 10``` <strong>#Switches-Configuration|↩︎</strong> |
| Priv EXEC | ```copy running-config startup-config``` | Save to NVRAM | ```Building configuration...``` <strong>#Switches-Configuration|↩︎</strong> |

---

### Switches‑Verification / Monitoring {#Switches-Verification-Monitoring}

| Mode | Command | Purpose | Example output snippet |
|---|---|---|---|
| Priv EXEC | ```show running-config``` | View current config | ```! truncated``` <strong>#Switches-Verification-Monitoring|↩︎</strong> |
| Priv EXEC | ```show vlan brief``` | VLAN table | ```10  Sales  active``` <strong>#Switches-Verification-Monitoring|↩︎</strong> |
| Priv EXEC | ```show mac address-table``` | MAC learning | ```10  0030.a3ff.1a01  Fa0/1``` <strong>#Switches-Verification-Monitoring|↩︎</strong> |
| Priv EXEC | ```show interfaces status``` | Port status summary | ```Fa0/1 connected``` <strong>#Switches-Verification-Monitoring|↩︎</strong> |
| Priv EXEC | ```show spanning-tree``` | STP state | ```Root ID 32778``` <strong>#Switches-Verification-Monitoring|↩︎</strong> |
| Priv EXEC | ```show version``` | IOS & hardware info | ```C2960X Software``` <strong>#Switches-Verification-Monitoring|↩︎</strong> |
| Priv EXEC | ```show cdp neighbors``` | Discover neighbors | ```Device ID: R1``` <strong>#Switches-Verification-Monitoring|↩︎</strong> |

---

### Switches‑Troubleshooting {#Switches-Troubleshooting}

| Mode | Command | Purpose | Example output snippet |
|---|---|---|---|
| Priv EXEC | ```ping _<destination>_``` | Reachability test | ```!!!!!``` <strong>#Switches-Troubleshooting|↩︎</strong> |
| Priv EXEC | ```traceroute _<destination>_``` | Path discovery | ```1 10.1.1.1``` <strong>#Switches-Troubleshooting|↩︎</strong> |
| Priv EXEC | ```show interface _<type/num>_ counters errors``` | Port error counters | ```CRC 0``` <strong>#Switches-Troubleshooting|↩︎</strong> |
| Priv EXEC | ```show errdisable recovery``` | Err‑disable info | ```timeout 300``` <strong>#Switches-Troubleshooting|↩︎</strong> |
| Priv EXEC | ```show port-security interface _<type/num>_``` | Port‑security stats | ```SecurityViolation 0``` <strong>#Switches-Troubleshooting|↩︎</strong> |
| Priv EXEC | ```clear counters _[interface]_``` | Reset counters | ```Clear "show interface" counters``` <strong>#Switches-Troubleshooting|↩︎</strong> |

---

### Cross‑platform Commands {#Cross-platform-commands}

| Mode | Command | Purpose | Example output snippet |
|---|---|---|---|
| Priv EXEC | ```reload _[in <minutes>]_``` | Reboot device | ```Proceed with reload?``` <strong>#Cross-platform-commands|↩︎</strong> |
| Global CFG | ```banner motd # _<text>_ #``` | Set MOTD banner | ```Enter TEXT message.``` <strong>#Cross-platform-commands|↩︎</strong> |
| Global CFG | ```service password-encryption``` | Obfuscate passwords | ```SW1(config)#service password-encryption``` <strong>#Cross-platform-commands|↩︎</strong> |
| Global CFG | ```no ip domain-lookup``` | Stop DNS lookups on typos | ```SW1(config)#no ip domain-lookup``` <strong>#Cross-platform-commands|↩︎</strong> |
| Global CFG | ```enable secret _<pass>_``` | Secure enable mode | ```SW1(config)#enable secret cisco123``` <strong>#Cross-platform-commands|↩︎</strong> |
| Global ➜ Line CFG | ```line console 0``` | Enter console line config | ```SW1(config)#line con 0``` <strong>#Cross-platform-commands|↩︎</strong> |
| Line CFG | ```password _<pass>_``` | Set console password | ```SW1(config-line)#password lab``` <strong>#Cross-platform-commands|↩︎</strong> |
| Line CFG | ```login``` | Require login | ```SW1(config-line)#login``` <strong>#Cross-platform-commands|↩︎</strong> |

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