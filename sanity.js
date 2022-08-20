import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"

const client = sanityClient({
  projectId: "hpi3m6u6",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
  token: "sk3y6kJNhsMrLnfziPaXLlGo9gBDtdge8lzKnlArI3mL1dMLdVr0UFtxhxUEK5WCJcddkFbNxXNfF6oZhsEG8D22GAFjXfF3VwN1pxliznk4GzzSOtnUzsNYmk9ZWHONcoNWyaBKd0F8x8V1y9YyrOBEvsiLKw21y0T1i6kXYiyUPr6dH6bI"
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client