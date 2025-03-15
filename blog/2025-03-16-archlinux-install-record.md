---
title: Arch Linux 安装记录 2025.03.16 - On aigo u357 with ventoy
authors: [xpe-online]
tags: [archlinux]
---

这是我第不知道多少次安装archlinux了，尝试ventoy与archlinux共存失败过很多次，最终决定尝试在安装完后从ventoy启动archlinux的引导文件

# 安装 Ventoy

本意是作为维护与折腾用的U盘，所以安装 Edgeless 的同时安装 Ventoy
117G的U盘，我选择预留100G，剩下的17G给Ventoy的EFI分区与Ventoy分区等

安装完毕，将我存着的Windows_11_23h2，FirPE，gparted和clonezilla的iso放进Ventoy分区
从archlinux.org下载最新的archlinux-2025.03.01-x86_64.iso（选择了ustc镜像源，本来是用bfsu的，但是最近感觉变慢了）并放入ventoy分区

重启电脑

进入ventoy界面，选择archlinux的iso文件，从grub2启动

# 安装 Arch Linux
`fdisk -l`

`cfdisk /dev/sda`

在100G里分配1G作为EFI与boot分区，分配40G为Linux filesystem（根目录所用分区）

Write Quit

`mkfs.ext4 /dev/sda4`

`mkfs.fat -F 32 /dev/sda3`

`mount /dev/sda4 /mnt`

`mount --mkdir /dev/sda3 /mnt/boot`

`vim /etc/pacman.d/mirrorlist`


删除所有其他源，添加一行

`Server = https://mirrors.ustc.edu.cn/archlinux/$repo/os/$arch`

`!wq`


`iwctl`

`station wlan0 connect <我的无线网络_5G>`

`<wlan password>`

`pacman -Sy`

`pacstrap -K /mnt base linux linux-firmware dhcpcd iwd vim yazi base-devel`

`genfstab -U /mnt > /mnt/etc/fstab`


`arch-chroot /mnt`

`ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime`

`timedatectl set-local-rtc 0`

`hwclock --systohc`

`timedatectl`

`hwclock --show`


`vim /etc/locale.gen`

`#en_US.UTF-8 UTF-8`

改为

`en_US.UTF-8 UTF_8`

`!wq`


`locale-gen`

`vim /etc/locale.conf`

`LANG=en_US.UTF-8`

`!wq`


`vim /etc/hostname`

`ArchToGo-snow`

`!wq`


`passwd`

`<root@ArchToGo-snow password>`


`pacman -S grub efibootmgr os-prober`


`grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB --removable` 

注：--remove参数能让grub在其他设备上被找到，GRUB 将被安装到/boot/efi/EFI/BOOT/BOOTX64.EFI


`grub-mkconfig -o /boot/grub/grub.cfg`

`vim /etc/default/grub`

`#GRUB_DISABLE_OS_PROBER=false`

改为

`GRUB_DISABLE_OS_PROBER=false`

`!wq`

`grub-mkconfig -o /boot/grub/grub.cfg`


`exit`

`umount -R /mnt`

`reboot`


# 配置 Arch Linux

在Ventoy界面按F2，找到EFI所在的分区，选择/boot/efi/EFI/BOOT/BOOTX64.EFI，也就是刚刚安装的grub

进入系统


进入root用户

`pacman -S sudo zsh`

`visudo`

`%wheel ALL=(ALL:ALL) ALL`

`!wq`


`useradd -m -G wheel -s zsh snow`

`passwd snow`

`<snow@ArchToGo-snow password>`


`pacman -S neovim noto-fonts noto-fonts-cjk noto-fonts-emoji noto-fonts-extra pipewire fastfetch hyprland hyprpaper waybar wofi dunst cliphist kitty`


`nvim /etc/pacman.conf`

`[archlinuxcn]`

`Server = https://mirrors.sustech.edu.cn/archlinuxcn/$arch`
`!wq

`pacman -Sy archlinuxcn-keyring`

`pacman -Syyu`


`pacman -S git clash-verge-rev ffmpeg scrcpy fcitx5-im fcitx5-rime rime-ice-git`


`git clone https://aur.archlinux.org/yay-bin.git`

`cd yay-bin`

`makepkg -si`


`yay -Sy`

`yay -S rime-flypy fcitx5-nord-pink`


`reboot`


使用snow@ArchToGo-snow登录

`nvim ~/.local/share/fcitx5/rime/`

`patch:`

`  schema_list:`

`    - schema: flypy`

`    - schema: rime-ice
`

hyprland等具体配置详见https://github.com/xpe-online/dotfiles
