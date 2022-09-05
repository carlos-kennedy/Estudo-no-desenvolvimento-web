# Append e Prepend

## Append

- Faz com que adicione o elemento criado após os elementos.

```js
// A div esta em memória no caso não aparece na tela até ser chamada
const elDiv = document.createElement("div");

const elBody = document.querySelector("body");

elbody.append(elDiv);
// Criada e aparecendo na tela com o append
```

## Prepend

- Faz com que adicione o elemento criado antes dos elementos.

```js
// A div esta em memória no caso não aparece na tela até ser chamada
const elDiv = document.createElement("div");

const elBody = document.querySelector("body");

elbody.prepend(elDiv);
// Criada e aparecendo na tela com o append
```
