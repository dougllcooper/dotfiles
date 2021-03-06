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
chosen=$(echo -e "šŖ Leave dwm\nā» Renew dwm\nš„ Shutdown\nš Reboot\nš» Suspend\nš“ Lock-Suspend" | dmenu -i)

# Info about some states are available here:
# https://www.freedesktop.org/software/systemd/man/systemd-sleep.conf.html#Description

if [[ $chosen = "šŖ Leave dwm" ]]; then
	kill -TERM $(pgrep -u $USER "\bdwm$")
elif [[ $chosen = "ā» Renew dwm" ]]; then
	kill -HUP $(pgrep -u $USER "\bdwm$")
elif [[ $chosen = "š„ Shutdown" ]]; then
	systemctl poweroff
elif [[ $chosen = "š Reboot" ]]; then
	systemctl reboot
elif [[ $chosen = "š» Suspend" ]]; then
	systemctl suspend
elif [[ $chosen = "š“ Lock-Suspend" ]]; then
	i3lock -e -f -i /home/data/.wallpaper/lotus_symbol.png && systemctl suspend
fi
