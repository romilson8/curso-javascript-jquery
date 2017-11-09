var inStock;
var shipping;

inStock = true;
shipping = false;

/* outro processo pode entrar aqui e, como resultado, 
o script pode precisar alterar esses valores*/

inStock = false;
shipping = true;

var elStock = document.getElementById('stock');
elStock.className = inStock;

var elShipped = document.getElementById('shipping');
elShipped.className = shipping;
