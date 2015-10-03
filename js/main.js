/**
 * Created by Peter on 03.10.2015.
 */
(function(){
    var app = angular.module('store', []);

    app.controller('StoreController', function(){
        this.product = gem;
    });

    var gem = {
        name: 'Dodecahedron',
        price: 0.5,
        description: '...'
    };
})();
