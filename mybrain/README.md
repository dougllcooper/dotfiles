title:: Readme.md

- This is a zettelkasten for Logseq.  Can be used with obsidian with the correct setup.
- managing pages
	- Files and Links > default location for new notes > in the folder specified below > “pages”
- managing attachments
	- Files and Links > default location for new attachments > in the folder specified below > “assets”
	- Files and Links > new link format > relative path to file
	- Files and Links > Use Wikilinks > off
- Journal Daily notes
	- Core Plugin > Daily Notes > On
	- Daily Notes > date format > “YYYY_MM_DD”
	- Daily Notes > new file location > “journals”
- Tasks
	- Create a page called [[logseq tasks]]
	- create queries on that page in the form:
	        match-case:DOING
- outlining
	- Install “Outliner” and “Zoom” community plugins (note, I had to turn the Outliner plugin off on the mobile app because it wasn’t working.)
-
- Additional notes to handle journals better
	- Set date format in Logseq config.edn so both apps use the same file format
		- :journal/file-name-format "yyyy-MM-dd"
	- Also advisable to tweak how logseq handles note files.  Logseq can be configured to get note titles from filenames or from titles at the top of the note.  If you want to create notes in Obsidian and have Logseq read them, it's better to have Logseq get titles from the filename.  Add the following to logseq/config.edn:
		- :page-name-order "file"
-