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

const parent = React.createElement('div',{id:"parent"},
    [React.createElement('div',{id:"child"},
        [React.createElement("h1",{},'I am h1 tag'),React.createElement("h2",{},'I am h2 tag')]),React.createElement('div',{id:"child2"},
            [React.createElement("h1",{},'I am h1 tag'),React.createElement("h2",{},'I am h2 tag')])])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)
