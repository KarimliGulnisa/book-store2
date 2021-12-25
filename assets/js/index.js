var interval;

$("#title").on("input", function () {
  var title = $(this).val();
  var yazici = document.querySelector("#yazici");
  var kitabin_adi = document.querySelector("#kitabin_adi");
  var yazici = document.querySelector("#yazici");
  var cover = document.querySelector("#cover");
  clearInterval(interval);
  interval = setTimeout(() => {
    $.ajax({
      crossDomain: true,
      url: "https://goodreads-books.p.rapidapi.com/search",
      method: "GET",
      headers: {
        "x-rapidapi-host": "goodreads-books.p.rapidapi.com",
        "x-rapidapi-key": "9d9588302emsh58804fa5a30d4d9p1b947ajsn659ea6ae2269",
      },
      data: {
        q: title,
        page: 1,
      },
    }).done(function (response) {
      $("#title-choices").empty();
      for (let book of response) {
        let id = book.id;
        let title = book.title;
        let author = book.author;
        let smallImageURL = book.smallImageURL;
        let rating = book.rating;
        let ratings = book.ratings;
        let publicationYear = book.publicationYear;
        $("#title-choices").append(
          '<option value="' + title + '">' + title + "</option>"
        );
      }
    });

    kitabin_adi.innerHTML = title;
    yazici.src = smallImageURL;
  }, 1000);
});
