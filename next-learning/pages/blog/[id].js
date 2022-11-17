/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Post({ post }) {
  return (
    <>
      <main>
        <Link href="/">Revenir à l'accueil</Link>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </main>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const post = await fetch(
    "http://jsonplaceholder.typicode.com/posts/" + params.id
  ).then((response) => response.json());
  return {
    props: {
      post,
    },
  };
}
