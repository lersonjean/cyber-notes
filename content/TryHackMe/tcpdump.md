# 🚀 tcpdump Mastery Guide

Understanding and effectively utilizing **tcpdump** is essential for cybersecurity professionals. This powerful command-line tool helps analyze network traffic, troubleshoot connectivity problems, and investigate security incidents through packet capture and analysis.

---

## 🎯 Learning Objectives

By the end of this guide, you'll be able to:

1. Clearly explain the purpose and functionalities of tcpdump.
    
2. Perform detailed packet captures using various filter options.
    
3. Efficiently analyze packet data.
    
4. Apply advanced filtering techniques based on TCP flags and header bytes.
    

---

## 📚 Fundamental Concepts

**tcpdump** is a versatile command-line packet analyzer used to capture and analyze network traffic in real-time or from saved files.

### 🔧 Key Command-Line Options

|Command|Description|
|---|---|
|`-i INTERFACE`|Capture packets from a specified network interface|
|`-w FILE`|Write captured packets to a file (`.pcap`)|
|`-r FILE`|Read packets from an existing capture file|
|`-c COUNT`|Limit capture to a specific number of packets|
|`-n`|Do not resolve IP addresses|
|`-nn`|Do not resolve IP addresses or port numbers|
|`-v, -vv, -vvv`|Increase verbosity of the output|
|`-q`|Quick output with minimal details|
|`-e`|Include Ethernet (MAC) header information|
|`-A`|Display packet payload data in ASCII|
|`-xx`|Display packet data in hexadecimal format|
|`-X`|Display packet data in both hex and ASCII|

---

## 🛠️ Hands-On Exercises

### ✅ Check Network Interfaces

List all available network interfaces:

```
ip address show
```

### Exercise 1: Basic Packet Capture

Capture 10 packets from interface `ens5`:

```
sudo tcpdump -i ens5 -c 10
```

### Exercise 2: Save Packets to File

Capture and save packets from `eth0` to `capture.pcap`:

```
sudo tcpdump -i eth0 -w capture.pcap
```

Read from the file later:

```
tcpdump -r capture.pcap
```

### Exercise 3: Filter by Host

Capture packets to/from `example.com`:

```
sudo tcpdump host example.com
```

### Exercise 4: Filter by Port

Capture DNS traffic (port 53):

```
sudo tcpdump port 53
```

### Exercise 5: Filter by Protocol

Capture ICMP traffic:

```
sudo tcpdump icmp
```

### Exercise 6: Using Logical Operators

Capture TCP packets to/from `192.168.1.100` on port `22`:

```
sudo tcpdump host 192.168.1.100 and tcp port 22
```

---

## 🌟 Advanced Techniques

### 🚩 Filtering by TCP Flags

Use TCP flags (e.g., SYN, ACK) to filter packets:

- SYN packets only:
    

```
sudo tcpdump "tcp[tcpflags] == tcp-syn"
```

- SYN or ACK packets:
    

```
sudo tcpdump "tcp[tcpflags] & (tcp-syn|tcp-ack) != 0"
```

### 📌 Header Byte Filtering

- Multicast Ethernet frames:
    

```
sudo tcpdump 'ether[0] & 1 != 0'
```

- IP packets with options:
    

```
sudo tcpdump 'ip[0] & 0xf != 5'
```

### 🔍 Detailed Packet Analysis

- Quick packet info:
    

```
sudo tcpdump -q
```

- Display MAC addresses:
    

```
sudo tcpdump -e
```

- ASCII payload:
    

```
sudo tcpdump -A
```

- Hexadecimal data:
    

```
sudo tcpdump -xx
```

- Combined Hex and ASCII:
    

```
sudo tcpdump -X
```

---

## 📝 Quiz & Self-Check

1. **What file format does tcpdump use to save captured packets?**
    
2. **How to capture packets from all interfaces?**
    
3. **Which command captures only DNS traffic?**
    
4. **Explain the use of the** `**-nn**` **flag.**
    
5. **Which command captures ICMP packets?**
    
6. **How would you capture SYN packets exclusively?**
    
7. **Which option displays payload data in ASCII?**
    
8. **How do you limit the capture to 15 packets?**
    
9. **How to capture TCP traffic from** `**192.168.1.5**` **only?**
    
10. **Which command shows detailed MAC addresses?**
    

> [!info]- **Quiz Answers**
> 
> 1. `.pcap`
>     
> 2. `tcpdump -i any`
>     
> 3. `tcpdump port 53`
>     
> 4. Prevents DNS and port number resolution
>     
> 5. `tcpdump icmp`
>     
> 6. `tcpdump "tcp[tcpflags] == tcp-syn"`
>     
> 7. `tcpdump -A`
>     
> 8. `tcpdump -c 15`
>     
> 9. `tcpdump tcp and src host 192.168.1.5`
>     
> 10. `tcpdump -e`
>     

---

## 📖 Further Reading

- tcpdump Official Documentation
    
- PCAP Filter Reference
    
- Wireshark Packet Analysis Guide
    

---

## 📔 Glossary

|   |   |
|---|---|
|Term|Definition|
|**pcap**|File format for storing captured network packets|
|**Interface**|Network device used for capturing packets (e.g., `eth0`)|
|**Filter**|Criteria used to select specific packets|
|**TCP Flags**|Control bits in TCP header for managing connections|
|**ICMP**|Internet Control Message Protocol, primarily used for diagnostics|

