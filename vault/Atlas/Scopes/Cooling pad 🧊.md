up:: [[Home]]
tags:: #atlas/Scope🔬 

# Cooling pad 🧊
Thoughts come in hot 🌶. But after a few days, they cool down ❄️.

When cooler thoughts prevail, you will be better at prioritizing what is truly important. Cool? 

Now when you are ready, it's time to process your latest encounters. 

This datascope looks at the 20 newest notes in your **• Encounters** folder that over 2 days old. 

As you process each note, move them to the best folder, make connections, add details, and delete everything that no longer sparks ✨. 

> [!HINT]- This Datascope 🔬 only renders in the free downloadable version.
> You won't be able to see the magic unless you [download the kit](https://www.linkingyourthinking.com/download-lyt-kit), but here's what it currently looks like in my personal vault... 
> ![[lyt-kit-example-cooling-pad-.jpg]]

---

``` dataview
TABLE WITHOUT ID
 file.link as "Encounters and new notes",
 (date(today) - file.cday).day as "Days alive"

FROM "• Encounters" 
  and -"• Encounters/• Highlights" 
  and -"• Encounters/• Antilibrary"
  and -#x/readme

WHERE (date(today) - file.cday).day > 1
SORT file.cday desc
LIMIT 20
```