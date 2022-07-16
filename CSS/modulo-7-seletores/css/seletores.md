# Seletores

- Conecta um elemento HTML com o CSS a fim de alterar o elemento.

# Tipos

# Element Selector

- Todo os elementos HTML

# ID Selector

- Um elemento que tenha um atributo 'ID'.
- Cada id deverá ser único.

# Class Selector

- Os elementos que contenham um atributo 'CLASS'
- Podemos ter uma ou mais classes.

# Attribute Selector

- Um elemento que tenha um atributo específico

# Pseudo-class Selector

- Elementos em um estado específico

- Element Selector exemplo:

```css
h1 {
  color: red;
}

p {
  color: orange;
}
```

- ID Selector exemplo:

```css
#title {
  color: pink;
}

#content {
  color: red;
}
```

- Class Selector exemplo:

```css
.title .big {
  color: yellow;
}

.content .big {
  color: blue;
}
```

- Attribute Selector exemplo:

```css
[title] {
  font-size: 4rem;
}
```

- Pseudo-class Selector exemplo:

```css
p:hover {
  background-color: green;
}

h1:hover {
  color: purple;
}
```

# multiplos selectors

Você poderá selecionar múltiplos elementos e aplicar alguma regra css para todos eles.

Usamos uma separação por vírgula para isso.

```css
h1,
p,
a {
  color: red;
}
```
