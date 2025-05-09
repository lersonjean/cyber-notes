
<strong>toc</strong>

# Key Concepts 🔑
- Securing initial router setup: set the <strong>Hostname</strong>, protect **privileged EXEC** with `enable secret`, lock console / VTY access, apply `service password encryption`, add a `banner motd`, then save the configuration.  
- Interface configuration workflow: `interface type/number` → `description …` → `ip address` / `ipv6 address` → `no shutdown` (after optional `shutdown` during edits).  
- The role of the <strong>Default Gateway</strong> for hosts and of `ip default-gateway` for switch management.  
- Crucial verification commands: <strong>show ip interface brief</strong>, <strong>show ipv6 interface brief</strong>, <strong>show ip route</strong>, <strong>show interfaces</strong>, <strong>show ip interface</strong>, and <strong>show ipv6 interface</strong>.  
- Router and switch provisioning share nearly identical commands and security best‑practices.

# Quiz
<details>
<summary><strong>1 – What is the primary purpose of the <code>enable secret</code> command during initial router configuration?</strong></summary>

Secures privileged EXEC mode with an **encrypted** password, blocking unauthorized access to higher‑level commands.  
</details>

<details>
<summary><strong>2 – Why is it recommended to use the <code>service password encryption</code> command?</strong></summary>

Encrypts all plaintext passwords stored in the configuration file, raising the overall security posture.  
</details>

<details>
<summary><strong>3 – What is the function of the <code>banner motd</code> command?</strong></summary>

Displays a login banner (often a legal notice or warning) to every user who connects to the device.  
</details>

<details>
<summary><strong>4 – Explain the purpose of the <code>copy running-config startup-config</code> command.</strong></summary>

Saves the current **running configuration** in RAM to NVRAM as the **startup configuration** so it survives a reload.  
</details>

<details>
<summary><strong>5 – What command is used to enter the configuration mode for a specific router interface?</strong></summary>

`interface <em>type-and-number</em>` — e.g. `interface gigabitEthernet 0/0/0`.  
</details>

<details>
<summary><strong>6 – What command is used to assign an IPv4 address and subnet mask to a router interface?</strong></summary>

`ip address <em>ipv4-address subnet-mask</em>` within interface‑config mode.  
</details>

<details>
<summary><strong>7 – What is the significance of the <code>no shutdown</code> command when configuring an interface?</strong></summary>

Administratively brings the interface **up**; without it, the link stays down and carries no traffic.  
</details>

<details>
<summary><strong>8 – How can you quickly verify the IP addresses and status of all configured interfaces on a router?</strong></summary>

Use `show ip interface brief` (and `show ipv6 interface brief` for IPv6).  
</details>

<details>
<summary><strong>9 – What is a default gateway used for by an end device?</strong></summary>

Acts as the exit point for traffic destined to networks outside the local subnet.  
</details>

<details>
<summary><strong>10 – How is a default gateway configured on a Cisco switch for remote management?</strong></summary>

Globally with `ip default-gateway <em>ip-address</em>`.  
</details>

# Essay Questions
- Discuss the fundamental similarities and differences between configuring a Cisco router and a Cisco switch, focusing on initial setup steps and command structures.  
- Explain the purpose and importance of securing different access modes on a Cisco router (user EXEC, privileged EXEC, and VTY lines). Detail the commands used and the security benefits of each.  
- Describe the process of configuring both IPv4 and IPv6 addresses on a router interface. Include the commands used and explain the role of the subnet mask or prefix length for each protocol.  
- Compare and contrast the output of <strong>show ip interface brief</strong>, <strong>show interfaces</strong>, and <strong>show ip interface</strong>. Explain what specific information each command provides and when you would use each for troubleshooting.  
- Explain the concept of a <strong>Default Gateway</strong> in the context of end devices and switches. Describe why a default gateway is necessary and how its configuration differs between a host and a switch.  

# FAQ
> [!question] **What are the initial basic configuration steps for a Cisco router?**  
> Configure a hostname, secure **privileged EXEC** with `enable secret`, secure console and VTY lines with passwords and `login`, encrypt passwords (`service password encryption`), add a `banner motd`, and save with `copy running-config startup-config`.

