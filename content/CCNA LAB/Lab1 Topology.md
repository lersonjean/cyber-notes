# CCNA Lab Documentation

## Overview

This documentation describes the network setup for a CCNA Lab environment consisting of:

- 3 PCs
    
- 3 Switches
    
- 3 Routers
    

The lab simulates a small network scenario, demonstrating DHCP services, SSH configuration, and basic network connectivity without VLAN implementation.



## Network Topology


![Lab1 Topology(1)](Lab1%20Topology(1).jpg)
## Devices and Configuration

### PCs

| Hostname | IP Address (DHCP assigned) | Subnet Mask     | Gateway        | Connected Switch Port |
| -------- | -------------------------- | --------------- | -------------- | --------------------- |
| PC1      | 192.168.10.182             | 255.255.255.192 | 192.168.10.129 | Fa0/2                 |
| PC2      | 192.168.10.213             | 255.255.255.224 | 192.168.10.193 | Fa0/1                 |
| PC3      | 192.168.10.117             | 255.255.255.128 | 192.168.10.1   | Fa0/1                 |

### Switches

|             |                |                |                   |                |
| ----------- | -------------- | -------------- | ----------------- | -------------- |
| Switch Name | Management IP  | SSH Configured | Connected Devices | SSH Configured |
| S1          | 192.168.10.130 | Yes            | HP1               | Yes            |
| S2          | 192.168.10.194 | Yes            | HP2               | Yes            |
| S3          | 192.168.10.2   | Yes            | HP3               | Yes            |


### Routers

|             |           |                |                 |                |
| ----------- | --------- | -------------- | --------------- | -------------- |
| Router Name | Interface | IP Address     | Subnet Mask     | SSH Configured |
| R1          | G0/0      | 1.1.1.1        | 255.255.255.252 |                |
| R1          | G0/1      | 192.168.10.129 | 255.255.255.192 | Yes            |
| R2          | G0/0      | 192.168.10.193 | 255.255.255.224 | Yes            |
| R2          | G0/1      | 1.1.1.5        | 255.255.255.252 |                |
| R2          | G0/2      | 1.1.1.2        | 255.255.255.252 |                |
| R3          | G0/0      | 1.1.1.6        | 255.255.255.252 |                |
| R3          | G0/1      | 192.168.10.1   | 255.255.255.128 | Yes            |

## DHCP Configuration

Each router provides DHCP services using only the last 10 available IP addresses in their respective subnets.

|        |                       |                |
| ------ | --------------------- | -------------- |
| Router | DHCP Scope (IP Range) | Lease Duration |
| R1     | 192.168.10.180-190    | 7 days         |
| R2     | 192.168.10.212-222    | 7 days         |
| R3     | 192.168.10.116-126    | 7 days         |

## SSH Configuration

SSH is configured on all routers and switches for secure remote access.

|         |          |          |                       |
| ------- | -------- | -------- | --------------------- |
| Device  | Username | Password | Authentication Method |
| Router1 | admin    | cisco    | Password/Key-based    |
| Router2 | admin    | cisco    | Password/Key-based    |
| Router3 | admin    | cisco    | Password/Key-based    |
| Switch1 | admin    | cisco    | Password/Key-based    |
| Switch2 | admin    | cisco    | Password/Key-based    |
| Switch3 | admin    | cisco    | Password/Key-based    |

## Testing and Verification

|                            |                                |               |
| -------------------------- | ------------------------------ | ------------- |
| Test Description           | Expected Result                | Actual Result |
| PCs obtain DHCP IP address | Successful IP lease assignment | Yes           |
| SSH into routers/switches  | Secure login successful        | Yes           |
| Ping between PCs           | Successful ICMP replies        | Yes           |

## Troubleshooting Notes

-  We had to add the routes on every HP computer using the command :
	- route add [IDNETWORK] mask [MASK] [IDHOSTHP] 
    



## References

- Cisco Official Documentation
    
- CCNA Study Guides and Resources
    

---

_Date of Documentation: YYYY-MM-DD_  
_Prepared by: Your Name_