const  caixaPrincipal=document.querySelector(".caixa-principal");
const caixaPerguntas=document.querySelector(".caixa-pergutas");
const caixaAlternativas=document.querySelector(".caixa-alternativas");
const caixaResultados=document.querySelector(".caixa-resultado");
const caixaPerguntas=document.querySelector(".caixa-resultado");

const perguntas=[
{
    enunciado: "perguntas 1",
    alternativas:[
    "alternativa 1",
  "alternativa 2" 
]
},
{
    enunciado: "perguntas 2",
    alternativas:[
    "alternativa 1",
  "alternativa 2" 
]
},
{
    enunciado: "perguntas 3",
    alternativas:[
    "alternativa 1",
  
]
},
];
function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
}


mostraPergunta()