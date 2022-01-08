import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyCCNWSgMgTn4qKB3wOwPvxcML9y-d0TWKk",
  authDomain: "book-store-878e9.firebaseapp.com",
  databaseURL: "https://book-store-878e9-default-rtdb.firebaseio.com",
  projectId: "book-store-878e9",
  storageBucket: "book-store-878e9.appspot.com",
  messagingSenderId: "120141196387",
  appId: "1:120141196387:web:992cff5603e82473f39c56",
};

function Catalog (){

      $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1008,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
           
          ]
      });
     
      $('a[data-slide]').click(function(e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider-nav').slick('slickGoTo', slideno - 1);
      });



    const app = initializeApp(firebaseConfig);
    var database = getDatabase(app);

  onValue(ref(database, "/"), (snapshot) => {
    const allBooks = Object.values(snapshot.val().books);

    for(let i=0;i<allBooks.length;i++){
      var slide=$("<div class='item '>").html(`
                    <div class="box m-auto text-center pt-3 pb-1">
                        <img class="mb-3 m-auto" src="${allBooks[i].image}" alt="This is book">
                        <div class="details w-75 m-auto">
                            <h6 class="mt-3">${allBooks[i].name}</h6>
                            <p>${allBooks[i].author}</p>
                            <button type="button" class="btn btn-color w-100 text-light fw-bolder">READ MORE</button>
                        </div>
                    </div>
                </div>`)
      
      $(".slickslide").append(slide)
    }
   
    
  });

}


export {Catalog}




