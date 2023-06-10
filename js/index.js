const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro");

    if (modoEscuroAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/lua.png")
    } else {
        imagemBotaoTrocaDeTema.setAttribute("scr","./src/imagens/lua.png")
    }
})

