// Quick and dirty regex but a good starting point. It catches about 90% of 
// applicable tweets and has false positives about 5% of the time
const betteridgeRegEx = 
  /(^|\.\s|\-\s|—\s|:\s)(do|does|did|can|could|was|will|is|has).+\?/i;


function findAncestor(el, className) {
  while ( (el = el.parentElement) && !el.classList.contains(className) );
  return el;
}

function updateStream(containerElement) {
  let filteredElement = containerElement;

  let tweets = filteredElement.getElementsByClassName('tweet-text');
  // let tweetsArray = Array.prototype.slice.call(tweets);

  for (var i = 0; i < tweets.length; i++) {
    let text = tweets[i].textContent;

    if ( betteridgeRegEx.test(text) ) {
      let tweet = findAncestor(tweets[i], 'stream-item');
      tweet.style.opacity = "0.3";

      if (i === tweets.length -1 ) {
        containerElement.parentNode.replaceChild(filteredElement, containerElement);
      }
    } else {
      if (i === tweets.length -1 ) {
        containerElement.parentNode.replaceChild(filteredElement, containerElement);
      }
    }

    
  }
}

// save .stream-container to a variable
var streamContainer = document.getElementById('timeline');

updateStream(streamContainer);

