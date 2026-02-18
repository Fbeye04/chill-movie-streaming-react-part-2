import { IoMdPlay } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Poster from "/posters/a-man-called-otto.png";

const HoverMovieCard = () => {
  return (
    <div className='bg-primary rounded-2xl w-[350px] shadow-hover-card flex flex-col overflow-hidden'>
      <img
        src={Poster}
        className='w-full h-1/2 object-cover rounded-t-2xl'
        alt='#'
      />

      <div className='flex flex-col justify-between flex-1 lg:gap-4 md:p-7 w-full'>
        <div className='flex justify-between items-center'>
          <div className='flex lg:gap-4'>
            <button className='bg-white rounded-full p-2 cursor-pointer'>
              <IoMdPlay className='text-primary lg:text-2xl' />
            </button>

            <button className='bg-primary border p-2 rounded-full cursor-pointer'>
              <IoMdAdd className='lg:text-2xl' />
            </button>
          </div>

          <button className='bg-primary border p-2 rounded-full cursor-pointer'>
            <MdOutlineKeyboardArrowDown className='lg:text-2xl' />
          </button>
        </div>

        <div className='flex items-center justify-start lg:gap-4'>
          <span className='bg-[#CDF1FF4D] text-secondary lg:text-lg font-bold lg:py-1 lg:px-3 rounded-3xl'>
            13+
          </span>
          <span className='font-bold lg:text-lg'>16 Episode</span>
        </div>

        <div className='flex justify-between lg:text-lg text-secondary'>
          <span>Misteri </span>

          <span>•</span>

          <span>Kriminal</span>

          <span>•</span>

          <span>Fantasi</span>
        </div>
      </div>
    </div>
  );
};

export default HoverMovieCard;
