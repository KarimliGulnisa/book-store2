import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getDatabase,
  ref,
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
const About = () => {
  const app = initializeApp(firebaseConfig);
  var database = getDatabase(app);

  onValue(ref(database, "/about"), (snapshot) => {
    const aTitle = document.querySelector(".aboutTitle");
    const aImage = document.querySelector(".image");
    const aDescription = document.querySelector(".description");
    const about = Object.values(snapshot.val());
    aTitle.innerHTML = about[2];
    aDescription.innerHTML = about[0];
    aImage.src = about[1];
  });
};

export { About };
