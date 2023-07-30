#!/usr/bin/zsh
# Luke's config for the Zoomer Shell

# Enable colors and change prompt:
autoload -U colors && colors # Load colors
# PS1="%B%{$fg[red]%}[%{$fg[yellow]%}%n%{$fg[green]%}@%{$fg[blue]%}%M %{$fg[magenta]%}%~%{$fg[red]%}]%{$reset_color%}$%b "
PS1="%B%{$fg[red]%}[%{$fg[yellow]%}%n %{$fg[magenta]%}%~%{$fg[red]%}]%{$reset_color%}$%b "
# PS1="%B%{$fg[red]%}[%{$fg[yellow]%}%~%{$fg[red]%}]%{$reset_color%}$%b "
# PS1="%B%{$fg[yellow]%}%~ %{$fg[magenta]%}%>> %{$reset_color%}$%b "
setopt autocd   # Automatically cd into typed directory.
stty stop undef # Disable ctrl-s to freeze terminal.
setopt interactive_comments
export TERM="xterm-256color"

# set env variables
export EDITOR="emacs"
export PAGER="less"
export XDG_CONFIG_HOME="$HOME/.config"
export PICO_SDK_PATH=/home/doug/code/raspberry-pi-pico/pico/pico-sdk
export PICO_EXAMPLES_PATH=/home/doug/code/raspberry-pi-pico/pico/pico-examples
export PICO_EXTRAS_PATH=/home/doug/code/raspberry-pi-pico/pico/pico-extras
export PICO_PLAYGROUND_PATH=/home/doug/code/raspberry-pi-pico/pico/pico-playground
#
# Setup for elixir/erlang
# . "$HOME/.asdf/asdf.sh"
# append completions to fpath
# fpath=(${ASDF_DIR}/completions $fpath)
# initialise completions with ZSH's compinit
# autoload -Uz compinit && compinit

# Set java home
export JAVA_HOME="/usr/lib/jvm/java-17-openjdk-amd64"

# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

# path to nvim binary
export PATH="$PATH:$HOME/software/nvim-linux64/bin"

# mercury language setup
export PATH="$PATH:/usr/local/mercury-22.01.6/bin"

# env variables set by spacemacs setup
export XDG_CONFIG_HOME=$HOME/.config
export XDG_DATA_HOME=$HOME/.local/share
export XDG_STATE_HOME=$HOME/.local/state
export XDG_CACHE_HOME=$HOME/.cache

# Set XDG location of Emacs Spacemacs configuration
# export SPACEMACSDIR="$HOME/.spacemacs.d"

# Path for ruby gem
export PATH="$PATH:$HOME/.local/share/gem/ruby/3.0.0/bin"

# setup path for roswell binaries
export PATH="$PATH:$HOME/.roswell/bin"

# Path for apache maven
export PATH="$PATH:$HOME/software/maven/bin"

# Path for nim
export PATH="$PATH:$HOME/.nimble/bin"

# Path for npm global installs
# export PATH="$PATH:$HOME/.npm-global/bin"

# move stuff out of home directory into subdirectories
# export GNUPGHOME="$HOME/.config/gnupg"
# export CABAL_DIR="$HOME/.config/cabal"

# History in cache directory:
HISTSIZE=10000000
SAVEHIST=10000000
HISTFILE=~/.cache/zsh/history

# FZF
export FZF_DEFAULT_COMMAND="rg --files --hidden --glob '!.git'"
export FZF_DEFAULT_OPTS="--height=40% --layout=reverse --border --margin=1 --padding=1"

# for vagrant
# export VAGRANT_DEFAULT_PROVIDER=libvirt

# add nix_path
# export NIX_PATH="$HOME/.nix-defexpr/channels:/nix/var/nix/profiles/per-user/root/channels${NIX_PATH:+:$NIX_PATH}"

# setup for nvm
# export NVM_DIR="$HOME/.config/nvm"
# [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
# [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# add JAVA_PATH for nixos only
# export JAVA_HOME="$(readlink -e $(type -p javac) | sed -e 's/\/bin\/javac//g')"
# export JAVA_SRC="$(readlink -e $(type -p javac) | sed -e 's/\/openjdk\/bin\/javac//g')"

# setup path for doom emacs
export PATH="$HOME/.config/emacs/bin:$PATH"

export PATH="$PATH:$HOME/.local/bin"

# setup for direnv
# eval "$(direnv hook zsh)"

# Basic auto/tab complete:
autoload -U compinit
zstyle ':completion:*' menu select
zmodload zsh/complist
compinit
_comp_options+=(globdots) # Include hidden files.

# manually install zsh-nvm plugin. Install nvm automatically.
source ~/src/zsh-nvm/zsh-nvm.plugin.zsh

# vi mode
bindkey -v
export KEYTIMEOUT=1

# Use vim keys in tab complete menu:
bindkey -M menuselect 'h' vi-backward-char
bindkey -M menuselect 'k' vi-up-line-or-history
bindkey -M menuselect 'l' vi-forward-char
bindkey -M menuselect 'j' vi-down-line-or-history
bindkey -v '^?' backward-delete-char

