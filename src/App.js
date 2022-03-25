const Aware = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.color),
    React.createElement("h2", {}, props.shape),
  ]);
};
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Train Me!"),
    React.createElement(Aware, {
      color: "blue",
      shape: "circle",
    }),
    React.createElement(Aware, {
      color: "yellow",
      shape: "square",
    })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
