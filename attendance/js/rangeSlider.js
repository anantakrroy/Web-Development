function sliderValue() {
    var slider = document.getElementById("rangeSlider");
    var sliderOutput = document.getElementById("sliderValue");

    sliderOutput.innerHTML = slider.value;

    slider.oninput = function() {
        sliderOutput.innerHTML = this.value;
        return this.value;
    }
}