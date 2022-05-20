# ~/myproject/shell.nix file
let
  pkgs = import <nixpkgs> {};
  unstable = import <nixos-unstable> {};
in
pkgs.mkShell {
  nativeBuildInputs = with pkgs; [
    unstable.clojure
    unstable.clj-kondo
    unstable.clojure-lsp
    adoptopenjdk-hotspot-bin-16
    unstable.emacs
  ];
}
