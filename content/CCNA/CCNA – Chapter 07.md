---
title: "CCNA – Chapter 07"
tags: [ccna, chapter-07, networking, study, ethernet, switching, layer2, osi, mac, duplex, autonegotiation]
chapter: 07
---



# Key Concepts 🔑
- [[Ethernet]] spans **Layer 1** and **[[Data Link Layer (Layer 2)]]**, whose LLC (802.2) and MAC (802.3) sublayers split protocol‑ID and framing/media‑access jobs.  
- An **Ethernet frame** = preamble + SFD, destination/source [[MAC Address]]es, [[EtherType]], data, and [[FCS]] for error detection (64 – 1518 B standard).  
- MAC addresses are 48 bits: **OUI** (first 24 b) + vendor value; uniqueness is maintained by IEEE allocation.  
- Switches *learn* source MACs to populate the [[MAC Address Table (CAM Table)]]; known unicast → single port, unknown/broadcast/multicast → flood.  
- Forwarding styles: **[[Store‑and‑Forward Switching]]** (full‑frame CRC check) vs. **[[Cut‑Through Switching]]** variants—[[Fast‑Forward Switching]] (lowest latency) and [[Fragment‑Free Switching]] (checks first 64 B).  
- **Full‑Duplex** links eliminate collisions; **Auto‑Negotiation** sets optimal speed/duplex and prevents mismatches.  
- **Auto‑MDIX** swaps TX/RX pairs automatically, so straight‑through or crossover cables work interchangeably.  
- Buffering (port‑based or shared memory) smooths congestion before forwarding frames.

# Quiz
<details><summary>Explain the primary function of the LLC sublayer in Ethernet frames.</summary>
The LLC sublayer identifies the Layer‑3 protocol (e.g., IPv4, IPv6, ARP) encapsulated in the frame.
</details>

<details><summary>What is the purpose of the Frame Check Sequence (FCS) in an Ethernet frame?</summary>
The FCS provides CRC‑based error detection so the receiver can verify frame integrity.
</details>

<details><summary>Describe the difference between a unicast and a broadcast MAC address.</summary>
Unicast targets one NIC; broadcast **FF‑FF‑FF‑FF‑FF‑FF** targets all NICs on the segment.
</details>

<details><summary>How does a switch initially populate its MAC address table?</summary>
By recording the source MAC address and ingress port of each received frame (learning).
</details>

<details><summary>What happens if a switch receives a frame whose destination MAC is not in its table?</summary>
It floods the frame out all ports except the ingress port (unknown unicast flooding).
</details>

<details><summary>Explain the main difference between the Store‑and‑Forward and Cut‑Through switching methods.</summary>
Store‑and‑Forward buffers the whole frame and checks the FCS before forwarding; Cut‑Through starts forwarding after reading the destination MAC, reducing latency but risking error propagation.
</details>

<details><summary>What advantage does Fragment‑Free cut‑through offer over Fast‑Forward?</summary>
It checks the first 64 bytes—catching most collision‑related errors—while still forwarding sooner than Store‑and‑Forward.
</details>

<details><summary>Describe the function of Auto‑Negotiation on an Ethernet port.</summary>
Devices automatically agree on the highest common speed and duplex, preventing manual‑config mismatches.
</details>

<details><summary>What is Auto‑MDIX and why is it useful?</summary>
Auto‑MDIX detects cable type (straight‑through vs crossover) and swaps TX/RX pairs so any cable works between any devices.
</details>

<details><summary>How does a Layer‑2 switch use the MAC address table for forwarding decisions?</summary>
If the destination MAC is found, forward out the associated port; if not, flood; if broadcast/multicast, flood.
</details>

# Essay Questions
<details><summary>Compare and contrast the LLC and MAC sublayers of the Data Link Layer.</summary>

**LLC (IEEE 802.2)**  
* Adds multiplexing information to identify the Network‑layer protocol carried in the frame.  
* Provides service access points (SAPs) for upper‑layer interaction.  
* Is protocol‑independent—Ethernet, Wi‑Fi, and other media can share the same LLC.

**MAC (IEEE 802.3)**  
* Handles frame encapsulation/decapsulation, addressing, and media access control (CSMA/CD on legacy half‑duplex).  
* Defines physical addressing via 48‑bit [[MAC Address]]es.  
* Interacts directly with the Physical layer, inserting the preamble/SFD and computing the [[FCS]].

Together they deliver reliable node‑to‑node transfer: LLC tells Layer‑3 who should receive the data, while MAC ensures it gets across the local medium correctly.
</details>

<details><summary>Discuss the structure of an Ethernet MAC address and how uniqueness is maintained.</summary>

A MAC address is 48 bits (12 hex digits) split into:  

