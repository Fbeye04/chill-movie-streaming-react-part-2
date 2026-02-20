import Hero from "../components/organisms/Hero";
import {
  continueWatching,
  topRating,
  trending,
  newReleases,
} from "../data/movie";
import MovieSection from "../components/organisms/MovieSection";
import ReviewSection from "../components/organisms/ReviewSection";
import { allMovies } from "../data/movie";

const Dashboard = () => {
  const heroData = allMovies.find((movie) => movie.id === 13);

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
        dataMovies={continueWatching}
        variant='landscape'
      />
      <MovieSection
        section='Top Rating Film dan Series Hari ini'
        dataMovies={topRating}
        variant='portrait'
      />
      <MovieSection
        section='Film Trending'
        dataMovies={trending}
        variant='portrait'
      />
      <MovieSection
        section='Rilis Baru'
        dataMovies={newReleases}
        variant='portrait'
      />
      <ReviewSection />
    </main>
  );
};

export default Dashboard;
