---
title: "CCNA – Chapter 17"
tags: [ccna, chapter-17, networking, study, small-network, troubleshooting, qos, scalability, protocols]
chapter: 17
---

[[toc]]

# Key Concepts 🔑
- Cost is the primary design driver for small/medium business networks.  
- Device selection must weigh port/interface speed, features, and long-term [[Scalability]].  
- [[Redundancy]] increases reliability but is often limited by budget—identify and protect single points of failure.  
- Plan IP addressing for every host, server, peripheral, and intermediary device before deployment.  
- Real-time traffic (voice, video) needs [[QoS]] so high-priority queues are serviced first.  
- Core protocols in small networks: [[HTTP]], [[HTTPS]], [[DNS]], [[DHCP]], [[FTP]], [[SSH]], and [[Telnet]].  
- Capture a network [[Baseline Performance]] snapshot to benchmark future changes.  
- Cisco’s six-step troubleshooting method plus tools like [[Ping]], [[Traceroute]], and IOS *show*/*debug* commands speed fault isolation.  
- Comprehensive documentation, device inventory, budget forecasting, and traffic analysis are the pillars of growth planning.  
- Watch for [[Duplex Mismatch]] on links; mismatches cripple performance and are visible with *show* commands.

# Quiz
1. What is typically the most important factor when selecting networking devices for a small business?  
   <details><summary>Answer</summary>Cost is typically the most important factor when selecting networking devices for a small business due to limited budgets.</details>

2. Why is redundancy often limited in small networks?  
   <details><summary>Answer</summary>Implementing duplicate equipment or alternate links is costly, so small networks usually limit redundancy.</details>

3. What is the purpose of [[QoS]] in a network?  
   <details><summary>Answer</summary>QoS prioritises traffic so real-time applications (voice, video) receive preferential treatment to maintain quality.</details>

4. List two common protocols used in both large and small networks.  
   <details><summary>Answer</summary>[[HTTP]] and [[DNS]].</details>

5. Name four key areas important for ensuring a network can [[Scalability|scale]].  
   <details><summary>Answer</summary>Documentation, inventory, budget, and traffic analysis.</details>

6. What is the purpose of creating a network [[Baseline Performance|baseline]]?  
   <details><summary>Answer</summary>To capture performance at a specific time so future changes can be compared against the baseline.</details>

7. What command is used on a Windows host to view basic IP configuration information?  
   <details><summary>Answer</summary>`ipconfig`</details>

8. What are the first three steps of the Cisco six-step troubleshooting methodology?  
   <details><summary>Answer</summary>Identify the problem, establish a theory of probable cause, and test the theory.</details>

9. What does a **U** indicator mean in the output of an IOS [[Ping]] command?  
   <details><summary>Answer</summary>“Destination unreachable.”</details>

10. What information can the *show cdp neighbors* command provide?  
    <details><summary>Answer</summary>Neighbor device ID, local/remote ports, capabilities, platform, and (with *detail*) IP addresses.</details>

# Essay Questions
<details><summary>Compare and contrast network design considerations for a small business versus a large enterprise.</summary>

**Answer**  
*Cost:* SMBs work within tight budgets, so commodity hardware and minimal redundancy prevail; enterprises can afford modular chassis, multiple uplinks, and high-end firewalls.  
*Management:* SMBs may outsource or rely on part-time IT staff; enterprises employ dedicated teams and NMS platforms.  
*Scalability:* Small designs start flat (single VLAN, static routing) but must document for growth; enterprises deploy hierarchical layers and dynamic routing from day 1.  
*Redundancy:* SMBs might protect only the Internet edge, while enterprises duplicate core, links, and power to reach “five nines.”  
</details>

<details><summary>Discuss the importance of documentation and traffic analysis when planning for network scalability.</summary>

**Answer**  
Documentation (physical/logical diagrams, address plans) prevents guess-work and reveals bottlenecks. Traffic analysis (protocol captures, baseline utilization) shows which applications consume bandwidth now and predicts future needs. Together they justify budgets, size new links, and avoid over- or under-provisioning when the network grows.
</details>

<details><summary>Explain the Cisco six-step troubleshooting methodology with an example.</summary>

**Answer**  
1. *Identify the problem* – Users report slow file transfers.  
2. *Establish a theory* – Suspect duplex mismatch on the switch port.  
3. *Test the theory* – Run `show interfaces`; port shows half-duplex/late collisions.  
4. *Establish a plan & implement* – Force full-duplex on both ends during maintenance window.  
5. *Verify & prevent* – Transfers normal; enable auto-negotiation reminders in SOP.  
6. *Document findings* – Update ticket and knowledge base article.  
</details>

<details><summary>Describe host and IOS tools/commands for verifying connectivity.</summary>

**Answer**  
Hosts: `ipconfig`, `ping`, `tracert`, `arp -a`, `nslookup`, `ifconfig`/`ip addr`.  
IOS: `show running-config`, `show ip interface brief`, `show ip route`, `show cdp neighbors`, `ping`, `traceroute`, and `debug` family commands for real-time insight.
</details>

<details><summary>Analyse the role of common network protocols (HTTP, DHCP, DNS, FTP) in a small network.</summary>

**Answer**  
HTTP/HTTPS enable web access and cloud apps; DHCP automates IP assignment, reducing admin load; DNS translates names to IPs for every service; FTP/SFTP provide file transfer and backup. Their proper operation is vital—if DNS fails, even working IP connectivity feels “down,” underscoring protocol inter-dependence in troubleshooting.
</details>

# FAQ
> [!question]- **What factors are important when selecting devices for a small network?**  
> Cost, port/interface capabilities, scalability, OS features, functionality, reliability, and potential for [[Redundancy]].

> [!question]- **How is IP addressing managed in small networks?**  
> Plan the addressing scheme for all end devices, servers, peripherals, and intermediary devices so every node receives a unique IP.

> [!question]- **Why is redundancy important, and how is it approached in small networks?**  
> Redundancy removes single points of failure. SMBs evaluate risk versus cost: often only critical links or devices are duplicated.

> [!question]- **What role do applications and protocols play in a small network?**  
> Network applications (browsers, email) use protocols like [[HTTP]], [[HTTPS]], [[FTP]], [[DHCP]], [[DNS]]. Real-time apps rely on [[RTP]]/[[RTCP]] plus [[QoS]].

> [!question]- **What are the key considerations for scaling a small network?**  
> Detailed documentation, accurate device inventory, a realistic budget, and traffic/baseline analysis.

> [!question]- **How can connectivity be verified and performance measured?**  
> Use [[Ping]] for reachability, [[Traceroute]] for path discovery, extended versions for advanced options, and store outputs as part of a baseline.

> [!question]- **What host and IOS commands aid configuration and troubleshooting?**  
> Windows: `ipconfig`, `arp -a`, `netsh`.  
> Linux/macOS: `ifconfig`, `ip addr`.  
> IOS: various *show* commands and *debug*.  
> `show cdp neighbors` discovers directly connected Cisco devices.

> [!question]- **What is a typical troubleshooting methodology?**  
> Cisco’s six-step process: identify, theorise, test, plan/implement, verify/prevent, document; escalate when necessary.

# Glossary
| Term | Definition |
|------|------------|
| [[App-layer services]] | Software components that prepare data for transmission for applications lacking network capability. |
| [[Baseline Performance]] | Snapshot of network metrics at a point in time for future comparison. |
| [[CDP (Cisco Discovery Protocol)]] | Cisco proprietary protocol for discovering neighbouring Cisco devices. |
| debug command | IOS command showing real-time system messages for targeted troubleshooting. |
| [[DHCP (Dynamic Host Configuration Protocol)]] | Automatically assigns IP configuration to devices. |
| [[DNS (Domain Name System)]] | Translates domain names into IP addresses. |
| [[Duplex Mismatch]] | Two connected interfaces using different duplex modes, causing poor performance. |
| Escalation | Passing an issue to higher-level support when unresolved at current level. |
| Extended Ping/Traceroute | Interactive IOS versions of ping/traceroute offering advanced options. |
| [[FTP (File Transfer Protocol)]] | Transfers files between networked computers. |
| [[HTTP (Hypertext Transfer Protocol)]] | Foundation of data communication on the Web. |
| [[HTTPS (Hypertext Transfer Protocol Secure)]] | Encrypted version of HTTP. |
| [[ICMP (Internet Control Message Protocol)]] | Used by ping/traceroute to send error and status messages. |
| ifconfig | Unix-like command to display or configure network interfaces. |
| ipconfig | Windows command to display network interface parameters. |
| [[IOS (Internetwork Operating System)]] | Operating system on Cisco network devices. |
| IP Telephony | Voice call control servers operating over IP networks. |
| netsh | Windows utility for advanced network configuration. |
| [[Network Applications]] | Software directly implementing application-layer protocols. |
| [[Network Baseline]] | See **Baseline Performance**. |
| nslookup | Command-line DNS query tool. |
| [[Ping]] | Tests reachability and round-trip time to a host. |
| [[QoS (Quality of Service)]] | Techniques to manage and prioritise network traffic. |
| [[Redundancy]] | Duplication of components/links to avoid single points of failure. |
| [[RTCP (Real-time Control Protocol)]] | Provides out-of-band control for RTP streams and QoS feedback. |
| [[RTP (Real-time Transport Protocol)]] | Delivers audio/video over IP. |
| [[Scalability]] | Ability of a network to grow and adapt to rising demand. |
| SFTP (SSH File Transfer Protocol) | Secure file transfer over SSH. |
| show commands | IOS commands that display configuration and status information. |
| [[SSH (Secure Shell)]] | Secure, encrypted remote-access protocol. |
| [[Telnet]] | Insecure text-oriented remote-access protocol. |
| Terminal Monitor | IOS command showing logging messages on vty sessions. |
| [[Traceroute]] | Diagnostic tool tracing the hop path to a destination. |
| [[VoIP (Voice over IP)]] | Voice communication carried over IP networks. |

# Study-at-a-glance
> [!tip]
> - **Design:** Anchor choices in cost, but document for future growth.  
> - **Addressing:** Allocate IPs for every planned device—don’t forget printers, cameras, IoT.  
> - **Traffic:** Apply [[QoS]] so voice/video stay smooth; capture a baseline as proof.  
> - **Tools:** Master `ipconfig`, `ifconfig`, `show ip interface brief`, `ping`, and `traceroute`.  
> - **Troubleshoot:** Follow the six-step method; check duplex, gateway, DNS first.  
> - **Growth:** Keep diagrams and inventories current; review traffic stats quarterly.

# Chapter Summary
- Cost shapes every decision in an SMB network.  
- Limited budgets often preclude full [[Redundancy]]; protect only the truly critical.  
- Proper IP planning prevents painful renumbering later.  
- Real-time apps demand [[QoS]] and protocols like [[RTP]]/[[RTCP]].  
- Documentation, inventory, budget, and traffic analysis underpin sustainable [[Scalability]].  
- Capture a [[Baseline Performance]] before and after changes for objective comparison.  
- Troubleshoot systematically with Cisco’s six-step process and verification commands.  
- Monitor duplex, IP addressing, default gateway, and DNS settings—they cause most user tickets.  
- Use callouts, details, and cross-links in notes to speed up study and review.

Related: [[CCNA – Chapter 16]] | [[CCNA – Chapter 18]]
