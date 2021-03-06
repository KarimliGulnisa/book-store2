import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

import {getDatabase, ref, set,onValue } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyCCNWSgMgTn4qKB3wOwPvxcML9y-d0TWKk",
    authDomain: "book-store-878e9.firebaseapp.com",
    databaseURL: "https://book-store-878e9-default-rtdb.firebaseio.com",
    projectId: "book-store-878e9",
    storageBucket: "book-store-878e9.appspot.com",
    messagingSenderId: "120141196387",
    appId: "1:120141196387:web:992cff5603e82473f39c56"
  };
  function start() {
      
          const app = initializeApp(firebaseConfig);

          const db = getDatabase(app);
          if (localStorage.getItem("admin")==null) {
              $(".admin-login").removeClass("d-none");
              $(".main").addClass("d-none")
              $(".admin_panel_left_side").addClass("d-none")
          }
          
          $("#login").click(()=>{
            var username=$("#username").val();
            var password=$("#password").val();
            onValue(ref(db,"admin/"),snapshot=>{
                var data=snapshot.val();
               if (username==data.login && password==data.password) {
                   $(".admin-login").addClass("d-none")
                   $(".main").removeClass("d-none")
                   $(".admin_panel_left_side").removeClass("d-none")
                    localStorage.setItem("admin",`{"name":${data.login},
                    "password":${data.password}`)
                    
               }
               else{
                $("#success").html(`<div class="alert alert-danger" role="alert">
                <h4>Error</h4>
                Please check form
              </div>`) 
              setTimeout(function () {
               $("#success").html("")
              },2000)
               }
            })
        })
        $(".logout").click(()=>{
            localStorage.removeItem("admin")
        })
             
        onValue(ref(db,"users"),(snapshot=>{
            var data=snapshot.val() 
            var value=Object.values(data)
            $("#tBody").empty();
            for (let i=0; i<value.length;i++){
                console.log(value[i].fullname)
                
                var tableJoin=$(`<tr>
                <th>${i+1}</th>
                <th>${value[i].fullname}</th>
                <th>${value[i].email}</th>
                </tr>`)
                $("#tBody").append(tableJoin)
            }
        
        
        }))
                    
             
            onValue(ref(db,"contactUsers"),snapshot=>{
                var data=snapshot.val()
                var value=Object.values(data)
                $(".contact-data").empty();
                for(let i=0; i<value.length;i++){
                    var contactData=` <tr>
                    <th>${i+1}</th>
                    <th>${value[i].name}</th>
                    <th>${value[i].email}</th>
                    <th>${value[i].adress}</th>
                    <th>${value[i].tel}</th>
                  </tr>`  
                $(".contact-data").append(contactData);
        
                }
            })
           
            
 
    
 
}
export{
    start
}
