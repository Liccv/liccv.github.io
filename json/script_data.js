let lang = "pl";

function loadData() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      function changeLang(lang_code) {
        lang = lang_code;
        loadData();
      }

      const languageBar = document.getElementById("languages");
      languageBar.innerHTML = "";
      for (let language in data["languages"]) {
        const title = data["languages"][language]["title"];
        languageBar.innerHTML +=
          '<button class="lang_button ' +
          language +
          '" ><p class="lang_button_code">' +
          title +
          "</p></button>";
      }

      let langButtons = document.getElementsByClassName("lang_button");
      for (let button of langButtons) {
        button.addEventListener("click", () => {
          const langCode = button.classList.item(button.classList.length - 1);
          changeLang(langCode);
        });
      }

      // Title
      document.getElementById("header_title").innerHTML = data["data"][lang]["website_content"]["title"];
      
      // Cards
      const card_button = data["data"][lang]["website_content"]["card_button"];
      const cardContainer = document.getElementById("cards");
      cardContainer.innerHTML = "";
      for (let card in data["data"][lang]["cats"]) {
        const photoPath = data["data"][lang][card]["photoPath"];
        const name = data["data"][lang][card]["name"];
        const short_description = data["data"][lang][card]["short_description"];

        cardContainer.innerHTML +=
          '<div class="cat_card card">\n' +
            '<img src="' +photoPath+'" alt="' +name +'"/>\n' +
            '<h2>' +name+ '</h2>\n'+
            '<p>' +short_description+'</p>\n'+
            '<a href="#' +name+'">' +card_button +'</a>\n'+
          '</div>';
      }
    });
}

loadData();
