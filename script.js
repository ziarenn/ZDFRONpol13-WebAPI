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

// const navElement1 = document.querySelector("nav");
// console.log(navElement1);
// const navH1Element = document.getElementById("nav-h1");
// console.log(navH1Element);
// const [span1, span2, span3, span4] =
//   document.getElementsByClassName("nav-span");
// console.log(span1, span2, span3, span4);
// const contentDiv1 = document.getElementById("content");
// console.log(contentDiv1);
// const [firstH2, secondH2, thirdH2, fourthH2] =
//   document.getElementsByTagName("h2");
// console.log(firstH2, secondH2, thirdH2, fourthH2);
const [article1, article2, article3, article4] =
  document.querySelectorAll("article");
// console.log(article1, article2, article3, article4);

const [p1, p2, p3, p4] = document.getElementsByClassName("article-paragraph");
// console.log(p1, p2, p3, p4);
// const listElement = document.querySelector("ul");
// console.log(listElement);
// const [li1, li2, li3] = listElement.children;
// console.log(li1, li2, li3);

// 3. TWORZENIE I DODAWANIE ELEMENTÓW

// a) document.createElement()
// Tworzy obiektową reprezentacje podanego w arugmencie elementu.
const additionalLi = document.createElement("li");
additionalLi.textContent = "This was appended using .appendChild() method.";
// console.log(additionalLi);

// b) element.appendChild()
// Metoda doda nowy element dziecko jako ostatnie z dzieci elementu na którym została wywołana.
list.appendChild(additionalLi);

// c) element.insertBefore()
// Metoda doda nowy element dziecko (1 argument) przed element dziecko tego samego elementu podany na drugim argumencie.
const additionalLi2 = document.createElement("li");
additionalLi2.textContent = "This is the second additional li.";
list.insertBefore(additionalLi2, list.children[1]);

// d) string + element.insertAdjacentHTML()
const html = `
    <li id="li-to-remove">
        Element inserted using insertAdjacentHTML method.
    </li>
`;
list.insertAdjacentHTML("beforeend", html);

// 4. USUWANIE ELEMENTÓW

// a) Czyszczenie zawartości elementów przy pomocy innerHTML.
// console.log(article1.innerHTML);
// article1.innerHTML = "";

// b) element.remove()
// Podstawowa metoda usuwania elementów ze strony, po prostu usuwa element na którym została wywołana.
const liToRemove = document.getElementById("li-to-remove");
liToRemove.remove();

// c) element.removeChild()
// Metoda usuwa wskazany element dziecko elementu na którym została wywołana.
list.removeChild(list.children[1]);

// 5. ZAMIANA ELEMENTÓW

// a) element.replaceChild()
// Metoda zamienia elementy dzieci w elemencie na którym zostanie wywołana. Na pierwszym argumencie przyjmuje nowy element (do wstawienia), na drugim stary element (do usunięcia).
list.replaceChild(liToRemove, list.lastElementChild);

// 6. KLONOWANIE ELEMENTÓW

// a) element.cloneNode()
// Metoda sklonuje element.

// a.1) klonowanie płytkie
// Klonowanie tylko tagów i atrybutów.
const shallowDivClone = contentDiv.cloneNode(false);
// console.log(shallowDivClone);

// a.2) klonowanie głębokie
// Klonowanie tagów, atrybutów i wszystkich elementów dzieci
const deepDivClone = contentDiv.cloneNode(true);
// console.log(deepDivClone);

// 7. AKTUALIZACJA/DODAWANIE/USUWANIE ZAWARTOŚCI ELEMENTÓW

// a) element.textContent i element.innerText
// Metody stosowane zamiennie, jednak standardem jest textContent, więc to właśnie jego powinniśmy używać najczęściej.
// console.log(liToRemove.textContent);
// console.log(liToRemove.innerText);
liToRemove.textContent = "123";
liToRemove.innerText = "321";

// b) element.innerHTML

// console.log(contentDiv.innerHTML);
// contentDiv.innerHTML = "<p>456</p>";

// c) element.appendChild()

// 8. AKTUALIZACJA/DODAWANIE/USUWANIE ATRYBUTÓW ELEMENTÓW.

