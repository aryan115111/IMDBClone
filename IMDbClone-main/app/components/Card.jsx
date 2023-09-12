import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
export default function Card({ result }) {
  return (
    <div
      className="cursor-pointer sm:p-3 
      mx-5 sm:my-1 my-3 
    sm:hover:shadow-[#242526] sm:shadow-md rounded-[25px] border-[#242526] dark:bg-[#060606] transition-shadow duration-200 group"
    >
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-[25px] rounded-[35px] align-middle border-none group-hover:opacity-80 transition-opacity duration-200 py-3"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          placeholder="blur"
          blurDataURL="loadimg"
          alt="image"
        ></Image>
        <div className="p-2">
          <p className="line-clamp-2  sm:text-lg text-sm">{result.overview}</p>
          <h2 className="pt-3 truncate text-lg font-bold">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
