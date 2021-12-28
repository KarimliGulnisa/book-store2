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
  appId: "1:120141196387:web:992cff5603e82473f39c56",
};
const Store = () => {
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
  const typBtn = document.querySelector(".book-type_btn");
  const dropDown = document.querySelector(".dropdown-menu");
  const addType = document.querySelector("#addTypeBtn");
  const formControl = document.querySelector(".form-control");
  const addBtnType = () => {
    var option = document.createElement("option");
    option.innerHTML = formControl.value;
    inputType.appendChild(option);
    dropDown.style.display = "none";
  };
  const toggle = () => {
    dropDown.style.display === "none"
      ? (dropDown.style.display = "block")
      : (dropDown.style.display = "none");
  };
  search.onkeyup = (e) => {
    datalist.style.display = "block";
    datalist.innerHTML = "";
    const loadingDiv = document.createElement("div");
    const loadingSpan = document.createElement("span");
    loadingDiv.classList = "spinner-border text-light";
    loadingDiv.role = "status";
    loadingSpan.classList = "sr-only";
    loadingSpan.innerHTML = "Loading...";
    loadingDiv.appendChild(loadingSpan);
    datalist.appendChild(loadingDiv);
    var KeyID = e.keyCode;
    KeyID === 8 || KeyID === 46
      ? (datalist.style.display = "none")
      : fetch(
          "https://goodreads-books.p.rapidapi.com/search?q=" + e.target.value,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "goodreads-books.p.rapidapi.com",
              "x-rapidapi-key":
                "9d9588302emsh58804fa5a30d4d9p1b947ajsn659ea6ae2269",
            },
            data: {
              q: e.target.value,
            },
          }
        )
          .then((res) => {
            res
              ? (datalist.style.display = "block")
              : (datalist.style.display = "none");
            return res.json();
          })
          .then((res) => {
            console.log(res);
            if (res) {
              datalist.innerHTML = "";
              res?.map((item) => {
                console.log("item:", item);
                var li = document.createElement("li");
                var image = document.createElement("img");
                var bookInfo = document.createElement("p");
                var text = document.createElement("p");
                var author = document.createElement("p");
                var year = document.createElement("p");
                //   --------------------------
                image.src = item?.smallImageURL;
                text.innerHTML = item?.title;
                author.innerHTML = item?.author;
                year.innerHTML = item?.publicationYear;
                text.id = item?.id;
                li.classList = "search-results";
                //   --------------------------
                li.addEventListener("click", () => {
                  search.value = "";
                  datalist.innerHTML = "";
                  datalist.style.display = "none";
                  inputName.value = item.title;
                  inputAuthor.value = item.author;
                  inputImg.value = item.smallImageURL;
                  publicationYear.value = item.publicationYear;
                });
                //   --------------------------
                li.appendChild(image);
                bookInfo.appendChild(text);
                bookInfo.appendChild(author);
                bookInfo.appendChild(year);
                li.appendChild(bookInfo);
                datalist.appendChild(li);
              });
            }
          })
          .catch((err) => {
            console.error(err);
          });
  };
  // -------------FireBase-----------
  const app = initializeApp(firebaseConfig);
  var database = getDatabase(app);
  const addBook = () => {
    const book = {
      name: inputName.value,
      author: inputAuthor.value,
      image: inputImg.value,
      description: inputDescription.value,
      type: inputType.value,
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
      set(push(ref(database, "books")), {
        name: inputName.value,
        author: inputAuthor.value,
        image: inputImg.value,
        description: inputDescription.value,
        type: inputType.value,
        id: push(ref(database, "books")).key,
      });
      error.style.display = "none";
      (inputName.value = ""),
        (inputAuthor.value = ""),
        (inputImg.value = ""),
        (inputDescription.value = ""),
        (inputType.value = ""),
        (publicationYear.value = "");
    }
  };
  btn.addEventListener("click", addBook);
  typBtn.addEventListener("click", toggle);
  addType.addEventListener("click", addBtnType);
  //---------------burdan
  onValue(ref(database, "/"), (snapshot) => {
    const allBooks = Object.values(snapshot.val().books);
    console.log("allBooks:", allBooks);
  });
  // -----------------bura
};
export { Store };
