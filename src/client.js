import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId:'1tp8p6cf',
    dataset:'production',
    apiVersion:'2023-07-10',
    useCdn:true,
    token:import.meta.env.VITE_APP_SANITY_TOKEN
})
const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)