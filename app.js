/**
 * <div id="parent">
 * <div id="child">
 * <span></span>
 * <span></span>
 *
 * </div>
 * </div>
 *
 *
 */

// if we have sibling then we can pass in an array
const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("span", {}, "hello span"),
    React.createElement("span", {}, "hello span"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hello h1 tag"),
    React.createElement("h2", {}, "hello hr tag"),
  ])
); //attributes{}children
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//React is library (a piece of code) to develop application fast, you can apply react in a portion of app also.
// like only for header.footer and sidebar
