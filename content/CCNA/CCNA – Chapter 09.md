---
title: "CCNA – Chapter 09"
tags: [ccna, chapter-09, networking, study, arp, ndp, ipv6, address-resolution, layer2, layer3]
chapter: 09
---

# Key Concepts 🔑
- [[MAC Address]] (Layer 2) delivers Ethernet frames locally, while the unchanging [[IP Address]] (Layer 3) routes packets end‑to‑end.  
- [[Address Resolution Protocol (ARP)]] maps IPv4 addresses to MAC addresses through broadcast [[ARP Request]]s and unicast [[ARP Reply]]s.  
- Devices store learned mappings in an [[ARP Table]] that ages out automatically.  
- IPv6 replaces ARP with [[Neighbor Discovery Protocol (NDP)]], using ICMPv6 [[Neighbor Solicitation (NS)]] and [[Neighbor Advertisement (NA)]] messages for address resolution.  
- [[Router Solicitation (RS)]] and [[Router Advertisement (RA)]] messages enable hosts to discover gateways, prefixes and perform [[SLAAC]].  
- Excessive ARP broadcasts waste bandwidth and open the door to [[ARP Poisoning]]; enterprise switches offer mitigation features.  
- For off‑link traffic, frames use the MAC address of the [[Default Gateway]] interface—not the remote host’s MAC.

# Quiz
1. **Explain the primary difference in the function of a MAC address and an IP address.**  
   <details><summary>Answer</summary>
   A MAC address delivers frames between devices on the same LAN (Layer 2); an IP address identifies hosts end‑to‑end across networks (Layer 3).  
   </details>

2. **Where is a MAC address used for frame delivery?**  
   <details><summary>Answer</summary>
   Between NICs on the same local network segment (broadcast domain).  
   </details>

3. **What information does the IP address contain that allows for end‑to‑end communication?**  
   <details><summary>Answer</summary>
   Source and destination logical addresses that stay constant across every hop, enabling routing through multiple networks.  
   </details>

4. **When sending a frame to a device on a different network, what destination MAC address is used?**  
   <details><summary>Answer</summary>
   The MAC address of the host’s default‑gateway interface.  
   </details>

5. **What is the main purpose of ARP in IPv4?**  
   <details><summary>Answer</summary>
   To resolve an IPv4 address to its corresponding MAC address on the local network.  
   </details>

6. **How does a device obtain a MAC address that is not in its ARP table?**  
   <details><summary>Answer</summary>
   It broadcasts an ARP Request; the target host replies with its MAC in an ARP Reply.  
   </details>

7. **What is an ARP table used for?**  
   <details><summary>Answer</summary>
   Caches IPv4‑to‑MAC mappings so the host can avoid unnecessary broadcasts.  
   </details>

8. **Name one potential issue associated with ARP broadcasts.**  
   <details><summary>Answer</summary>
   Excessive broadcasts consume bandwidth and can slow large networks, or forged replies can enable ARP poisoning attacks.  
   </details>

9. **What protocol does IPv6 use instead of ARP for address resolution?**  
   <details><summary>Answer</summary>
   [[Neighbor Discovery Protocol (NDP)]].  
   </details>

10. **Briefly describe the roles of Neighbor Solicitation and Neighbor Advertisement messages.**  
    <details><summary>Answer</summary>
    An NS requests the MAC address for a known IPv6 address (or tests uniqueness); the target responds with an NA containing its MAC.  
    </details>

# Essay Questions
- Compare and contrast [[Address Resolution Protocol (ARP)]] in IPv4 and [[Neighbor Discovery Protocol (NDP)]] in IPv6, noting similarities and differences.  
- Explain how a host forwards a packet to a remote network, emphasising address resolution for the [[Default Gateway]].  
- Discuss security vulnerabilities of ARP and outline mitigation techniques (e.g., dynamic ARP inspection).  
- Detail ICMPv6 message types used by NDP and the role each plays in IPv6 networking.  
- Describe why maintaining an [[ARP Table]] or IPv6 Neighbor Cache is important, including entry ageing and manual management.

# FAQ
> [!faq]- **Fundamental differences between MAC and IP addresses**  
> MAC addresses work at Layer 2 for local delivery; IP addresses work at Layer 3 for end‑to‑end routing. Frames use MACs, packets use IPs.

