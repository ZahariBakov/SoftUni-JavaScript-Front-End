function attachEvents() {
    const btnLoadPosts = document.getElementById('btnLoadPosts');
    const posts = document.getElementById('posts');
    const btnViewPost = document.getElementById('btnViewPost');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const ulPostComments = document.getElementById('post-comments');
    let postObj = {};

    const BASE_URL = 'http://localhost:3030/jsonstore/blog/';

    btnLoadPosts.addEventListener('click', loadPosts);
    btnViewPost.addEventListener('click', viewPosts);

    async function loadPosts() {
        const response = await fetch(`${BASE_URL}posts`);
        const data = await response.json();
        Object.keys(data).forEach((key) => {
            const optionEl = document.createElement('option');
            optionEl.value = key;
            optionEl.text = data[key].title
            const optionTitle = data[key].title;
            postObj[optionTitle] = { postId: data[key].id, content: data[key].body};
            posts.appendChild(optionEl);
        });
    }
    
    async function viewPosts() {
        const response = await fetch(`${BASE_URL}comments`);
        const data = await response.json();
        const currentOption = posts.options[posts.selectedIndex];
        postTitle.textContent = currentOption.text;
        postBody.textContent = postObj[currentOption.text].content;

        Object.keys(data)
        .filter((key) => data[key].postId === postObj[currentOption.text].postId)
        .forEach((key) => {
            const li = document.createElement('li');
            li.textContent = data[key].text;
            ulPostComments.appendChild(li);
        });
    }
}

attachEvents();