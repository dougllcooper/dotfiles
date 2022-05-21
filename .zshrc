

# Enable colors and change prompt:
autoload -U colors && colors	# Load colors
# PS1="%B%{$fg[red]%}[%{$fg[yellow]%}%n%{$fg[green]%}@%{$fg[blue]%}%M %{$fg[magenta]%}%~%{$fg[red]%}]%{$reset_color%}$%b "
PS1="%B%{$fg[red]%}[%{$fg[yellow]%}%n %{$fg[magenta]%}%~%{$fg[red]%}]%{$reset_color%}$%b "
# PS1="%B%{$fg[red]%}[%{$fg[yellow]%}%~%{$fg[red]%}]%{$reset_color%}$%b "
# PS1="%B%{$fg[yellow]%}%~ %{$fg[magenta]%}%>> %{$reset_color%}$%b "
setopt autocd		# Automatically cd into typed directory.
stty stop undef		# Disable ctrl-s to freeze terminal.
setopt interactive_comments

# set env variables
export EDITOR="emacs"
export PAGER="less"
export XDG_CONFIG_HOME="$HOME/.config"

# move stuff out of home directory into subdirectories
export GNUPGHOME="$HOME/.config/gnupg"
# export CABAL_DIR="$HOME/.config/cabal"

# History in cache directory:
HISTSIZE=10000000
SAVEHIST=10000000
HISTFILE=~/.cache/zsh/history

# add nix_path
# export NIX_PATH="$HOME/.nix-defexpr/channels:/nix/var/nix/profiles/per-user/root/channels${NIX_PATH:+:$NIX_PATH}"

# add JAVA_PATH for nixos only
# export JAVA_HOME="$(readlink -e $(type -p javac) | sed -e 's/\/bin\/javac//g')"
# export JAVA_SRC="$(readlink -e $(type -p javac) | sed -e 's/\/openjdk\/bin\/javac//g')"

# add for direnv for nix-shell environments
# eval "$(direnv hook zsh)"

export PATH="$PATH:$HOME/.local/bin"

# manual install of zsh-completions
fpath=($HOME/code/zsh-completions/src $fpath)

# Basic auto/tab complete:
autoload -U compinit
zstyle ':completion:*' menu select
zmodload zsh/complist
compinit
_comp_options+=(globdots)		# Include hidden files.

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
function zle-keymap-select () {
    case $KEYMAP in
        vicmd) echo -ne '\e[1 q';;      # block
        viins|main) echo -ne '\e[5 q';; # beam
    esac
}
zle -N zle-keymap-select
zle-line-init() {
    zle -K viins # initiate `vi insert` as keymap (can be removed if `bindkey -V` has been set elsewhere)
    echo -ne "\e[5 q"
}
zle -N zle-line-init
echo -ne '\e[5 q' # Use beam shape cursor on startup.
preexec() { echo -ne '\e[5 q' ;} # Use beam shape cursor for each new prompt.

# Use lf to switch directories and bind it to ctrl-o
lfcd () {
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
autoload edit-command-line; zle -N edit-command-line
bindkey '^e' edit-command-line

# Load autosuggestions
source /usr/share/zsh-autosuggestions/zsh-autosuggestions.zsh

# Load syntax highlighting
source /usr/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

# source token
source "$HOME/.config/token"

# alias for dofiles git backup
# config config --local status.showUntrackedFiles no
# Don't show untracked files
alias config='git --git-dir=$HOME/dotfiles/ --work-tree=$HOME' # use instead of git
alias clist='config ls-tree -r main --name-only' # list tracked files
alias clistd='config ls-tree -d main --name-only' # list tracked directories
alias clistt='config ls-tree -r -d main --name-only' # list tracked tree directories
alias csublist="config config --file .gitmodules --name-only --get-regexp path" # list submodules


# aliases
alias ls="ls -haN --color=always --group-directories-first"
alias ll="ls -halN --color=always --group-directories-first"

# convenience
alias sl="ls"
alias cls="clear; ls"
alias cd..="cd .."
alias ...="cd ../.."
alias ....="cd ../../.."
alias sbcl="rlwrap sbcl"

# emacs & vim
# alias emacs="devour emacsclient -c -a 'emacs'"
# alias em="devour emacsclient -c -a 'emacs'"
# alias remacs="systemctl restart --user emacs.service"
# alias vim="nvim"
# alias vi="vim"

# applications
# alias obsidian="devour obsidian"
# alias ob="devour obsidian"

# global aliases
alias -g G="| egrep --color=always"
alias -g L="| less"

# doom emacs aliases
# alias doomdoc="~/.emacs.d/bin/doom doctor"
# alias doomsync="~/.emacs.d/bin/doom sync"
# alias doomupgrade="~/.emacs.d/bin/doom upgrade"

# nix aliases
# alias nixConf="sudo -E nvim /etc/nixos/configuration.nix"
# alias nixReb="sudo nixos-rebuild switch"
# alias nixse="nix-env -qasP --description"
# alias nixUpdateD="sudo nix-channel --update --dry-run; nix-channel --update --dry-run; nix-env -u --always --dry-run"
# alias nixUpdate="sudo nix-channel --update; nix-channel --update; nix-env -u --always; systemctl daemon-reload; systemctl restart nix-daemon"
# alias nixUpdateClean="sudo nix-channel --update; nix-channel --update; nix-env -u --always; sudo rm /nix/var/nix/gcroots/auto/*; nix-collect-garbage -d; systemctl daemon-reload; systemctl restart nix-daemon"

# mount /dev/sdb2 for data
alias data="sudo mount /dev/disk/by-id/ata-ST2000LX001-1RG174_ZDZ78AEA-part2 $HOME/data"
