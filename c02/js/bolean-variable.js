var inStock;
var shipping;
inStock = true;
shipping = false;

// a variavel elStock recebe o elemento htmlspam' 
var elStock = document.getElementById('stock');
// a variavel elStock se torna do tipo false 
elStock.className = inStock;

var elShipped = document.getElementById('shipping');
elShipped.className = shipping;