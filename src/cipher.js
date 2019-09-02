window.cipher = {
  encode: encode,
  decode: decode, 
};

function testaOffset (offset) {
  if (offset < 0) {
    while (offset < 0) {
      offset +=26;
      return offset;
    }
  }
  return offset;
}

function encode (offset, string) {
  offset = testaOffset(offset);
  let novaFrase = [];
  const tamanho = string.length;
  for (let i=0; i<tamanho; i++) {
    let code = string[i].charCodeAt(0); 
    if (code >= 65 && code <= 90) {
      let transforma = (code - 65 + offset) % 26 + 65;
      let result = String.fromCharCode(transforma);
      novaFrase.push(result);
    } else if (code >=97 && code <= 122) {
      let transforma = (code - 97 + offset) % 26 + 97;
      let result = String.fromCharCode(transforma);
      novaFrase.push(result);
    } else {
      novaFrase.push(string[i]);
    }
  }
  return novaFrase.join("");
}

function decode(offset, string) {
  offset = testaOffset(offset);
  let novaFrase = [];
  const tamanho = string.length;
  for (let i=0; i<tamanho; i++) {
    let code = string[i].charCodeAt(0); 
    if (code >= 65 && code <= 90) {
      let transforma = (code - 90 - offset) % 26 + 90;
      let result = String.fromCharCode(transforma);
      novaFrase.push(result);
    } else if (code >=97 && code <= 122) {
      let transforma = (code - 122 - offset) % 26 + 122;
      let result = String.fromCharCode(transforma);
      novaFrase.push(result);
    } else {
      novaFrase.push(string[i]);
    }
  }
  return novaFrase.join("");
}