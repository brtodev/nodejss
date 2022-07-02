let posts = [{title: "Post One", body: "This is post one"}];

const getPosts = () => {
	posts.map(post => {
		console.log(post.title);
	});
};

const addPosts = input => {
	posts.push(input);
};

const input = {title: "Post Two", body: "This 222is post two"};

async function showPost() {
	try {
		await addPosts(input);
		getPosts();
	} catch (error) {
		console.log(error);
	}
}

getPosts();
showPost();
