import './home.css'
import { useEffect, useState } from "react"

import { Document,Text, View, Page, PDFDownloadLink, Image } from '@react-pdf/renderer';






export default function MarketingChecklist () {
    const [file, setFile] = useState([]);
    const [result, setResult] = useState([])

    const elems = [
        "Comunicação Visual - Loja Bem Sinalizada?",
        "Ponta de Gôndola/ Setorização - Estão Limpas?",
        "Ponta de Gôndola/ Setorização - Conservadas?",
        // "Ponta de Gôndola/ Setorização - Produtos Arrumados?",
        // "Ponta de Gôndola/ Setorização - Estoque suficiente?",
        // "Displays - Conservados?",
        // "Displays - Produtos arrumados?",
        // "Displays - Produtos certos?",
        // "Displays - Precificação correta?",
        // "Displays - Produtos com estoque suficiente?",
        // "Promoção de validades próximas - Validade correta?",
        // "Placa proibido álcool para menores de 18 anos exposto adequadamente?",
        // "Exposição de cartazes e dinâmicas estão no padrão?",
        // "Precificação e descrição (Externo) - Estão corretos?",
        // "Precificação e descrição (Interno) - Estão corretos?",
        // "Estoque - Os produtos em oferta estão com estoque?",
        // "Abastecimento - Os produtos em ofertas estão bem expostos?"
    ]


    function handleChange(e) {
        console.log(e.target.files);
        setFile([...file, URL.createObjectURL(e.target.files[0])]);
    }

    const getFinalResult = () => {
        let sum = 0;
        result.forEach((el) => sum += parseInt(el))
        return(
            sum
        )
    }

    const MyDocument = () => (

        <Document>
            <Page size='A4'>
                <Text>Valor Final: <Text>{getFinalResult()}</Text></Text>
                {elems.map((item, itemx) => {
                    return(
                        <View>
                            <Text style={{textAlign: 'center', fontSize: '14px'}}>{item}</Text>
                            <Text style={{textAlign:'left'}}>Resultado: <Text>{result}</Text></Text>
                            {/* (try {
                                <Image source={file[itemx]}></Image>
                            } catch (error) {
                                console.log("")
                            }) */}
                        </View>
                    )
                })}
        </Page>
        </Document>
    )
    

    return(
        <div>
            <PDFDownloadLink document={<MyDocument />} fileName='node.pdf'>
                <h1>DOWNLOAD</h1>
            </PDFDownloadLink>

            <div style={{position:'fixed', bottom: 0, backgroundColor: 'red', width:'100%'}}>
                <span>{[...result]}</span>
            </div>

            <p>Loja atual:</p>
            <ul className="aside-item-ul">
                {elems.map((index, numb) => {
                    return(
                        <li className="aside-item">
                            <ul className="buttons-aside-item">
                                <label for="upload-foto">Ver item</label>
                                <input onChange={handleChange} id="upload-foto" type="file"></input>
                            </ul>
                            <p>{index}<i style={{color: "red"}}>*</i></p>
                            <ul className="labels-aside">
                                <label>
                                    Ruim
                                    <input name={`ratio${numb}`} value='0' onChange={(e) => {setResult([...result, e.target.value])}} style={{height: '20px', width: '20px'}} type="radio" />
                                </label>
                                <label>
                                    Médio
                                    <input name={`ratio${numb}`} value='50' onChange={(e) => {setResult([...result, e.target.value])}} type="radio" style={{accentColor: 'yellow', height: '20px', width: '20px'}} />
                                </label>
                                <label>
                                    Boa
                                    <input name={`ratio${numb}`} value='100' onChange={(e) => {setResult([...result, e.target.value])}} type="radio" style={{accentColor: 'green', height: '20px', width: '20px'}} />
                                </label>
                            </ul>

                            <picture>
                                <p>Imagem Anexada:</p>
                                <img src={file[numb]} alt="" />
                            </picture>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
