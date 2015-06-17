clothingRetailer.controller('ClothingRetailerController', [function() {

  this.shoppingCart = [];

  this.addItem = function(item) {
    this.shoppingCart.push(item);
  };

}]);