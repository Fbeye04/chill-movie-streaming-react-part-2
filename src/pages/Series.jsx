import Hero from "../components/organisms/Hero";
import {
  continueWatching,
  topRating,
  trending,
  newReleases,
} from "../data/movie";
import MovieSection from "../components/organisms/MovieSection";
import { allMovies } from "../data/movie";

const Series = () => {
  const heroData = allMovies.find((movie) => movie.id === 31);
  const onlySeries = (data) => data.filter((item) => item.type === "Series");

  return (
    <main className='overflow-x-hidden'>
      <Hero
        heroImg={heroData.backdrop}
        title={heroData.title}
        synopsis={heroData.synopsis}
        ageRating={heroData.ageRating}
      />

      <MovieSection
        section='Melanjutkan Tonton Series'
        dataMovies={onlySeries(continueWatching)}
        variant='landscape'
      />
      <MovieSection
        section='Top Rating Series Hari Ini'
        dataMovies={onlySeries(topRating)}
        variant='portrait'
      />
      <MovieSection
        section='Series Trending'
        dataMovies={onlySeries(trending)}
        variant='portrait'
      />
      <MovieSection
        section='Rilis Baru'
        dataMovies={onlySeries(newReleases)}
        variant='portrait'
      />
    </main>
  );
};

export default Series;
