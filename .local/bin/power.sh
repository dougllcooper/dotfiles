#!/bin/bash

# Simple script to handle a DIY shutdown menu. When run you should see a bunch of options (shutdown, reboot etc.)
#
# Requirements:
# - rofi
# - systemd, but you can replace the commands for OpenRC or anything else
#
# Instructions:
# - Save this file as power.sh or anything
# - Give it exec priviledge, or chmod +x /path/to/power.sh
# - Run it

# chosen=$(echo -e "[Cancel]\nLogout\nShutdown\nReboot\nSuspend\nHibernate\nHybrid-sleep\nSuspend-then-hibernate" | dmenu -i)
# chosen=$(echo -e "[Cancel]\nLeave_DWM\nRenew_DWM\nShutdown\nReboot\nSuspend\nLock-Suspend" | dmenu -i)
chosen=$(echo -e "🚪 Leave dwm\n♻ Renew dwm\n🖥 Shutdown\n🔃 Reboot\n🐻 Suspend\n😴 Lock-Suspend" | dmenu -i)

# Info about some states are available here:
# https://www.freedesktop.org/software/systemd/man/systemd-sleep.conf.html#Description

if [[ $chosen = "🚪 Leave dwm" ]]; then
	kill -TERM $(pgrep -u $USER "\bdwm$")
elif [[ $chosen = "♻ Renew dwm" ]]; then
	kill -HUP $(pgrep -u $USER "\bdwm$")
elif [[ $chosen = "🖥 Shutdown" ]]; then
	systemctl poweroff
elif [[ $chosen = "🔃 Reboot" ]]; then
	systemctl reboot
elif [[ $chosen = "🐻 Suspend" ]]; then
	systemctl suspend
elif [[ $chosen = "😴 Lock-Suspend" ]]; then
	i3lock -e -f -i /home/data/.wallpaper/lotus_symbol.png && systemctl suspend
fi
