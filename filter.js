const betteridgeRegEx = 
  /(^|\.\s|\-\s|—\s|:\s)(do|does|did|can|could|was|will|is).+\?/i;

const tweets = document.getElementsByClassName('tweet-text');
const tweetsArray = Array.prototype.slice.call(tweets);

function findAncestor (el, className) {
  while ( (el = el.parentElement) && !el.classList.contains(className) );
  return el;
}

for (var i = 0; i < tweetsArray.length; i++) {
  let text = tweetsArray[i].textContent;

  if ( betteridgeRegEx.test(text) ) {
    let tweet = findAncestor(tweetsArray[i], 'stream-item');
    tweet.style.opacity = "0.3";
  }
  
}
