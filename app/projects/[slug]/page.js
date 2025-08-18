export async function generateMetadata({ params }) {
  return {
    title: `${params.slug} | My Portfolio`,
  };
}

export default function Project({ params }) {
  return <h1>{params.slug}</h1>;
}
