// document.querySelector('#btn_login_join').addEventListener('click',function () {
//     document.querySelector('#goster').style.display='block'
   
// })
// Import the functions you need from the SDKs you need
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
 
function start(){
  var join=[]
  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);
  var i=0
    $('#btn_l').click(function () {
      
      
         var jMail=$("#jMail").val().trim();
         var jName=$("#jName").val().trim();
         if(jMail=="" || jName==""){
          $("#success").html(`<div class="alert alert-danger" role="alert">
          Zəhmət olmasa məlumatlarınızı daxil edin
        </div>`) 
        setTimeout(function () {
         $("#success").html("")
        },2000)
        
        }
        else{
            var y=push(ref(db,"users"))
            set(y,{
                fullname:jName,
                email:jMail
            }).
            then( ()=>{$("#jMail").val("")
                      $("#jName").val("")
                      $("#success").html("")
                      $("#success").html(`<div class="alert alert-success" role="alert">
                              Məlumat uğurla göndərildi
                            </div>`) 
                      setTimeout(function () {
                        $("#success").html("")
                      },3000)
                    })
                      
        
        
        
       
  
}
    })
    

}

export{
    start
}
