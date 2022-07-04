import "./App.css"
import Menu from "./Menu.jsx"
import List from "./List.jsx"

function App(){
    return(
        <div className="principal">

        <div className="menu0">
            <Menu />
        </div>

        <div className="menu_cardapio">
            <List />
        </div>
        </div>
);

}
export default App;