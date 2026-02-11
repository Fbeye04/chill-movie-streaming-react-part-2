import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import MovieCard from "../molecules/MovieCard";
import { useRef } from "react";

const MovieSection = ({ section, dataMovies, variant }) => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const slidingAmount = direction === "left" ? -500 : 500;

      sliderRef.current.scrollBy({
        left: slidingAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className='text-white w-full flex flex-col items-start p-5 md:py-5 lg:py-10 md:px-10 lg:px-20 lg:gap-8'>
      <h3 className='text-xl lg:text-3xl font-bold mb-5'>{section}</h3>

      <div className='relative w-full'>
        <button
          type='button'
          onClick={() => scroll("left")}
          className='hidden lg:block lg:absolute -left-5 top-1/2 -translate-y-1/2 text-3xl text-surface-medium bg-white rounded-full lg:z-20 cursor-pointe transition-all duration-300 hover:scale-110 active:scale-95'>
          <BsFillArrowLeftCircleFill />
        </button>

        <button
          type='button'
          onClick={() => scroll("right")}
          className='hidden lg:block lg:absolute -right-4 top-1/2 -translate-y-1/2 text-3xl text-surface-medium bg-white rounded-full z-20 cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95'>
          <BsFillArrowRightCircleFill />
        </button>

        <div
          ref={sliderRef}
          className='flex gap-4 md:gap-6 overflow-y-hidden overflow-x-auto scrollbar-hide'>
          {dataMovies.map((item) => (
            <MovieCard
              key={item.id}
              variant={variant}
              poster={item.poster}
              title={item.title}
              rating={item.rating}
              label={item.label}
              labelVariant={item.labelVariant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieSection;
