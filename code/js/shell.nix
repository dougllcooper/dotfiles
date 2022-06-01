# ~/myproject/shell.nix file
let
  pkgs = import <nixpkgs> {};
  unstable = import <nixos-unstable> {};
in
pkgs.mkShell {
  nativeBuildInputs = with pkgs; [
    nodejs-18_x
    nodePackages.yarn
    nodePackages.stylelint
    nodePackages.js-beautify
    nodePackages.prettier
  ];
}
