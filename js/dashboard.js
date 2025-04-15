
const form = document.getElementById('postForm');
const adminPosts = document.getElementById('admin-posts');
let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

function renderPosts() {
  adminPosts.innerHTML = '';
  posts.forEach((post, index) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <button onclick="deletePost(${index})">Delete</button>
    `;
    adminPosts.appendChild(div);
  });
}

function deletePost(index) {
  posts.splice(index, 1);
  localStorage.setItem('blogPosts', JSON.stringify(posts));
  renderPosts();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  posts.push({ title, content });
  localStorage.setItem('blogPosts', JSON.stringify(posts));
  form.reset();
  renderPosts();
});

renderPosts();
