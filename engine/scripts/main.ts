"use strict";
const $ = document;
function select(query){
    return $.querySelector(query);
}
const root = select(":root");
const items = {
    percentValue: select("#percent-value"),
    percentInput: select("#percent-input"),
}

items.percentInput.addEventListener("input", changePercent)
let percent:number;
function changePercent(){
    percent = 100 - parseInt(this.value);

    root.style.setProperty("--percent", `${percent}%`);
    items.percentValue.innerText = `${this.value}%`;
}