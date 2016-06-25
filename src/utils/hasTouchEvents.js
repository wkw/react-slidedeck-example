// ref: https://hacks.mozilla.org/2013/04/detecting-touch-its-the-why-not-the-how/
export default function hasTouchEvents () {
  if (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0)) {
    /* browser with either Touch Events of Pointer Events
        running on touch-capable device */
    return true;
  }
  return false;
}
