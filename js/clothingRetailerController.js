clothingRetailer.controller('ClothingRetailerController', [function() {

  this.basket = [];
  this.totalPrice = 0.00;
  this.fivePoundVoucherUsed = false;
  this.tenPoundVoucherUsed = false;
  this.fifteenPoundVoucherUsed = false;

  this.addItem = function(item) {
    if (item.available > 0) {
    this.basket.push(item);
    this.calculateTotal();
    }
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
    if (this.fivePoundVoucherUsed === false && this.totalPrice > 5) {
      this.totalPrice -= 5;
      this.fivePoundVoucherUsed = true;}
  };

  this.tenPoundVoucher = function() {
    if (this.totalPrice > 50 && this.tenPoundVoucherUsed === false) {
      this.totalPrice -= 10;
      this.tenPoundVoucherUsed = true;}
  };

  this.fifteenPoundVoucher = function() {
    if (this.totalPrice > 75 && this.includesFootwear() && this.fifteenPoundVoucherUsed === false) {
      this.totalPrice -= 15;
      this.fifteenPoundVoucherUsed = true;}
  };

  this.includesFootwear = function() {
    for (var i=0; i<this.basket.length; i++) {
      var currentItem = this.basket[i];
      var footwearCount = 0;
      if (currentItem.category === "Footwear") { footwearCount++;}
    }
    if (footwearCount>0) {return true;} else {return false;}
  };

  this.products = [
  {
    "name" : "Almond Toe Court Shoes, Patent Black",
    "price" : 99.00,
    "available" : 5,
    "gender" : "Women",
    "category" : "Footwear",
    "image" : "public/imgs/almondtoe.jpeg"
  },
  {
    "name" : "Suede Shoes, Blue",
    "price" : 42.00,
    "available" : 4,
    "gender" : "Women",
    "category" : "Footwear",
    "image" : "public/imgs/bluesuede.jpg"
  },
  {
    "name" : "Gold Button Cardigan, Black",
    "price" : 167.00,
    "available" : 6,
    "gender" : "Women",
    "category" : "Casual",
    "image" : "public/imgs/goldbutton.jpg"
  },
  {
    "name" : "Cotton Shorts, Medium Red",
    "price" : 30.00,
    "available" : 5,
    "gender" : "Women",
    "category" : "Casual",
    "image" : "public/imgs/cottonshorts.jpg"
  },
  {
    "name" : "Bird Print Dress, Black",
    "price" : 270.00,
    "available" : 10,
    "gender" : "Women",
    "category" : "Formal",
    "image" : "public/imgs/birdprint.jpeg"
  },
  {
    "name" : "Mid Twist Cut-Out Dress, Pink",
    "price" : 540.00,
    "available" : 5,
    "gender" : "Women",
    "category" : "Formal",
    "image" : "public/imgs/midtwist.jpg"
  },
  {
    "name" : "Leather Driver Saddle Loafers, Tan",
    "price" : 34.00,
    "available" : 12,
    "gender" : "Men",
    "category" : "Footwear",
    "image" : "public/imgs/leatherdriver.jpg"
  },
  {
    "name" : "Flip Flops, Red",
    "price" : 19.00,
    "available" : 6,
    "gender" : "Men",
    "category" : "Footwear",
    "image" : "public/imgs/flipflopsred.jpg"
  },
  {
    "name" : "Flip Flops, Blue",
    "price" : 19.00,
    "available" : 0,
    "gender" : "Men",
    "category" : "Footwear",
    "image" : "public/imgs/flipflopsblue.jpeg"
  },
  {
    "name" : "Fine Stripe Short Sleeve Shirt, Grey",
    "price" : 49.99,
    "available" : 9,
    "gender" : "Men",
    "category" : "Casual",
    "image" : "public/imgs/finestripegrey.jpeg"
  },
  {
    "name" : "Fine Stripe Short Sleeve Shirt, Green",
    "price" : 39.99,
    "available" : 3,
    "gender" : "Men",
    "category" : "Casual",
    "image" : "public/imgs/finestripegreen.jpg"
  },
  {
    "name" : "Sharkskin Waistcoat, Charcoal",
    "price" : 75.00,
    "available" : 2,
    "gender" : "Men",
    "category" : "Formal",
    "image" : "public/imgs/sharkskin.jpg"
  },
  {
    "name" : "Lightweight Patch Pocket Blazer, Deer",
    "price" : 175.50,
    "available" : 1,
    "gender" : "Men",
    "category" : "Formal",
    "image" : "public/imgs/lightweight.jpeg"
  }
]

}]);

