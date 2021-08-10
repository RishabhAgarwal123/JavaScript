const posts = [{ title: 'Post One', body: 'This is post One' },
    { title: 'Post Two', body: 'This is post Two' }
]

const getPosts = function() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title} - ${post.body}</li>`
        });
        document.body.innerHTML = output
    }, 2000)
}

const createPost = function(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve()
            } else {
                reject('Something went wrong!')
            }
        }, 4000);
    });
}

getPosts()
createPost({ title: 'Post Three', body: 'This is post Three' })
    .then(getPosts)
    .catch(err => console.log(err));