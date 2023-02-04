const { Blog } = require('../models');

const blogData = [
    {
        "content": "this is the first blog post and it is great",
        "user_id": 1
    },
    {
        "content": "heres a secong blog post and this one is great to",
        "user_id": 2
    },
    {
        "content": "well would you look at that!! the third blog post is just as good as the first and second!!",
        "user_id": 3
    }
]

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;