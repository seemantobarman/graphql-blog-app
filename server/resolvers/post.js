const { posts } = require("../temp");

const totalPosts = () => {
    return posts.length;
};

const allPosts = () => {
    return posts;
};

module.exports = {
    Query: {
        totalPosts: totalPosts,
        allPosts: allPosts,
    },
};
