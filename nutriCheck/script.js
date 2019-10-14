$('document').ready(function () {
    $('button').on('click', function () {
        var queryItem = $('input').val();
        var urlSearch = "https://nutritionix-api.p.rapidapi.com/v1_1/search/" + queryItem + "?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat";
        $.ajax({
            type: "GET",
            dataType: "json",
            crossDomain: "true",
            url: urlSearch,
            headers: {
                "x-rapidapi-host": "nutritionix-api.p.rapidapi.com",
                "x-rapidapi-key": "efe10962bdmsh9d7dde0a3fb4ad6p1d0836jsn7304ba0c70d3",
            },
            success: function (response) {
                console.log(response);

                for (var i = 0; i < 10; i++) {
                    $("<div/>").attr({ "class": "card", "id": "item" + i }).appendTo('.result-body');

                }

                for (var i = 0; i < 10; i++) {
                    var itemName = response.hits[i].fields.item_name;
                    console.log(itemName);
                    var itemCalories = response.hits[i].fields.nf_calories;
                    var itemFat = response.hits[i].fields.nf_total_fat;

                    $("<div/>").attr({ "class": "card-body", "id": "card" + i }).appendTo('#item' + i);

                    $("<h5/>").attr("class", "card-title").text(itemName).appendTo('#card' + i);
                    $("<h6/>").attr("class", "card-subtitle").text(itemCalories + "calories").appendTo('#card' + i);
                    $("<h6/>").attr("class", "card-subtitle").text(itemFat + "oz.").appendTo('#card' + i);
                }
            },
        });
    });
});





