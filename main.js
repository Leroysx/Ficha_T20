import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML =
 `<div class="ficha">
 <div class="cabecalho">
     <h1>Ficha de Personagem</h1>
     <div class="info-personagem">
         <div>
             <label for="nome">Nome:</label>
             <input type="text" id="nome" name="nome">
         </div>
         <div>
             <label for="classe">Classe:</label>
             <input type="text" id="classe" name="classe">
         </div>
         <div>
             <label for="nivel">Nível:</label>
             <input type="number" id="nivel" name="nivel" min="1" max="20">
         </div>
     </div>
 </div>
 <div class="atributos">
     <h2>Atributos</h2>
     <div class="atributo">
         <label for="forca">Força:</label>
         <input type="number" id="forca" name="forca" min="1" max="20">
     </div>
     <div class="atributo">
         <label for="destreza">Destreza:</label>
         <input type="number" id="destreza" name="destreza" min="1" max="20">
     </div>
     <div class="atributo">
         <label for="constituicao">Constituição:</label>
         <input type="number" id="constituicao" name="constituicao" min="1" max="20">
     </div>
     <div class="atributo">
         <label for="inteligencia">Inteligência:</label>
         <input type="number" id="inteligencia" name="inteligencia" min="1" max="20">
     </div>
     <div class="atributo">
         <label for="sabedoria">Sabedoria:</label>
         <input type="number" id="sabedoria" name="sabedoria" min="1" max="20">
     </div>
     <div class="atributo">
         <label for="carisma">Carisma:</label>
         <input type="number" id="carisma" name="carisma" min="1" max="20">
     </div>
 </div>
 <div class="botoes">
     <button id="salvar">Salvar</button>
     <button id="resetar">Resetar</button>
 </div>
</div>`

setupCounter(document.querySelector('#counter'))
