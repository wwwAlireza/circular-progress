"use strict";
var $ = document;
function select(query) {
    return $.querySelector(query);
}
var root = select(":root");
var items = {
    percentValue: select("#percent-value"),
    percentInput: select("#percent-input")
};
items.percentInput.addEventListener("input", changePercent);
var percent;
function changePercent() {
    percent = 100 - parseInt(this.value);
    root.style.setProperty("--percent", "".concat(percent, "%"));
    items.percentValue.innerText = "".concat(this.value, "%");
}
