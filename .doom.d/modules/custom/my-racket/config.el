;;; lang/racket/config.el -*- lexical-binding: t; -*-

(after! projectile
  (add-to-list 'projectile-project-root-files "info.rkt"))


;;
;;; Packages

(use-package! racket-mode
  :mode "\\.rkt\\'"  ; give it precedence over :lang scheme
  :config
  (set-repl-handler! 'racket-mode #'+racket/open-repl)
  (set-lookup-handlers! '(racket-mode racket-repl-mode)
    :definition    #'+racket-lookup-definition
    :documentation #'+racket-lookup-documentation)
  (set-docsets! 'racket-mode "Racket")
  (set-ligatures! 'racket-mode
    :lambda  "lambda"
    :map     "map"
    :dot     ".")
  (set-rotate-patterns! 'racket-mode
    :symbols '(("#true" "#false")))

  (add-hook! 'racket-mode-hook
             #'rainbow-delimiters-mode
             #'highlight-quoted-mode)

  (when (modulep! +lsp)
    (add-hook 'racket-mode-local-vars-hook #'lsp! 'append))

  (when (modulep! +xp)
    (add-hook 'racket-mode-local-vars-hook #'racket-xp-mode)
    ;; Both flycheck and racket-xp produce error popups, but racket-xp's are
    ;; higher quality so disable flycheck's:
    (when (modulep! :checkers syntax)
      (add-hook! 'racket-xp-mode-hook
        (defun +racket-disable-flycheck-h ()
          (cl-pushnew 'racket flycheck-disabled-checkers)))))

  (unless (or (modulep! :editor parinfer)
              (modulep! :editor lispy))
    (add-hook 'racket-mode-hook #'racket-smart-open-bracket-mode))

  (defun doug/racket-test-with-coverage ()
      "Call `racket-test' with universal argument."
      (interactive)
      (racket-test t))

(defun doug/racket-run-and-switch-to-repl ()
      "Call `racket-run-and-switch-to-repl' and enable `insert state'."
      (interactive)
      (racket-run-and-switch-to-repl)
      (when (buffer-live-p (get-buffer racket-repl-buffer-name))
        ;; We don't need to worry about the first time the REPL is opened,
        ;; since the first time, insert state is automatically entered (since
        ;; it's registered as a REPL?).
        (with-current-buffer racket-repl-buffer-name
          (evil-insert-state))))

(defun doug/racket-send-last-sexp-focus ()
      "Call `racket-send-last-sexp' and switch to REPL buffer in `insert state'."
      (interactive)
      (racket-send-last-sexp)
      (racket-repl)
      (evil-insert-state))

(defun doug/racket-send-definition-focus ()
      "Call `racket-send-definition' and switch to REPL buffer in `insert state'."
      (interactive)
      (racket-send-definition)
      (racket-repl)
      (evil-insert-state))


(defun doug/racket-send-region-focus (start end)
      "Call `racket-send-region' and switch to REPL buffer in `insert state'."
      (interactive "r")
      (racket-send-region start end)
      (racket-repl)
      (evil-insert-state))

  (map! (:map racket-xp-mode-map
         [remap racket-doc]              #'racket-xp-documentation
         [remap racket-visit-definition] #'racket-xp-visit-definition
         [remap next-error]              #'racket-xp-next-error
         [remap previous-error]          #'racket-xp-previous-error)
        (:localleader
         :map racket-mode-map
          :desc "Start REPL"              "'" #'racket-repl
          :desc "Logger mode buffer"      "l" #'racket-logger
          :desc "Run with profiling"      "p" #'racket-profile
          :desc "Run"                     "r" #'racket-run
          :desc "Run/Focus REPL"          "R" #'doug/racket-run-and-switch-to-repl
         (:prefix ("e" . "eval")
          :desc "Function"                "f" #'racket-send-definition
          :desc "Function & focus"        "F" #'doug/racket-send-definition-focus
          :desc "Last sexp"               "e" #'racket-send-last-sexp
          :desc "Last sexp/focus"         "E" #'doug/racket-send-last-sexp-focus
          :desc "Region"                  "r" #'racket-send-region
          :desc "Region/focus"       	  "R" #'doug/racket-send-region-focus)
         (:prefix ("m" . "misc")
          :desc "Align in column"         "a" #'racket-align
          :desc "Unalign column"          "A" #'racket-unalign
          :desc "Change to racket/base"   "b" #'racket-base-requires
          :desc "Require for identifier"  "i" #'racket-add-require-for-identifier
          :desc "Cycle paren shapes"      "p" #'racket-cycle-paren-shapes
          :desc "Rename definition"       "r" #'racket-xp-rename
          :desc "Tidy requires"           "t" #'racket-tidy-requires
          :desc "Trim requires"           "T" #'racket-trim-requires
          :desc "Unicode input enable"    "u" #'racket-unicode-input-method-enable)
         (:prefix ("X" . "errors")
          :desc "Next error"              "n" #'racket-xp-next-error
          :desc "Previous error"          "N" #'racket-xp-previous-error)
         (:prefix ("h" . "help")
          :desc "Annotate buffer"         "a" #'racket-xp-annotate
          :desc "Docs in browser"         "d" #'racket-xp-documentation
          :desc "Search docs"             "D" #'racket-documentation-search
          :desc "Describe identifier"     "i" #'racket-xp-describe
          :desc "Search installed docs"   "?" #'racket-describe-search)
         (:prefix ("i" . "insert")
          :desc "Insert lambda"           "l" #'racket-insert-lambda)
         (:prefix ("m" . "macros")
          :desc "Expand definition"       "d" #'racket-expand-definition
          :desc "Expand last sexp"        "e" #'racket-expand-last-sexp
          :desc "Expand file"             "f" #'racket-expand-file
          :desc "Expand region"           "r" #'racket-expand-region)
         (:prefix ("n" . "navigation")
          :desc "Tail up"                 "^" #'racket-xp-tail-up
          :desc "Tail down"               "v" #'racket-xp-tail-down
          :desc "Tail next sibling"       ">" #'racket-xp-tail-next-sibling
          :desc "Tail prev sibling"       "<" #'racket-xp-tail-previous-sibling)
         (:prefix ("g" . "goto")
          :desc "Definition at point"     "d" #'racket-visit-definition
          :desc "Def of module at point"  "m" #'racket-visit-module
          :desc "Go back"                 "M" #'racket-unvisit
          :desc "Next definition"         "n" #'racket-xp-next-definition
          :desc "Prev definition"         "N" #'racket-xp-previous-definition
          :desc "Fuzzy - module path"     "o" #'racket-open-require-path
          :desc "Next use at point"       "u" #'racket-xp-next-use
          :desc "Prev use at point"       "U" #'racket-xp-previous-use)
         (:prefix ("m" . "macros")
          :desc "Expand definition"       "d" #'racket-expand-definition
          :desc "Expand file"             "f" #'racket-expand-file
          :desc "Expand region"           "r" #'racket-expand-region
          :desc "Expand last sexp"        "s" #'racket-expand-last-sexp)
         (:prefix ("t" . "tests")
          :desc "Run test submodule"      "t" #'racket-test
          :desc "Hide test submodules"    "f" #'racket-fold-all-tests
          :desc "Unhide all submodules"   "F" #'racket-unfold-all-tests
          :desc "Test with universal argument" "T" #'doug/racket-test-with-coverage)
          )))
