;;; lang/ocaml/config.el -*- lexical-binding: t; -*-

;;
;;; Packages

(when (modulep! +lsp)
  (add-hook! '(tuareg-mode-local-vars-hook
               reason-mode-local-vars-hook)
             :append #'lsp!))


(after! tuareg
  ;; tuareg-mode has the prettify symbols itself
  (set-ligatures! 'tuareg-mode :alist
    (append tuareg-prettify-symbols-basic-alist
            tuareg-prettify-symbols-extra-alist))
  ;; harmless if `prettify-symbols-mode' isn't active
  (setq tuareg-prettify-symbols-full t)

  ;; Use opam to set environment
  (setq tuareg-opam-insinuate t)
  (tuareg-opam-update-env (tuareg-opam-current-compiler))

  (setq-hook! 'tuareg-mode-hook
    comment-line-break-function #'+ocaml/comment-indent-new-line)

  ;; (map! :localleader
  ;;       :map tuareg-mode-map
  ;;       "a" #'tuareg-find-alternate-file)

  (use-package! utop
    :when (modulep! :tools eval)
    :hook (tuareg-mode-local-vars . +ocaml-init-utop-h)
    :init
    (set-repl-handler! 'tuareg-mode #'utop)
    (set-eval-handler! 'tuareg-mode #'utop-eval-region)
    (defun +ocaml-init-utop-h ()
      (when (executable-find "utop")
        (utop-minor-mode)))
    :config
    (set-popup-rule! "^\\*utop\\*" :quit nil)))


(use-package! merlin
  :unless (modulep! +lsp)
  :hook (tuareg-mode-local-vars . +ocaml-init-merlin-h)
  :init
  (defun +ocaml-init-merlin-h ()
    "Activate `merlin-mode' if the ocamlmerlin executable exists."
    (when (executable-find "ocamlmerlin")
      (merlin-mode)))

  (after! tuareg
    (set-company-backend! 'tuareg-mode 'merlin-company-backend)
    (set-lookup-handlers! 'tuareg-mode :async t
      :definition #'merlin-locate
      :references #'merlin-occurrences
      :documentation #'merlin-document))
  :config
  (setq merlin-completion-with-doc t)

  (map! :localleader
        :map tuareg-mode-map
        "t" #'merlin-type-enclosing)

  (use-package! flycheck-ocaml
    :when (modulep! :checkers syntax)
    :hook (merlin-mode . +ocaml-init-flycheck-h)
    :config
    (defun +ocaml-init-flycheck-h ()
      "Activate `flycheck-ocaml`"
      ;; Disable Merlin's own error checking
      (setq merlin-error-after-save nil)
      ;; Enable Flycheck checker
      (flycheck-ocaml-setup)))

  (use-package! merlin-eldoc
    :hook (merlin-mode . merlin-eldoc-setup))

  (use-package! merlin-iedit
    :when (modulep! :editor multiple-cursors)
    :defer t
    :init
    (map! :map tuareg-mode-map
          :v "R" #'merlin-iedit-occurrences))

  (use-package! merlin-imenu
    :when (modulep! :emacs imenu)
    :hook (merlin-mode . merlin-use-merlin-imenu)))


(use-package! ocp-indent
  ;; must be careful to always defer this, it has autoloads that adds hooks
  ;; which we do not want if the executable can't be found
  :hook (tuareg-mode-local-vars . +ocaml-init-ocp-indent-h)
  :config
  (defun +ocaml-init-ocp-indent-h ()
    "Run `ocp-setup-indent', so long as the ocp-indent binary exists."
    (when (executable-find "ocp-indent")
      (ocp-setup-indent))))


(use-package! ocamlformat
  :when (modulep! :editor format)
  :commands ocamlformat
  :hook (tuareg-mode-local-vars . +ocaml-init-ocamlformat-h)
  :config
  (set-formatter! 'ocamlformat #'ocamlformat
    :modes '(caml-mode tuareg-mode))
  ;; TODO Fix region-based formatting support
  (defun +ocaml-init-ocamlformat-h ()
    (setq +format-with 'ocp-indent)
    (when (and (executable-find "ocamlformat")
               (locate-dominating-file default-directory ".ocamlformat"))
      (when buffer-file-name
        (let ((ext (file-name-extension buffer-file-name t)))
          (cond ((equal ext ".eliom")
                 (setq-local ocamlformat-file-kind 'implementation))
                ((equal ext ".eliomi")
                 (setq-local ocamlformat-file-kind 'interface)))))
      (setq +format-with 'ocamlformat))))

;; Tree sitter
(eval-when! (modulep! +tree-sitter)
  (add-hook! 'tuareg-mode-local-vars-hook #'tree-sitter!))

(defun spacemacs/utop-eval-phrase-and-go ()
      "Send phrase to REPL and evaluate it and switch to the REPL in
`insert state'"
      (interactive)
      (utop-eval-phrase)
      (utop)
      (evil-insert-state))

(defun spacemacs/utop-eval-buffer-and-go ()
      "Send buffer to REPL and evaluate it and switch to the REPL in
`insert state'"
      (interactive)
      (utop-eval-buffer)
      (utop)
      (evil-insert-state))

(defun spacemacs/utop-eval-region-and-go (start end)
      "Send region to REPL and evaluate it and switch to the REPL in
`insert state'"
      (interactive "r")
      (utop-eval-region start end)
      (utop)
      (evil-insert-state))

(map! (:localleader
      :map tuareg-mode-map
      "a" #'tuareg-find-alternate-file
      "'" #'utop
     (:prefix ("i" . "insert")
      "a" #'dune-insert-alias-form
      "c" #'dune-insert-copyfiles-form
      "d" #'dune-insert-ignored-subdirs-form
      "e" #'dune-insert-executable-form
      "i" #'dune-insert-install-form
      "l" #'dune-insert-library-form
      "m" #'dune-insert-menhir-form
      "p" #'dune-insert-ocamllex-form
      "r" #'dune-insert-rule-form
      "t" #'dune-insert-tests-form
      "v" #'dune-insert-env-form
      "x" #'dune-insert-executables-form
      "y" #'dune-insert-ocamlyacc-form)
     (:prefix ("g" . "goto")
      :desc "Follow link" "l" #'ocaml-link-goto
      :desc "Open module" "o" #'ocaml-open-module
      :desc "Close module" "c" #'ocaml-close-module)
     (:prefix ("c" . "compile/check")
      :desc "Compile" "c" #'compile)
     (:prefix ("h" . "help")
      :desc "Browse manual" "m" #'tuareg-browse-manual
      :desc "Browse library" "l" #'tuareg-browse-library)
     (:prefix ("t" . "test")
      "P" #'dune-promote
      "p" #'dune-runtest-and-promote)
     (:prefix ("e" . "eval")
      :desc "eval buffer" "b" #'utop-eval-buffer
      :desc "eval buffer & go" "B" #'spacemacs/utop-eval-buffer-and-go
      :desc "eval phrase" "p" #'utop-eval-phrase
      :desc "eval phrase & go" "P" #'spacemacs/utop-eval-phrase-and-go
      :desc "eval region" "r" #'utop-eval-region
      :desc "eval region & go" "R" #'spacemacs/utop-eval-region-and-go)
))
