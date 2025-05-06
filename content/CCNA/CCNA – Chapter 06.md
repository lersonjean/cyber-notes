---
title: "CCNA – Chapter 06"
tags: [ccna, chapter-06, networking, study, data-link-layer, layer2, osi, topology, ethernet, wlan]
chapter: 06
---
---
# Key Concepts 🔑
- The [[Data Link Layer]] (Layer 2) provides local communication between device [[NIC]]s and prepares [[Layer 3]] packets for transmission on the physical medium.  
- Two sub‑layers divide Layer 2: [[LL]] (interface to upper layers) and [[MAC (Media Access Control)|MAC]] (framing and media access).  
- Routers decapsulate incoming frames, examine the packet, and re‑encapsulate it with new [[MAC Address]]es at every hop.  
- Network topologies have physical and logical views; common WAN topologies are [[Point-to-Point]], [[Hub and Spoke]], and [[Mesh Topology]]. The prevalent LAN topology is the [[Star Topology]].  
- Links operate half‑duplex or full‑duplex; duplex mode dictates simultaneous transmission capability.  
- Shared‑media access is controlled by contention methods ([[CSMA/CD]], [[CSMA/CA]]) or deterministic controlled access.  
- A data [[Frame]] consists of header, payload (Layer 3 packet) and trailer; the trailer carries [[Error Detection]] data.  
- [[MAC Address|Layer 2 addressing]] is for local delivery only and is rewritten at each hop.  
- IEEE, ISO, ITU, and ANSI define and maintain Layer 2 standards.

# Quiz
<details>
<summary>1. What is the primary responsibility of the Data Link Layer (Layer 2)?</summary>

The Data Link Layer enables communication between device [[NIC]]s and provides upper‑layer protocols with access to the physical media by framing packets for transmission.
</details>

<details>
<summary>2. What are the two main sub‑layers of the Data Link Layer and their functions?</summary>

- **[[LLC]]** – interfaces with upper‑layer protocols and manages error handling and flow control.  
- **[[MAC (Media Access Control)|MAC]]** – encapsulates data into frames, applies addressing, and controls access to the medium.
</details>

<details>
<summary>3. Explain the difference between a physical topology and a logical topology.</summary>

A **physical topology** depicts the tangible layout of devices and cabling, while a **logical topology** shows virtual paths based on addressing and interface usage (e.g., VLANs, IP subnets).
</details>

<details>
<summary>4. Name three common WAN topologies.</summary>

[[Point-to-Point]], [[Hub and Spoke]], and [[Mesh Topology]].
</details>

<details>
<summary>5. Describe the difference between half‑duplex and full‑duplex communication.</summary>

**Half‑duplex** allows only one device to transmit at a time; **full‑duplex** allows simultaneous send and receive.
</details>

<details>
<summary>6. What are CSMA/CD and CSMA/CA, and where are they typically used?</summary>

- **[[CSMA/CD]]** – collision detection used on bus‑topology Ethernet.  
- **[[CSMA/CA]]** – collision avoidance used on WLANs.
</details>

<details>
<summary>7. What happens to a data frame at each hop between Layer 3 devices?</summary>

Each router decapsulates the frame, examines the packet, encapsulates it in a new frame with updated [[MAC Address]]es, and forwards it to the next segment.
</details>

<details>
<summary>8. What information is typically included in the header of a data link frame?</summary>

Start/end delimiters, source and destination [[MAC Address]]es, a type field identifying the Layer 3 protocol, and flow‑control information.
</details>

<details>
<summary>9. What is the purpose of the trailer in a data link frame?</summary>

The trailer includes error‑detection data (e.g., FCS) and marks the end of the frame.
</details>

<details>
<summary>10. Are Layer 2 addresses used for end‑to‑end communication across networks? Explain.</summary>

No. [[MAC Address|Layer 2 addresses]] are only for local delivery within a segment and are rewritten at each hop; end‑to‑end delivery relies on [[Layer 3]] addressing.
</details>

# Essay Questions
<details>
<summary>Discuss the relationship between the Logical Link Control (LLC) and Media Access Control (MAC) sub‑layers of the Data Link Layer and explain how they work together to facilitate network communication.</summary>

> [!info] **Answer**  
> The [[LLC]] and [[MAC (Media Access Control)|MAC]] sub‑layers form a service pair that collectively fulfils all Layer 2 responsibilities:  
> • **LLC (IEEE 802.2)** provides a consistent interface to the network layer, identifies upper‑layer protocols using Service Access Points (SAPs), and can add optional error checking and flow‑control features.  
> • **MAC (IEEE 802.x variants)** handles the mechanics of media access—framing, addressing, start/stop delimiters, [[Error Detection]] (FCS), and timing.  
> LLC delegates frame construction and medium arbitration to MAC, while MAC relies on LLC for protocol multiplexing and (when enabled) flow control. Together they present a transparent, reliable link service to [[Layer 3]] regardless of the physical medium.
</details>

