var tweets = document.getElementsByClassName('tweet-text');
var tweetsArray = Array.prototype.slice.call(tweets);

function findAncestor (el, className) {
  while ( (el = el.parentElement) && !el.classList.contains(className) );
  return el;
}

for (var i = 0; i < tweetsArray.length; i++) {
  var text = tweetsArray[i].textContent;
  var result = /and/.test(text);
  if (result) {
    var tweet = findAncestor(tweets[i], 'stream-item');
    tweet.style.opacity = "0.5";
  }
}


// NOTES
// try both element.innerText and element.textContent