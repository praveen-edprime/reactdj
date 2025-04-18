// src/components/common/EdprimeSlider.tsx

import { Swiper, SwiperSlide} from 'swiper/react';


const sliderData = [
  {
    title: 'Countingwell',
    description:
    'Wellness of teachers is equally important & is linked to the effectiveness of teaching. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
    image: '/images/edprime-exclusive/countingwell.png', // Replace with your actual image path
  },
  {
    title: 'EdPrime Scholarships',
    description:
    'Wellness of teachers is equally important & is linked to the effectiveness of teaching. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
    image: '/images/edprime-exclusive/edprime-scholarships.jpg',
  },
  {
    title: 'Edprime Teacher Wellness',
    description:
      'Wellness of teachers is equally important & is linked to the effectiveness of teaching. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
    image: '/images/edprime-exclusive/edprime-teacher.jpg',
  },
];

const EdprimeSlider = () => {
  return (
    <div className="bg-gray-50 py-8 px-4 rounded-lg">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">EdPrime Exclusive</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {sliderData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md p-4 h-full flex flex-col">
              <img
                src={item.image}
                alt={item.title}
                className="object-contain h-32 w-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-4 text-right">
        <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded hover:bg-blue-700">
          Switch to Edprime Exclusive page
        </button>
      </div>
    </div>
  );
};

export default EdprimeSlider;