<details>
<summary>Compare and contrast the operation of Carrier Sensing Multiple Access with Collision Detection (CSMA/CD) and Carrier Sensing Multiple Access with Collision Avoidance (CSMA/CA), highlighting the scenarios where each is typically employed.</summary>

> [!info] **Answer**  
> • **[[CSMA/CD]]** (wired Ethernet): devices listen for an idle line, transmit, and monitor the medium for collisions; on detection they send jam signals and back off for a random interval. It assumes half‑duplex shared copper where collisions can be detected electrically.  
> • **[[CSMA/CA]]** (WLAN 802.11): devices sense the channel, use random back‑off timers, and optionally exchange RTS/CTS control frames to reserve airtime before transmitting. Wireless nodes cannot reliably detect collisions in progress, so they avoid them instead.  
> • **When to use**: CSMA/CD is legacy—modern switched Ethernet eliminates collisions. CSMA/CA remains essential in Wi‑Fi where half‑duplex, shared-radio conditions persist and collision detection is impractical.
</details>

<details>
<summary>Explain the process of frame encapsulation and decapsulation as a data frame traverses a network path involving multiple Layer 3 devices.</summary>

> [!info] **Answer**  
> 1. **At the sender**: The network layer hands a packet to LLC, which adds its header (SAP). MAC then adds a MAC header (source/destination [[MAC Address]]es, type) and trailer (FCS), forming a [[Data Frame]].  
> 2. **Across the first link**: The frame is transmitted to the first router.  
> 3. **At each router hop**: The router’s NIC checks the FCS, passes the frame to MAC, which strips the header/trailer (decapsulation). LLC passes the intact packet to the router’s network layer for forwarding. The router then creates a new frame appropriate to the outgoing interface: MAC adds new source/destination addresses and FCS (encapsulation).  
> 4. **Process repeats** until the frame reaches the destination LAN.  
> 5. **At the destination host**: After FCS validation, MAC and LLC remove their headers/trailers and deliver the packet to the network layer.  
> This hop‑by‑hop refresh ensures local addressing and media‑specific framing while preserving the original end‑to‑end Layer 3 information.
</details>

<details>
<summary>Analyze the importance of both physical and logical network topologies in understanding and designing network infrastructure. Provide examples of common physical and logical topologies and their characteristics.</summary>

> [!info] **Answer**  
> • **Physical topology** concerns cable layout and device placement—critical for distance limits, fault domains, and installation cost. Examples:  
>   – **[[Star Topology]]** (switch‑centric LAN): easy troubleshooting, scalable, single‑point failure at the switch mitigated by redundancy.  
>   – **[[Hub and Spoke]]** WAN: economical but hub congestion risk.  
> • **Logical topology** reflects data‑flow paths, addressing, and segmentation—vital for security, broadcast containment, and routing efficiency. Examples:  
>   – **VLAN‑based logical star** over a physical star switch fabric.  
>   – **[[Mesh Topology]]** routing overlays in VPNs or SD‑WAN that provide multiple logical paths across a partially meshed physical network.  
> Designers must align physical constraints (media type, distance) with logical requirements (traffic patterns, redundancy) for an optimal solution.
</details>

<details>
<summary>Describe the key fields found within a data link frame and explain the purpose of each field in enabling the successful transmission and reception of data.</summary>

> [!info] **Answer**  
> Typical Ethernet frame fields:  
> • **Preamble & SFD** – synchronize clocks and mark frame start.  
> • **Destination [[MAC Address]] / Source MAC Address** – identify receiving and sending NICs on the local segment.  
> • **Type/Length** – indicates encapsulated Layer 3 protocol (e.g., 0x0800 for IPv4) or payload size.  
> • **Payload (Data)** – carries the upper‑layer packet.  
> • **FCS** – 32‑bit CRC in the [[Trailer]] that enables [[Error Detection]]; receivers discard frames with mismatched CRCs.  
> Together these fields delimit, address, classify, and verify each frame, ensuring reliable data delivery over the shared medium.
</details>

# FAQ
> [!question] **What is the primary purpose of the Data Link Layer?**  
> The Layer 2 protocol prepares data for physical transmission and mediates communication between device [[NIC]]s.  

