import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"

const client = sanityClient({
  projectId: "hpi3m6u6",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
  token: process.env.REACT_APP_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client