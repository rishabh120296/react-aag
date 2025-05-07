// Part 1
// const heading = React.createElement('h1',{id:'heading'},'Hello World from React')
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)

// Part2

// <div id='parent'>
//     <div id='child1'>
//         <h1>I am H1 Tag</h1>
//         <h2>I am H2 Tag</h2>
//     </div>
//     <div id='child2'>
//         <h1>I am H1 Tag</h1>
//         <h2>I am H2 Tag</h2>
//     </div>
// </div>
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "I am h1 tag"),
    React.createElement("h2", { id: "h2" }, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "h3" }, "I am h1 tag"),
    React.createElement("h2", { id: "h4" }, "I am h2 tag"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

const heading2 = <span>I am sample element</span>
//root.render(parent)
const jsxheading = <h1>Hello from jsx element {heading2}</h1>;
console.log(jsxheading);
//root.render(jsxheading)

const Title = () => <h1>Hello from jsx</h1>;
const HeadingComponent1 = () => (
  <h1 className="mycomponent">Hi from heading 1 componenet</h1>
);

const HeadingComponent2 = () => {
    //3 ways to call componenet inside componenet. {} means js code so normal function call also we can do to put componenet inside componenet
    // element inside component also can be done using {}
  return (
    <div>
      {Title()}  
      {100 + 2}
      {jsxheading}
      <Title></Title>      
      <HeadingComponent1 />
      <h1 id="component2">Hi from another heading component</h1>
    </div>
  );
};

root.render(<HeadingComponent2 />);

//
