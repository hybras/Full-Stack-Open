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
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}
