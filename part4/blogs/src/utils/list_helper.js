const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.map(it => it.likes).reduce((acc, it) => acc + it, 0)
}

module.exports = {
  dummy,
  totalLikes
}
