const _ = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.map(it => it.likes).reduce((acc, it) => acc + it, 0)
}

const favoriteBlog = (blogs) => {
  const blog = _.maxBy(blogs, it => it.likes)
  return _.pick(blog, ['likes', 'author', 'title'])
}

const mostBlogs = (blogs) => {
  const byAuthor = _.groupBy(blogs, it => it.author)
  const authToNumBlogs = _.mapValues(byAuthor, blogs => blogs.length)
  const asList = _.map(_.toPairs(authToNumBlogs), ([author, blogs]) => {
    return { author, blogs }
  })
  return _.maxBy(asList, it => it.blogs)
}
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}
