# addEventListener()

- É composto por dois argumentos.
  - O primeiro é a ação que o usuário irá fazer no site.
  - A segunda será a funcionalidade.
- É o mais recomendado quando se quer adicionar mais de uma função

```js
const elH1 = document.querySelector("h1");
const changeBg = () => {
  elH1.style.color = "#b32";
};
elH1.addEventListener("click", changeBg);
```
