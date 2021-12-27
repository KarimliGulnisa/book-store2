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
  appId: "1:120141196387:web:992cff5603e82473f39c56"
};
const Store = () => {
  const app = initializeApp(firebaseConfig);
  var database = getDatabase(app);

  const allBooks = [];
  const search = document.querySelector("#search");
  const inputName = document.querySelector("#bookName");
  const inputAuthor = document.querySelector("#AuthorName");
  const inputImg = document.querySelector("#BookImageUrl");
  const publicationYear = document.querySelector("#PublicationYear");
  const inputDescription = document.querySelector("#Description");
  const inputType = document.querySelector("#BookType");
  const btn = document.querySelector(".btnAddBook");
  const error = document.querySelector(".error");
  const datalist = document.querySelector(".datalist");

  search.onkeyup = (e) => {
    datalist.innerHTML = "";
    fetch("https://goodreads-books.p.rapidapi.com/search?q=" + e.target.value, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "goodreads-books.p.rapidapi.com",
        "x-rapidapi-key": "9d9588302emsh58804fa5a30d4d9p1b947ajsn659ea6ae2269",
      },
      data: {
        q: e.target.value,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        res?.map((item) => {
          var li = document.createElement("li");
          li.innerHTML = item?.title;
          li.id = item?.id;
          li.addEventListener("click", () => {
            inputName.value = item.title;
            inputAuthor.value = item.author;
            inputImg.value = item.smallImageURL;
            publicationYear.value = item.publicationYear;
          });
          datalist.appendChild(li);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const addBook = () => {
    const book = {
      name: inputName.value,
      author: inputAuthor.value,
      image: inputImg.value,
      description: inputDescription.value,
      type: inputType.value,
      id: push(ref(database, "/")).key,
    };
    if (
      !inputName.value ||
      !inputAuthor.value ||
      !inputImg.value ||
      !inputDescription.value ||
      !inputType.value
    ) {
      error.style.display = "block";
    } else {
      allBooks.push(book);
      set(ref(database, "/"), { allBooks });
      error.style.display = "none";
    }

    (inputName.value = ""),
      (inputAuthor.value = ""),
      (inputImg.value = ""),
      (inputDescription.value = ""),
      (inputType.value = "");
  };

  btn.addEventListener("click", addBook);

  onValue(ref(database, "/"), (snapshot) => {
    console.log("snapshot:", snapshot.val());
  });
};

export { Store };
