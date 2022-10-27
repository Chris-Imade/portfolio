import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "bw1beysr",
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: "skCLD77UE6CcEgJKy6WXlWEhRqjZQb3OIbWvqRC47UEyICDuwsxhoJL1lx4y8aWwGZ7sgj9zOU8jbRpVF8lnZaOrZ2K1ybf5lQEa2AHahrQOUmpqEHzosL5mVrpp7IBgPUxNLMbsJmmaBagRiGaejp9dzVDssgROyWbh0QnvW2JvE7utekQB",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);