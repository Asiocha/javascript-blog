'use strict';
/*document.getElementById('test-button').addEventListener('click', function(){
  const links = document.querySelectorAll('.titles a');
  console.log('links:', links);
});*/

const templates = {
  articleLink: Handlebars.compile(document.querySelector('#template-article-link').innerHTML),
  tagLink: Handlebars.compile(document.querySelector('#template-tag-link').innerHTML),
  authorLink: Handlebars.compile(document.querySelector('#template-author-link').innerHTML),
  tagCloudLink: Handlebars.compile(document.querySelector('#template-tag-cloud-link').innerHTML),
  authorCloudLink: Handlebars.compile(document.querySelector('#template-author-cloud-link').innerHTML),
}

function titleClickHandler(event) {

  event.preventDefault();

  const clickedElement = this;

  console.log('Link was clicked!', event);

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
  /* [DONE] add class 'active' to the clicked link */

  console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active');
  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.post.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);

  console.log('targetArticle:', targetArticle);
  /* add class 'active' to the correct article */

  targetArticle.classList.add('active');
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

  titleList.innerHTML = "";

  let html = '';

  const articles = document.querySelectorAll(optArticleSelector);

  for (let article of articles) {

    const articleId = article.getAttribute('id');

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    const linkHTMLData = {
      id: articleId,
      title: articleTitle
    };

    const linkHTML = templates.articleLink(linkHTMLData);

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
      link.addEventListener('click', titleClickHandler);
    }

    titleList.innerHTML = html;
  }
}
generateTitleLinks();

const optArticleElementSelector = '.post-tags .list li';

function generateTags() {

  /* [NEW] create a new variable allTags with an empty object */
  let allTags = {};

  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);
  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find tags wrapper */
    const wrapperTags = article.querySelector(optArticleTagsSelector);
    /* make html variable with empty string */
    let html = '';

    const articleTags = article.getAttribute('data-tags');

    console.log(articleTags);
    /* get tags from data-tags attribute */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);
    /* split tags into array */
    for (let tag of articleTagsArray) {
      /* START LOOP: for each tag */
      const linkHTMLData = {
        id: tag,
        title: tag
      };
      const linkHTML = templates.tagLink(linkHTMLData);
      /* generate HTML of the link */
      html = html + linkHTML;
      /* add generated code to html variable */
      wrapperTags.innerHTML = html;
      /* insert HTML of all the links into the tags wrapper */
    }
    /* END LOOP: for each tag */
  }
  /* END LOOP: for every article: */
}
generateTags();

function generateTagsCloud() {

  const optCloudClassPrefix = 'tag-size-'
  /* [NEW] create a new variable allTags with an empty object */
  let allTags = {};

  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);

  /* START LOOP: for every article: */
  for (let article of articles) {
    console.log(article);

    /* find tags wrapper */
    const tagLinks = article.querySelector('.post-tags .list');
    console.log(tagLinks);

    /* get tags from data-tags attribute */
    const dataTags = article.getAttribute('data-tags');
    console.log(dataTags);

    /* split tags into array */
    const dataTagsArray = dataTags.split(' ');
    console.log(dataTagsArray);

    /* START LOOP: for each tag */
    for (let tag of dataTagsArray) {

      /* [NEW] check if this link is NOT already in allTags */
      if (!allTags.hasOwnProperty(tag)) {
        /* [NEW] add tag to allTags object */
        allTags[tag] = 1;
      } else {
        allTag[tag]++;
      }

      /* [NEW] find list of tags in right column */
      const tagList = document.querySelector('.tags');

      const tagsParams = calculateTagsParams(allTags);
      console.log('tagsParams:', tagsParams)
      /* [NEW] create varible for all links HTML code */
      const allTagsData = {
        tags: []
      };

      /* [NEW] START LOOP: for each tag in allTags: */
      for (let tag in allTags) {

        const tagLinkHTML = '<li><a class="' + optCloudClassPrefix + calculateTagClass(allTags[tag], tagsParams) + '" href ="#tag-' + tag + '">' + tag + '</a>(' + allTags[tag] + ')</li> ';
        /* [NEW] generate code of a link and add it to allTagsHTML*/
        allTagsData.tags.push({
          tag: tag,
          count: allTags[tag],
          className: calculateTagClass(allTags[tag], tagsParams)
        });
        /* [NEW] END LOOP: for each tag in allTags: */
      }
      /*[NEW] add html from allTagsHTML to tagList */
      tagList.innerHTML = templates.tagCloudLink(allTagsData);
      //tagList.innerHTML = allTags.join(' ');
      console.log(tagList);
    }
  }
}

generateTagsCloud();

function tagClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  /* find all tag links with class active */
  const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each active tag link */
  for (let activeTagLinks of activesTagLink) {
    /* remove class active */
    activeTagLinks.classList.remove('active');
    /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const hrefLinks = document.querySelectorAll('href');

  /* START LOOP: for each found tag link */
  for (let tagLink of tagLinks) {
    /* add class active */
    tagLink.classList.add('active');
    /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags() {

  const tagList = document.querySelectorAll('.tags');

  for (let tagsList of tagList) {

    tagsList.addEventListener('click', tagClickHandler);
  }
}
addClickListenersToTags();

function calculateTagsParams(tags) {

  const params = {
    max: '0',
    min: '999999'
  }

  for (let tag in tags) {
    console.log(tag + ' is used ' + tags[tag] + ' times');

    if (tags[tag] > params.max) {
      params.max = tags[tag];

    } else if (tags[tag] < params.min) {
      params.min = tags[tag];
    }
  }

  return params;
}

function generateAuthors() {

  /* [NEW] create a new variable allTags with an empty object */
  let allAuthors = {};

  /* find all authors */
  const articles = document.querySelectorAll(optArticleSelector);
  /*START LOOP for each authors*/
  for (let article of articles) {
    /* find authors wrapper */
    const authorWrapper = article.querySelector(optArticleAuthorSelector);
    /* make html variable with empty string */
    let html = '';
    /* get authors from data-authors attribute */
    const articleAuthor = article.getAttribute('data-author');
    /* generate HTML of the link of author */
    const linkAuthorHTML = '<a href="#author-' + articleAuthor + '">' + articleAuthor + '</a>'
    /* add generated code to html variable */
    html = html + linkAuthorHTML;
    /*[NEW] check if this link is NOT already in allAuthors */
    if (!allAuthors.hasOwnProperty(articleAuthor)) {
      /* [NEW] add author to allAuthors object*/
      allAuthors[articleAuthor] = 1;
    } else {
      allAuthors[articleAuthor]++;
    }
    /* insert HTML of all the links into the tags wrapper */
    authorWrapper.innerHTML = html;
  }
}

function calculateTagClass(count, params) {

  const optCloudClassCount = 5;

  const normalizedCount = count - params.min;

  const normalizedMax = params.max - params.min;

  const percentage = normalizedCount / normalizedMax;

  const classNumber = Math.floor(percentage * (optCloudClassCount - 1) + 1);

  return classNumber;


  //Generowanie linków do listy tagów//
}
