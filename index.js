const input = document.querySelector(".comment");
const btn = document.querySelector(".postButton");
const list = document.querySelector(".list");

let posts = JSON.parse(localStorage.getItem("posts")) || [];

posts.forEach((post) => addPost(post));

function posted() {
  let value = input.value.trim();
  if (value) {
    posts.push(value);
    localStorage.setItem("posts", JSON.stringify(posts));
    addPost(value);
    input.value = "";
  }
}

function deletePost(e) {
  if (e.target.tagName === "BUTTON") {
    let li = e.target.closest("li");
    let text = li.firstChild.textContent.trim();
    posts = posts.filter((post) => post !== text);
    localStorage.setItem("posts", JSON.stringify(posts));
    li.remove();
  }
}

function addPost(text) {
  let item = document.createElement("li");
  item.innerHTML = `${text} <button>Delete</button>`;
  list.appendChild(item);
}
btn.addEventListener("click", posted);
list.addEventListener("click", deletePost, true);
