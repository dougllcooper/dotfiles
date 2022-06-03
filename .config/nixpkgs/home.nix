{ config, pkgs, ... }:

let unstable = import <nixos-unstable> { };
in {
  # Home Manager needs a bit of information about you and the
  # paths it should manage.
  home.username = "doug";
  home.homeDirectory = "/home/doug";

  # This value determines the Home Manager release that your
  # configuration is compatible with. This helps avoid breakage
  # when a new Home Manager release introduces backwards
  # incompatible changes.
  #
  # You can update Home Manager without changing this value. See
  # the Home Manager release notes for a list of state version
  # changes in each release.
  home.stateVersion = "21.11";

  # Let Home Manager install and manage itself.
  programs.home-manager.enable = true;

  # git setup
  programs.git = {
    enable = true;
    userName = "Doug Cooper";
    userEmail = "dougllcooper@gmail.com";
    ignores = [ "*~" "\\#*\\#" ];
    extraConfig = {
      init.defaultBranch = "main";
      branch.autosetupmerge = "always";
    };
  };

 # installing software
  home.packages = with pkgs; [
    # applications, chat, torrents, internet stuff
    hexchat
    transmission-gtk
    gimp
    inkscape
    imagemagick
    deadbeef
    vlc
    libreoffice-fresh
    calibre
    graphviz
    treesheets
    virt-manager

    # utilities
    pandoc
    shellcheck
    file
    smartmontools
    gnuplot
    ispell
    scrot
    sqlite
    texlive.combined.scheme-medium
    killall
    clang
    devour
    direnv
    time
    jq
    rlwrap
    silver-searcher
    fzf
    unzip
    aspell
    aspellDicts.en
    xcape
    numlockx
    podman
    distrobox
    blueberry
    nitrogen
    picom
    rnix-lsp
    nixpkgs-fmt

    # emacs compatibility stuff
    ripgrep
    fd
    #nodejs-18_x
    #nodePackages.npm
    #nodePackages.stylelint
    #nodePackages.js-beautify
    #html-tidy
    nixfmt

    # development
    cmake
    gnumake
    python39
    python39Packages.pandocfilters
    python39Packages.pip
    python39Packages.setuptools
    python39Packages.grip
    python39Packages.cookiecutter
    jdk
    # unstable.clojure
    # unstable.clj-kondo
    # unstable.clojure-lsp
    direnv

    # xorg stuff
    xorg.xkill
    xorg.xprop
    xorg.xmodmap
    xdotool
    xclip
    volumeicon
    networkmanagerapplet
    pulsemixer

    # unstable stuff
    # unstable.zettlr
    neovim
    zotero
    sbcl
    emacs28NativeComp
    vscode
    unstable.logseq
    unstable.obsidian
  ];
}