> [!faq]- **How does ARP function in IPv4?**  
> The host checks its [[ARP Table]]; if no mapping exists it broadcasts an [[ARP Request]]. The target replies with an [[ARP Reply]] containing its MAC.

> [!faq]- **Two primary functions of ARP**  
> 1) Resolve IPv4‑to‑MAC mappings. 2) Build and maintain the ARP cache for efficiency.

> [!faq]- **Managing ARP tables**  
> Entries time‑out automatically; admins can view (`show ip arp`, `arp ‑a`) or clear the cache for troubleshooting.

> [!faq]- **Issues/vulnerabilities with ARP**  
> Broadcast overhead and [[ARP Poisoning]] (spoofed replies leading to man‑in‑the‑middle attacks).

> [!faq]- **How does IPv6 handle address resolution?**  
> Through [[Neighbor Discovery Protocol (NDP)]] using ICMPv6 [[Neighbor Solicitation (NS)]] and [[Neighbor Advertisement (NA)]] messages.

> [!faq]- **Other NDP functions**  
> Router discovery via [[Router Solicitation (RS)]]/[[Router Advertisement (RA)]] and better‑next‑hop redirection.

> [!faq]- **Key ICMPv6 message types for NDP**  
> NS, NA, RS, RA and Redirect.

# Glossary
| Term | Definition |
|---|---|
| Address Resolution Protocol (ARP) | IPv4 protocol that maps an IPv4 address to a MAC address on the local link. |
| ARP Poisoning | Attack where forged ARP replies associate the attacker’s MAC with another host’s IP to intercept traffic. |
| ARP Reply | Unicast response to an ARP Request containing the requested MAC address. |
| ARP Request | Broadcast asking “Who has this IPv4 address? Tell me your MAC.” |
| ARP Table | Cache of learned IPv4‑to‑MAC mappings with ageing timers. |
| Default Gateway | Router interface that forwards traffic destined for remote networks. |
| Frame | Layer 2 data unit containing source and destination MAC addresses. |
| ICMPv6 | Messaging protocol for IPv6, carrying NDP and other control messages. |
| IP Address | Logical Layer 3 address used for routing packets end‑to‑end. |
| LAN | Local Area Network connecting devices in a limited geographic area. |
| MAC Address | Unique physical address burned into a NIC for local frame delivery. |
| Neighbor Advertisement (NA) | ICMPv6 message replying to an NS and supplying the sender’s MAC address. |
| Neighbor Discovery Protocol (NDP) | IPv6 suite handling address resolution, router discovery and redirection via ICMPv6. |
| Neighbor Solicitation (NS) | ICMPv6 message requesting a neighbor’s MAC or performing Duplicate Address Detection. |
| NIC | Network Interface Card—hardware that connects a device to the network. |
| Packet | Layer 3 data unit containing source/destination IP addresses. |
| Router Advertisement (RA) | ICMPv6 message from a router advertising prefixes, gateway info and SLAAC parameters. |
| Router Solicitation (RS) | ICMPv6 message from a host requesting Router Advertisements. |
| SLAAC | Stateless Address Autoconfiguration—IPv6 mechanism for self‑configuring addresses using RAs. |
| Solicited‑Node Multicast Address | Special IPv6 multicast used as the target of NS messages. |

# Chapter Summary
- [[MAC Address]]es are rewritten each hop; [[IP Address]]es remain constant for end‑to‑end delivery.  
- [[Address Resolution Protocol (ARP)]] resolves IPv4 addresses to MAC addresses and caches the result in an [[ARP Table]].  
- Excessive ARP broadcasts strain large LANs, and spoofed replies enable [[ARP Poisoning]].  
- IPv6 eliminates ARP, using [[Neighbor Discovery Protocol (NDP)]] with ICMPv6 NS/NA messages for address resolution.  
- [[Router Solicitation (RS)]]/[[Router Advertisement (RA)]] messages supply prefixes, gateways and enable [[SLAAC]].  
- For off‑link traffic a host sends the frame to its [[Default Gateway]]’s MAC, not the remote host’s MAC.  
- ARP and NDP caches age out entries automatically; manual management aids troubleshooting.  
- Understanding address‑resolution flow is essential for diagnosing connectivity issues at Layer 2/3.

Related: [[CCNA – Chapter 08]] | [[CCNA – Chapter 10]]
