import { GraphQLClient } from 'graphql-request';
import { dev } from '$app/environment';
import { HYGRAPH_DEV_AUTH_TOKEN } from '$env/static/private';
import { gql } from 'graphql-request';

export async function load({ params }) {
  const hygraph = new GraphQLClient(
    'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clnhty2q88bul01uhf5m5dqrj/master',
    {
      headers: dev ? {
        'Authorization': `Bearer ${HYGRAPH_DEV_AUTH_TOKEN}`,
      } : {},
    }
  )
  const caseStudies = await hygraph.request(
    gql`{
      caseStudy(where: {slug: "${params.slug}"}) {
        id
        title
        client
        startDate
        endDate
        slug
        content(first: 50) {
          ... on TextContent {
            content
          }
          ... on Figure {
            cloudinaryAsset
            bleed
            caption
            style
          }
          ... on Callout {
            type
            title
            content
          }
        }
      }
    }`
  );

  return caseStudies;
}