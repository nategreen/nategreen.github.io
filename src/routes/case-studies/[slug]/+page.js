import { gql, request } from 'graphql-request';

export async function load({ params }) {
  const caseStudies = await request(
    "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clnhty2q88bul01uhf5m5dqrj/master",
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
            asset {
              url
              width
              height
              altText
            }
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