# Change cursor shape for different vi modes.
function zle-keymap-select() {
    case $KEYMAP in
        vicmd) echo -ne '\e[1 q' ;;        # block
        viins | main) echo -ne '\e[5 q' ;; # beam
    esac
}
zle -N zle-keymap-select
zle-line-init() {
    zle -K viins # initiate `vi insert` as keymap (can be removed if `bindkey -V` has been set elsewhere)
    echo -ne "\e[5 q"
}
zle -N zle-line-init
echo -ne '\e[5 q'                # Use beam shape cursor on startup.
preexec() { echo -ne '\e[5 q'; } # Use beam shape cursor for each new prompt.

# Use lf to switch directories and bind it to ctrl-o
lfcd() {
    tmp="$(mktemp)"
    lf -last-dir-path="$tmp" "$@"
    if [ -f "$tmp" ]; then
        dir="$(cat "$tmp")"
        rm -f "$tmp" >/dev/null
        [ -d "$dir" ] && [ "$dir" != "$(pwd)" ] && cd "$dir"
    fi
}

bindkey '^[[3~' delete-char

# Edit line in vim with ctrl-e:
autoload edit-command-line
zle -N edit-command-line
bindkey '^e' edit-command-line

# zsh theme
ZSH_THEME="ys"

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git
	zsh-syntax-highlighting
	zsh-autosuggestions
	zsh-history-substring-search	
)
fpath+=${ZSH_CUSTOM:-${ZSH:-~/.oh-my-zsh}/custom}/plugins/zsh-completions/src 

source $ZSH/oh-my-zsh.sh

# source token
source "$HOME/.config/token"

# alias for dofiles git backup
# config config --local status.showUntrackedFiles no
# Don't show untracked files
# alias config='git --git-dir=$HOME/dotfiles/ --work-tree=$HOME'                  # use instead of git
# alias clist='config ls-tree -r main --name-only'                                # list tracked files
# alias clistd='config ls-tree -d main --name-only'                               # list tracked directories
# alias clistt='config ls-tree -r -d main --name-only'                            # list tracked tree directories
# alias csublist="config config --file .gitmodules --name-only --get-regexp path" # list submodules

# aliases
alias ls="ls -haN --color=always --group-directories-first"
alias ll="ls -halN --color=always --group-directories-first"

# convenience
alias sl="ls"
alias cls="clear; ls"
alias cd..="cd .."
alias cd...="cd ../.."
alias cd....="cd ../../.."
# alias sbcl="rlwrap sbcl"

# emacs & vim
#alias emacs="emacsclient -c -F \"((fullscreen . maximized))\""
#alias em="emacsclient -c -F \"((fullscreen . maximized))\""
# alias em="devour emacsclient -c -a 'emacs'"
#alias emr="systemctl restart --user emacs.service"
#alias vi="emacsclient -c -F \"((fullscreen . maximized))\""
#alias vim="emacsclient -c -F \"((fullscreen . maximized))\""
#alias nvim="emacsclient -c -F \"((fullscreen . maximized))\""
alias em="emacs"
alias vim="nvim"
alias vi="nvim"
alias v="nvim"

# applications
# alias obsidian="devour obsidian"
# alias ob="devour obsidian"

# global aliases
alias -g G="| egrep --color=always"
alias -g L="| less"

# doom emacs aliases
alias doomdoc="~/.emacs.d/bin/doom doctor"
alias doomsync="~/.emacs.d/bin/doom sync"
alias doomupgrade="~/.emacs.d/bin/doom upgrade"

# nix aliases
# alias nixConf="sudo -E nvim /etc/nixos/configuration.nix"
# alias nixReb="sudo nixos-rebuild switch"
# alias nixse="nix-env -qasP --description"
# alias nixUpdateD="sudo nix-channel --update --dry-run; nix-channel --update --dry-run; nix-env -u --always --dry-run"
# alias nixUpdate="sudo nix-channel --update; nix-channel --update; nix-env -u --always; systemctl daemon-reload; systemctl restart nix-daemon"
# alias nixUpdateClean="sudo nix-channel --update; nix-channel --update; nix-env -u --always; sudo rm /nix/var/nix/gcroots/auto/*; nix-collect-garbage -d; sudo nix-collect-garbage -d; systemctl daemon-reload; systemctl restart nix-daemon"

# mount /dev/sdb2 for data
# alias data="sudo mount /dev/disk/by-id/ata-ST2000LX001-1RG174_ZDZ78AEA-part2 $HOME/data"

# aliases for opensuse
# alias z="sudo zypper"
# alias zin="sudo zypper install"
# alias zse="zypper search"
# alias zdup="sudo zypper dup --allow-vendor-change"

# >>> juliaup initialize >>>

# !! Contents within this block are managed by juliaup !!

path=('/home/doug/.juliaup/bin' $path)
export PATH

# <<< juliaup initialize <<<

# opam configuration
[[ ! -r /home/doug/.opam/opam-init/init.zsh ]] || source /home/doug/.opam/opam-init/init.zsh  > /dev/null 2> /dev/null

#[ -f "/home/doug/.ghcup/env" ] && source "/home/doug/.ghcup/env" # ghcup-env

[ -f "/home/doug/.ghcup/env" ] && source "/home/doug/.ghcup/env" # ghcup-env
