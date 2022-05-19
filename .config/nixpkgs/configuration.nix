# Edit this configuration file to define what should be installed on
# your system.  Help is available in the configuration.nix(5) man page
# and in the NixOS manual (accessible by running ‘nixos-help’).

{ config, pkgs, ... }:

{
  imports = [ # Include the results of the hardware scan.
    ./hardware-configuration.nix
  ];

  # Use the systemd-boot EFI boot loader.
  boot.loader.systemd-boot.enable = true;
  boot.loader.efi.canTouchEfiVariables = true;

  nixpkgs.config.allowUnfree = true;
  nixpkgs.config.joypixels.acceptLicense = true;

  networking.hostName = "ScreamingMonkey"; # Define your hostname.
  # networking.wireless.enable = true;  # Enables wireless support via wpa_supplicant.
  networking.networkmanager.enable = true;

  # Set your time zone.
  time.timeZone = "America/Toronto";

  # setup docker
  virtualisation.docker.enable = true;

  # needed for store VSCode auth token
  services.gnome.gnome-keyring.enable = true;

  # setup flatpak
  services.flatpak.enable = true;
  xdg.portal.enable = true;
  xdg.portal.extraPortals = [ pkgs.xdg-desktop-portal-gtk ];

  # The global useDHCP flag is deprecated, therefore explicitly set to false here.
  # Per-interface useDHCP will be mandatory in the future, so this generated config
  # replicates the default behaviour.
  networking.useDHCP = false;
  networking.interfaces.eno1.useDHCP = true;
  networking.interfaces.wlp3s0.useDHCP = true;

  # Configure network proxy if necessary
  # networking.proxy.default = "http://user:password@proxy:port/";
  # networking.proxy.noProxy = "127.0.0.1,localhost,internal.domain";

  # Select internationalisation properties.
  i18n.defaultLocale = "en_US.UTF-8";
  console = {
    font = "Lat2-Terminus16";
    keyMap = "us";
  };

  # Enable the X11 windowing system.
  # Enable xfce as desktop manager.
  # Enable xmonad as window manager.
  # services.xserver = {
  #   enable = true;
  #   desktopManager = {
  #     xterm.enable = false;
  #     xfce = {
  #       enable = true;
  #       #      noDesktop = true;
  #       enableXfwm = false;
  #     };
  #   };
  #   windowManager = {
  #     xmonad = {
  #       enable = true;
  #       enableContribAndExtras = true;
  #       extraPackages = haskellPackages: [
  #         haskellPackages.xmonad-contrib
  #         haskellPackages.xmonad-extras
  #         haskellPackages.xmonad
  #       ];
  #     };
  #   };
  #   displayManager.lightdm.enable = true;
  #   displayManager.defaultSession = "xfce+xmonad";
  # };
  # Enable xfce as desktop manager.
  # Enable i3 as window manager.
  # services.xserver = {
  #   enable = true;
  #   desktopManager = {
  #     default = "xfce";
  #     xterm.enable = false;
  #     xfce = {
  #       enable = true;
  #       noDesktop = true;
  #       enableXfwm = false;
  #     };
  #   };
  #   windowManager.i3.enable = true;
  #   windowManager.i3.package = pkgs.i3-gaps;
  # };

  services.xserver = {
    enable = true;
    desktopManager = {
      xterm.enable = false;
      xfce.enable = true;
    };
    displayManager.lightdm.enable = true;
    displayManager.defaultSession = "xfce";
  };

  # Configure keymap in X11
  services.xserver.layout = "us";
  services.xserver.xkbOptions = "eurosign:e";

  # Enable CUPS to print documents.
  services.printing.enable = true;

  # Enable sound.
  sound.enable = true;
  hardware.pulseaudio.enable = true;
  # if you use pulseaudio
  nixpkgs.config.pulseaudio = true;

  # set vim default editor
  # programs.neovim.defaultEditor = true;
  # services.emacs.enable = true;
  # services.emacs.defaultEditor = true;

  # Enable touchpad support (enabled default in most desktopManager).
  services.xserver.libinput.enable = true;

  # enable zsh system wide and plugins
  programs.zsh = {
    enable = true;
    autosuggestions.enable = true;
    enableCompletion = true;
    syntaxHighlighting.enable = true;
  };

  # Define a user account. Don't forget to set a password with ‘passwd’.
  users.users.doug = {
    isNormalUser = true;
    extraGroups = [
      "wheel"
      "networkmanager"
      "audio"
      "video"
      "docker"
    ]; # Enable ‘sudo’ for the user.
    shell = pkgs.zsh;
  };

  # List packages installed in system profile. To search, run:
  # $ nix search wget
  environment.systemPackages = with pkgs; [
    # editors
    vim

    # applications, browsers, chat, torrents, internet stuff
    firefox

    # terminals, utilities
    alacritty
    wget
    curl
    git
    htop
    shellcheck
    file
    tree

    # xorg and xwindows stuff
    xfce.xfce4-whiskermenu-plugin
    xfce.xfce4-clipman-plugin

    # system stuff
    alsa-utils
  ];

  # fonts
  fonts.fonts = with pkgs; [
    source-sans
    joypixels
    corefonts
    mononoki
    font-awesome
    fira-code
    source-code-pro
    iosevka
    libre-baskerville
    roboto
  ];

  # Some programs need SUID wrappers, can be configured further or are
  # started in user sessions.
  programs.mtr.enable = true;
  programs.gnupg.agent = {
    enable = true;
    enableSSHSupport = true;
  };

  # List services that you want to enable:

  # Enable the OpenSSH daemon.
  services.openssh.enable = true;

  # setup alternate location to save config for empty boot

  # environment.etc = {
  #   "NetworkManager/system-connections".source =
  #     "/state/etc/NetworkManager/system-connections/";
  #   "ssh/ssh_host_ed25519_key".source = "/state/etc/ssh/ssh_host_ed25519_key";
  #   "ssh/ssh_host_ed25519_key.pub".source =
  #     "/state/etc/ssh/ssh_host_ed25519_key.pub";
  #   "ssh/ssh_host_rsa_key.pub".source = "/state/etc/ssh/ssh_host_rsa_key.pub";
  #   "ssh/ssh_host_rsa_key".source = "/state/etc/ssh/ssh_host_rsa_key";
  #   "resolv.conf".source = "/state/etc/resolv.conf";
  #   "group".source = "/state/etc/group";
  #   "passwd".source = "/state/etc/passwd";
  #   "shadow".source = "/state/etc/shadow";
  #   "subgid".source = "/state/etc/subgid";
  #   "subuid".source = "/state/etc/subuid";
  #   # "sudoers".source = "/state/etc/sudoers";
  # };

  # # save config for flatpak
  # systemd.tmpfiles.rules = [
  #   "L /var/lib/flatpak - - - - /state/var/lib/flatpak"

  # # Open ports in the firewall.
  # networking.firewall.allowedTCPPorts = [ ... ];
  # networking.firewall.allowedUDPPorts = [ ... ];
  # Or disable the firewall altogether.
  # networking.firewall.enable = false;

  # This value determines the NixOS release from which the default
  # settings for stateful data, like file locations and database versions
  # on your system were taken. It‘s perfectly fine and recommended to leave
  # this value at the release version of the first install of this system.
  # Before changing this value read the documentation for this option
  # (e.g. man configuration.nix or on https://nixos.org/nixos/options.html).
  system.stateVersion = "21.11"; # Did you read the comment?

}
