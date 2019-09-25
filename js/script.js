'use strict';
/*document.getElementById('test-button').addEventListener('click', function(){
  const links = document.querySelectorAll('.titles a');
  console.log('links:', links);
});*/
const Handler = function(event) {

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
  link.addEventListener('click', Handler);
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

//Drugie zadanie

function generateTitleLinks() {

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);

  function clearMessages() {
    document.getElementById('messages').innerHTML = '';
  }

  document.querySelector(optTitleListSelector).innerHTML = '';

  let html = '';

  const articles = document.querySelectorAll(optArticleSelector);
  for (let article of articles) {

    const articleId = article.getAttribute('id');

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    const linkHTML = '<li><a href="#' + articleId + ' "><span> ' + articleTitle + ' </span></a></li>';

    console.log(linkHTML);

    html = html + linkHTML;

    titleList.innerHTML = titleList.innerHTML + linkHTML;

    const links = document.querySelectorAll('.titles a');

    console.log(links);

    /* for each article */

    /* get the article id */

    /* find the title element */

    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */

    for (let link of links) {
      link.addEventListener('click', Handler);
    }

    titleList.innerHTML = html;
  }

  generateTitleLinks();

  // Trzecie zadanie

  function generateTags() {
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);
    /* START LOOP: for every article: */
    for (let article of articles) {

      /* find tags wrapper */
      const wrapperTags = article.querySelector(optArticleTagsSelector);
      /* make html variable with empty string */
      let html = '';

      const articleTags = article.getAttribute("data-tags");

      console.log(articleTags);
      /* get tags from data-tags attribute */
      const articleTagsArray = articleTags.split(' ');
      console.log(articleTagsArray);
      /* split tags into array */
      for (let tag of articleTagsArray) {
        /* START LOOP: for each tag */
        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
        /* generate HTML of the link */
        html = html + linkHTML;
        /* add generated code to html variable */
      }
      /* END LOOP: for each tag */
      wrapperTags.innerHTML = html;
      /* insert HTML of all the links into the tags wrapper */
    }
    /* END LOOP: for every article: */
  }
  generateTags();
}
