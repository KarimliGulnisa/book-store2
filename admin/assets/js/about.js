import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getDatabase,
  ref,
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
const About = () => {
  const title = document.querySelector("#aboutTitle");
  const image = document.querySelector("#aboutBookImageUrl");
  const description = document.querySelector("#aboutDescription");
  const btn = document.querySelector(".btnAboutInfoAdd");

  const app = initializeApp(firebaseConfig);
  var database = getDatabase(app);

  const addStore = () => {
    const about = {
      title: title.value,
      image: image.value,
      description: description.value,
    };
    console.log(about);

    if (!title.value || !description.value || !image.value) {
    } else {
      set(ref(database, "about"), about);
      (title.value = ""), (description.value = ""), (image.value = "");
    }
  };

  btn.addEventListener("click", addStore);

  onValue(ref(database, "/"), (snapshot) => {
    const about = Object.values(snapshot.val().about);
    console.log("about:", about);
  });
};

export { About };
