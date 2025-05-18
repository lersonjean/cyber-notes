
Procedure de validation
Est ce que ca fonctionne?



1. Subnetting

| Name | Hosts Needed | Hosts Available | Network Address | Slash | Mask            | Usable Range                | Broadcast    |
| ---- | ------------ | --------------- | --------------- | ----- | --------------- | --------------------------- | ------------ |
| G0/1 | 63           | 126             | 172.20.0.0      | /25   | 255.255.255.128 | 172.20.0.1 - 172.20.0.126   | 172.20.0.127 |
| G0/0 | 40           | 62              | 172.20.0.128    | /26   | 255.255.255.192 | 172.20.0.129 - 172.20.0.190 | 172.20.0.191 |

1. Faire la topologie sur draw.io
2. Documenter le branchement des cables
3. Documenter les adresses IP's
4. Config R1/S1
	1. config de base + secu
	2. SSH + TELNET
	3. R1 derniere IP
	4. Sauvegarde R1 et S1 -> TFTPD
5. 
6. 