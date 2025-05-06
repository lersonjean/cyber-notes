---
title: CCNA – Chapter 02
tags:
  - ccna
  - chapter-02
  - networking
  - study
  - ios
  - cli
  - switching
  - configuration
  - security
chapter: 3
---
# Key Concepts 🔑
- Cisco networking devices run the **[[IOS]]** operating system and are administered mainly through the **[[CLI]]**.  
- The IOS hierarchy includes **[[User EXEC mode]]**, **[[Privileged EXEC mode]]**, **[[Global configuration mode]]**, and several sub‑modes for interfaces and lines.  
- Secure management uses **[[SSH]]** instead of **[[Telnet]]**, and passwords are protected with **[[service password‑encryption]]** and (where possible) `enable secret`.  
- Essential device hardening includes setting a unique **[[Hostname]]**, configuring console/VTY passwords, and adding an **[[MOTD banner]]** for legal notice.  
- The active **[[running-config]]** must be copied to **[[startup-config]]** with `copy run start` (or equivalent) to survive reloads.  
- A Layer 2 switch gains network‑wide reachability by assigning an IP address to a **[[SVI]]** (commonly VLAN 1).  
- End devices receive IP settings either manually (static) or dynamically via **DHCP**; IPv6 hosts can also use SLAAC.  
- Physical connectivity options include copper Ethernet, fibre‑optic links, and wireless NICs; verification tools like `ping` confirm network reachability.

# Quiz
<details><summary>1  What is the primary difference between User EXEC mode and Privileged EXEC mode on a Cisco device?</summary>

**Answer:** User EXEC (`>`) offers limited monitoring commands, whereas Privileged EXEC (`#`) grants full configuration and management access.  
</details>

<details><summary>2  Explain the purpose of the <code>configure terminal</code> command.</summary>

**Answer:** It enters **Global configuration mode**, enabling changes that affect the entire device.  
</details>

<details><summary>3  Why is SSH preferred over Telnet for remote management of network devices?</summary>

**Answer:** **[[SSH]]** encrypts all session data, protecting credentials and commands; **[[Telnet]]** transmits them in plain text.  
</details>

<details><summary>4  Describe the function of the <code>service password‑encryption</code> command.</summary>

**Answer:** It hashes all plain‑text passwords stored in the configuration, reducing the risk of credential disclosure.  
</details>

<details><summary>5  What is the difference between the startup‑config and running‑config files?</summary>

**Answer:** `running‑config` is the live configuration in RAM; `startup‑config` resides in NVRAM and loads at boot.  
</details>

<details><summary>6  How do you save the currently active configuration on a Cisco device?</summary>

**Answer:** Issue `copy running‑config startup‑config` (or `copy run start`) from Privileged EXEC mode.  
</details>

<details><summary>7  In Windows, where do you manually configure IP settings?</summary>

**Answer:** *Control Panel ► Network and Sharing Center ► Change adapter settings ►* right‑click adapter ► *Properties ► IPv4/IPv6 settings*.  
</details>

<details><summary>8  What is a Switch Virtual Interface (SVI) and why configure an IP on it?</summary>

**Answer:** An **[[SVI]]** is a logical VLAN interface on a switch; assigning an IP lets administrators manage the switch over the network.  
</details>

<details><summary>9  What is the purpose of a console cable when working with a Cisco device?</summary>

**Answer:** It provides out‑of‑band access for initial setup and recovery when network links are unavailable.  
</details>

<details><summary>10  Briefly explain the use of the <code>?</code> character in IOS.</summary>

**Answer:** It invokes context‑sensitive help, listing available commands or arguments based on cursor position.  
</details>

# Essay Questions
<details><summary>1  Compare and contrast access methods to the IOS CLI, focusing on security and use cases.</summary>

**Answer:**  
- **Console** access is local, requires physical presence, and is indispensable for recovery but lacks encryption (although traffic never traverses the network).  
- **[[SSH]]** provides encrypted remote access, making it the de‑facto choice for routine administration across insecure networks.  
- **[[Telnet]]** offers similar functionality to SSH but sends data in clear text, so it is now reserved for lab environments or legacy systems where security is not a concern.  
Appropriate use dictates console for initial provisioning or when the device is isolated, SSH for day‑to‑day management, and Telnet only where risk is minimal or additional encryption (e.g., IPsec) compensates.  
</details>

