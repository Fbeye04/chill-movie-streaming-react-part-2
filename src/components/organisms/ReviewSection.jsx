import { useState } from "react";
import { LuMessageSquarePlus } from "react-icons/lu";
import ReviewCard from "../molecules/ReviewCard";
import ReviewModal from "../molecules/ReviewModal";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([
    {
      id: 501,
      title: "A Man Called Otto",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est purus. Etiam porta aliquam nunc. Phasellus vel ornare mi. Duis quis nulla sagittis, tristique ligula quis, euismod justo. Nunc non elit accumsan, ultricies justo et, fringilla diam. Curabitur pretium scelerisque diam. Donec id scelerisque nibh. Nam iaculis purus nec tortor gravida placerat. Aenean accumsan gravida odio eu pharetra. Morbi fringilla feugiat ligula nec rhoncus. Curabitur in lacus vel massa viverra sollicitudin.",
    },
    {
      id: 502,
      title: "A Man Called Otto",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est purus. Etiam porta aliquam nunc. Phasellus vel ornare mi. Duis quis nulla sagittis, tristique ligula quis, euismod justo. Nunc non elit accumsan, ultricies justo et, fringilla diam. Curabitur pretium scelerisque diam. Donec id scelerisque nibh. Nam iaculis purus nec tortor gravida placerat. Aenean accumsan gravida odio eu pharetra. Morbi fringilla feugiat ligula nec rhoncus. Curabitur in lacus vel massa viverra sollicitudin.",
    },
    {
      id: 503,
      title: "A Man Called Otto",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est purus. Etiam porta aliquam nunc. Phasellus vel ornare mi. Duis quis nulla sagittis, tristique ligula quis, euismod justo. Nunc non elit accumsan, ultricies justo et, fringilla diam. Curabitur pretium scelerisque diam. Donec id scelerisque nibh. Nam iaculis purus nec tortor gravida placerat. Aenean accumsan gravida odio eu pharetra. Morbi fringilla feugiat ligula nec rhoncus. Curabitur in lacus vel massa viverra sollicitudin.",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddReview = (reviewBaru) => {
    setReviews([...reviews, reviewBaru]);
  };

  return (
    <section className='text-white w-full p-5 md:py-5 lg:py-10 md:px-10 lg:px-20'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-8'>
        <div>
          <h3 className='text-xl lg:text-3xl font-bold'>My Reviews</h3>
          <p className='text-base lg:text-xl text-secondary'>
            Share your thoughts on movies you've watched
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className='w-full md:w-auto flex items-center justify-center gap-2 bg-brand-primary py-2 px-4 lg:py-2.5 lg:px-5 rounded-2xl'>
          <LuMessageSquarePlus className='text-xl md:text-2xl font-semibold' />
          <span className='text-base lg:text-xl font-semibold'>
            Write Review
          </span>
        </button>
      </div>

      {isModalOpen && (
        <ReviewModal
          onClose={() => setIsModalOpen(false)}
          onAddReview={handleAddReview}
        />
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {reviews.map((items) => (
          <ReviewCard
            key={items.id}
            title={items.title}
            rating={items.rating}
            review={items.review}
          />
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
