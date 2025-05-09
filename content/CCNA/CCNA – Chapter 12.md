---
title: "CCNA – Chapter 12"
tags: [ccna, chapter-12, networking, study, ipv6, addressing, subnetting, routing]
chapter: 12
---

<strong>toc</strong>

# Key Concepts 🔑
- The growing number of devices exhausted the <strong>IPv4 Issues|IPv4</strong> address pool, driving adoption of <strong>IPv6</strong> and its 128‑bit space.  
- IPv6 addresses are written as eight hexadecimal **hexet** groups; leading zeros may be dropped and a single `::` compresses one run of zeros.  
- Address types: **Unicast** (including <strong>Global Unicast Address (GUA)</strong>, <strong>Link-Local Address (LLA)</strong>, <strong>Unique Local Address (ULA)</strong>, and <strong>Anycast Address</strong>), **Multicast**, and *no* broadcast.  
- A GUA is structured *Global Routing Prefix* / *Subnet ID* / *Interface ID*; /64 is the recommended prefix to support <strong>SLAAC</strong>.  
- Hosts auto‑configure using <strong>Stateless Address Auto‑configuration (SLAAC)</strong>, optionally with Stateless / Stateful <strong>DHCPv6</strong>, and verify uniqueness with <strong>Duplicate Address Detection (DAD)</strong>.  
- Interface IDs are created with the **EUI‑64** process or randomly for privacy.  
- IPv4 and IPv6 can coexist through **Dual‑Stack**, **Tunneling**, and **Translation** (e.g. NAT64).  
- Key multicast groups include `FF02::1` (all‑nodes) and `FF02::2` (all‑routers); each unicast address also spawns a <strong>Solicited Node Multicast Address</strong> for efficient neighbour discovery.

# Quiz
<details>
<summary>1. What was the primary motivation for moving from IPv4 to IPv6?</summary>

The exhaustion of IPv4’s 32‑bit address space—especially with IoT growth—necessitated a larger pool of addresses.  
</details>

<details>
<summary>2. How is an IPv6 address represented, and how does this differ from IPv4?</summary>

IPv6 uses 128‑bit hexadecimal notation (eight 16‑bit hexets separated by colons) instead of IPv4’s 32‑bit dotted‑decimal format.  
</details>

<details>
<summary>3. Explain the purpose of the double colon (::) in IPv6 addressing.</summary>

`::` compresses one consecutive sequence of zero hexets to simplify notation; it may appear only once per address to avoid ambiguity.  
</details>

<details>
<summary>4. What are the three main types of IPv6 addresses?</summary>

Unicast (one‑to‑one), Multicast (one‑to‑many), and Anycast (one‑to‑nearest); IPv6 has no broadcast addresses.  
</details>

<details>
<summary>5. What is the recommended prefix length for IPv6 networks?</summary>

A /64 prefix, aligning with SLAAC’s 64‑bit Interface ID expectation.  
</details>

<details>
<summary>6. Describe the key difference between a Global Unicast Address (GUA) and a Link‑Local Address (LLA).</summary>

A GUA is globally routable on the internet, whereas an LLA is only valid on its local link and never routed beyond it.  
</details>

<details>
<summary>7. What is SLAAC, and what information does a device obtain using it?</summary>

SLAAC lets a host self‑generate a GUA; it receives the network prefix, prefix length, and default gateway from Router Advertisements.  
</details>

<details>
<summary>8. Briefly explain the EUI‑64 process for generating an Interface ID.</summary>

The device splits its 48‑bit MAC, inserts `FFFE`, and flips the seventh bit to form a unique 64‑bit Interface ID.  
</details>

<details>
<summary>9. What is a multicast address in IPv6, and can it be used as a source address?</summary>

A multicast address targets a group of receivers; it may *only* appear as a destination, never as a source address.  
</details>

<details>
<summary>10. How does subnetting in IPv6 differ in purpose compared to IPv4 subnetting?</summary>

IPv6 subnetting organises networks hierarchically rather than conserving addresses, thanks to the ample 128‑bit space.  
</details>

# Essay Questions
- Compare and contrast the addressing challenges in IPv4 that led to IPv6, citing regional exhaustion examples.  
- Explain dynamic GUA assignment methods (Router Solicitation/Advertisement vs. <strong>DHCPv6</strong> variants).  
- Discuss IPv6 unicast address types, their scope, and typical ranges.  
- Detail the rules for abbreviating IPv6 addresses and illustrate with examples.  
- Analyse IPv6 multicast address categories, highlighting solicited‑node vs. well‑known groups.

# FAQ
> [!faq]+ **What are the main issues with IPv4 that led to the development of IPv6?**  
> IPv4’s 32‑bit space (~4 billion addresses) cannot meet modern demand. NAT prolonged its life, but IoT growth exhausted the pool. IPv6’s 128‑bit space (~340 undecillion) restores global addressing capacity.  

> [!faq]+ **How are IPv6 addresses represented and what are the rules for shortening them?**  
> Written as eight hexadecimal groups separated by colons; omit leading zeros in a group and compress one consecutive run of zero groups with `::`.  

> [!faq]+ **What are the main types of IPv6 addresses and how do they differ from IPv4?**  
> IPv6 uses Unicast, Multicast, and Anycast; no broadcast. Within Unicast, GUAs are internet‑routable, LLAs are link‑only.  

> [!faq]+ **How is the structure of an IPv6 Global Unicast Address defined?**  
> *Global Routing Prefix* (ISP‑assigned) + *Subnet ID* (organisation) + *Interface ID* (host), typically split /64 + /64.  