> [!question] **What are the two main sub‑layers of the Data Link Layer and their functions?**  
> **[[LLC]]** interfaces with upper layers; **[[MAC (Media Access Control)|MAC]]** frames data and controls media access.  

> [!question] **How does data flow across multiple Data Link Layers in a network path?**  
> At each router hop, the frame is stripped, the packet examined, and a new frame is built for the next segment.  

> [!question] **What are physical vs logical network topologies?**  
> **Physical topology** shows actual cabling; **logical topology** shows virtual paths like VLANs and IP subnets.  

> [!question] **What are half‑duplex and full‑duplex modes?**  
> Half‑duplex = one device transmits at a time; full‑duplex = simultaneous send and receive.  

> [!question] **How do devices manage access to shared media?**  
> Through contention methods such as [[CSMA/CD]] (wired) or [[CSMA/CA]] (wireless), or deterministic controlled access.  

> [!question] **What are the main components of a Data Link Layer frame?**  
> Header, payload (Layer 3 packet), and trailer (error detection).  

> [!question] **What is Layer 2 (MAC) addressing and how is it used?**  
> A 48‑bit [[MAC Address]] provides local delivery and is rewritten at every hop.  

# Glossary
| Term                           | Definition                                                      |
| ------------------------------ | --------------------------------------------------------------- |
| [[Access Control Methods]]     | Mechanisms for managing transmissions on a shared medium        |
| [[Contention-based Access]]    | Method where devices compete for the medium, risking collisions |
| [[Controlled Access]]          | Deterministic method where each node transmits in turn          |
| [[CSMA/CA]]                    | Collision‑avoidance access method for WLANs                     |
| [[CSMA/CD]]                    | Collision‑detection access method for Ethernet                  |
| [[Data Frame]]                 | Layer 2 data unit: header + payload + trailer                   |
| [[Decapsulation]]              | Removing Layer 2 header/trailer from a packet                   |
| [[Duplex Modes]]               | Whether a link is half‑ or full‑duplex                          |
| [[Encapsulation]]              | Adding Layer 2 header/trailer to a packet                       |
| [[Error Detection]]            | Process of verifying frame integrity (e.g., FCS)                |
| [[Frame]]                      | Synonym for data frame at Layer 2                               |
| [[Full-duplex]]                | Simultaneous bidirectional communication                        |
| [[Half-duplex]]                | Communication where devices transmit one at a time              |
| [[Header]]                     | Control information at the start of a frame                     |
| [[Hop]]                        | One router‑to‑router traversal on a path                        |
| [[Hub and Spoke]]              | WAN topology with branches connected to a central hub           |
| [[LAN Topologies]]             | Physical or logical layouts within a LAN                        |
| [[Layer 2]]                    | The Data Link Layer of the OSI model                            |
| [[Layer 3]]                    | The Network Layer of the OSI model                              |
| [[LLC]]                        | Logical Link Control sub‑layer interfacing to upper layers      |
| [[Logical Topology]]           | Virtual arrangement of paths based on addressing                |
| [[MAC Address]]                | 48‑bit physical address for local frame delivery                |
| [[MAC (Media Access Control)]] | Sub‑layer for framing and media access                          |
| [[Mesh Topology]]              | Topology where every device interconnects                       |
| [[NIC]]                        | Network Interface Card enabling network connectivity            |
| [[Physical Address]]           | Another term for MAC address                                    |
| [[Physical Topology]]          | Physical layout of cabling and devices                          |
| [[Point-to-Point]]             | WAN topology with a direct link                                 |
| [[Star Topology]]              | LAN topology with devices connected to a central switch         |
| [[Trailer]]                    | End of a frame containing error‑detection bits                  |
| [[WAN Topologies]]             | Physical or logical arrangements in WANs                        |

# Chapter Summary
- The [[Data Link Layer]] enables local delivery of [[Layer 3]] packets between [[NIC]]s.  
- [[LLC]] offers a uniform interface to upper layers, while [[MAC (Media Access Control)|MAC]] handles framing and media access.  
- Routers decapsulate and re‑encapsulate frames at each hop, updating [[MAC Address]]es.  
- Both physical and logical topologies (e.g., [[Star Topology]], [[Point-to-Point]]) influence network design, performance, and resilience.  
- Links may operate half‑ or full‑duplex; duplex choice affects throughput and collision handling.  
- Medium access is governed by contention‑based methods ([[CSMA/CD]], [[CSMA/CA]]) or deterministic controlled access.  
- A frame’s header carries addressing/type fields; the trailer provides [[Error Detection]].  
- Layer 2 addresses are not routed end‑to‑end and change at every hop.

Related: [[CCNA – Chapter 05]] | [[CCNA – Chapter 07]]
