import movieOpen from "../../assets/movie-open.svg";

const Logo = ({ imgCustom, textCustom }) => {
  return (
    <div className='flex items-center gap-2 text-white'>
      <img
        src={movieOpen}
        className={`w-7 md:w-10 ${imgCustom}`}
        alt='chill logo'
      />
      <span
        className={`font-londrina uppercase text-3xl md:text-5xl ${textCustom}`}>
        chill
      </span>
    </div>
  );
};

export default Logo;
