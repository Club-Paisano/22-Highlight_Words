//jshint esversion: 8

/*
Author: Anthony Noel

-This page reads a paragraph to you outloud and outlines the word

Future Dev:
-
-
*/

const textParagraph = document.querySelector("p");


const addWordSpans = () => {
  //Get textcontent from paragraph text
    //Split them into array
  let words = textParagraph.textContent.split(" ").join("</span> <span>");
  //Return them back into words as the innerhtml
  textParagraph.innerHTML = words;
};

function highlightWord() {
  console.log(this.getBoundingClientRect().width);

  this.classList.add("highlight");
  this.style.setProperty("--spanWidth",`${this.getBoundingClientRect().width}`);
  this.style.setProperty("--spanHeight",`${this.getBoundingClientRect().height}`);
}

function unhighlightWord() {
  this.classList.remove("highlight");
}
const initPage = () => {
  addWordSpans();
  const allSpans = document.querySelectorAll("span");
  allSpans.forEach(span => {
    span.addEventListener("mousemove", highlightWord);
    span.addEventListener("mouseout", unhighlightWord);
  });
  //Add an eventlistener all the span tag


};

initPage();
