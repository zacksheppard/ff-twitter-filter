# Firefox Twitter Filter WebExtension Add-on 

On loading Twitter, this Firefox Add-on lowers the opacity of tweets that have a question mark and can be answered with 'No'. This is taken from [Betteridge's law of headlines](https://en.wikipedia.org/wiki/Betteridge's_law_of_headlines). Although Betteridge's Law is intended to be half-humorous, I'm using it as a starting pooint for filtering out headlines that are clickbaity and generally not news.

## Next Steps

* Continue improving Betteridge regex by comparing it against more examples
* Add an observer to handle new tweets added to the page
* Modify logic so it can look for more than just the Betteridge pattern
* Use a CSS class to style the tweets instead of changing opacity directly
* Add error handling