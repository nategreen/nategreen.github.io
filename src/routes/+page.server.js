import { gql, GraphQLClient } from 'graphql-request';
import { dev } from '$app/environment';
import { HYGRAPH_DEV_AUTH_TOKEN } from '$env/static/private';

export async function load() {
  const hygraph = new GraphQLClient(
    'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clnhty2q88bul01uhf5m5dqrj/master',
    {
      headers: dev ? {
        'Authorization': `Bearer ${HYGRAPH_DEV_AUTH_TOKEN}`,
      } : {},
    }
  )
  const data = await hygraph.request(
    gql`
      {
        caseStudies(orderBy: endDate_DESC) {
          id
          title
          client
          startDate
          endDate
          slug
          cta
          summary
          cloudinaryCover
          cover {
            url(
              transformation: {
                image: { resize: { width: 1000, fit: clip } }
                validateOptions: true
              }
            )
            altText
          }
          content {
            ... on TextContent {
              id
            }
            ... on Figure {
              id
            }
            ... on Callout {
              id
            }
          }
        }
        figmaCommunityResources {
          title
          description
          thumbnail {
            url
            altText
          }
          url
        }
        stackExchangeItems {
          title
          description
          url
          type
        }
      }
    `,
  );

  return data;
}