> [!question] **How are router interfaces configured?**  
> Enter interface mode (`interface type-number`), add a `description`, assign IPv4/IPv6 addresses, optionally `shutdown` during edits, then `no shutdown` to activate.

> [!question] **What are the recommended best practices when configuring router interfaces?**  
> Disable with `shutdown` before changes, document with `description`, and always `no shutdown` when done.

> [!question] **How can you verify the configuration of router interfaces?**  
> Use `show ip interface brief`, `show ipv6 interface brief`, `show ip route`, `show ipv6 route`, `show interfaces`, `show ip interface`, and `show ipv6 interface`.

> [!question] **What is the purpose of a default gateway for an end device?**  
> It lets the host send packets to networks beyond its own by forwarding them to the router interface on the same subnet.

> [!question] **Why does a switch need a default gateway configured?**  
> Solely for remote management from other networks (Telnet/SSH).

> [!question] **What key tasks are covered in basic router configuration?**  
> Device identification and security, interface IP addressing/activation, verification commands, and default‑gateway configuration.

> [!question] **What show commands are most useful for verification?**  
> `show ip interface brief`, `show ipv6 interface brief`, `show ip route`, `show ipv6 route`, `show interfaces`, `show ip interface`, `show ipv6 interface`.

# Glossary
| Term | Definition |
|------|------------|
| **Console Line** | Physical port used for direct, out‑of‑band device management. |
| **Default Gateway** | IP address a host uses to reach remote networks; typically a router interface on the same LAN. |
| **Hostname** | Unique device identifier set with the `hostname` command. |
| **ICMPv6 Router Advertisement** | IPv6 router message that announces its presence and network parameters. |
| **Interface** | Physical or virtual connection point on a router or switch. |
| **ip default-gateway** | Global command that sets a switch’s default gateway for remote management. |
| **NVRAM** | Non‑volatile memory storing the startup configuration. |
| **No Shutdown** | Command that administratively enables an interface. |
| **Prefix Length** | Bit count of the network portion of an IPv6 address. |
| **Privileged EXEC Mode** | High‑level command mode secured with `enable secret`. |
| **Running Configuration (running-config)** | Current configuration residing in RAM. |
| **Shutdown** | Command that administratively disables an interface. |
| **Startup Configuration (startup-config)** | Boot‑time configuration stored in NVRAM. |
| **SVI (Switched Virtual Interface)** | Virtual switch interface assigned an IP address for management. |
| **Subnet Mask** | IPv4 mask that separates network and host bits. |
| **User EXEC Mode** | Initial limited command mode after login. |
| **VTY Lines** | Virtual terminal lines used for Telnet/SSH sessions. |
| **show interfaces** | Displays detailed hardware statistics for all interfaces. |
| **show ip interface** | Shows detailed IPv4 statistics for interfaces. |
| **show ip interface brief** | Summarizes IPv4 addresses and interface status. |
| **show ip route** | Displays the IPv4 routing table. |
| **show ipv6 interface** | Shows detailed IPv6 statistics for interfaces. |
| **show ipv6 interface brief** | Summarizes IPv6 addresses and interface status. |
| **show ipv6 route** | Displays the IPv6 routing table. |

# Chapter Summary
- Set the <strong>Hostname</strong>, `enable secret`, console/VTY passwords, `service password encryption`, and `banner motd` to lock down and identify a new router.  
- Preserve changes permanently with `copy running-config startup-config`.  
- Configure interfaces with `interface`, `description`, `ip address` / `ipv6 address`, and activate using <strong>No Shutdown</strong>.  
- Always define a <strong>Default Gateway</strong> for hosts and use `ip default-gateway` on switches for remote management.  
- Verify and troubleshoot with <strong>show ip interface brief</strong>, <strong>show ipv6 interface brief</strong>, <strong>show interfaces</strong>, and routing‑table commands.  
- Disable interfaces with **Shutdown** before reconfiguring them, then document and re‑enable to minimize disruption.

Related: <strong>CCNA – Chapter 9</strong> | <strong>CCNA – Chapter 11</strong>
