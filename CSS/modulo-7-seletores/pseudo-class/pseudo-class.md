# Pseudo-classes

- É um tipo de seletor de irá selecionar um elemento que estiver em um estado específico.

## Exemplo:

- É o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse em cima dele.

### Pseudo-classes começam com 2 pontos seguidos de seu nome de pseudo class `:pseudo-class-name`

## Selecionando elementos com pseudo-classes

```css
/* Primeiro filho */
:first-child ;

/* Ultimo filho */
:last-child ;

/* Qualquer filho de um elmento do tipo.. */
:nth-of-type()/* Qualquer filho */
: nth-child();

/* Qualquer filho em número pares */
:nth-child(even) ;

/* Qualquer filho em número impares*/
:nth-child(odd) ;
```

## Ações do usuário

```css
* :hover
* :focus
```

## Atributos

- :disabled
- :required

## Referências: `https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes`
