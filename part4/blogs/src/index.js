const http = require('http')
const express = require('express')
const app = require('app')

const PORT = 3003
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})