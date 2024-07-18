//import "./home.css"
import { useState } from "react";
import ValidateUser from "./Components/validateUser"
import { ShoppingCart, Search } from 'lucide-react'


export default function Home() {

    const ultimateChecklist = document.getElementById('ultimate-list-main');
    const buttonChecklist = document.getElementById    ('container-select-button-home-page');

    const Items = [
        "Marketing",
        "Default Checklist"
    ]

    const Lojas = [
        "Matriz",
        "Armando Salles",
        "Pereira Ignacio",
        "Joao Pilon",
        "Costa Magueta",
    ]

    const SubLojas = [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
    ]


    const [ filtered, setFiltered ] = useState('');
    const [ repos, setRepos ] = useState();

    const filteredRepos = Lojas.filter(repo => repo.includes(filtered));

    return (
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 h-full">
            <main className="w-3/5 m-auto text-zinc-300 text-left space-y-20 p-24">
                <h1 className="text-2xl font-black">Checklist do Marketing.</h1>
                <nav className="relative box-content bg-slate-800 border border-slate-500 rounded-xl p-2">
                    <div className="space-x-5 content-center items-center flex" id="container-select-button-home-page">
                        <span className="font-black w-3/4">Select the type of checklist: </span>
                        <input type="text" value={filtered} placeholder="Type something in here..."  onChange={(e)=>{setFiltered(e.target.value)}} className="bg-slate-700 rounded-xl text-sm p-2 border border-slate-500 w-screen" />
                    </div>

                    <ul id="ultimate-list-main" className="bg-slate-900 text-slate-600 space-y-3 p-2 box-content rounded-lg mt-4">
                        <p className="text-slate-500 font-black">Resultados encontrados:</p>
                        <hr className="opacity-15" />
                        {filteredRepos.map((c) => {
                            return(
                                <div>
                                    <li className="hover:text-slate-300">
                                        {c}
                                    </li>
                                </div>
                            )
                        })}
                        
                    </ul>

                </nav>

                <ul className="space-y-5 box-content">
                    {filteredRepos.map((c, i) => {
                        return(
                            <li className="border border-slate-700 bg-slate-800 p-5 box-content rounded-lg text-slate-500 items-center space-x-5 flex">
                                <div>
                                    <input type="checkbox" className="scale-150 border-green-500-700 text-zinc-400 accent-slate-600" />
                                </div>
                                <nav className="flex items-center justify-between w-screen">
                                    <div>
                                        <h1>{Lojas[i]}</h1>
                                        <p>{SubLojas[i]}</p>
                                    </div>

                                    <div className="w-20 h-10 hover:bg-slate-600 flex items-center justify-center border rounded-full bg-slate-700 border-slate-600">
                                        <ShoppingCart size={15} className="text-slate-400" strokeWidth={3} />
                                    </div>
                                </nav>
                            </li>
                        )
                    })}
                </ul>

            </main>
        </div>
    )
}