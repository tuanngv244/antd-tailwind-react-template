const sideScroll = (
  element: HTMLElement,
  direction: 'left' | 'right',
  speed: number,
  distance: number,
  step: number,
) => {
  let scrollAmount = 0;
  var slideTimer = setInterval(function () {
    if (direction == 'left') {
      element.scrollLeft -= step;
      scrollAmount -= step;
    } else {
      element.scrollLeft += step;
      scrollAmount += step;
    }
    if (direction === 'right' && scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
    if (direction === 'left' && element.scrollLeft === 0) {
      window.clearInterval(slideTimer);
    }
  }, speed);
};

export { sideScroll };
