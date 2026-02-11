import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import Hero from "../components/organisms/Hero";
import {
  continueWatchingMovies,
  topRatingMovies,
  trendingMovies,
  newReleasesMovies,
} from "../data/movie";
import MovieSection from "../components/organisms/MovieSection";
import ReviewSection from "../components/organisms/ReviewSection";

const Home = () => {
  return (
    <div>
      <Header />

      <main className='overflow-x-hidden'>
        <Hero />
        <MovieSection
          section='Melanjutkan Tonton Film'
          dataMovies={continueWatchingMovies}
          variant='landscape'
        />
        <MovieSection
          section='Top Rating Film dan Series Hari ini'
          dataMovies={topRatingMovies}
          variant='portrait'
        />
        <MovieSection
          section='Film Trending'
          dataMovies={trendingMovies}
          variant='portrait'
        />
        <MovieSection
          section='Rilis Baru'
          dataMovies={newReleasesMovies}
          variant='portrait'
        />
        <ReviewSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
