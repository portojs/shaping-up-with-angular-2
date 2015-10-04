/**
 * Created by Peter on 03.10.2015.
 */
(function(){
    var app = angular.module('store', []);

    app.controller('StoreController', function(){
        this.products = gems;
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 202.5,
            description: '...',
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'Bibicahedron',
            price: 99.2,
            description: '...',
            canPurchase: true,
            soldOut: false
        }
    ];
})();
