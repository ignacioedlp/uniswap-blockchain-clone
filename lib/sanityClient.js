import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'mgwy1k5q',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skGWdlNfkdZRf6I9R1GQNpeNqmsMDKbHNSJrL5bvIgn1boPbeyKFnAXcSuoXwmUP0GjPuEDDrmpof1p7NjbCjO2lyTGRMUQuu3amYn4rAd1hytpCczStiT9yrlAtcvWMdn1nPluH5C7Va1VlbhsudJmMyvMQB1Qfr300hCxRmSkPKCT6n8sa',
  useCdn: false,
})