> [!faq]+ **How can IPv6 addresses be configured on network devices?**  
> Statically via interface commands or dynamically via SLAAC, Stateless DHCPv6, or Stateful DHCPv6.  

> [!faq]+ **What is SLAAC and how does it work for dynamic IPv6 address assignment?**  
> Hosts send RS, receive RA with prefix, then generate their own Interface ID and perform DAD—no state kept on router.  

> [!faq]+ **What are the different methods for a device to obtain an Interface ID when using SLAAC?**  
> EUI‑64 (MAC‑derived) or a randomly generated 64‑bit value for privacy.  

> [!faq]+ **What are IPv6 multicast addresses and what are some common examples?**  
> Prefix `FFxx::/8`; `FF02::1` all‑nodes, `FF02::2` all‑routers. Solicited‑node addresses map unicast/anycast addresses for neighbour discovery.  

# Glossary
| Term                                  | Definition                                                                     |
| ------------------------------------- | ------------------------------------------------------------------------------ |
| <strong>Anycast Address</strong>                   | Unicast address assigned to multiple devices; traffic goes to the nearest one. |
| <strong>DHCPv6</strong>                            | Protocol for dynamic IPv6 addressing and configuration parameters.             |
| <strong>Duplicate Address Detection (DAD)</strong> | Process ensuring no duplicate unicast address exists on a link.                |
| <strong>Dual Stack</strong>                        | Running IPv4 and IPv6 simultaneously on the same device or network.            |
| <strong>EUI-64</strong>                            | Method of creating a 64‑bit Interface ID from a 48‑bit MAC address.            |
| <strong>Global Routing Prefix</strong>             | First part of a GUA, allocated by an ISP/RIR.                                  |
| <strong>Global Unicast Address (GUA)</strong>      | Globally unique IPv6 unicast address, routable on the internet.                |
| <strong>Hexadecimal</strong>                       | Base‑16 numbering system (0–F) used in IPv6 notation.                          |
| <strong>Hexet</strong>                             | Informal term for a 16‑bit segment of an IPv6 address.                         |
| <strong>Interface ID</strong>                      | Last 64 bits of an IPv6 address identifying a host on the subnet.              |
| <strong>IPv4 Issues</strong>                       | Limitations of IPv4, chiefly its limited 32‑bit address space.                 |
| <strong>IPv6</strong>                              | Next‑generation Internet Protocol with a 128‑bit address space.                |
| <strong>Link-Local Address (LLA)</strong>          | Address in `FE80::/10`, valid only on the local link.                          |
| <strong>Loopback Address</strong>                  | `::1/128`, used for host self‑communication.                                   |
| <strong>Multicast Address</strong>                 | IPv6 address targeting multiple recipients simultaneously.                     |
| <strong>Prefix Length</strong>                     | Slash notation indicating network portion of an IPv6 address (e.g. /64).       |
| <strong>Preferred Format</strong>                  | Standard IPv6 notation of eight hexets separated by colons.                    |
| <strong>Router Advertisement (RA)</strong>         | ICMPv6 message providing prefix, gateway, and config flags.                    |
| <strong>Router Solicitation (RS)</strong>          | ICMPv6 message from host requesting RAs.                                       |
| <strong>Rule 1 (Leading Zeros)</strong>            | Leading zeros in a hexet may be omitted.                                       |
| <strong>Rule 2 (Double Colon)</strong>             | One contiguous zero sequence may be compressed with `::`.                      |
| <strong>SLAAC</strong>                             | Stateless Address Auto‑configuration for self‑assigning GUAs.                  |
| <strong>Solicited Node Multicast Address</strong>  | Auto‑generated multicast used in neighbour discovery.                          |
| <strong>Stateful DHCPv6</strong>                   | Server assigns full IPv6 address and options.                                  |
| <strong>Stateless DHCPv6</strong>                  | Server supplies options; host derives its own address via SLAAC.               |
| <strong>Subnet ID</strong>                         | Bits in a GUA used by organisations to create subnets.                         |
| <strong>Tunneling</strong>                         | Encapsulating IPv6 in IPv4 (or vice versa) to cross incompatible segments.     |
| <strong>Translation</strong>                       | NAT64 or similar conversion between IPv4 and IPv6.                             |
| <strong>Unique Local Address (ULA)</strong>        | Private‑scope unicast addresses in `FC00::/7`–`FDFF::/7`.                      |
| <strong>Unicast Address</strong>                   | Address that identifies a single destination interface.                        |
| <strong>Unspecified Address</strong>               | `::/128`, used when a host lacks a configured IP source.                       |
| <strong>Well-Known Multicast Address</strong>      | Predefined multicast groups like all‑nodes and all‑routers.                    |

# Chapter Summary
- IPv6’s 128‑bit space eliminates address scarcity and supports future growth.  
- Hexadecimal notation with abbreviation rules (`::`, leading‑zero suppression) keeps addresses readable.  
- Address types: Unicast (GUA, LLA, ULA, Anycast), Multicast; Broadcast is obsolete.  
- Standard /64 subnets enable <strong>SLAAC</strong> and consistent Interface ID generation (EUI‑64 or random).  
- Devices auto‑configure via RS/RA and optionally <strong>DHCPv6</strong>; DAD prevents duplicates.  
- IPv6 coexists with IPv4 through Dual‑Stack, Tunneling, and Translation mechanisms.  
- Multicast (`FF02::1`, `FF02::2`, solicited‑node) replaces IPv4 broadcast for efficient neighbour discovery.

---

Related: <strong>CCNA – Chapter 11</strong> | <strong>CCNA – Chapter 13</strong>
