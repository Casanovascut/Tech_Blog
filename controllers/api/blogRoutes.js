const router = require('express').Router();
const { Blog, User } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) =>
{
    try {
        const newBlog = req.body;
        newBlog.user_id = req.session.user_id
        const blog = await Blog.create(newBlog)
        res.status(200).json(blog)
    } catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
})

router.put('/:id', withAuth, async (req, res) =>
{
    try {
        const blog = await Blog.update(req.body,{
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            },
        })
        if (blog) {
            res.status(200).json(blog);
        } else {
            res.status(400).end()
        }
    } catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
})

router.delete('/:id', withAuth, async (req, res) =>
{
    // delete one product by its `id` value ensureing the user matches the product
    try {
        const blog = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            },
        })
        if (blog) {
            res.status(200).json(blog);
        } else {
            res.status(404).end()
        }
    } catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
});

module.exports = router;