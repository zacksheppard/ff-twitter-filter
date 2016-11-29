// Quick and dirty regex but a good starting point. It catches about 90% of 
// applicable tweets and has false positives about 5% of the time
const betteridgeRegEx = 
  /(^|\.\s|\-\s|—\s|:\s)(do|does|did|can|could|was|will|is|has).+\?/i;


function findAncestor(el, className) {
  while ( (el = el.parentElement) && !el.classList.contains(className) );
  return el;
}

function filterContainer(containerElement, callback) {
  let filteredElement = containerElement;

  let tweets = filteredElement.getElementsByClassName('tweet-text');

  for (var i = 0; i < tweets.length; i++) {
    let text = tweets[i].textContent;

    if ( betteridgeRegEx.test(text) ) {
      let tweet = findAncestor(tweets[i], 'stream-item');
      tweet.style.opacity = "0.3";
    } 

    callback(filteredElement);
  }
}

// Save the timeline to a variable and then replace it after tweet changes 
// are made to reduce the number of times we modify the DOM
const timeline = document.getElementById('timeline');

filterContainer(timeline, function(updatedTimeline) {
  timeline.parentNode.replaceChild(updatedTimeline, timeline)
});

