function exer4(){
    p=document.createElement("p");
    texto=document.createTextNode("Ana Maria");
    p.appendChild(texto);
    sai=document.querySelector("#saida")
    sai.appendChild(p);
}