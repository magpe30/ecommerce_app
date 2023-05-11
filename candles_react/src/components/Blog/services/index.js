import { gql } from '@apollo/client'

export const GRAPHQL_API = process.env.REACT_APP_GRAPHCMS_ENDPOINT;

export const ALL_POSTS = gql`
query MyQuery {
    postsConnection {
      edges {
        node {
          author {
            bio
            id
            name
            photo {
              url
            }
          }
          createdAt
          slug
          title
          excerpt
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
        }
      }
    }
  }
`;