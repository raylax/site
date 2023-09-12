import { getCollection } from 'astro:content'

export const getPosts = async () =>
  (await getCollection('post')).sort((a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf())
