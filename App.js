// ------------- react create Single element -----------------

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// ------------- react create Nested element -----------------

// const parent = React.createElement(
//   "div",
//   {
//     id: "parent",
//   },
//   React.createElement(
//     "div",
//     {
//       id: "child",
//     },
//     React.createElement("h1", {}, "I'm h1 tag")
//   )
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// ------------- react create Sibling element -----------------

// const parent = React.createElement(
//   "div",
//   {
//     id: "parent",
//   },
//   React.createElement(
//     "div",
//     {
//       id: "child",
//     },
//     [
//       React.createElement("h1", {}, "I'm h1 tag"),
//       React.createElement("h2", {}, "I'm h2 tag"),
//     ]
//   )
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// ------------- react create Sibling Child element -----------------

const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement(
      "div",
      {
        id: "child1",
      },
      [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag"),
      ]
    ),
    React.createElement(
      "div",
      {
        id: "child2",
      },
      [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag"),
      ]
    ),
  ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
