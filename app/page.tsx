import Movie from "./components/movie";
import React from "react";

export default async function Home() {
  // const key = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=095fc92a9340dcb67bdd53448e1eda21`;
  const data = await fetch(url);
  const res = await data.json();
  await delay(2000);

  return (
    <div>
      <div className="grid gap-2 grid-cols-fluid">
        {res.results.map((movie: any) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </div>
  );
}

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}