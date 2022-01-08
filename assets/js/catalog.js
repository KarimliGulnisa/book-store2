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

function Catalog() {
  const app = initializeApp(firebaseConfig);
  var database = getDatabase(app);

  onValue(ref(database, '/'), (snapshot) => {
    const allBooks = Object.values(snapshot.val().books);

    console.log('allBooks:', allBooks);

    

      // for (var i in allBooks) {
      //   console.log(allBooks[i], 'all');
      //   var content = `
      //   <div class= "item">
      //        <div class="box m-auto text-center pt-3 pb-1">
      //            <img class="mb-3 m-auto w-75" src=${allBooks[i].image} alt="This is book">
      //           <div class="details w-75 m-auto">
      //               <h6 class="mt-3">${allBooks[i].name}</h6>
      //               <p>${allBooks[i].author}</p>
      //               <button type="button" class="btn btn-color w-100 text-light fw-bolder">READ MORE</button>
      //           </div>
      //       </div>
      //   </div>`;
      //   $('.owl-carousel').append(content);
      // }
      // $(".owl-carousel").owlCarousel({
      //   loop: true,
      //   margin: 10,
      //   nav: true,
      //   navText: [
      //     "<i class='fa fa-caret-left'></i>",
      //     "<i class='fa fa-caret-right'></i>"
      //   ],
      //   autoplay: true,
      //   autoplayHoverPause: true,
      //   responsive: {
      //     0: {
      //       items: 1
      //     },
      //     600: {
      //       items: 3
      //     },
      //     1000: {
      //       items: 5
      //     }
      //   }
      // });

      function All() {
      for (var i in allBooks) {
        console.log(allBooks[i], 'all');
        var content = `
        <div class= "item">
             <div class="box m-auto text-center pt-3 pb-1">
                 <img class="mb-3 m-auto w-75" src=${allBooks[i].image} alt="This is book">
                <div class="details w-75 m-auto">
                    <h6 class="mt-3">${allBooks[i].name}</h6>
                    <p>${allBooks[i].author}</p>
                    <button type="button" class="btn btn-color w-100 text-light fw-bolder">READ MORE</button>
                </div>
            </div>
        </div>`;
        $('.owl-carousel').append(content);
      }
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: [
          "<i class='fa fa-caret-left'></i>",
          "<i class='fa fa-caret-right'></i>"
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      });
    }
    All()
    
 $('#Fantastic').on('click',function(){
      for (var i in allBooks) {
            if (allBooks[i].type === 'Fantastic') {
              console.log(allBooks[i], 'fatastik');
              var content = `
              <div class= "item">
                   <div class="box m-auto text-center pt-3 pb-1">
                       <img class="mb-3 m-auto w-75" src=${allBooks[i].image} alt="This is book">
                      <div class="details w-75 m-auto">
                          <h6 class="mt-3">${allBooks[i].name}</h6>
                          <p>${allBooks[i].author}</p>
                          <button type="button" class="btn btn-color w-100 text-light fw-bolder">READ MORE</button>
                      </div>
                  </div>
              </div>`;

              $('.owl-carousel').append(content);
            }
            
          }
          $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            navText: [
              "<i class='fa fa-caret-left'></i>",
              "<i class='fa fa-caret-right'></i>"
            ],
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
              0: {
                items: 1
              },
              600: {
                items: 3
              },
              1000: {
                items: 5
              }
            }
          });
            
    })
    // function getSlider() {
    //   return {
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     // asNavFor: '.slider-for',
    //     dots: false,
    //     focusOnSelect: true,
    //     responsive: [
    //       {
    //         breakpoint: 1100,
    //         settings: {
    //           slidesPerRow: 2,
    //           slidesToScroll: 1,
    //         },
    //       },
    //     ],
    //   };
    // }
    // function myFunc() {
      
    //   for (var i in allBooks) {
    //     console.log(allBooks[i], 'all');
    //     var content = `
    //     <div class= "item">
    //          <div class="box m-auto text-center pt-3 pb-1">
    //              <img class="mb-3 m-auto w-75" src=${allBooks[i].image} alt="This is book">
    //             <div class="details w-75 m-auto">
    //                 <h6 class="mt-3">${allBooks[i].name}</h6>
    //                 <p>${allBooks[i].author}</p>
    //                 <button type="button" class="btn btn-color w-100 text-light fw-bolder">READ MORE</button>
    //             </div>
    //         </div>
    //     </div>`;
    //     $('.slider').append(content);
    //   }
    //   $('.slider-nav').slick(getSlider());
    // }
    // myFunc();
    // $('#Fantastic').on('click',function(){

    //   for (var i in allBooks) {
    //         if (allBooks[i].type === 'Fantastic') {
    //           console.log(allBooks[i], 'fatastik');
    //           var content = `
    //           <div class= "item">
    //                <div class="box m-auto text-center pt-3 pb-1">
    //                    <img class="mb-3 m-auto w-75" src=${allBooks[i].image} alt="This is book">
    //                   <div class="details w-75 m-auto">
    //                       <h6 class="mt-3">${allBooks[i].name}</h6>
    //                       <p>${allBooks[i].author}</p>
    //                       <button type="button" class="btn btn-color w-100 text-light fw-bolder">READ MORE</button>
    //                   </div>
    //               </div>
    //           </div>`;

    //           $('.slider').append(content);
    //           $(".slider-nav").slick('unslick')
    //           $(".slider-nav").html(content);
    //           $(".slider-nav").not('.slick-initialized').slick(getSlider());
    //         }
            
    //       }
            
    // })

    // function Bestseller(){
    //   for (var i in allBooks) {
    //     if (allBooks[i].type === 'Bestseller') {
    //       console.log(allBooks[i], 'best');
    //       var content = `
    //       <div class= "item">
    //            <div class="box m-auto text-center pt-3 pb-1">
    //                <img class="mb-3 m-auto w-75" src=${allBooks[i].image} alt="This is book">
    //               <div class="details w-75 m-auto">
    //                   <h6 class="mt-3">${allBooks[i].name}</h6>
    //                   <p>${allBooks[i].author}</p>
    //                   <button type="button" class="btn btn-color w-100 text-light fw-bolder">READ MORE</button>
    //               </div>
    //           </div>
    //       </div>`;

    //       $('.besteller').append(content);
    //       $(".slider-nav").slick('unslick')
    //       $(".slider-nav").html(content);
    //       $(".slider-nav").not('.slick-initialized').slick(getSlider());
    //     }
        
    //   }
    // }

    // Bestseller()

    // $('#Fantastic').click(function Fantastic() {
    //   for (var i in allBooks) {
    //     if (allBooks[i].type === 'Fantastic') {
    //       console.log(allBooks[i], 'fatastik');
    //       var content = `
    //       <div class= "item">
    //            <div class="box m-auto text-center pt-3 pb-1">
    //                <img class="mb-3 m-auto w-75" src=${allBooks[i].image} alt="This is book">
    //               <div class="details w-75 m-auto">
    //                   <h6 class="mt-3">${allBooks[i].name}</h6>
    //                   <p>${allBooks[i].author}</p>
    //                   <button type="button" class="btn btn-color w-100 text-light fw-bolder">READ MORE</button>
    //               </div>
    //           </div>
    //       </div>`;
    //       $('.slider').append(content);
    //     }
    //   }
    //   $('.slider-nav').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider-for',
    //     dots: false,
    //     focusOnSelect: true,
    //   });

    //   $('.slider').slick('unslick');
    //   // $(".slider").html(data);
    //   $('.slider').not('.slick-initialized').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider-for',
    //     dots: false,
    //     focusOnSelect: true,
    //   });
    // });

    // $('#All').click(function All() {
    //   for (var i in allBooks) {
    //     console.log(allBooks[i], 'all');
    //     var content = `
    //       <div class= "item">
    //            <div class="box m-auto text-center pt-3 pb-1">
    //                <img class="mb-3 m-auto w-75" src=${allBooks[i].image} alt="This is book">
    //               <div class="details w-75 m-auto">
    //                   <h6 class="mt-3">${allBooks[i].name}</h6>
    //                   <p>${allBooks[i].author}</p>
    //                   <button type="button" class="btn btn-color w-100 text-light fw-bolder">READ MORE</button>
    //               </div>
    //           </div>
    //       </div>`;
    //     $('.slider').append(content);
    //   }
    //   $('.slider-nav').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider-for',
    //     dots: false,
    //     focusOnSelect: true,
    //   });

    //   $('.slider').slick('unslick');
    //   // $(".slider").html(data);
    //   $('.slider').not('.slick-initialized').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider-for',
    //     dots: false,
    //     focusOnSelect: true,
    //   });
    // });
  });
}

export { Catalog };
