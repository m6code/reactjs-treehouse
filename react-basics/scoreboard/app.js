const name = "Ben";

const desc = 'I just learned how to create a React node and render it into the DOM';

const myTitleID = 'main-title';

const header =(
    <header>
        <h1 id={myTitleID}>{name}'s First React App</h1>
        <p className="main-desc">{desc}</p>
        {/* comments in jsx like this */}
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);