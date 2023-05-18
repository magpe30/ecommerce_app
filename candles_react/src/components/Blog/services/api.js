/* eslint-disable no-undef */
import { GraphQLClient, gql } from 'graphql-request';

const GRAPHQL_API = process.env.REACT_APP_GRAPHCMS_ENDPOINT;
const GRAPHQL_TOKEN = process.env.REACT_APP_GRAPHCMS_TOKEN;

export const submitComment = async(obj) => {
    console.log(obj )
    const graphQLClient = new GraphQLClient(GRAPHQL_API, {
        headers:{
            authorization: `Bearer ${GRAPHQL_TOKEN}`
        }
    });

    const query = gql`
        mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
            createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
        }
    `;

    const result = await graphQLClient.request(query, {
        name: obj.name,
        email: obj.email,
        comment: obj.comment,
        slug: obj.slug
    });

    return result;
};