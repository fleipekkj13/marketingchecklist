import { Link } from "react-router-dom";
//import "./home.css"
export default function Home() {
    return (
        <div className="homepage">
            <header>
                <h1>Checklst - Coocerqui</h1>
                <p>Melhorando os resultados de uma equipe inteira.</p>
            </header>
            <main>
                <button>
                    <Link to="/marketing">Marketing</Link>
                </button>
            </main>

            <footer>
                <p>Desenvolvido por - Marketing Coocerqui</p>
            </footer>
        </div>
    )
}