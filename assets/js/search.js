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
      var searchInput=$(".searchInput").val();
      
        for(let i=0;i<allBooks.length;i++){
          console.log(allBooks[i].name)
         
          
          // console.log("allBooks:", allBooks[i].name);
          if (searchInput===allBooks[i].name) {

            var searchData=`<div class="carousel-item active">
            <div class="card mb-3 col-6 ml-auto mt-5 " style="max-width: 100%;height: 504px;">              
            <div class="row no-gutters">
            <div class="col-md-4">
              <img src="${allBooks[i].image}" style="width:100% " alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${allBooks[i].name}</h5>
                <p class="card-text">${allBooks[i].author}</p>
                <p class="card-text">${allBooks[i].description}</p>
              </div>
            </div>
          </div>
          </div>
          </div>`
          $(".search-card").append(searchData)
          }

        }
          
  
    });
  })









  
}
export{
  search
}