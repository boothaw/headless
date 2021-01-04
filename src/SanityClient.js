const sanityClient = require('@sanity/client')

const client = sanityClient({
    projectId: 'ykxe03er',
    dataset: 'production',
    useCdn: true 
    // false if you want to ensure fresh data
})

export default client;