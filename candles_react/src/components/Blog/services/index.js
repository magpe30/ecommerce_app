import request, { gql } from 'graphql-request';

// eslint-disable-next-line no-undef
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

export const getCategories = async() => {
    const query = gql`
        query GetCategories {
            categories {
                name
                slug
            }
        }
    `

    const result = await request(GRAPHQL_API, query);
    return result;
}

export const getPostDetails = async(slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          bio
          name
          id
          photo{
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
        content {
          raw
        }
      }
    }
  `
  const result = await request(GRAPHQL_API, query, { slug });
  return result?.post;
}