import { GetStaticPaths } from 'next';

const CommunityFeedPage = ({ posts }) => {
  // Your page content here
};

export const getStaticPaths = () => {
  // Example: Assuming you have a way to fetch all post slugs
  const postSlugs = ['slug1', 'slug2', 'slug3']; // Replace this with actual logic to fetch slugs

  // Return an array of possible values for postSlug
  return {
    paths: postSlugs.map(slug => ({
      params: { postSlug: slug },
    })),
    fallback: false,
  };
};

export default CommunityFeedPage;
