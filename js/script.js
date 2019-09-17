'use strict';
/*document.getElementById('test-button').addEventListener('click', function(){
  const links = document.querySelectorAll('.titles a');
  console.log('links:', links);
});*/
const titleClickHandler = function(event) {

  event.preventDefault();

  const clickedElement = this;

  const articleSelector = clickedElement.getAttribute("href");

  console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
  /* [DONE] add class 'active' to the clicked link */

  console.log('clickedElement:', clickedElement);

  /* [DONE] remove class 'active' from all articles */

  /* [DONE] get 'href' attribute from the clicked link */

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  clickedElement.classList.add('active');

  /* add class 'active' to the correct article */

  const targetArticle = document.querySelector(articleSelector);

  const activeArticles = document.querySelectorAll('.post article.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  console.log('targetArticle:', targetArticle);

  targetArticle.classList.add('active');
}
const links = document.querySelectorAll('.titles a');

for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}
