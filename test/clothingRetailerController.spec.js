describe('ClothingRetailerController', function() {
  beforeEach(module('ClothingRetailer'));

  var shop;

  beforeEach(inject(function($controller) {
    shop = $controller('ClothingRetailerController');
    shop.shoes = { "name" : "Suede Shoes, Blue", "price" : 42.00, "available" : 4, "gender" : "women", "category" : "footwear" }
  }));

  it ('initialises with an empty shopping cart', function() {
    expect(shop.shoppingCart).toEqual([])
  });

  it ('allows user to add an item to the shopping cart', function() {
    shop.addItem(shop.shoes);
    expect(shop.shoppingCart).toEqual([shop.shoes]);
  });


});