<details><summary>2  Explain IOS command‑mode hierarchy and how administrators navigate it.</summary>

**Answer:**  
IOS modes form a tree: **User EXEC → Privileged EXEC → Global configuration → subordinate modes** (interface, line, router, etc.).  
- `enable` elevates to Privileged EXEC.  
- `configure terminal` enters Global configuration.  
- Context‑specific commands (e.g., `interface Gi0/1`) dive into sub‑modes.  
- `exit` retreats one level; `end` or Ctrl+Z jumps straight to Privileged EXEC.  
This hierarchy enforces role separation—monitoring, global changes, and granular tweaks—while providing clear visual cues in the prompt.  
</details>

<details><summary>3  Detail the steps for securing a new Cisco switch.</summary>

**Answer:**  
1. Assign a unique **[[Hostname]]** (`hostname sw‑core1`).  
2. Harden access:  
   - Console: `line con 0` → `password cisco` → `login`.  
   - VTY: `line vty 0 15` → `transport input ssh` → `password cisco` → `login`.  
   - Encrypt privileged access with `enable secret cisco`.  
1. Activate `service password‑encryption`.  
2. Create an informative **[[MOTD banner]]** (`banner motd #Authorised access only#`).  
3. Configure an **SVI** IP and default gateway; enable SSH (`ip domain‑name corp.local`, generate RSA keys, create user accounts).  
4. Save to `startup‑config`.  
These steps thwart unauthorized logins, protect credentials at rest, and provide accountability.  
</details>

<details><summary>4  Describe configuring IP on a Windows PC and on a switch SVI, noting each parameter’s role.</summary>

**Answer:**  
**PC (Windows):** In adapter properties, set:  
- **IP address** (identifies host),  
- **Subnet mask** (defines local broadcast domain),  
- **Default gateway** (router for off‑subnet traffic),  
- **DNS servers** (name resolution).  

**Switch SVI:**  
```
interface vlan 1
 ip address 192.168.1.2 255.255.255.0
 no shutdown
exit
ip default‑gateway 192.168.1.1
```  
The SVI IP lets admins reach the switch; the default gateway routes management traffic off‑subnet.  
</details>

<details><summary>5  Discuss why saving configuration matters and the risks of not doing so.</summary>

**Answer:**  
Unsaved changes live only in **running‑config**. Power loss or `reload` reverts the device to the last **startup‑config**, erasing new VLANs, ACLs, passwords, or routing tweaks—potentially causing outages, security gaps, and extended downtime. Regular `copy run start` (or scheduled `archive`) commits the intended state to NVRAM, ensuring repeatable, persistent behaviour.  
</details>

# FAQ
> [!question]+ What is Cisco IOS and how do I access it?  
> Cisco **[[IOS]]** is the operating system for Cisco routers & switches. Access it locally via a console cable or remotely via **[[SSH]]** (preferred) or **[[Telnet]]** (legacy).

> [!question]+ How do I move between command modes?  
> Use `enable` to reach **[[Privileged EXEC mode]]**, `configure terminal` for **[[Global configuration mode]]**, `exit` to step back, and `end` or Ctrl+Z to jump to Privileged EXEC.

> [!question]+ What is the IOS command structure and help system?  
> Commands follow *command keyword argument* syntax. Type `?` for context‑sensitive help or after a partial command (e.g., `ip address ?`) to list valid options.

> [!question]+ How do I set hostname, passwords, and banners?  
> - `hostname <name>` in Global config.  
> - Console/VTY passwords in their line modes plus `login`.  
> - `enable secret <pw>` for Privileged EXEC.  
> - `banner motd #Message#` for a login banner.  
> - Run `service password‑encryption` to hash plain‑text passwords.

