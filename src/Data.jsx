import { createApolloFetch } from 'apollo-fetch'

const key = '806637cd5237d19213ecde02ff075d9ac5a88f2a'
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
          description
          url
          languages(first: 5) {
            edges {
              size
              node {
                name
              }
            }
          }
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

export const socialMedia = [
  {
    'platform': 'LinkedIn',
    'url': 'https://linkedin.com/in/cmdeveloped',
    'icon': 'fab fa-linkedin-in'
  }, {
    'platform': 'Twitter',
    'url': 'https://twitter.com/collinscode_',
    'icon': 'fab fa-twitter'
  }, {
    'platform': 'Github',
    'url': 'https://github.com/cmdeveloped',
    'icon': 'fab fa-github'
  }, {
    'platform': 'CodePen',
    'url': 'https://codepen.io/collinscode/',
    'icon': 'fab fa-codepen'
  }
]
