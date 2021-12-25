var interval;

$("#title").on("input", function () {
  var title = $(this).val();
  var yazici = document.querySelector("#yazici");
  var kitabin_adi = document.querySelector("#kitabin_adi");
  var yazici = document.querySelector("#yazici");
  var cover = document.querySelector("#cover");
  clearInterval(interval);
  interval = setTimeout(() => {
    fetch("https://goodreads-books.p.rapidapi.com/search?q=" + title, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "goodreads-books.p.rapidapi.com",
        "x-rapidapi-key": "9d9588302emsh58804fa5a30d4d9p1b947ajsn659ea6ae2269",
      },
      data: {
        q: title,
        page: 1,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        $("#title-choices").empty();
        for (let kitab of response) {
          let title = kitab.title;
          yazici.innerHTML = kitab.author;
          kitabin_adi.innerHTML = kitab.title;
          cover.src = kitab.smallImageURL;
          $("#basliqlar").append(
            '<option value="' + title + '">' + title + "</option>"
          );
        }
      });
  }, 1000);
});
