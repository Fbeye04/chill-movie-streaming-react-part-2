import Hero from "../components/organisms/Hero";
import {
  continueWatching,
  topRating,
  trending,
  newReleases,
} from "../data/movie";
import MovieSection from "../components/organisms/MovieSection";
import { allMovies } from "../data/movie";

const Film = () => {
  const heroData = allMovies.find((movie) => movie.id === 5);
  const onlyFilm = (data) => data.filter((item) => item.type === "Movie");

  return (
    <main className='overflow-x-hidden'>
      <Hero
        heroImg={heroData.backdrop}
        title={heroData.title}
        synopsis={heroData.synopsis}
        ageRating={heroData.ageRating}
      />

      <MovieSection
        section='Melanjutkan Tonton Film'
        dataMovies={onlyFilm(continueWatching)}
        variant='landscape'
      />
      <MovieSection
        section='Top Rating Film dan Series Hari ini'
        dataMovies={onlyFilm(topRating)}
        variant='portrait'
      />
      <MovieSection
        section='Film Trending'
        dataMovies={onlyFilm(trending)}
        variant='portrait'
      />
      <MovieSection
        section='Rilis Baru'
        dataMovies={onlyFilm(newReleases)}
        variant='portrait'
      />
    </main>
  );
};

export default Film;
