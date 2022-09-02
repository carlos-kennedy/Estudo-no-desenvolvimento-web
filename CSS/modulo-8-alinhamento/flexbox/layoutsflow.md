# Layouts e evoluções

Layout tem a ver com a maneira que os elementos são distribuidos na tela.

## Normal FLow

Ou flow layout é a maneira que os elementos `block` e `inline` ficam na tela.

```html
<h1>Sou um titulo com um <strong> elemento inline</strong> dentro</h1>
```

## Tables

É a maneira de tabelas onde a tag `tables` recebe um display `table`
fazendo com que os elementos internos `td` e `tr` possam ser usados
para montar uma tabela.

```html
<table>
  <tr>
    <td>Hora</td>
    <td>20:00</td>
  </tr>
  <tr>
    <td>Hora</td>
    <td>20:37</td>
  </tr>
</table>
```

## Tabless

É a maneira de usar as propriedades `float`, `clear` para que os elementos possam mudar de posição na tela.

```html
<div style="float: left">Esquerda</div>

<div style="float: right">Direita</div>

<div style="clear: both">Normal Flow</div>
```

## Flexbox

A caixa se torna flex(flexível), fazendo com que os elementos internos possam receber melhor:

- Alinhamento
- Ordenção
- Tamanhos flexíveis
