import "./Button.css"
function Button(){

    return(
        <div className='container'>
            <div className="container1">
            <ol className="list">
            <div className="img">
            <img src="logo.svg" />
            </div>
           
              <li>Entregador</li>
              <li>Restaurante e Mercado</li>
              <li>Carreiras</li>
              <li>iFood Card </li>
              <button className="but">Criar conta</button>
            <button className="bu">Entrar </button>
            </ol>

            </div>
             
            <h1 className="h1">Destaques</h1>
        </div>
    );
}
export default Button;