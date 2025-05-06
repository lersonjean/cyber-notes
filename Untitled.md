---
title: "CCNA – Chapter 03"
tags: [ccna, chapter-03, networking, study, ios, cli, switching, configuration, security]
chapter: 03
---

[[toc]]

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
   - Console: `line con 0` → `password <pw>` → `login`.  
   - VTY: `line vty 0 15` → `transport input ssh` → `password <pw>` → `login`.  
   - Encrypt privileged access with `enable secret <pw>`.  
3. Activate `service password‑encryption`.  
4. Create an informative **[[MOTD banner]]** (`banner motd #Authorised access only#`).  
5. Configure an **SVI** IP and default gateway; enable SSH (`ip domain‑name corp.local`, generate RSA keys, create user accounts).  
6. Save to `startup‑config`.  
These steps thwart unauthorised logins, protect credentials at rest, and provide accountability.  
</details>

<details><summary>4  Describe configuring IP on a Windows PC and on a switch SVI, noting each parameter’s role.</summary>

**Answer:**  
**PC (Windows):** In adapter properties, set:  
- **IP address** (identifies host),  
- **Subnet mask** (defines local broadcast domain),  
- **Default gateway** (router for off‑subnet traffic),  
- **DNS servers** (name resolution).  

**Switch SVI:**  
