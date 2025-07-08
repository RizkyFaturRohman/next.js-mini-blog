let posts = [];

if (typeof window !== "undefined") {
  const stored = localStorage.getItem("posts");
  if (stored) {
    posts = JSON.parse(stored);
  }
}

function saveToStorage() {
  if (typeof window !== "undefined") {
    localStorage.setItem("posts", JSON.stringify(posts));
  }
}

export function getPosts() {
  return posts;
}

export function getPostById(id) {
  return posts.find((post) => post.id === Number(id));
}

export function addPost({ title, content }) {
  const newPost = {
    id: posts.length + 1,
    title,
    content,
  };
  posts = [newPost, ...posts];
  saveToStorage();
}

export function deletePost(id) {
  posts = posts.filter((post) => post.id !== Number(id));
  saveToStorage();
}