* **OUI (Organizationally Unique Identifier)** – first 24 bits, assigned by IEEE to each manufacturer.  
* **Vendor‑Assigned Value** – last 24 bits, numbered by the vendor per device/NIC.

Vendors must never reuse a value under the same OUI, and IEEE assigns each OUI only once. With 24 bits of vendor space, each OUI supports 16 777 216 unique addresses, ensuring global uniqueness across billions of devices.
</details>

<details><summary>Explain how a Layer 2 switch learns MAC addresses and the forwarding decisions it makes.</summary>

1. **Learning** – For every frame received, the switch records the **source** MAC and the ingress port in the [[MAC Address Table (CAM Table)]]. Each entry has an ageing timer (~300 s).  
2. **Forwarding/Filtering** – When a frame arrives:  
   * **Known unicast** – destination MAC found → forward only out the listed port.  
   * **Unknown unicast** – not found → flood out all ports except ingress.  
   * **Broadcast or multicast** – flood (unless the switch performs IGMP/MLD snooping for multicast).  
3. **Updating** – If a learned MAC appears on a different port, the entry is updated to reflect the new location.  
Through this dynamic process the table converges so most traffic becomes unicast‑only, conserving bandwidth.
</details>

<details><summary>Analyse trade‑offs between Store‑and‑Forward and Cut‑Through (Fast‑Forward, Fragment‑Free). When is each preferred?</summary>

| Method | Latency | Error Handling | Typical Use |
|---|---|---|---|
| **Store‑and‑Forward** | Highest (full‑frame delay) | Checks FCS → drops errored frames; supports QoS & policing | Enterprise core/edge, WAN hand‑off, environments needing integrity |
| **Fast‑Forward** | Lowest (starts after 6 bytes) | No error checking → may propagate bad frames | Low‑latency clusters, HPC, cut‑through‑capable DC fabrics |
| **Fragment‑Free** | Mid (after 64 B) | Catches most collision/runts, avoids long CRC wait | Legacy half‑duplex nets with occasional collisions |

In modern full‑duplex networks, Store‑and‑Forward dominates because latency penalties are small relative to gigabit+ speeds and error filtering/QoS inspection are valuable. Cut‑Through shines in specialist, error‑controlled environments where microseconds matter.
</details>

<details><summary>Describe duplexing and auto‑negotiation. How can duplex mismatch occur and what are its effects?</summary>

* **Half‑Duplex** – send *or* receive at a time; relies on CSMA/CD to detect collisions on shared media.  
* **Full‑Duplex** – simultaneous send + receive; each port is its own collision domain, so CSMA/CD is disabled.

**Auto‑Negotiation (IEEE 802.3u/ab)** exchanges Fast Link Pulses to settle on the best common speed/duplex.  

**Duplex Mismatch** happens when one end is manually set (e.g., 100 Full) and the other end is autonegotiating or hard‑set differently (e.g., 100 Half). Symptoms: high FCS/late‑collision counts, severe throughput collapse, and erratic connectivity. Always configure both ends to Auto or both to identical manual settings to avoid the problem.
</details>

# FAQ
> [!question]- **What are the sub‑layers of the Data‑Link layer and their functions?**  
> **Answer:** LLC (802.2) tags the Layer‑3 protocol; MAC (802.3) frames data, controls medium access, and adds physical addresses.

> [!question]- **What is an Ethernet frame and its key fields?**  
> **Answer:** Preamble + SFD, destination/source MAC, EtherType/length, data, FCS; size 64–1518 B standard.

> [!question]- **How is a MAC address structured?**  
> **Answer:** 48 bits total: 24‑bit OUI from IEEE + 24‑bit vendor‑assigned value.

> [!question]- **Types of MAC addresses and purposes?**  
> **Answer:** Unicast → one device; Broadcast → all devices (FF‑FF‑FF‑FF‑FF‑FF); Multicast → selected group.

> [!question]- **How does a switch build and use its MAC table?**  
> **Answer:** Learns source MAC/port, ages out old entries, forwards known unicasts, floods unknown/broadcast/multicast frames.

> [!question]- **Switch forwarding methods?**  
> **Answer:** Store‑and‑Forward (CRC check); Cut‑Through → Fast‑Forward (immediate) or Fragment‑Free (first 64 B).

> [!question]- **How do duplex and speed settings affect Ethernet links?**  
> **Answer:** Both ends must agree; full‑duplex removes collisions; Auto‑Negotiation sets compatible speed/duplex; mismatch cripples performance.

> [!question]- **What is Auto‑MDIX?**  
> **Answer:** Auto‑detects cable type and swaps TX/RX so either straight‑through or crossover cables work.

