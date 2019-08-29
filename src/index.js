document.getElementById("codifica").addEventListener("click", pegaDados);
document.getElementById("decodifica").addEventListener("click", enviaDados);

function pegaDados() {
  event.preventDefault();
  let string = document.getElementById("texto").value;
  const offset = parseInt(document.getElementById("code").value);
  let resultado = window.cipher.encode(offset, string);
  document.getElementById("novaFrase").innerHTML=`<p>A senha codificada é: "${resultado}"</p>`;
}
function enviaDados() {
  event.preventDefault();
  let string = document.getElementById("texto").value;
  const offset = parseInt(document.getElementById("code").value);
  let volta = window.cipher.decode(offset, string);
  document.getElementById("voltaFrase").innerHTML=`<p>A senha decodificada é: "${volta}"</p>`;
}
