
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('posts-container');
  const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  posts.forEach(post => {
    const postEl = document.createElement('div');
    postEl.className = 'blog-post';
    postEl.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
    container.appendChild(postEl);
  });
});
