function submitRating() {

    var ratingValue = [];

    var rating = document.getElementById("submitRating");

    var slider = document.getElementById("rangeSlider");

    if (rating) {
        slider.disabled = true;
        rating.disabled = true;
        ratingValue.push(slider.value);
        console.log(ratingValue);
    }


}