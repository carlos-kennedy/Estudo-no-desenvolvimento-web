# Combinators

Combinando, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização

## Descedant combinator

- Identifacado por um espaço entre os seletores
- Busca um elemento dentro do outro

```css
body article h2 {
  color: white;
}
```

## child combinator

- Identificado pelo sinal `>` entre dois seletores
- Seleciona somente o elemento que é filho direto do pai
- Elementos depois do filho direto serão desconsiderados

```css
body > ul > li {
  color: pink;
}

ul > ul > li {
  color: purple;
}
```

## Adjacent sibling combinator

- Identifacado pelo sinal de `+` entre dois seletores
- Seleciona somente o elemento ao lado direito que é irmão direto na hirarquia

```css
h1 + p {
  border-left: 1px solid pink;
}

button + button {
  margin-left: 3rem;
}
```

## General sibling combinator

- Identificado pelo sinal `~` entre dois seletores
- Seleciona todos os elementos irmãos

```css
h1 ~ p {
  background: blue;
}
```

## Utilizando os combinators

```css
ul > li[class="listContent"] {
  color: grey;
}
```

## Dica / Conselho

- Seletores muitos específicos tendem a criar difculdades em reutilizar determinadas regras.

* Muitas vezes, um simples uso de Class, torna o trabalho muito mais eficiente.
