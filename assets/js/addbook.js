import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyChzfVr5MW4H_nNB_rUXV0bI0tQroDK6oY",
  authDomain: "bookstore-web-31a0c.firebaseapp.com",
  projectId: "bookstore-web-31a0c",
  storageBucket: "bookstore-web-31a0c.appspot.com",
  messagingSenderId: "603055803097",
  appId: "1:603055803097:web:d2f24a4c15a5f317f9ccc8",
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
