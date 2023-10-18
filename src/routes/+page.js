import { gql, request } from 'graphql-request';

export async function load() {
  const data = await request(
    'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clnhty2q88bul01uhf5m5dqrj/master',
    gql`
      {
        caseStudies(orderBy: endDate_DESC, stage: PUBLISHED) {
          id
          title
          client
          startDate
          endDate
          slug
          cta
          summary
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
    `
  );

  return data;
}
