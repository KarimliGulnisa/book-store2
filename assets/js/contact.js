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

  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);
    $('#btn_l').click(function () {
      
      
         var jMail=$("#jMail").val().trim();
         var jName=$("#jName").val().trim();
         if(jMail=="" || jName==""){
          $("#success").html(`<div class="alert alert-danger" role="alert">
          <h4>Error</h4>
                Please check form
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
                      Form sent successfully
                            </div>`) 
                      setTimeout(function () {
                        $("#success").html("")
                      },3000)
                    })
                      
        
        
        
       
  
}
    })
    $("#btnSend").click(()=>{
        var contactName=$(".contact-name").val()
        var contactEmail=$(".contact-email").val()
        var contactAdress=$(".contact-adress").val()
        var contactTel=$(".contact-tel").val()

        if(contactName=="" || contactEmail==""||contactAdress=="" || contactTel==""){
          $("#contact-alert").html(`<div class="alert alert-danger" role="alert">
          <h4>Error</h4>
                Please check form
        </div>`) 
        setTimeout(function () {
         $("#contact-alert").html("")
        },2000)
        
        }
        else{
          var contactId=push(ref(db,"contactUsers"))
          set(contactId,{
            name:contactName,
            email:contactEmail,
            adress:contactAdress,
            tel:contactTel
          }).then(()=>{
                      $(".contact-name").val("")
                      $(".contact-email").val("")
                      $(".contact-adress").val("")
                      $(".contact-tel").val("")
                      $("#contact-alert").html(`<div class="alert alert-success" role="alert">
                          Form  sent successfully
                            </div>`) 
                      setTimeout(function () {
                        $("#contact-alert").html("")
                      },3000)
          })

        }
    })

}

export{
    start
}
