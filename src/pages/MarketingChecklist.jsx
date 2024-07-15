import { useEffect, useState } from "react"
import './home.css'

import { Document, Text, View, Page, PDFDownloadLink, Image } from '@react-pdf/renderer'; 

import axios from "axios";
export default function MarketingChecklist () {
    
    const [asideColums, setAsideColums] = useState({
    })

    const [img, setImage] = useState([]);
    const nota = []
    const [question, setQuestion] = useState()
    const headers = {
        'ngrok-skip-browser-warning': true
    }

    const getUser = document.cookie.split('=');
    const listem = document.querySelectorAll('li')

    useEffect(()=> {
        axios.post('https://48af-186-224-173-124.ngrok-free.app/checklist', {
            'question': question,
            'user': getUser[1],
        }, {headers: headers})
    },[nota])

    const questions = [
        "Comunicação Visual - Loja Bem Sinalizada?",
        "Ponta de Gôndola/ Setorização - Estão Limpas?",
        "Ponta de Gôndola/ Setorização - Conservadas?",
    ]

    const handleNota = () => {
        const allChecked = document.querySelectorAll('input')
        let sum = 0;
        let array = 0;
        allChecked.forEach((elem, index) => {
            if (elem.type === 'radio' &&  elem.checked) {
                array = array += 1
                let arrayed = array - 1
                if (nota[arrayed]) {
                    nota.splice(arrayed, 1, elem.value)
                    
                } else {
                    nota.push(elem.value);
                }
            }
        })
        console.log(nota)
        return sum;
    }

    //Append images on the server.
    function handleChange(e, index) {
        if(img[index]) {
            const element = URL.createObjectURL(e.target.files[0]);
            const appendItem = img.map((c, i) => {
                if (i === index) {
                    return c = element;
                } else {
                    return c;
                }
            })
            setImage(appendItem)
        } else {
            console.log(e.target.files[0])
            setImage([...img, URL.createObjectURL(e.target.files[0])]);
            console.log(img.length)
            img.forEach((item, i) => {
                console.log(`Item: ${item} - ${i}`)
            })

        }
    }

    const MyDocument = () => (
        <Document>
            <Page size='A4'>
                <Text>
                    {nota}
                </Text>
            </Page>
        </Document>
    )


    return (
        <div className="marketing">
            {nota.map((c, i) => {
                <h1>DDDDDDDDDDDDDDDDD</h1>
            })}
            <ul>
                {
                    questions.map((item, index) => {
                        return(
                            <li>
                                <p>{item}</p>
                                <ul>
                                    <li>
                                        <span>Ruim</span>
                                        <input type="radio" name={`r${index}`} value={0} onChange={(e) => {
                                            setQuestion(`${item} - ${index}`)
                                        }} />   
                                    </li>
                                    <li>
                                        <span>Medio</span>
                                        <input type="radio" name={`r${index}`} value={50} onChange={(e) => {
                                            setQuestion(`${item} - ${index}`)
                                        }} />
                                    </li>
                                    <li>
                                        <span>Bom</span>
                                        <input type="radio" name={`r${index}`} value={100} onChange={(e) => {
                                            setQuestion(`${item} - ${index}`)
                                        }} />
                                    </li>
                                    
                                </ul>

                                <textarea name={`Text${index}`} id=""></textarea>
                                <label>
                                    <p>Insira um arquivo</p>
                                    <input type="file" id="upload-foto" onChange={(e) => {
                                        handleChange(e, index)
                                    }} />
                                </label>

                                <figure>
                                    <img src={img[index]} />
                                </figure>
                            </li>
                        )
                    })
                }
            </ul>
            
            <button onClick={handleNota}  style={{position:'fixed', bottom: 0, width: 320, height: 50, borderRadius: 20, border: '1px solid black'}}>Finaliar Checklist</button>

            <button onClick={
                (e) => {
                    nota.map((e, i) =>{
                        alert(e,i)
                    })
                }
            }>asdasdasd</button>


        </div>
    )
}