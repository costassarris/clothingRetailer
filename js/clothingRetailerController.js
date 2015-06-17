clothingRetailer.controller('ClothingRetailerController', [function() {

  this.basket = [];
  this.totalPrice = 0.00;

  this.addItem = function(item) {
    this.basket.push(item);
  };

  this.removeItem = function(item) {
    var index = this.basket.indexOf(item);
    this.basket.splice(index, 1);
  };

  this.calculateTotal = function() {
    for (var i=0; i<this.basket.length; i++) {
      var currentItem = this.basket[i];
      this.totalPrice += currentItem.price;
    }
  };

}]);