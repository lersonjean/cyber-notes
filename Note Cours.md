

192.168.255.254:8006

PVE 10 - Network 
Create Linux Bridge
Name vmbr1
Bridge Port eno2np1
IPv4 10.10.7.20/24
Gateway 10.10.7.253

Shell - Script 
https://community-scripts.github.io/ProxmoxVE/scripts?id=post-pve-install

bash -c "$(curl -fsSL https://raw.githubusercontent.com/community-scripts/ProxmoxVE/main/tools/pve/post-pve-install.sh)"

Create VM Arch Linux



archinstall

filesystem ext4
KDE plasma
audio pipewire




linux zen pour gamer
linux lts stabilite
linux hardened renforce niveau secu


sudo pacman -S qemu-guest-agent

Yes

sudo systemctl start qemu-guest-agent
sudo systemctl status qemu-guest-agent
check if the agent is running in green

sudo pacman -S spice-vdagent xf86-video-qxl
sudo systemctl start spice-vdagent 


UDP
Pas de controle de fluxm ne va pas se soucier de quoi que ce soit 
Il va oublier tout direct
UDps 

