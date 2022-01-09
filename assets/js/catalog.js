import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';
const firebaseConfig = {
  apiKey: 'AIzaSyCCNWSgMgTn4qKB3wOwPvxcML9y-d0TWKk',
  authDomain: 'book-store-878e9.firebaseapp.com',
  databaseURL: 'https://book-store-878e9-default-rtdb.firebaseio.com',
  projectId: 'book-store-878e9',
  storageBucket: 'book-store-878e9.appspot.com',
  messagingSenderId: '120141196387',
  appId: '1:120141196387:web:992cff5603e82473f39c56',
};
var a = 0;

function Catalog() {
  const app = initializeApp(firebaseConfig);
  var database = getDatabase(app);
 a= 1;
  onValue(ref(database, '/'), (snapshot) => {
    const allBooks = Object.values(snapshot.val().books);

    console.log('allBooks:', allBooks);
  
    function getSlider() {
      return {
        slidesToShow: 4,
        slidesToScroll: 1,
        // asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        responsive:[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              adaptiveHeight: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    }
    var id;
    function More(id){
      $('.slider').hide();
      var more = `
      <div class="more container">
      <div class="row">
          <div class="col-md-7">
              <button type="button" class="btn btn-md">Back</button>
              <p>${year}</p>
              <h1>${name}</h1>
              <p>${author}</p>
              <p>${description}</p>
          </div>
          <div class="col-md-5">
              <img class="w-100 h-100"src=${image} alt="">
          </div>
      </div>
    </div>
      `
      $('.slideContent').append(more);
    }
    function myFunc() {
        $('.loading').hide();
        for (var i in allBooks) {
          console.log(allBooks[i], 'all');

          var content = `
          <div class= "item">
               <div class="box m-auto text-center pt-3 pb-1">
                   <img class="mb-3 m-auto w-75 h-50" src=${allBooks[i].image} alt="This is book">
                  <div class="details w-75 m-auto">
                      <h6 class="mt-3">${(allBooks[i].name).slice(0,20)}...</h6>
                      <p>${allBooks[i].author.slice(0,15)}...</p>
                      <button type="button" class="btn btn-color w-100 text-light fw-bolder" id="readMore">READ MORE</button>
                  </div>
              </div>
          </div>`;
          $('.slider').append(content);
          $('#readMore').click(console.log(allBooks[i].id));
        }
        $('.slider-nav').slick(getSlider());
      
        
      
    }

    myFunc();     

    $('#Fantastic').on('click', function () {
      window.location.reload();
      
      for (var i in allBooks) {
        if (allBooks[i].type === 'Fantastic') {
          console.log(allBooks[i], 'fatastik');
          var content = `
              <div class= "item">
                   <div class="box m-auto text-center pt-3 pb-1">
                       <img class="mb-3 m-auto w-75 h-50" src=${allBooks[i].image} alt="This is book">
                      <div class="details w-75 m-auto">
                          <h6 class="mt-3">${(allBooks[i].name).slice(0,20)}...</h6>
                          <p>${allBooks[i].author.slice(0,15)}</p>
                          <button type="button" class="btn btn-color w-100 text-light fw-bolder">READ MORE</button>
                      </div>
                  </div>
              </div>`;

          $('.slider').append(content);
          $('.slider-nav').slick('unslick');
          $('.slider-nav').not('.slick-initialized').slick(getSlider());
        }
      }
      Bestseller();

      window.stop();
      return false;
    });

    function Bestseller() {
      
      for (var i in allBooks) {
        if (allBooks[i].type === 'Bestseller') {
          var content = `
          <div class= "item">
               <div class="box m-auto text-center pt-3 pb-1">
                   <img class="mb-3 m-auto w-75 h-50" src=${allBooks[i].image} alt="This is book">
                  <div class="details w-75 m-auto">
                      <h6 class="mt-3">${(allBooks[i].name).slice(0,20)}...</h6>
                      <p>${allBooks[i].author.slice(0,15)}...</p>
                      <button type="button" class="btn btn-color w-100 text-light fw-bolder">READ MORE</button>
                  </div>
              </div>
          </div>`;

          $('.besteller').append(content);
          $('.slider-nav').slick('unslick');
          $('.slider-nav').not('.slick-initialized').slick(getSlider());
        }
      }
    }
    $('#Bestseller').click(function () {
      window.location.reload();
      
      for (var i in allBooks) {
        if (allBooks[i].type === 'Bestseller') {
          var content = `
          <div class= "item">
               <div class="box m-auto text-center pt-3 pb-1">
                   <img class="mb-3 m-auto w-75 h-50" src=${allBooks[i].image} alt="This is book">
                  <div class="details w-75 m-auto">
                      <h6 class="mt-3">${(allBooks[i].name).slice(0,20)}...</h6>
                      <p>${allBooks[i].author.slice(0,15)}...</p>
                      <button type="button" class="btn btn-color w-100 text-light fw-bolder">READ MORE</button>
                  </div>
              </div>
          </div>`;

          $('.slider').append(content);
          $('.slider-nav').slick('unslick');
          $('.slider-nav').not('.slick-initialized').slick(getSlider());
        }
      }
      window.stop();
      
    });
    Bestseller();

    $('#Baby').on('click', function () {
      window.location.reload();
      
      for (var i in allBooks) {
        if (allBooks[i].type === 'Baby') {
          console.log(allBooks[i], 'Baby');
          var content = `
              <div class= "item">
                   <div class="box m-auto text-center pt-3 pb-1">
                       <img class="mb-3 m-auto w-75 h-50" src=${allBooks[i].image} alt="This is book">
                      <div class="details w-75 m-auto">
                          <h6 class="mt-3">${(allBooks[i].name).slice(0,20)}...</h6>
                          <p>${allBooks[i].author.slice(0,15)}</p>
                          <button type="button" class="btn btn-color w-100 text-light fw-bolder">READ MORE</button>
                      </div>
                  </div>
              </div>`;

          $('.slider').append(content);
          $('.slider-nav').slick('unslick');
          $('.slider-nav').not('.slick-initialized').slick(getSlider());
        }
      }
      Bestseller();

      window.stop();
      return false;
    });

    $('#All').click(function All() {
   
      window.location.reload();
      for (var i in allBooks) {
        console.log(allBooks[i], 'all');
        var content = `
          <div class= "item">
               <div class="box m-auto text-center pt-3 pb-1">
                   <img class="mb-3 m-auto w-75 h-50" src=${allBooks[i].image} alt="This is book">
                  <div class="details w-75 m-auto">
                      <h6 class="mt-3">${(allBooks[i].name).slice(0,20)}...</h6>
                      <p>${allBooks[i].author.slice(0,15)}...</p>
                      <button type="button" class="btn btn-color w-100 text-light fw-bolder">READ MORE</button>
                  </div>
              </div>
          </div>`;
        $('.slider').append(content);
      }
      $('.slider-nav').slick(getSlider());
      $('.slider').slick('unslick');
      $('.slider-nav').not('.slick-initialized').slick(getSlider());
    });
    window.stop();
    
  });
}

export { Catalog };
