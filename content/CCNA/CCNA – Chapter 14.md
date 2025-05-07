---
title: "CCNA – Chapter 14"
tags: [ccna, chapter-14, networking, study, transport-layer, tcp, udp, ports, osi, reliability, flow-control]
chapter: 14
---

[[toc]]

# Key Concepts 🔑
- The [[Transport Layer]] provides logical, end‑to‑end communication between applications on different hosts.  
- [[TCP]] is connection‑oriented, reliable, and stateful; [[UDP]] is connectionless, best‑effort, and lightweight.  
- TCP establishes sessions with a three‑way handshake (SYN, SYN‑ACK, ACK) and closes them with a four‑step FIN/ACK exchange.  
- TCP reliability relies on sequence numbers, acknowledgements, retransmissions, and selective acknowledgement (SACK).  
- Flow control in TCP uses the **Window Size** field; congestion avoidance algorithms adapt the send rate during network congestion.  
- UDP offers minimal overhead, no sequencing / retransmission, and suits real‑time traffic such as VoIP, streaming, and online gaming.  
- Port numbers (well‑known 0‑1023, registered 1024‑49151, dynamic 49152‑65535) let multiple applications share a single network connection.  
- A **socket pair** (source IP + port, destination IP + port) uniquely identifies each conversation.  
- The **Maximum Segment Size (MSS)** is typically 1460 bytes on Ethernet (1500 MTU – 20 IP – 20 TCP).  
- Tools such as **netstat** display active TCP/UDP sessions and listening ports.

# Quiz
<details>
<summary>1. What is the primary role of the transport layer in networking?</summary>

To provide logical communication between applications on different hosts, bridging the application layer and lower network layers while tracking conversations, segmenting/reassembling data, and multiplexing streams.
</details>

<details>
<summary>2. Which two protocols operate at the transport layer, and what key difference distinguishes them?</summary>

TCP and UDP; TCP is reliable and connection‑oriented, whereas UDP is best‑effort and connectionless.
</details>

<details>
<summary>3. Describe the basic mechanism TCP uses to ensure reliable delivery of data segments.</summary>

TCP numbers segments, requires ACKs, and retransmits any segment whose acknowledgement is not received within a timeout, reordering segments as needed.
</details>

<details>
<summary>4. Why is UDP considered a “connectionless” protocol?</summary>

UDP sends datagrams without negotiating a session or maintaining state, so no connection is established before data transfer.
</details>

<details>
<summary>5. What is the purpose of port numbers?</summary>

They identify the sending and receiving application processes, allowing many conversations to share one host’s IP address.
</details>

<details>
<summary>6. What is a “socket pair,” and what information does it combine?</summary>

A socket pair is the combination of source IP + source port and destination IP + destination port—together uniquely identifying one transport session.
</details>

<details>
<summary>7. Explain the function of the SYN flag during the TCP three‑way handshake.</summary>

SYN initiates a connection and synchronises initial sequence numbers between client and server.
</details>

<details>
<summary>8. How does TCP use “Window Size” to achieve flow control?</summary>

The receiver advertises its available buffer space in the Window Size field, limiting how much unacknowledged data the sender may transmit.
</details>

<details>
<summary>9. What is the Maximum Segment Size (MSS), and how is it calculated from MTU?</summary>

MSS is the largest payload a TCP segment can carry; it is the path MTU minus IP and TCP header sizes (e.g., 1500 – 20 – 20 = 1460 bytes).
</details>

<details>
<summary>10. Give two examples of applications that use UDP and explain why.</summary>

Real‑time video conferencing and online‑gaming voice chat use UDP because they value low latency and can tolerate some packet loss more than retransmission delays.
</details>

# Essay Questions
<details>
<summary>1. Compare and contrast TCP and UDP in detail.</summary>

**TCP** is connection‑oriented and reliable, establishing a session with a three‑way handshake. It numbers every byte, requires acknowledgements, retransmits lost data, uses flow‑control windows, and adapts to congestion with algorithms such as slow‑start and congestion avoidance. This overhead makes TCP suited to applications that need ordered, complete delivery (e‑mail, web, file transfer).

**UDP** is connectionless and best‑effort. It adds only source/destination port, length, and checksum to each datagram, offering no sequencing, ACKs, or retransmissions. Its low latency and minimal processing make it ideal for real‑time or simple query/response traffic (VoIP, streaming, DNS). Applications that need reliability must add it themselves.
</details>

<details>
<summary>2. Describe the TCP three‑way handshake.</summary>

1. **SYN** → Client sends a segment with SYN set and its initial sequence number (ISN).  
2. **SYN‑ACK** ← Server responds with its own ISN in SYN and acknowledges the client’s ISN + 1.  
3. **ACK** → Client acknowledges the server’s ISN + 1.  
After these exchanges, sequence spaces are agreed and the connection enters the ESTABLISHED state.
</details>

<details>
<summary>3. How do TCP mechanisms achieve reliability and flow control?</summary>

