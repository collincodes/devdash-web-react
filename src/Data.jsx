import { createApolloFetch } from 'apollo-fetch'

const key = 'eb315ee5a1894cae71fe1e7586b21edae09cb7d9'
const uri = 'https://api.github.com/graphql'
const query = `{
  user(login: cmdeveloped) {
    avatarUrl
    name
    email
    bio
    location
    repositories(first: 25) {
      edges {
        node {
          name
          createdAt
          description
          url
          defaultBranchRef {
            target {
              ... on Commit {
                history {
                  totalCount
                }
              }
            }
          }
        }
      }
    }
  }
}`

const dataFetch = createApolloFetch({ uri })

dataFetch.use(({ request, options }, next) => {
  if (!options.headers) {
    options.headers = {};  // Create the headers object if needed.
  }
  options.headers['authorization'] = 'Bearer ' + key;

  next();
});

export function gitData() {
  return dataFetch({ query })
    .then(res => {
      return res
    })
}
