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
      for (let cat in data["data"][lang]["cats"]) {
        const photoPath = data["data"]["cats"][cat]["photoPath"];
        const name = data["data"][lang]["cats"][cat]["name"];
        const short_description = data["data"][lang]["cats"][cat]["short_description"];
        
        cardContainer.innerHTML +=
          '<div class="cat_card card">\n' +
            '<img src="' +photoPath+'" alt="' +name +'"/>\n' +
            '<h2>' +name+ '</h2>\n'+
            '<p>' +short_description+'</p>\n'+
            '<a href="#' +name+'">' +card_button +'</a>\n'+
          '</div>';
      }

      // Description
      const detailsContainer = document.getElementById("details");
      detailsContainer.innerHTML = "";
      for (let cat in data["data"][lang]["cats"]){
        const photoPath = data["data"]["cats"][cat]["photoPath"];
        const name = data["data"][lang]["cats"][cat]["name"];
        const history = data["data"][lang]["cats"][cat]["history"];
        const lifespan_min = data["data"]["cats"][cat]["lifespan_min"];
        const lifespan_max = data["data"]["cats"][cat]["lifespan_max"];
        const years_text = data["data"][lang]["website_content"]["years_text"];
        const weight_min = data["data"]["cats"][cat]["weight_min"];
        const weight_max = data["data"]["cats"][cat]["weight_max"];
        const length_min = data["data"]["cats"][cat]["length_min"];
        const length_max = data["data"]["cats"][cat]["length_max"];
        const appearance_label = data["data"][lang]["website_content"]["appearance_label"];
        const appearance = data["data"][lang]["cats"][cat]["appearance"];
        const colors_label = data["data"][lang]["website_content"]["colors_label"];
        const patterns_label = data["data"][lang]["website_content"]["patterns_label"];
        const care_label = data["data"][lang]["website_content"]["care_label"];
        const difficulty_text = data["data"][lang]["website_content"]["difficulty_text"];
        const care_difficulty = data["data"][lang]["cats"][cat]["care_difficulty"];
        const care = data["data"][lang]["cats"][cat]["care"];
        const character_label = data["data"][lang]["website_content"]["character_label"];
        const character = data["data"][lang]["cats"][cat]["character"];
        const traits_label = data["data"][lang]["website_content"]["traits_label"];
        
        var life_icon = '<i class="material-icons">favorite_border</i>';
        var weight_icon = '<i class="material-icons">scale</i>';
        var length_icon = '<i class="material-icons">straighten</i>';

        var colors = '<ul>';
        for (let color in data["data"][lang]["cats"][cat]["colors"]){
          my_color = data["data"][lang]["cats"][cat]["colors"][color];
          colors += '<li>' +my_color+ '</li>';
        }
        colors += '</ul>';

        var patterns = '<ul>';
        for (let pattern in data["data"][lang]["cats"][cat]["patterns"]){
          my_pattern = data["data"][lang]["cats"][cat]["patterns"][pattern];
          patterns += '<li>' +my_pattern+ '</li>';
        }
        patterns += '</ul>';

        var traits = '<ul>';
        for (let trait in data["data"][lang]["cats"][cat]["traits"]){
          my_trait = data["data"][lang]["cats"][cat]["traits"][trait];
          traits += '<li>' +my_trait+ '</li>';
        }
        traits += '</ul>';

        var rate = '<div class="rate"><div class="rectangle full"></div>';
        if (care_difficulty == "łatwa" || care_difficulty == "easy"){
          rate += '<div class="rectangle empty"></div><div class="rectangle empty"></div>';
        }
        else if (care_difficulty == "umiarkowana" || care_difficulty == "moderate"){
          rate += '<div class="rectangle full"></div><div class="rectangle empty"></div>';
        }
        else {
          rate += '<div class="rectangle full"></div><div class="rectangle full"></div>';
        }
        rate += '</div>';

        detailsContainer.innerHTML +=
        '<div id="'+name+'" class="details">\n' +
          '<h1> '+name.toUpperCase()+' </h1>\n' +
          '<div class="general_section card">\n' +
            '<img src="' +photoPath+'" alt="' +name +'"/>\n' +
            '<div class="history_description">\n' +
              '<p>'+history+'</p>\n' +
              '<div class="basic_info">\n'+
                '<div class="row">'+life_icon+''+lifespan_min+'-'+lifespan_max+' '+years_text+'</div>\n'+
                '<div class="row">'+weight_icon+''+weight_min+'-'+weight_max+' kg</div>\n'+
                '<div class="row">'+length_icon+''+length_min+'-'+length_max+' cm</div>\n'+
          '</div></div></div>\n'+
          '<div class="card">\n'+
            '<h2>'+appearance_label+'</h2>\n'+
            '<div class="appearance_section">\n'+
              '<div class="appearance_description">\n'+
                '<p>'+appearance+'</p>\n'+
              '</div>\n'+
              '<div class="colors"><div>\n'+
                '<p>'+colors_label+':</p>'+colors+'\n'+
              '</div><div>\n'+
                '<p>'+patterns_label+':</p>'+patterns+'\n'+
          '</div></div></div></div>\n'+
          '<div class="bottom_section">\n'+
            '<div class="card">\n'+
              '<h2>'+care_label+'</h2>\n'+
              '<div class="care_section">\n'+
                '<div class="difficulty">\n'+
                  '<p>'+difficulty_text+': '+care_difficulty+'</p>'+rate+'\n'+
            '</div><p>'+care+'</p></div></div>\n'+
            '<div class="card"><h2>'+character_label+'</h2>\n'+
              '<div class="character_section"><div class="character_description">\n'+
                '<p>'+character+'</p></div>\n'+
                '<div class="traits"><p>'+traits_label+':</p>'+traits+'</div>\n'+
                '</div></div></div></div></div>'
      }
    });
}

loadData();