// a) element.attributes
// Główne zastosowanie .attributes to sprawdzenie ilości atrybutów danego elementu.
// console.log(p3.attributes.length);

// b) element.setAttribute()
// Metoda w pierwszym argumencie przyjmuje nazwę atrybutu do dodania, w drugim argumencie przyjmuje wartość atrybutu do dodania.
p3.setAttribute("id", "third-paragraph");

// c) element.id
// Nadpisanie ID danego elementu
p3.id = "123";
// console.log(p3);

// d) element.className
// Nadpisanie klasy danego elementu
// p3.className = "321";

// e) element.removeAttribute()
// Metoda usuwa atrybut podany w argumencie z elementu na którym została wywołana.
p3.removeAttribute("id");
// console.log(p3);

// Zad 2.
// a) Usuń wszystkie elementy z body przy pomocy element.remove()
// b) Odtwórz stronę przy pomocy wcześniej poznanych metod (document.createElement, insertAdjacentHTML, setAttribute, appendChild itd.).

// a)
navElement.remove();
contentDiv.remove();

const navElementToAdd = document.createElement("nav");
// <h1 id="nav-h1">DOM</h1>
const h1Element = document.createElement("h1");
h1Element.setAttribute("id", "nav-h1");
h1Element.textContent = "DOM";
navElementToAdd.appendChild(h1Element);

/* <span class="nav-span">Home</span>
      <span class="nav-span">Page 1</span>
      <span class="nav-span">Page 2</span>
      <span class="nav-span">Page 3</span> */

const spanTextContents = ["Home", "Page 1", "Page 2", "Page 3"];
// spanTextContents.forEach((text) => {
//   const span = document.createElement("span");
//   span.setAttribute("class", "nav-span");
//   span.textContent = text;
//   navElementToAdd.appendChild(span);
// });

// navElementToAdd.children[2];

for (let i = 0; i < 4; i++) {
  if (i === 0) {
    const span = document.createElement("span");
    span.setAttribute("class", "nav-span");
    span.textContent = "Home";
    navElementToAdd.appendChild(span);
  } else {
    const span = document.createElement("span");
    span.setAttribute("class", "nav-span");
    span.textContent = `Page ${i}`;
    navElementToAdd.appendChild(span);
  }
}
document.body.appendChild(navElementToAdd);

const contentDivToAdd = document.createElement("div");
contentDivToAdd.setAttribute("id", "content");

/* <article >
<h2>How to access the DOM?</h2>
<p class="article-paragraph">
  You don't have to install anything additional, just JavaScript will
  do. We have a few methods called 'selectors', these methods are used
  to access DOM elements and are found on the global 'document' object, which is an object representation of the whole HTML document. Here are <strong>some</strong> of them:
  <ul>
    <li>document.querySelector('cssSelectorHere')</li>
    <li>document.getElementById('elementsIdHere')</li>
    <li>document.getElementsByClassName('classNameHere')</li>
  </ul>
</p class="article-paragraph">
</article> */

const renderHomePage = () => {
  const articleToAdd = document.createElement("article");
  const h2ToAdd = document.createElement("h2");
  h2ToAdd.textContent = "How to access the DOM?";
  articleToAdd.appendChild(h2ToAdd);
  const pToAdd = document.createElement("p");
  pToAdd.setAttribute("class", "article-paragraph");
  pToAdd.textContent = `You don't have to install anything additional, just JavaScript will
  do. We have a few methods called 'selectors', these methods are used
  to access DOM elements and are found on the global 'document' object, which is an object representation of the whole HTML document. Here are some of them:`;
  const ulToAdd = document.createElement("ul");
  const liTextContents = [
    "document.querySelector('cssSelectorHere')",
    "document.getElementById('elementsIdHere')",
    "document.getElementsByClassName('classNameHere')",
  ];
  liTextContents.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    ulToAdd.appendChild(li);
  });
  pToAdd.appendChild(ulToAdd);
  articleToAdd.appendChild(pToAdd);
  contentDivToAdd.appendChild(articleToAdd);
};
renderHomePage();
document.body.appendChild(contentDivToAdd);
