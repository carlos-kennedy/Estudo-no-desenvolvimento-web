// Manipulando conteúdo
// innerHTML
const element = document.querySelector("h1");
const elementP = document.querySelector("p");
const elementContainer = document.querySelector(".testContainer");

element.innerHTML =
  "Sou incrivelmente paciente em relação as pessoas, e um grande olá mundo";

elementP.innerHTML = '<a href="#" target="_blank"> Sou um Dev </a>';

elementContainer.innerHTML = `
<header>
 <nav style="display: flex;">
  <ul style="background: #000" class="lista">
   <li> <a href="#"> HOME </a> </li>
    <li> <a href="#"> ABOUT </a> </li>
     </ul> 
     </nav>
      </header>`;
