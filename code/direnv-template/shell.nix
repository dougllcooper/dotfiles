# ~/myproject/shell.nix file
let
  pkgs = import <nixpkgs> {};
  unstable = import <nixos-unstable> {};
in
pkgs.mkShell {
  nativeBuildInputs = with pkgs; [
    nodejs
    nodePackages.yarn
    nodePackages.js-beautify
    unstable.sbcl
  ];
}
