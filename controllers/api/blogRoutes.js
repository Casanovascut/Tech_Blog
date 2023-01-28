const router = require('express').Router();
const { Blog, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) =>
{
    // find all blogs
    try {
        const blogData = await Blog.findAll({
            include: [{ model: User }],
        });
        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;