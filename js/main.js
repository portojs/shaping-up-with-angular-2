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
            images: [
                {
                    full: 'img/Chuck.jpg',
                    thumb: 'img/Chuck_thumb.jpg'
                },
                {
                    full: 'img/Thug.jpg',
                    thumb: 'img/Thug_thumb.jpg'
                }
            ],
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'Bibicahedron',
            price: 99.2,
            description: '...',
            images: [
                {
                    full: 'img/Gunman.jpg',
                    thumb: 'img/Gunman_thumb.jpg'
                },
                {
                    full: 'img/Gunwoman.jpg',
                    thumb: 'img/Gunwoman_thumb.jpg'
                }
            ],
            canPurchase: true,
            soldOut: false
        }
    ];
})();
