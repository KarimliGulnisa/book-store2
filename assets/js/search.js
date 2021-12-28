import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {getDatabase, ref, set,push,onValue } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// const database = getDatabase();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCNWSgMgTn4qKB3wOwPvxcML9y-d0TWKk",
    authDomain: "book-store-878e9.firebaseapp.com",
    databaseURL: "https://book-store-878e9-default-rtdb.firebaseio.com",
    projectId: "book-store-878e9",
    storageBucket: "book-store-878e9.appspot.com",
    messagingSenderId: "120141196387",
    appId: "1:120141196387:web:992cff5603e82473f39c56"
  };

  // Initialize Firebase
 
function search(){
  const app = initializeApp(firebaseConfig);
  var db = getDatabase(app);

  $(".search-b").click(()=>{

    onValue(ref(db, "/"), (snapshot) => {
      const allBooks = Object.values(snapshot.val().books);
      // console.log("allBooks:", allBooks);
      var searchInput=$(".searchInput").val().trim();
        $(".search-card").empty()
        for(let i=0;i<allBooks.length;i++){
          // console.log(allBooks[i].name)
         
          // console.log(searchInput)
          var book=allBooks[i].name.trim().toLowerCase();
          // console.log("allBooks:", allBooks[i].name);
        
          if (allBooks[i].name.trim().includes(searchInput) && searchInput.length>0|| book.includes(searchInput) && searchInput.length>0) {
            $(".alert").addClass("d-none")
            $(".carousel").removeClass("d-none")
            var searchData=`<div class="carousel-item mt-3" style="width:100%" >
            <div class="w-100 d-flex justify-content-between align-item-center">

            <img src="${allBooks[i].image}" class="d-block w-50 h-100" alt="...">
            <div class="ml-3 w-50">
            <h4>${allBooks[i].name}</h4>
            <p class="mt-3">${allBooks[i].author}</p>
            <p style="max-height:220px; text-overflow: ellipsis;overflow: hidden;">${allBooks[i].description}</p>
            </div>  
            </div>
          </div>`
          
          } 
          else{
            $(".carousel").addClass("d-none")
            $(".alert").removeClass("d-none")
              
          }
        
          $(".search-card").append(searchData)
          $('.carousel-item').first().addClass('active');
          
        }
          
  
    });
  })









  
}
export{
  search
}