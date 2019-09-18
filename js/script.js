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

const activeArticles = document.querySelectorAll('.post.active');

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

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks() {

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);

  function clearMessages() {
    document.getElementById('messages').innerHTML = '';
  }

  document.querySelector(optTitleListSelector).innerHTML = '';

  const articles = document.querySelectorAll(optArticleSelector);

  let html = '';

  for (let article of articles) {
    article.addEventListener('click', articlesClickHandler);
  }

  const articleId = article.getAttribute('id');

  const articleId = document.getElementById('id');

  const articleTitle = article.querySelector(optTitleSelector).innerHTML;

  const linkHTML = '<li><a href="#' + articleId + ' "><span> ' + articleTitle + ' </span></a></li>';

  console.log(linkHTML);

  titleList.innerHTML = titleList.innerHTML + linkHTML;

  const links = document.querySelectorAll('.titles a');

  console.log(links);

  /* for each article */

  /* get the article id */

  /* find the title element */

  /* get the title from the title element */

  /* create HTML of the link */

  /* insert link into titleList */

  html = html + linkHTML;

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }

  titleList.innerHTML = html;
}

generateTitleLinks();
