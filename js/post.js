function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}
loadPosts();

function displayPost(posts) {
    const postContainer = document.getElementById('posts');
    for (const post of posts) {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${post.title}</h3>
        <p>${post.body}</p>`;
        div.classList.add('post');
        postContainer.appendChild(div);
        console.log(post);
    }
}
// for post method 
function addAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'post',
        body: JSON.stringify({
            title: 'my new post',
            body: 'this is my post',
            userId: 1
        }),
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
}