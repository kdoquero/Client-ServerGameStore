'use strict';

var config = require('../../server/config.json');
var path = require('path');
var app = require('../../server/server');
const senderAddress = "gamestorecertif@gmail.com";
module.exports = function (Client) {
    var mysqlDs = app.dataSources.MysqlDb;
    //send verification email after registration
    Client.afterRemote('create', function (context, ClientInstance, next) {
        console.log('> Client.afterRemote triggered');

        var options = {
            type: 'email',
            to: ClientInstance.email,
            from: senderAddress,
            subject: 'Thanks for registering.',
            template: path.resolve(__dirname, '../../server/views/verify.ejs'),
            redirect: 'http://gamestore.ovh',
            text: '{href}',
            user: Client
        };

        ClientInstance.verify(options, function (err, response, next) {
            if (err) {
                Client.deleteById(ClientInstance.id);
                return next(err);
            }
            console.log(ClientInstance);
            var shoppingCart = app.models.shoppingCart;
                    shoppingCart.create([{
                        total: 0,
                        clientId: response.uid
                    }]);
            console.log('> verification email sent:', response);
            
            //   context.res.render('response', {
            //     title: 'Signed up successfully',
            //     content: 'Please check your email and click on the verification link ' -
            //         'before logging in.',
            //     redirectTo: '/',
            //     redirectToLinkText: 'Log in'
            //   });
        });
    })
};
