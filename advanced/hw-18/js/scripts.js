"use strict";

// homework-18

const cont = document.createElement('div');

const postsRequest = new XMLHttpRequest();

postsRequest.open('GET', "https://jsonplaceholder.typicode.com/posts")
postsRequest.responseType = 'json'

postsRequest.send()

const hideComments = (div) => {
  let comments = div.lastElementChild
  comments.remove()
}

const showComments = (comments, div) => {
  const divComment = document.createElement('div');

  for (let comment of comments) {
    const p = document.createElement('p');
    p.innerText = comment.body

    divComment.append(p)
    divComment.classList.add('comment_container')
  }
  div.append(divComment)
}

const getPostComments = (id, event) => {

  const xhrComments = new XMLHttpRequest();

  xhrComments.open('GET', `https://jsonplaceholder.typicode.com/posts/${id}/comments`)

  xhrComments.responseType = 'json'

  xhrComments.send()

  const button = event.target;
  const parent = event.target.parentNode;

  xhrComments.onload = () => {
    let result = xhrComments.response;

    if (button.innerText === 'Show comments') {
      button.innerText = 'Hide comments';
      showComments(result, parent)
    } else {
      if (button.innerText === 'Hide comments') {
        button.innerText = 'Show comments'
        hideComments(parent)
      }
    }
  }
}

const renderPost = (postList, container) => {
  const posts = postList.map((post) => {
    const postContainer = document.createElement('div');
    const postTitle = document.createElement('h2');
    const postText = document.createElement('p');
    const button = document.createElement('button');

    postTitle.innerText = post.title
    postText.innerText = post.body
    button.innerText = "Show comments"

    postContainer.classList.add('post_container')
    button.classList.add('button')

    postContainer.append(postTitle, postText, button)

    document.body.append(postContainer)

    let postId = post.id

    button.addEventListener('click', (event) => {
      getPostComments(postId, event)
    })

  })

  container.append(...posts)
}

postsRequest.onload = () => {
  const {response} = postsRequest;
  
  renderPost(response, cont);
}