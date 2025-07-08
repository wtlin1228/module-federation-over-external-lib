import * as lifecycles from "./lifecycles";

// expose micro-app's lifecycles to host
window.__APP_KIRBY_LIFECYCLES__ = lifecycles;

if (!window.__MICRO_APP_HOST__) {
  lifecycles.mount({});
}
