describe('ClothingRetailerController', function() {
  beforeEach(module('ClothingRetailer'));

  var shop;

  beforeEach(inject(function($controller) {
    shop = $controller('ClothingRetailerController');
  }));

  it ('initialises with an empty shopping cart', function() {
    expect(shop.shoppingCart).toEqual([])
  });

});