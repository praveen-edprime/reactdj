import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Label from '../../components/form/Label';
import Input from '../../components/form/input/InputField';
import Select from '../../components/form/Select';
import LearningCardGrid from '../../components/form/LearningCardGrid';
import CardGrid from '../../components/form/CardGrid';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import ContentSlider from '../../components/form/ContentSlider';
import BannerSlider from '../../components/form/BannerSlider';
import LearningItems from '../../edprimeData/LearningItems.json';
import OnlineSliderData from '../../edprimeData/OnlineSliderData.json';
import OtherSliderData from '../../edprimeData/OtherSliderData.json';
import KnowledgeSliderData from '../../edprimeData/KnowledgeSliderData.json';
import ContentSliderData from '../../edprimeData/ContentSliderData.json';
import CardItems from '../../edprimeData/CardItems.json';
import BannerDataOne from '../../edprimeData/BannerDataOne.json';
import BannerDataTwo from '../../edprimeData/BannerDataTwo.json';

// Image slider images
const images = [
    '/images/edprime-exclusive/searchContentBg.jpg',
    '/images/edprime-exclusive/2.jpg',
    '/images/edprime-exclusive/1.jpg',
    '/images/edprime-exclusive/4.jpg',
    '/images/edprime-exclusive/3.jpg',
];

const options = [
    { value: "khanacademy", label: "Khan Academy" },
    { value: "unacademy", label: "Unacademy" },
    { value: "byjys", label: "BYJU'S" },
    { value: "magnetbrains", label: "Magnet Brains" },
    { value: "designmate", label: "Designmate" },
    { value: "greenboard", label: "Green Board" },
];

const bannerDataThree = [
    {
        imageUrl: "/images/edprime-exclusive/edprimestrips.png"
    },
];

export default function EdprimeExclusive() {
    const [current, setCurrent] = useState(0);

    const handleSelectChange = (value: string) => {
        console.log("Selected value:", value);
    };

    // Auto-slide every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="relative min-h-screen w-full overflow-hidden">
                {/* Background Image with opacity */}
                <img
                    src={images[current]}
                    alt={`Slide ${current + 1}`}
                    className="absolute inset-0 w-full h-full object-cover opacity-75 z-0 transition-all duration-500"
                />

                {/* Main Content */}
                <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-6 text-white">
                    <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center max-w-7xl">
                        {/* Left Side: Headings */}
                        <div className="text-left max-w-xl mb-10 lg:mb-0">
                            <h1 className="text-4xl sm:text-5xl font-bold">Unlimited Topics,</h1>
                            <h1 className="text-4xl sm:text-5xl font-bold">Courses and more</h1>
                            <p className="mt-4 text-md sm:text-lg">
                                Discover the world of endless learning with EdPrime Exclusive, where you can explore a vast array of topics and courses.
                            </p>
                        </div>

                        {/* Search Inputs */}
                        <div className="w-full max-w-md">
                            <div className="flex flex-col space-y-4 bg-opacity-10 p-6 rounded-md">
                                <div className="flex flex-col space-y-1">
                                    <Label className='text-2xl font-bold text-[white]'>Topic</Label>
                                    <div className="relative w-full">
                                        <Input
                                            type="text"
                                            placeholder="Search for a topic..."
                                            className="pl-2 py-1 text-sm bg-white text-[#333] rounded-md focus:outline-none"
                                        />
                                        <button
                                            className="absolute right-2 hover:text-[#6096b3] top-1/2 transform -translate-y-1/2 text-[#333] transition-all"
                                        >
                                            <FaSearch />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-col space-y-1">
                                    <Label className='text-2xl font-bold text-[white]'>Provider</Label>
                                    <Select
                                        options={options}
                                        placeholder="Select a provider..."
                                        onChange={handleSelectChange}
                                        className="w-full pl-4 pr-10 py-2 cursor-pointer bg-white text-[#333] rounded-md focus:outline-none"
                                    />

                                </div>

                                <button className="px-6 py-2 bg-[white] text-[#99CFEC] hover:bg-[#6096b3] hover:text-[white] rounded-md self-center">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Slider Dots */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-3xl z-10">
                        <div className="flex justify-center mt-3 space-x-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrent(index)}
                                    className={`w-3 h-3 rounded-full ${current === index ? 'bg-blue-600' : 'bg-gray-300'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Explore Excel Enjoy Section */}
            <div className="bg-gray-100 py-16 px-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12">
                    {/* Text Section */}
                    <div className="lg:w-1/3 mb-10 lg:mb-0">
                        <h2 className="text-4xl font-bold mb-4">Explore Excel Enjoy</h2>
                        <p className="text-lg font-semibold text-gray-700">
                            We empower you to explore the uncharted, excel in your pursuits, and enjoy the lifelong learning.
                        </p>
                    </div>
                    {/* Cards Section */}
                    <LearningCardGrid items={LearningItems} />
                </div>
            </div>

            {/* Our Offerings Section */}
            <div className="bg-gray-100 py-16 px-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12">
                    {/* Text Section */}
                    <div className="lg:w-1/3 mb-10 lg:mb-0">
                        <h2 className="text-4xl font-bold mb-4">Our Offerings</h2>
                        <p className="text-gray-600 text-lg font-semibold mb-12">
                            We offer a rich tapestry of knowledge, where every course is a thread in the fabric of your personal and professional growth
                        </p>
                    </div>
                    {/* Cards Section */}
                    <CardGrid items={CardItems} />
                </div>
            </div>

            {/* Online Content Section */}
            <div className="bg-gray-100 py-10 relative">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-5">Online Content</h2>
                    <div className='mb-10'>
                        <ContentSlider data={OnlineSliderData} position={'inside'} />
                    </div>
                    {/* Insert the ThoughtSlider here */}
                    <BannerSlider data={BannerDataOne} />
                    <div className='mb-10'>
                        <ContentSlider data={OtherSliderData} position={'outside'} />
                    </div>
                    {/* Insert the ThoughtSlider here */}
                    <BannerSlider data={BannerDataTwo} />
                    <div className='mb-10'>
                        <ContentSlider data={KnowledgeSliderData} position={"outside"} />
                    </div>
                    {/* Insert the ThoughtSlider here */}
                    <BannerSlider data={bannerDataThree} />
                    <div className='mb-10'>
                        <ContentSlider data={ContentSliderData} position={"outside"} />
                    </div>
                </div>
            </div >
        </>
    );
};
