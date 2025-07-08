import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import {
  loadRemote,
  registerRemotes,
} from "@module-federation/enhanced/runtime";

window.__MICRO_APP_HOST__ = true;

// expose host's MF runtime to micro apps
window.__FEDERATION_ENHANCED_RUNTIME__ = {
  loadRemote,
  registerRemotes,
};

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
