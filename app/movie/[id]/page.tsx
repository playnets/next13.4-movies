//เรียกใช้คอมโพเนนท์ด้วย tsrfc
import React from 'react'
import Image from 'next/image';

type Props = {
  params: any;
}

export default async function MovieDetail({params}: Props) {
  const { id } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=095fc92a9340dcb67bdd53448e1eda21`, 
    {next: {revalidate:10}} //เคลียร์ cache ทุก 10 วินาที
  );
    const res = await data.json();

  return (
    <div className='container'>รายละเอียดของหนัง:
    <div className='container mx-auto mt-7'>
      <h2 className='text-4xl'>ชื่อหนัง : {res.title}</h2>
      <h2 className='text-4xl'>ความยาว : {res.runtime}</h2>
      <Image         
        src={imagePath + res.backdrop_path}
        width={700}
        height={700}
        alt={res.title}
        priority
      />
      <p>{res.overview}</p>
    </div>    
    </div>
  )
}