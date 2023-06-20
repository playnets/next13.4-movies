
export default async function Home() {

  const url = "https://api.themoviedb.org/3/movie/popular?api_key=095fc92a9340dcb67bdd53448e1eda21"
  const data = await fetch(url)
  const res = await data.json()

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-2xl">โปรแกรมโปสเตอร์หนัง</h1>
      <ul>
        {res.results.map((movie: any) =>(
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul> 
      {/* <Movie
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster_path={movie.poster_path}
        release_date={movie.release_date}
      /> */}
    </main>
  );
}
