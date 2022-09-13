// 1. SELEKTORY

// a) document.querySelector()
// Przyjmuje jako argument selektor CSSowy, zwraca pierwszy pasujący element, jeżeli nie znajdzie nic to zwraca null.
const navH1 = document.querySelector("#nav-h1");
// console.log(navH1);
// console.log(typeof navH1);

const firstSpan = document.querySelector(".nav-span");
// console.log(firstSpan);

const navElement = document.querySelector("nav");
// console.log(navElement);

// b) document.querySelectorAll()
// Przyjmuje jako argument selektor CSSowy, zwraca NodeList, jeżeli nie znajdzie nic to zwraca null.
const navSpans = document.querySelectorAll(".nav-span");
// console.log(navSpans);
const navSpansList = [...navSpans];
// console.log(navSpansList);

// c) document.getElementById()
// Przyjmuje jako argument ID elementu, zwraca pasujący element, jeżeli nie znajdzie nic to zwraca null.
const contentDiv = document.getElementById("content");
// console.log(contentDiv);

// d) document.getElementsByClassName
// Przyjmuje jako argument nazwę klasy, zwraca HTMLCollection, jeżeli nie znajdzie nic to zwraca null.
const paragraphs = document.getElementsByClassName("article-paragraph");
// console.log(paragraphs);

// 2. SUB-SELEKTORY

// console.log(contentDiv);
// a) element.children
const articles = contentDiv.children;
// console.log(articles);

// b) element.childNodes
const articlesNodes = contentDiv.childNodes;
// console.log(articlesNodes);

// c) element.firstElementChild
const list = document.querySelector("ul");
// console.log(list);
// console.log(list.firstElementChild);

// d) element.lastElementChild
// console.log(list.lastElementChild);
// console.log(list.children[2]);

// e) element.nextElementSibling / previousElement
const middleLi = list.children[1];
// console.log(middleLi);

// f) element.parentElement
// console.log(middleLi.parentElement);

// Zad 1.
// Zapisz w zmiennych wszystkie elementy występujące w naszym dokumencie HTML. Staraj się nie modyfikować samego kodu HTML, lecz jeżeli będzie to konieczne, zrób to.

const navElement1 = document.querySelector("nav");
console.log(navElement1);
const navH1Element = document.getElementById("nav-h1");
console.log(navH1Element);
const [span1, span2, span3, span4] =
  document.getElementsByClassName("nav-span");
console.log(span1, span2, span3, span4);
const contentDiv1 = document.getElementById("content");
console.log(contentDiv1);
const [firstH2, secondH2, thirdH2, fourthH2] =
  document.getElementsByTagName("h2");
console.log(firstH2, secondH2, thirdH2, fourthH2);
const [article1, article2, article3, article4] =
  document.querySelectorAll("article");
console.log(article1, article2, article3, article4);
const [p1, p2, p3, p4] = document.getElementsByClassName("article-paragraph");
console.log(p1, p2, p3, p4);
const listElement = document.querySelector("ul");
console.log(listElement);
const [li1, li2, li3] = listElement.children;
console.log(li1, li2, li3);
