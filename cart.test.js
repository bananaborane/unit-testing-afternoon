const cart = require('./cart');
const cars = require('./data/cars');

describe('Cart Properties:', ()=>{
    test('Cart, by default, should be an empty array.', ()=>{
        expect(Array.isArray(cart.cart)).toEqual(true);
        expect(cart.cart.length).toEqual(0);
    });

    test('Total, by default, shoudl be 0', ()=>{
        expect(cart.total).toEqual(0);
    })
})

describe('Cart Methods:', ()=>{
    afterEach(function(){
        cart.cart = [];
        cart.total = 0;
    }); // resets the cart array and the total after each test


    test('addToCart method should increase total count by cart items price', ()=>{
        cart.addToCart(cars[0])
        cart.addToCart(cars[4])
        cart.addToCart(cars[3]);

        expect(cart.total).toEqual(cars[0].price + cars[4].price + cars[3].price);
    });

    test('addToCart() should add a car to the cart array.', function() {
        cart.addToCart( cars[0] );
        cart.addToCart( cars[1] );
    
        expect( cart.cart.length ).toEqual( 2 );
        expect( cart.cart[0] ).toEqual( cars[0] );
        expect( cart.cart[1] ).toEqual( cars[1] );
      });

      test('removeFromCart() should remove a car object from the cart array.', function() {
        cart.addToCart( cars[0] );
        cart.addToCart( cars[1] );
        cart.addToCart( cars[2] );
      
        cart.removeFromCart( 1, cars[1].price );
      
        expect( cart.cart.length ).toEqual( 2 );
        expect( cart.cart[0] ).toEqual( cars[0] );
        expect( cart.cart[1] ).toEqual( cars[2] );
      });
    
      test('removeFromCart() should decrease the total property.', function() {
        cart.addToCart( cars[0] );
        cart.addToCart( cars[8] );
        cart.addToCart( cars[2] );
    
        cart.removeFromCart( 0, cars[0].price );
        cart.removeFromCart( 1, cars[2].price );
    
        expect( cart.total ).toEqual( cars[8].price );
      });
    
      test('checkout() should empty the cart array and set total to 0.', function() {
        cart.addToCart( cars[0] );
        cart.addToCart( cars[1] );
        cart.addToCart( cars[2] );
        cart.addToCart( cars[3] );
    
        cart.checkout();
    
        expect( cart.cart.length ).toEqual( 0 );
        expect( cart.total ).toEqual( 0 );
      });
})




