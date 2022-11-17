import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home({ posts }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCount((n) => n + 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <title>Mon blog</title>
      <h1>Count : {count}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <h3>
                {post.id} - {post.title}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await fetch(
    "http://jsonplaceholder.typicode.com/posts?_limit=4"
  ).then((response) => response.json());
  return {
    props: {
      posts,
    },
  };
}
