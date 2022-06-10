#!/usr/bin/env bash

# clojure deps and clojure-lsp config
git clone https://github.com/dougllcooper/clojure-deps-edn ~/.config/clojure
git clone https://github.com/dougllcooper/clojure-lsp-config ~/.config/clojure-lsp

# spacemacs setup
git clone -b develop https://github.com/syl20bnr/spacemacs ~/.emacs.d

# themes for alacritty terminal
git clone https://github.com/eendroroy/alacritty-theme ~/software/alacritty-theme

# sbcl source code for sbcl code definitions
wget -O ~/software/sbcl-2.2.4-source.tar.bz2 http://prdownloads.sourceforge.net/sbcl/sbcl-2.2.4-source.tar.bz2\?download

# get syncthing to sync logseq desktop and android
wget -O ~/syncthing-linux-amd64-v1.20.2.tar.gz https://github.com/syncthing/syncthing/releases/download/v1.20.2/syncthing-linux-amd64-v1.20.2.tar.gz

# clojure source code for clojure deps.edn
git clone https://github.com/clojure/clojure ~/software/clojure-src

# mount data drive
mkdir ~/data
sudo mount /dev/disk/by-id/ata-ST2000LX001-1RG174_ZDZ78AEA-part2 ~/data
cp -r ~/data/dotfiles-backup/Documents ~
cp ~/data/dotfiles-backup/.config/token ~/.config
cp -r ~/data/wallpapers ~/.wallpapers
