# childNodes

- Faz com que busque os filhos em nó (node) do elemento pai
- Faz com que apareça os elementos em **Nodelist**

```js
const el = document.querySelector("header");
console.log(el.childNodes);
// Busca os filhos dentro do header.
```

### OBS: Nos objetos apresentando dentro do nodelist podem ser executados o forEach()
