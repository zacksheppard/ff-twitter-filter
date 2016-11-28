var betteridgeRegEx = 
  /(^|\.\s|\-\s|—\s)(do|does|did|can|could|was|will|is).+\?/ig;

var tweets = document.getElementsByClassName('tweet-text');
var tweetsArray = Array.prototype.slice.call(tweets);

function findAncestor (el, className) {
  while ( (el = el.parentElement) && !el.classList.contains(className) );
  return el;
}

for (var i = 0; i < tweetsArray.length; i++) {
  var text = tweetsArray[i].textContent;

  if (betteridgeRegEx.test(text) ) {
    var tweet = findAncestor(tweets[i], 'stream-item');
    console.log('>>>>>>>>'  + i + '<<<<<<<<<<');
    console.log(text);
    tweet.style.opacity = "0.5";
  }
}


// NOTES
// try both element.innerText and element.textContent