const data = {
    "products": [
        {
            "id": 1,
            "price": "25.00",
            "name": "Ammofos",
            "category": "Apatit Phosagro",
            "slug": "product-inner.html",
            "image": "assets/images/product2.jpg"
        },
        {
            "id": 2,
            "price": "25.00",
            "name": "Ammofos",
            "category": "Apatit Phosagro",
            "slug": "product-inner.html",
            "image": "assets/images/product3.jpg"
        },
        {
            "id": 3,
            "price": "25.00",
            "name": "Ammofos",
            "category": "Apatit Phosagro",
            "slug": "product-inner.html",
            "image": "assets/images/product1.jpg"
        },
        {
            "id": 4,
            "price": "25.00",
            "name": "Ammofos",
            "category": "Apatit Phosagro",
            "slug": "product-inner.html",
            "image": "assets/images/product1.jpg"
        },
        {
            "id": 5,
            "price": "25.00",
            "name": "Ammofos",
            "category": "Apatit Phosagro",
            "slug": "product-inner.html",
            "image": "assets/images/product2.jpg"
        },
        {
            "id": 6,
            "price": "25.00",
            "name": "Ammofos",
            "category": "Apatit Phosagro",
            "slug": "product-inner.html",
            "image": "assets/images/product3.jpg"
        },
        {
            "id": 7,
            "price": "25.00",
            "name": "Ammofos",
            "category": "Apatit Phosagro",
            "slug": "product-inner.html",
            "image": "assets/images/product1.jpg"
        },
        {
            "id": 8,
            "price": "25.00",
            "name": "Ammofos",
            "category": "Apatit Phosagro",
            "slug": "product-inner.html",
            "image": "assets/images/product2.jpg"
        },
        {
            "id": 9,
            "price": "25.00",
            "name": "Ammofos",
            "category": "Apatit Phosagro",
            "slug": "product-inner.html",
            "image": "assets/images/product1.jpg"
        },

    ],
}

const tablinks = document.querySelectorAll('.parent');
//const wrapper = document.querySelector('.product_tab_gallery_sliderbox-first .product_tab_gallery_sliderbox_inner .owl-carousel');

tablinks.forEach(element => {
element.addEventListener('click' ,launchTabbing);
});

function launchTabbing(){
let flag = true
for(key in data){
    const arrayKey = data[key];
    var length = arrayKey.length;
    let html = '<div class="container test slider slider-nav pt-5 pb-5">';
    arrayKey.forEach(element => {
        const name = element.name;
        const category = element.category;
        const price = element.price;
        const id = element.id;
        const image = element.image;
        // wrapper.innerHTML = "";
        html += `<div class="item">
        <div class="box m-auto text-center pt-3 pb-1">
            <img class="mb-3 m-auto" src="./assets/img/book-img1.png" alt="This is book">
            <div class="details w-75 m-auto">
                <h6 class="mt-3">${name}</h6>
                <p>Konstantin Koptelov</p>
                <button type="button" class="btn btn-color w-100 text-light fw-bolder">READ MORE</button>
            </div>
        </div>
    </div>`;

        $('.parent').html(html);
        owlCarouselEvent();
    
    });
    //dddd
function owlCarouselEvent() {
$('[slider-nav]').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 8000,
    responsive:{
        0:{
            items:2,
            margin:13,
        },
        450:{
            items:3,
            margin:13,
        },
        768:{
            items:4,
            margin:13,
        },
        1000:{
            items:6,
            margin: 13,
        }
    }
});
}
    //ddd
   
}
 
}


