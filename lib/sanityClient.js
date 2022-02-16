import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'mgwy1k5q',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skjynHHRGt9EeDEiEJ8lVrWPJMaaZQmCBgnWgYrdM4PibxElAdJgdcAgdKG15XtoWJai5N0gLEbIhklW2ytRKw5BfoXgH6E6ukelp3LCHOSJNUbQBQ8c3LdtcRWvjv7C1d7U9FrTmjCKmR1wJrqNgoua4oZD3Fu4n4wxZCiG10Nyu6kdqZgG',
  useCdn: false,
  })