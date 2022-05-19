up:: [[+ Index for index notes]]
tags:: #x/index

# Index for Cards

> [!HINT]- This Datascope 🔬 only renders in the free downloadable version.
> You won't be able to see the magic unless you [download the kit](https://www.linkingyourthinking.com/download-lyt-kit).
> Also, the "created" and "modified" dates

``` dataview
TABLE tags FROM "Cards" and -#x/index and -"People" and -#x/readme
SORT file.name ASC

```

```dataview
TABLE dates
FROM "Cards" and -#index
GROUP BY file.folder

```