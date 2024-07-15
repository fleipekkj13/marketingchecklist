//import "./home.css"
export default function Home() {

    function saveData() {
        const user = document.getElementById('username').value;
        document.cookie = `user=${user}; expires=Thu, 18 dec 2024 12:00:00 UTC; path=/`;
    }

    return (
        <div className="homepage">
            <header>
                <h1>Checklst - Coocerqui</h1>
                <p>Melhorando os resultados de uma equipe inteira.</p>
            </header>
            <main>
                <form onSubmit={saveData} action="/marketing">
                    <label htmlFor="name">Insira seu nome:</label>
                    <input id="username" type="text" name="name" placeholder="Por exemplo: Liandreira"/>
                    <button type="submit">Entrar</button>
                </form>
            </main>

            <footer>
                <p>Desenvolvido por - Marketing Coocerqui</p>
            </footer>
        </div>
    )
}