function exer5(){
    p=document.createElement("p");
    entrada=document.querySelector("#entrada").value;
    texto=document.createTextNode(entrada);
    p.appendChild(texto);
    sai=document.querySelector("#saida");
    sai.appendChild(p);
}