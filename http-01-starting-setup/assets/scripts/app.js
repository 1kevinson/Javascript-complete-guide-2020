const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

/*
function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.responseType = "json";

    // Asynchronous function , JS will not block code even if the data has not been retrieve yet
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        //Server side Error Handling
        reject(new Error("Something went wrong..."));
      }
      resolve(xhr.response);
    };

    xhr.onerror = function () {
      //client side error handling (like internet connexion for example)
      reject(new Error("Failed to send request"));
    };

    xhr.send(JSON.stringify(data));
  });

  return promise;
}*/

function sendHttpRequestWithFetch(method, url, data) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

async function fetchPosts() {
  try {
    const responseData = await sendHttpRequestWithFetch(
      "GET",
      "https://jsonplaceholder.typicode.com/posts"
    );

    for (const post of responseData) {
      // Use template to set new node in DOM
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector("h2").textContent = post.title;
      postEl.querySelector("p").textContent = post.body;
      postEl.querySelector("li").id = post.id;
      listElement.append(postEl);
    }
  } catch (e) {
    console.log(new Error(e));
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

fetchButton.addEventListener("click", () => {
  listElement.innerHTML = "";
  fetchPosts();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredBody = event.currentTarget.querySelector("#content").value;

  createPost(enteredTitle, enteredBody);
});

// EVEN DELEGATION
postList.addEventListener("click", (ev) => {
  if (ev.target.tagName === "BUTTON") {
    const postId = event.target.closest("li").id; // Get the closest ancestor
    sendHttpRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});

/*
 * TYPO
 *
 * ---- Use async for a function which call a promise inside him, then we are able to retrieve promise data with await  ----
 *
 *
 * */
