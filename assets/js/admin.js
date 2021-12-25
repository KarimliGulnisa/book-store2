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

   
    onValue(ref(db,"users/"),(snapshot=>{
    var data=snapshot.val() 
    var value=Object.values(data)
    $("#tBody").empty();
    for (let i=0; i<value.length;i++){


        var tableJoin=$(`<tr>
        <th>${i+1}</th>
        <th>${value[i].fullname}</th>
        <th>${value[i].email}</th>
        </tr>`)
        $("#tBody").append(tableJoin)
    }


}))
            
     
    
   
    
 
}
export{
    start
}