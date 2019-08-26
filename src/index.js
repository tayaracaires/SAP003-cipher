function pegaDados(){
    event.preventDefault()
    let string = document.getElementById("texto").value;
    const offset = parseInt(document.getElementById("code").value);
    let resultado = window.cipher.encode(offset, string);
    document.getElementById("novaFrase").innerHTML=`<p>O texto codificado é: "${resultado}"</p>`
    return resultado
    }
function enviaDados(){
    event.preventDefault()
    let string = pegaDados();
    const offset = parseInt(document.getElementById("code").value);
    let volta = window.cipher.decode(offset, string);
    document.getElementById("voltaFrase").innerHTML=`<p>O texto decodificado é: "${volta}"</p>`
}