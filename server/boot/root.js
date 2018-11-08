'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  server.use(router);

  
};
module.exports = function(app) {
  
  var mysqlDs = app.dataSources.MysqlDb;
  var client = app.models.client;
  var product = app.models.product;
  var shoppingCart = app.models.shoppingCart;
  var toBuy = app.models.toBuy;

  // first autoupdate the `Author` model to avoid foreign key constraint failure
  mysqlDs.autoupdate('client', function(err) {
    if (err) throw err;
    console.log('\nAutoupdated table `client`.');

    mysqlDs.autoupdate('shoppingCart', function(err) {
      if (err) throw err;
      console.log('\nAutoupdated table `ShoppingCart`.');
      // at this point the database table `Book` should have one foreign key `authorId` integrated
      mysqlDs.autoupdate('toBuy', function(err) {
        if (err) throw err;
        console.log('\nAutoupdated table `toBuy`.');
        mysqlDs.autoupdate('product', function(err) {
          if (err) throw err;
          console.log('\nAutoupdated table `Product`.');
          
         
          
        });
        
      });
    });
  });
  client.nestRemoting('shoppingCarts');
  

};