> [!question]+ What is the difference between running‑config and startup‑config?  
> `running‑config` is live in RAM; `startup‑config` is stored in NVRAM and loads at boot. Copy the running config to startup to make changes persistent.

> [!question]+ How do PCs obtain IP addresses?  
> **Static:** Manually enter IP, mask, gateway, DNS in NIC settings.  
> **Dynamic:** Accept a lease from a **DHCP** server (default behaviour). IPv6 devices can also auto‑address via SLAAC.

> [!question]+ How is an IP assigned to a switch?  
> Configure an **SVI** (usually VLAN 1) with `ip address <ip> <mask>` and `no shutdown`, then set `ip default‑gateway <router‑ip>`.

# Glossary
| Term | Definition |
|------|------------|
| **[[Banner]]** | Message shown to users at login, often for legal notice. |
| **[[CLI]]** | Text‑based interface where commands configure and monitor a device. |
| **Console** | Physical port for direct, out‑of‑band management access. |
| **Ctrl+Z** | Shortcut to return immediately to **[[Privileged EXEC mode]]**. |
| **DHCP** | Protocol that auto‑assigns IP configuration to hosts. |
| **enable** | Command that elevates from User to Privileged EXEC mode. |
| **enable secret** | Sets an encrypted password protecting Privileged EXEC access. |
| **end** | Exits any config sub‑mode to Privileged EXEC mode. |
| **erase startup‑config** | Deletes the NVRAM configuration, resetting the device. |
| **exit** | Moves up one level in command‑mode hierarchy. |
| **Global configuration mode** | Mode for changes affecting the whole device. |
| **GUI** | Graphical interface using windows and icons (rare on Cisco gear). |
| **Hostname** | Unique device identifier set with `hostname`. |
| **Interface config mode** | Sub‑mode for per‑interface settings. |
| **IOS** | Cisco Internetwork Operating System that powers routers and switches. |
| **IP address** | Logical numeric identifier for a network interface. |
| **Kernel** | Core of the OS that mediates hardware–software interaction. |
| **Line config mode** | Sub‑mode for console or VTY line parameters. |
| **login** | Command requiring authentication on a line. |
| **MOTD banner** | Type of banner displayed at every login. |
| **NVRAM** | Non‑volatile memory that stores **[[startup-config]]**. |
| **password** | Sets a plain‑text password (not recommended without encryption). |
| **Ping** | Utility that tests reachability and round‑trip time. |
| **Privileged EXEC mode** | Full‑access mode, prompt ends with `#`. |
| **RAM** | Volatile memory holding the **[[running-config]]**. |
| **reload** | Command to reboot the device. |
| **running-config** | Active configuration in RAM. |
| **service password‑encryption** | Hashes all plain‑text passwords in config files. |
| **Shell** | Outermost OS layer users interact with (CLI or GUI). |
| **SSH** | Encrypted protocol for secure remote CLI access. |
| **startup-config** | Boot‑time configuration stored in NVRAM. |
| **SVI** | Logical VLAN interface providing a switch with an IP address. |
| **Telnet** | Legacy, unencrypted protocol for remote CLI access. |
| **Terminal emulator** | Software like PuTTY that interfaces with a device’s CLI. |
| **User EXEC mode** | Initial limited‑access mode, prompt ends with `>`. |
| **VTY** | Virtual Teletype lines for remote CLI sessions. |

# Chapter Summary
- Distinguish between **User** and **Privileged EXEC** modes; the latter is required for configuration.  
- Use `configure terminal` to reach **Global configuration mode** and sub‑modes for interfaces and lines.  
- Prefer **SSH** over **Telnet** and encrypt stored passwords with `service password‑encryption`.  
- Always save changes (`copy run start`) to preserve them through a reload.  
- Assign hostnames, passwords, and banners as part of baseline device hardening.  
- Configure an **SVI** IP to manage Layer 2 switches remotely.  
- End devices can be addressed statically or through **DHCP**/SLAAC.  
- Verify connectivity with basic tools such as `ping` and monitor physical media suitability.  

Related: [[CCNA – Chapter 01]] | [[CCNA – Chapter 03]]
