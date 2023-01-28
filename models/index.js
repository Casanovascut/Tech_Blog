const User = require('./User');
const Blog = require('./Blog')

Blog.belongsTo(User,{
    foreignKey: 'user_id',
    ondelete: 'CASCADE',
})

User.hasMany(Blog,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})



module.exports = { User, Blog };
