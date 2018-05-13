
Math.easeInOutQuad = (t, b, c, d) => {
  t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

export const handleAnchorClick = e => {
  const anchor = e.target.closest('a[href*="#"]');
  if (anchor.hostname !== window.location.hostname || anchor.pathname !== window.location.pathname || !/#/.test(anchor.href)) return;
  e.preventDefault();
  if (anchor.hash === '') return scrollTo(document.body, 0, 1000)
  return scrollToElemById(anchor.hash.substr(1))
}

export const scrollToElemById = (id) => {
  const elementPosition = getElemDistance(document.getElementById(id))
  return scrollTo(document.body, elementPosition-90, 1000)
}

export const scrollTo = (element, to, duration) => {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 10;

    var animateScroll = function(){
        document.body.classList.add('scrolling')
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
          setTimeout(animateScroll, increment);
        } else {
          document.body.classList.remove('scrolling')
        }
    };
    animateScroll();
}

const getElemDistance = function ( elem ) {
    var location = 0;
    if (elem.offsetParent) {
        do {
            location += elem.offsetTop;
            elem = elem.offsetParent;
        } while (elem);
    }
    return location >= 0 ? location : 0;
};
