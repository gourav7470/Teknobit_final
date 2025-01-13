
(function() {
  "use strict";
  // define variables
  var items = document.querySelectorAll(".timeline li");
  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }
  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();

function statsPst(json) {
  var el = qSel('.statsNumber.p');
  el.innerHTML = '<span>' + parseInt(json.feed.openSearch$totalResults.$t, 10) + '</span>'
};

function statsCmt(json) {
  var el = qSel('.statsNumber.c');
  el.innerHTML = '<span>' + parseInt(json.feed.openSearch$totalResults.$t, 10) + '</span>'
};
if (isPrivateBlog != 'true') {
  Defer.js(blogUrl + 'feeds/posts/default?alt=json-in-script&callback=statsPst', 'sts-pst');
  Defer.js(blogUrl + 'feeds/comments/default?alt=json-in-script&callback=statsCmt', 'sts-cmt');
};


(function() {
  "use strict";
  // define variables
  var items = document.querySelectorAll(".timeline li");
  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }
  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();

function statsPst(json) {
  var el = qSel('.statsNumber.p');
  el.innerHTML = '<span>' + parseInt(json.feed.openSearch$totalResults.$t, 10) + '</span>'
};

function statsCmt(json) {
  var el = qSel('.statsNumber.c');
  el.innerHTML = '<span>' + parseInt(json.feed.openSearch$totalResults.$t, 10) + '</span>'
};
if (isPrivateBlog != 'true') {
  Defer.js(blogUrl + 'feeds/posts/default?alt=json-in-script&callback=statsPst', 'sts-pst');
  Defer.js(blogUrl + 'feeds/comments/default?alt=json-in-script&callback=statsCmt', 'sts-cmt');
};