# Glossary
| Term | Definition |
|---|---|
| **ARP (Address Resolution Protocol)** | Resolves an IPv4 address to its matching [[MAC Address]]. |
| **Auto‑MDIX** | Automatic cable‑type detection that swaps TX/RX pairs. |
| **Auto‑Negotiation** | Protocol where devices agree on common speed and duplex settings. |
| **Broadcast** | One‑to‑all transmission using destination MAC FF‑FF‑FF‑FF‑FF‑FF. |
| **Buffering** | Temporary storage of frames in switch memory during congestion. |
| **Collision Domain** | Network segment where frames can collide; modern switch ports are single‑device domains. |
| **CSMA/CD** | Legacy half‑duplex method for managing medium access and detecting collisions. |
| **Cut‑Through Switching** | Starts forwarding after reading destination MAC, reducing latency. |
| **Data Field** | Payload area carrying the Layer‑3 packet within a frame. |
| **Data Link Layer (Layer 2)** | OSI layer providing node‑to‑node delivery and framing. |
| **Destination MAC Address** | 48‑bit address of the intended frame recipient. |
| **Duplex** | Half or full simultaneous send/receive capability of a link. |
| **Duplex Mismatch** | Ends of a link configured for different duplex modes, causing performance issues. |
| **EtherType** | Field identifying the Layer‑3 protocol encapsulated in the frame. |
| **Ethernet** | IEEE 802.3 LAN technology using frames and MAC addressing. |
| **Ethernet Frame** | Data unit on Ethernet networks including header, payload, trailer. |
| **FCS (Frame Check Sequence)** | CRC value used for error detection at Layer 2. |
| **Fast‑Forward Switching** | Lowest‑latency cut‑through variant; forwards immediately after reading destination MAC. |
| **Filtering** | Action of not forwarding frames out ports that don't lead to the destination. |
| **Forwarding** | Sending frames based on MAC table lookup results. |
| **Fragment‑Free Switching** | Cut‑through variant buffering first 64 B to avoid runt/collision errors. |
| **Full‑Duplex** | Simultaneous transmission and reception on a link. |
| **Half‑Duplex** | Transmission or reception (not both) at a time; relies on CSMA/CD. |
| **Jumbo Frame** | Frame with payload > 1500 B (up to ~9000 B) requiring explicit support. |
| **Learning** | Switch process of associating source MACs with ingress ports. |
| **LLC (Logical Link Control)** | Upper sublayer (802.2) tagging Layer‑3 protocol identifiers. |
| **MAC (Media Access Control)** | Lower sublayer (802.3) handling framing and media access. |
| **MAC Address** | Unique 48‑bit physical address burned into NICs. |
| **MAC Address Table (CAM Table)** | Switch lookup table linking learned MACs to ports. |
| **Multicast** | One‑to‑group transmission using special destination MAC range. |
| **Neighbor Discovery (ND)** | IPv6 suite for address resolution and router discovery. |
| **OUI (Organizationally Unique Identifier)** | First 24 bits of a MAC address allocated by IEEE to a vendor. |
| **Physical Layer (Layer 1)** | OSI layer sending raw bits over the medium. |
| **Port‑Based Buffering** | Separate memory queues per switch port. |
| **Preamble** | Synchronization pattern at the start of every Ethernet frame. |
| **Runts** | Frames < 64 B (often collision fragments) automatically discarded. |
| **Shared Memory Buffering** | Common buffer pool dynamically shared among ports. |
| **Source MAC Address** | 48‑bit address of the sending NIC. |
| **Store‑and‑Forward Switching** | Buffers entire frame, checks FCS, then forwards. |
| **Unknown Unicast Frame** | Frame with destination MAC not in the CAM table, causing flooding. |
| **Unicast** | One‑to‑one transmission between two devices. |
| **Vendor‑Assigned Value** | Last 24 bits of a MAC address set uniquely by the vendor. |

# Chapter Summary
- Ethernet frames encapsulate Layer‑3 packets with destination/source MACs, EtherType, and FCS; 64–1518 B standard size.  
- LLC provides protocol identification, while MAC handles framing, media access, and addressing.  
- MAC addresses are globally unique (OUI + vendor); unicast, broadcast, and multicast serve different communication scopes.  
- Switches dynamically learn MACs, store them in CAM tables, and forward frames based on table lookups; unknown/broadcast/multicast frames are flooded.  
- Store‑and‑Forward ensures integrity with CRC checks; Cut‑Through variants reduce latency—Fast‑Forward fastest, Fragment‑Free balances speed and error catching.  
- Port‑based and shared‑memory buffering manage congestion; modern full‑duplex links remove collisions and CSMA/CD.  
- Auto‑Negotiation aligns speed/duplex, preventing mismatches; Auto‑MDIX eliminates cable‑type concerns.  

Related: [[CCNA – Chapter 06]] | [[CCNA – Chapter 08]]
