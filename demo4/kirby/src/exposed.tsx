import React from "react";
import ReactDOM from "react-dom/client";
import Provider from "./components/ProviderComponent";

export const renderToContainer = (rootEl: Element) => {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Provider />
    </React.StrictMode>
  );
  return root;
};
