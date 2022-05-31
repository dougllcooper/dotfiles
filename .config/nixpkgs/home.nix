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

  # java
  # programs.java = {
  #  enable = true;
  # };

  # test overlays

   # don't work
   # nixpkgs.overlays = [ (self: super: {
   #  gerbil = super.gerbil.overrideAttrs (old: {
   #    src = super.fetchFromGitHub {
   #      owner = "vyzo";
   #      repo = "gerbil";
   #      rev = "96025a9c0301d03147ef409f5cc568a00d9f05d4";
   #      # If you don't know the hash, the first time, set:
   #      # sha256 = "0000000000000000000000000000000000000000000000000000";
   #      # then nix will fail the build with such an error message:
   #      # hash mismatch in fixed-output derivation '/nix/store/m1ga09c0z1a6n7rj8ky3s31dpgalsn0n-source':
   #      # wanted: sha256:0000000000000000000000000000000000000000000000000000
   #      # got:    sha256:173gxk0ymiw94glyjzjizp8bv8g72gwkjhacigd1an09jshdrjb4
   #      sha256 = "9SS9CrTv+XzQf3W/DyTSH47wYM0qOrrBu4lMGNQE6vE=";

   #    };
   #  });
   #  }
   #  )];


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
    gerbil
  ];
}
