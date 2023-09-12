import fs from 'fs'

if (process.argv.length != 3) {
  console.log('yarn new-post <post-name>')
  process.exit(1)
}

const post = process.argv[2].replace(/ /g, '-').toLowerCase()
const date = new Date().toISOString().split('T')[0]

const dir = `src/content/post/${date.replace(/-/g, '')}`

const template = `---
title: ${post}
description: ''
publishedDate: ${date}
# updatedDate: 
heroImage: './assets/post-placeholder.png'
tags:
    - 'tag'
---

POST CONTENT
<!--more-->

`

const file = `${dir}_${post}.md`
console.log(`Generate ${file}`)

fs.writeFileSync(file, template)
