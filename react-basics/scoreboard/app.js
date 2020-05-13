const title = React.createElement(
    'h1',
    { id: 'main-title', title: 'This is a title' },
    "My First React Element"
);

const desc = React.createElement(
    "p",
    null,
    'I just learned how to create a React node and render it'
);

const header = React.createElement(
    'header', // element
    null, // properties
    title, // child or decendant element
    desc // child or decendant element
);

ReactDOM.render(
    header,
    document.getElementById('root')
);