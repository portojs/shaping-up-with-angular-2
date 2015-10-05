/**
 * Created by Peter on 03.10.2015.
 */
(function(){
    var app = angular.module('store', ['store-products']);

    app.controller('StoreController', function(){
        this.products = gems;
    });

    app.controller('ReviewController', function(){
        this.review = {};
        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        }
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
            reviews: [
                {
                    stars: 4,
                    body: "...",
                    author: "Peter"
                },
                {
                    stars: 3,
                    body: "...",
                    author: "Bobba"
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
            reviews: [
                {
                    stars: 5,
                    body: "...",
                    author: "Peter"
                },
                {
                    stars: 2,
                    body: "...",
                    author: "Bobba"
                }
            ],
            canPurchase: true,
            soldOut: false
        }
    ];
})();
