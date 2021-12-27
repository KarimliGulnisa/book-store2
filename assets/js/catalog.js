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
           
          ],
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

    console.log("allBooks:", allBooks);
   
    
  });

}


export {Catalog}




