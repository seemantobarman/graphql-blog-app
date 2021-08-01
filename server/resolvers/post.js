const { posts } = require("../temp");

//queries
const totalPosts = () => {
    return posts.length;
};

const allPosts = () => {
    return posts;
};

//mutations
const newPost = (parent, args) => {
    console.log(args);
    const { title, description } = args.input;
    const post = {
        id: posts.length + 1,
        title: title,
        description: description,
    };

    //adding the new post to the posts array
    posts.push(post);

    return post;
};

module.exports = {
    Query: {
        totalPosts: totalPosts,
        allPosts: allPosts,
    },
    Mutation: { newPost },
};