Reliability: sequence numbers ensure ordering; ACKs confirm delivery; timers trigger retransmission; SACK minimises duplicate retransmits.  

Flow control: the receiver’s advertised window limits unacknowledged data; TCP’s sliding‑window adjusts as ACKs arrive.  

Congestion control: algorithms such as slow‑start, congestion avoidance, fast retransmit, and fast recovery react to loss and delay to keep traffic below the network’s capacity.
</details>

<details>
<summary>4. Explain port number ranges and give examples.</summary>

- **Well‑known (0‑1023)** – reserved for common services, e.g. HTTP 80, HTTPS 443, SSH 22.  
- **Registered (1024‑49151)** – assigned by IANA, e.g. MS SQL 1433, Docker 2375.  
- **Dynamic/Ephemeral (49152‑65535)** – chosen temporarily by clients, e.g. a web browser might source from 55832 when connecting to port 443.
</details>

<details>
<summary>5. How do segmentation, multiplexing, and port numbers let one host run many conversations?</summary>

Large application data is segmented into smaller TCP segments/UDP datagrams. Each segment bears source and destination ports, letting the OS multiplex streams onto the same IP address and demultiplex them on receipt. The unique socket pair identifies each conversation, so hundreds of simultaneous sessions coexist without collision.
</details>

# FAQ
> [!faq] **Why choose UDP for real‑time traffic?**  
> Retransmitting late data is useless for live streams; UDP’s low overhead minimises delay, and mild loss is tolerable.

> [!faq] **What tool shows current port usage?**  
> The `netstat ‑a` command lists active TCP sessions and UDP listeners with their socket pairs.

> [!faq] **Can TCP and UDP share the same port number?**  
> Yes—port numbers are scoped per protocol. Port 53/TCP and port 53/UDP are distinct.

> [!info] **Is TCP always slower than UDP?**  
> Not necessarily. On reliable links with little loss, TCP’s congestion window can grow large, matching line speed. Over lossy paths, its recovery mechanisms add delay compared to UDP.

# Glossary
| Term | Definition |
| --- | --- |
| [[ACK]] | TCP flag indicating acknowledgement of received data. |
| Best‑Effort Delivery | Service model where delivery is attempted but not guaranteed (characteristic of [[UDP]]). |
| Congestion Avoidance | TCP techniques that reduce send rate when loss or delay signals congestion. |
| Dynamic Ports | Temporary client‑side ports in range 49152‑65535. |
| [[FIN]] | TCP flag signalling «no more data» from sender, used in connection teardown. |
| Flow Control | Method to prevent sender from overrunning receiver’s buffers (TCP windowing). |
| Multiplexing | Interleaving multiple conversations over one link distinguished by port numbers. |
| [[MSS]] | Maximum Segment Size: largest TCP payload size, typically 1460 bytes on Ethernet. |
| Netstat | CLI utility displaying active sockets, routing tables, and interface stats. |
| Port Number | 16‑bit field identifying a process on a host; together with IP forms a socket. |
| Registered Ports | Ports 1024‑49151 allocated by IANA for specific applications. |
| Reliable Delivery | Guarantee that all data arrives intact and in order (feature of [[TCP]]). |
| Reassembly | Putting received segments back in order to reconstruct original data. |
| Segmentation | Splitting large application data into smaller transport‑layer units. |
| [[Socket]] | IP address + port number pair; endpoint of a transport connection. |
| Socket Pair | Source socket + destination socket, uniquely defining one session. |
| [[SYN]] | TCP flag initiating a connection and synchronising sequence numbers. |
| Three‑Way Handshake | SYN, SYN‑ACK, ACK exchange establishing a TCP connection. |
| [[TCP]] | Connection‑oriented, reliable transport protocol at OSI Layer 4. |
| Transport Layer | Layer 4 of OSI model; provides host‑to‑host communication services. |
| [[UDP]] | Connectionless, lightweight transport protocol with minimal overhead. |
| Well‑Known Ports | Ports 0‑1023 reserved for common services (e.g., HTTP 80). |
| Window Size | TCP header field indicating receiver’s available buffer for flow control. |

# Chapter Summary
- Transport Layer delivers end‑to‑end conversations between applications.  
- TCP offers reliability, ordering, flow & congestion control via sequence numbers, ACKs, windows, and timers.  
- UDP trades reliability for speed, perfect for real‑time or simple query/response traffic.  
- Port numbers allow many application sessions to share one IP address; socket pairs distinguish each conversation.  
- TCP’s three‑way handshake sets initial sequence numbers; a four‑step FIN/ACK sequence closes the connection.  
- Flow control (Window Size) and congestion avoidance keep data flowing without overrunning receivers or networks.  
- MSS is based on MTU; exceeding it causes fragmentation or drops, so proper sizing is critical.  
- Tools like **netstat** help diagnose active [[TCP]]/[[UDP]] sessions and listening services.

Related: [[CCNA – Chapter 13]] | [[CCNA – Chapter 15]]
