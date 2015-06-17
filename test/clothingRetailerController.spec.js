describe('ClothingRetailerController', function() {
  beforeEach(module('ClothingRetailer'));

  var shop;

  beforeEach(inject(function($controller) {
    shop = $controller('ClothingRetailerController');
    shop.shoes = { "name" : "Shoes", "price" : 42.00, "available" : 4, "gender" : "women", "category" : "footwear" }
    shop.dress = { "name" : "Dress", "price" : 55.00, "available" : 7, "gender" : "women", "category" : "formal" }
  }));

  it ('initialises with an empty shopping basket', function() {
    expect(shop.basket).toEqual([])
  });

  it ('allows user to add an item to the shopping basket', function() {
    shop.addItem(shop.shoes);
    expect(shop.basket).toEqual([shop.shoes]);
  });

  it ('allows user to remove item from the shopping basket', function() {
    shop.addItem(shop.shoes);
    shop.addItem(shop.dress);
    shop.removeItem(shop.shoes);
    expect(shop.basket).toEqual([shop.dress]);
  });

  it ('displays the total price for the products in the shopping basket', function() {
    shop.addItem(shop.shoes);
    shop.addItem(shop.dress);
    expect(shop.totalPrice).toEqual(97.00);
  });

  describe('vouchers', function() {

    it('allows user to use £5 voucher', function() {
      shop.addItem(shop.dress);
      shop.fivePoundVoucher();
      expect(shop.totalPrice).toEqual(50.00);
    });

    it('allows user to use £10 voucher', function() {
      shop.addItem(shop.dress);
      shop.tenPoundVoucher();
      expect(shop.totalPrice).toEqual(45.00);
    });

    it('does not allow user to use £10 voucher when they spend £50 or less', function() {
      shop.addItem(shop.shoes);
      shop.tenPoundVoucher();
      expect(shop.totalPrice).toEqual(42.00);
    });

  });


});