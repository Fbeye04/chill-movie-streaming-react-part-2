import { MdStar } from "react-icons/md";
import Label from "../atoms/Label";

const MovieCard = ({ poster, title, rating, label, labelVariant, variant }) => {
  const isLandscape = variant === "landscape";

  const cardStyle = {
    portrait: "w-[150px] md:w-[200px] lg:w-[234px] aspect-[2/3]",
    landscape: " w-[309px] lg:w-[302px] aspect-video",
  };

  return (
    <div
      className={`relative text-white cursor-pointer shrink-0 ${cardStyle[variant]}`}>
      <img
        src={poster}
        className='object-cover w-full h-full rounded-lg '
        alt={`${title}`}
        loading='lazy'
      />

      {isLandscape && (
        <div className='absolute bottom-0 left-0 w-full p-3 md:p-4 poster-overlay flex justify-between items-end'>
          <h6 className='text-sm lg:text-lg'>{title}</h6>

          <div className='flex items-center gap-1'>
            <MdStar />
            <span className='text-xs md:text-sm'>{rating}</span>
          </div>
        </div>
      )}

      {label && <Label variant={labelVariant}>{label}</Label>}
    </div>
  );
};

export default MovieCard;
