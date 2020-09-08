
const Link = ReactRouterDOM.Link,
    Route = ReactRouterDOM.Route;

async function wasm_react_cms_run() {
    const { greet } = wasm_bindgen;
    await wasm_bindgen('./pkg/wasm_cms2_bg.wasm');
    greet();
};
wasm_react_cms_run();

//
const App = props => (
<ReactRouterDOM.HashRouter>
    <ul>
    <li><Link to="/">TO HOME</Link></li>
    </ul>

    <Route path="/" exact component={Home} />
</ReactRouterDOM.HashRouter>
)
const Home = props => <h1>HOME</h1>

ReactDOM.render(<App />, document.querySelector('#root'));