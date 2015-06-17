clothingRetailer.controller('ClothingRetailerController', [function() {

  this.basket = [];
  this.totalPrice = 0.00;
  this.fivePoundVoucherUsed = false;
  this.tenPoundVoucherUsed = false;
  this.fifteenPoundVoucherUsed = false;

  this.addItem = function(item) {
    this.basket.push(item);
    this.calculateTotal();
  };

  this.removeItem = function(item) {
    var index = this.basket.indexOf(item);
    this.basket.splice(index, 1);
    this.calculateTotal();
  };

  this.calculateTotal = function() {
    this.totalPrice = 0.00;
    for (var i=0; i<this.basket.length; i++) {
      var currentItem = this.basket[i];
      this.totalPrice += currentItem.price;
    }
  };

  this.fivePoundVoucher = function() {
    if (this.fivePoundVoucherUsed === false) {this.totalPrice -= 5;}
    this.fivePoundVoucherUsed = true;
  };

  this.tenPoundVoucher = function() {
    if (this.totalPrice > 50 && this.tenPoundVoucherUsed === false) {this.totalPrice -= 10;}
    this.tenPoundVoucherUsed = true;
  };

  this.fifteenPoundVoucher = function() {
    if (this.totalPrice > 75 && this.includesFootwear() && this.fifteenPoundVoucherUsed === false) {this.totalPrice -= 15;}
    this.fifteenPoundVoucherUsed = true;
  };

  this.includesFootwear = function() {
    for (var i=0; i<this.basket.length; i++) {
      var currentItem = this.basket[i];
      var footwearCount = 0;
      if (currentItem.category === "footwear") { footwearCount++;}
    }
    if (footwearCount>0) {return true;} else {return false;}
  };

}]);