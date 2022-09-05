# insertBefore

- Faz com que adicione um elemento antes de outro elemento.
- Ele funciona tendo adicionado dois valores.
- O primeiro será o elemento que ficará antes e o segundo será o que ficará após.

```js
const elDiv = document.createElement("div");
elDiv.innerHTML = "<h2> Olá sou um Dev em aprendizado </h2>";

const elBody = document.querySelector("body");
const elScript = elBody.querySelector("script");

elBody.insertBefore(elDiv, elScript);
```
