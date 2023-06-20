const h1 = React.createElement("h1", {}, "Hey H1");
const h2 = React.createElement("h2", {}, "Hey H2");
const complexHtml = React.createElement(
  "div",
  { style: { background: "red", fontSize: "16px" } },
  [h1, h2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(complexHtml);
