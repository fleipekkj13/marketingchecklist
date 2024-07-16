import { useEffect, useState } from 'react';
import './home.css'

import { Document, Page, Text, View, Image, PDFDownloadLink } from '@react-pdf/renderer';

export default function MarketingChecklit () {
    const questions = [
        "Pergunta 1 - Como fazer novos checklists",
        "Pergunta 2 - Como fazer novos checklists",
        "Pergunta 3 - Como fazer novos checklists",
        "Pergunta 4 - Como fazer novos checklists",
        
    ];
    const noteValues = [0, 50, 100]
    const [ img, setImage ] = useState([])
    const [NotaFinalSet, setNotaFinalSEt] = useState([]);
    const [ textedArea, setTextedAre ] = useState([])

    const [Theme, setTheme] = useState(true)
    const [darkWhite, setDarkWhite] = useState('dark')

    let notaFinal = [];
    let textArea = [];

    function handleChange(e, index) {
        if(img[index]) {
            console.log('reatribuindo')
            const element = URL.createObjectURL(e.target.files[0]);
            const appendItem = img.map((c, i) => {
                if ( i === index ) {
                    return c = element;
                } else {
                    return c;
                }
            })
            setImage(appendItem);
        } else {
            setImage([...img, URL.createObjectURL(e.target.files[0])]);
        }
    }

    const MyDocument = () => (
        <Document>
            <Page size={'A4'}>
                {
                    questions.map((question, indexQuestion) => {
                        return(
                            <View key={indexQuestion} style={{border: '1px solid black', margin: '20px'}}>
                                <Text>Question: {question}</Text>
                                <Text>Resposta: {NotaFinalSet[indexQuestion]}</Text>
                                <Text style={{border: '1px solid #131313', padding: '5px'}}>Observations: {textedArea[indexQuestion]} </Text>
                                <Image style={{width: '50px', height: '50px'}} source={img[indexQuestion]}></Image>
                                <Text style={{fontSize: 10}}>Pagina: {indexQuestion}</Text>
                            </View>
                        )
                    })
                }
            </Page>
        </Document>
    )

    function finalizarChecklist() {
        const allInput = document.querySelectorAll('input');
        const allTextArea = document.querySelectorAll('textarea');
        let itemIndexBase = 0;
        allInput.forEach((inputItem, inputIndex) => {
            if(inputItem.type === "radio" && inputItem.checked) {
                if (notaFinal[itemIndexBase]){
                    // console.log('Item ja existente!')
                    notaFinal[itemIndexBase] = inputItem.value;
                    textArea[itemIndexBase] = allTextArea[itemIndexBase].value 
                }
                else {
                    // console.log('Item ainda nao existe')
                    notaFinal.push(inputItem.value)
                    textArea.push(allTextArea[itemIndexBase].value)
                }
                itemIndexBase = itemIndexBase + 1;
            }
        })
        // console.log(notaFinal, textArea, img)
        const downloadButton = document.getElementById('download-button');
        downloadButton.style.display = 'block';
        setNotaFinalSEt(notaFinal);
        setTextedAre(textArea)
        console.log(`
            Nota Final: ${NotaFinalSet}
            Text area: ${textedArea}
            `)
    }

    function ChangeTheme(){
        const mainRoot = document.getElementById('mainroot');
        if(Theme === true){
            setDarkWhite('light');
        } else {
            setDarkWhite('dark');
        }
        setTheme(!Theme);
    }


    return(
        <div id='mainroot' className={darkWhite}>
            {
                questions.map((el, index) => {
                    return(
                        <li key={index}>
                            <p>{el}</p>
                            <ul>
                                <label>
                                    <span>Bad</span>
                                    <input 
                                        value={noteValues[0]}
                                        name={`radio${index}`}
                                        type='radio' />
                                </label>
                                <label>
                                    <span>Medium</span>
                                    <input
                                        value={noteValues[1]} type='radio'
                                        name={`radio${index}`}
                                        />
                                </label>
                                <label>
                                    <span>Good</span>
                                    <input
                                        value={noteValues[2]} 
                                        name={`radio${index}`}
                                        type='radio' />
                                </label>
                            </ul>
                            <span>Some observation? Type here:</span>
                            <textarea placeholder='Have an observation? Type in here...' />
                            <label>
       
                                <i style={{color:'#EFF6EE'}} className='fa fa-camera'></i>

                                <input type="file" id='file-input' onChange={(e) => {
                                    handleChange(e, index);
                                }} />
                            </label>
                            <hr style={{borderRadius: '100%'}} />
                            <figure>
                                <img src={img[index]} alt="" />
                            </figure>
                            <p id='questions'>Question Number: {index + 1}</p>

                        </li>
                    )
                })
            }

            <PDFDownloadLink document={<MyDocument />} fileName='document.pdf'>
                <h1 id='download-button' style={{display: 'none'}}>Download PDF</h1>
            </PDFDownloadLink>

            <a id='changer' onClick={ChangeTheme}>{Theme ? <p>Light</p> : <p>Dark</p>}</a>
            <div className="center">
                <button onClick={finalizarChecklist}>Finalizar Checkist</button>
            </div>
        </div>
    )
}