const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.map(it => it.likes).reduce((acc, it) => acc + it, 0)
}

const favoriteBlog = (blogs) => {
  const sortedBlogs = [...blogs]
  sortedBlogs.sort((a, b) => a.likes - b.likes)
  const blog = sortedBlogs.slice(-1)[0]
  return {
    likes: blog.likes,
    author: blog.author,
    title: blog.title
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}
