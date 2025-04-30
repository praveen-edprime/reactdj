import ContentSlider from '../../components/form/ContentSlider';
import teacherwellness from '/images/edprime-exclusive/Edprime_teacher_wellness.jpg';
import TeacherWellnessExplore from '../../edprimeData/TeacherWellnessExplore.json';

const TeacherWellness = () => {

    return (
        <div className="max-w-[2000px] mx-auto">
            {/* Header with Teacher and Chalkboard */}
            <div className="relative h-[400px] text-white p-5 bg-cover bg-center" style={{ backgroundImage: `url(${teacherwellness})` }} />

            {/* Welcome Message */}
            <div className="max-w-4xl mx-auto p-6 text-center text-gray-800">
                <p className="text-lg">Welcome to EdPrime Teacher Wellness, where we champion the vitality of educators. Recognizing that a teacher's
                    well-being is pivotal to their teaching prowess, we curate a space for free-flowing knowledge exchange. Here,
                    teachers access digital resources not just for professional growth but also for personal wellness. Join us in
                    nurturing a community where well-supported teachers shape brighter futures.
                </p>
            </div>

            {/* Featured Video Section */}
            <div className="py-10 relative">
                <div className="text-center">
                    <h2 className="text-[#007bff] text-3xl">ONLINE CONTENT</h2>
                    <div className='mb-10'>
                        <ContentSlider data={TeacherWellnessExplore} position={'inside'} />
                    </div>
                </div>
            </div >

            {/* Additional Video Thumbnails */}
            {/* <div className="max-w-4xl mx-auto p-6 text-center">
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/images/video-thumbnail-1.jpg" alt="Top 7 Teaching Tips" className="w-full h-32 object-cover rounded" />
                        <p className="mt-2 text-gray-700">Top 7 Teaching Tips for Teachers</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/images/video-thumbnail-2.jpg" alt="5 Qualities" className="w-full h-32 object-cover rounded" />
                        <p className="mt-2 text-gray-700">5 Qualities That 21st Century Teachers Must Have!</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/images/video-thumbnail-3.jpg" alt="Live Discussion" className="w-full h-32 object-cover rounded" />
                        <p className="mt-2 text-gray-700">Live discussion on "Innovations in teaching-learning"</p>
                    </div>
                </div>
            </div> */}

            {/* Subscription Section */}
            <div className=" mx-auto p-6 text-center mt-6" style={{ backgroundImage: `url(${teacherwellness})` }}>
            <h2 className="text-[#007bff] text-3xl mb-3">SUBSCRIBE TO OUR YOUTUBE CHANNEL</h2>
                <div className="grid grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="bg-orange-500 rounded mb-2">Mental Health Awareness</p>
                        <p className="text-sm text-gray-500">Explore our collection that aim to spread awareness, provide support, and inspire positive mental health practices.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="bg-teal-500 rounded mb-2">Origami Magic</p>
                        <p className="text-sm text-gray-500">Welcome to our mini playlist, where you can enjoy the exciting journey of paper folding creativity.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="bg-blue-500 rounded mb-2">EdPrime Parenting</p>
                        <p className="text-sm text-gray-500">The child-parent relationship has a major influence on most aspects of child development.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p className="bg-red-500 rounded mb-2">EdPrime Eco Warriors</p>
                        <p className="text-sm text-gray-500">Uniting eco warriors for a better tomorrow. Making strides toward a more sustainable and eco-conscious world.</p>
                    </div>
                </div>
                {/* <div className="mt-4">
                    <img src="/images/paper-boat.png" alt="Paper Boat" className="w-32 mx-auto" />
                </div> */}
            </div>
        </div>
    );
};

export default TeacherWellness;