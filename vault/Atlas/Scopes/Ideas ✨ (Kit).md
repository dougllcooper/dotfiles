up:: [[Home]]
tags:: #atlas/Scope🔬
X:: [[Mapping the flexible flow of ideas]]

> [!INFO]-  Only the "idea sparks" datascope is included in the LYT Kit.
> This is a sanitized version of my actual note. 
> 
> - Content and links have been removed.
> - Nick, go here [[Ideas ✨]]

# Ideas ✨ (Kit)
*Instructions:* Time-block an hour and choose an idea.

> Note: This is modifies but keeps the spirit of Fabian Röken's setup.

## Decide on your idea sparks ✨
Your new ideas have cooled down 🧊 for at least a few days. Good, now your intuition can help you decide where to spend your time. 

Now decide whether the sparks will become an active spaceship or you will use them as passive satellite orbits the earth. Only spaceships continue to receive attention. 

```dataview
TABLE WITHOUT ID
file.link as "Ideas ready for decision",
(date(today) - dates).day as "Days alive"
FROM #idea/spark✨
WHERE (date(today) - dates).day > 1
SORT file.cday asc
```


---

# Advanced scope
Here is an advanced datascope for your ideas.

Create a new note, give it an `#idea/satellite🛰` tag, then come back here and see it populated below.  

```dataview
TABLE without id 
replace(Tags, "#idea/", "") AS "Tags",
rows.file.link as Ideas

FLATTEN file.etags AS Tags

WHERE contains(Tags, "#idea/")

GROUP BY Tags

SORT Tags, Ideas DESC
```
