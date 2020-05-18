const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");

function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.responseType = "json";

    // Asynchronous function , JS will not block code even if the data has not been retrieve yet
    xhr.onload = function () {
      resolve(xhr.response);
    };

    xhr.send(JSON.stringify(data));
  });

  return promise;
}

async function fetchPosts() {
  const responseData = await sendHttpRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );

  for (const post of responseData) {
    // Use template to set new node in DOM
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title;
    postEl.querySelector("p").textContent = post.body;
    listElement.append(postEl);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  await sendHttpRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    post
  );
}

fetchPosts();
createPost("YO kev", "Dummy post by Kev");

/*
 * TYPO
 *
 * ---- Use async for a function which call a promise inside him, then we are able to retrieve promise data with await  ----
 *
 *
 * */
