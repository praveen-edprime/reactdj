import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Label from '../components/form/Label';
import Input from '../components/form/input/InputField';
import Select from '../components/form/Select';
import LearningCardGrid from '../components/form/LearningCardGrid';
import CardGrid from '../components/form/CardGrid';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import ContentSlider from '../components/form/ContentSlider';

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

const learningItems = [
    {
        title: "Sunokitaab",
        desc: "Sunokitaab is India’s largest audio-based learning platform for students. It provides audio-based learning content for school students from classes KG to 12th.",
        img: "/images/edprime-exclusive/sunokitaab.png",
        url: "https://sunokitaab.com"
    },
    {
        title: "Basics of Computer",
        desc: "Learn Information Technology terminology and basics of computers. This course covers a broad spectrum of Hardware & Software solutions.",
        img: "/images/edprime-exclusive/logo-3.png",
        url: "https://www.digitalteacher.in/computer-basics"
    },
    {
        title: "Burlington",
        desc: "The Burlington English Read-A-Thon Quest for the Classics has amazing resources to enthuse your children and students right the way through this summer.",
        img: "/images/edprime-exclusive/BE-044.png",
        url: "https://www.burlingtonenglish.in/"
    },
    {
        title: "Multibhashi",
        desc: "A language learning app cater to the needs of language learners worldwide.",
        img: "/images/edprime-exclusive/logo1.png",
        url: "https://www.multibhashi.com/"
    },
    {
        title: "Learn With Comics",
        desc: "Have fun learning with our comics! Designed to make learning enjoyable and interactive for students of all ages. Start reading today.",
        img: "/images/edprime-exclusive/smallcomics.png",
        url: "https://www.learnwithcomics.com/"
    }
];

const onlineSliderData = [
    {
        title: 'English',
        description:
            'Unleash the power of english for effective communication. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/English.jpg',
    },
    {
        title: 'Hindi',
        description:
            'Discover the richness of hindi language and culture. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/Hindi.jpg',
    },
    {
        title: 'Mathematics',
        description:
            'Unleash the power of english for effective communication. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/Mathematics.jpg',
    },
    {
        title: 'Computer',
        description:
            'Discover the richness of hindi language and culture. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/Computer.jpg',
    },
    {
        title: 'General Knowledge',
        description:
            'Unleash the power of english for effective communication. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/General_Knowledge.jpg',
    },
    {
        title: 'Poems and Stories',
        description:
            'Discover the richness of hindi language and culture. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/Poem_and_Stories.jpg',
    },
];

const otherSliderData = [
    {
        title: 'Spelling Bee',
        description:
            'Unleash the power of english for effective communication. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/spelling_bee.png',
    },
    {
        title: 'Free Audio Stories for kids',
        description:
            'Discover the richness of hindi language and culture. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/storynory.jpg',
    },
    {
        title: 'A free typing tutor',
        description:
            'Unleash the power of english for effective communication. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/typing.jpg',
    },
    {
        title: 'Letter Formation',
        description:
            'Discover the richness of hindi language and culture. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/Letter_Formation.jpg',
    },
    {
        title: 'NCERT Textbooks',
        description:
            'Unleash the power of english for effective communication. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/EcoWarrior.png',
    },
    {
        title: 'Augli',
        description:
            'Discover the richness of hindi language and culture. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/AUGLI_Banner.png',
    },
];

const knowledgeSliderData = [
    {
        title: 'Edprime Student Corner',
        description:
            'Unleash the power of english for effective communication. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/youtube1.png',
    },
    {
        title: 'Edprime Sustainability',
        description:
            'Discover the richness of hindi language and culture. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/youtube4.png',
    },
    {
        title: 'Complete guide & Tutorials',
        description:
            'Unleash the power of english for effective communication. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/chatgpt_Y1.jpg',
    },
    {
        title: 'TED ED',
        description:
            'Discover the richness of hindi language and culture. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/TED_ED.png',
    },
    {
        title: 'Stories',
        description:
            'Unleash the power of english for effective communication. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/kahaniyawithSM.jpg',
    },
    {
        title: 'Repair Earth',
        description:
            'Discover the richness of hindi language and culture. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/Repair_Earth.png',
    },
];

const contentSliderData = [
    {
        title: 'EdPrime Scholarships',
        description:
            'Unleash the power of english for effective communication. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/EDPRIME_SCHOLARSHIPS_BANNER.png',
    },
    {
        title: 'EdPrime Teacher Wellness',
        description:
            'Discover the richness of hindi language and culture. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/youtube3.png',
    },
    {
        title: 'EdPrime Parenting',
        description:
            'Unleash the power of english for effective communication. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/youtube2.png',
    },
    {
        title: 'Olabs',
        description:
            'Discover the richness of hindi language and culture. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/OLABS.png',
    },
    {
        title: 'Eco Warrior',
        description:
            'Unleash the power of english for effective communication. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/EcoWarrior.png',
    },
    {
        title: 'Origami Magic',
        description:
            'Discover the richness of hindi language and culture. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/Origami-Magic.jpg',
    },
    {
        title: 'Mental Health',
        description:
            'Discover the richness of hindi language and culture. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/MentalHealth-Exclusive.jpg',
    },
    {
        title: 'Moral Stories',
        description:
            'Discover the richness of hindi language and culture. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/Moral.png',
    },
    {
        title: 'Kahaniyan with Shashi Mam',
        description:
            'Discover the richness of hindi language and culture. The objective is free exchange of knowledge & can always use this as a digital resource to seek information',
        image: '/images/edprime-exclusive/kahaniyawithSM.jpg',
    },
];

const cardItems = [
    {
        title: 'Canva',
        desc: 'Learn Canva: Master the basics of this powerful graphic design tool in our comprehensive tutorial. Ideal for beginners and intermediate users looking to enhance their visual content creation skills.',
        img: '/images/edprime-exclusive/Canva.png'
    },
    {
        title: 'Scratch',
        desc: 'Calling all young coders! Learn to create your own games, animations, and stories using fun building blocks.',
        img: '/images/edprime-exclusive/Scratch.png'
    },
    {
        title: 'Vedic Maths',
        desc: 'Learn ancient Indian calculation techniques that simplify complex math problems. From basic arithmetic to advanced calculations, discover how to solve problems quickly and efficiently.',
        img: '/images/edprime-exclusive/vedic.png'
    }
]

export default function EdprimeExclusive() {
    const [current, setCurrent] = useState(0);

    const handleSelectChange = (value: string) => {
        console.log("Selected value:", value);
    };

    // const prevRef = useRef(null);
    // const nextRef = useRef(null);
    // const [swiperInstance, setSwiperInstance] = useState(null);

    // useEffect(() => {
    //     if (swiperInstance && prevRef.current && nextRef.current) {
    //         swiperInstance.params.navigation.prevEl = prevRef.current;
    //         swiperInstance.params.navigation.nextEl = nextRef.current;
    //         swiperInstance.navigation.init();
    //         swiperInstance.navigation.update();
    //     }
    // }, [swiperInstance]);

    // Auto-slide every 5 seconds
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
                                ></button>
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
                    <LearningCardGrid items={learningItems} />
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
                    <CardGrid items={cardItems} />
                </div>
            </div>

            {/* Online Content Section */}
            <div className="bg-gray-100 py-10 relative">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-5">Online Content</h2>
                    <div className='mb-10'>
                        <ContentSlider data={onlineSliderData} />
                    </div>
                    <div className='mb-10'>
                        <ContentSlider data={otherSliderData} />
                    </div>
                    <div className='mb-10'>
                        <ContentSlider data={knowledgeSliderData} />
                    </div>
                    <div className='mb-10'>
                        <ContentSlider data={contentSliderData} />
                    </div>
                </div>
            </div >

            {/* Footer Section */}
            {/* <div className="bg-gray-100 py-16 px-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12">
                    {/* Text Section */}
            {/* <div className="lg:w-1/3 mb-10 lg:mb-0">
                        <h2 className="text-4xl font-bold mb-4">Join Us Today</h2>
                        <p className="text-lg font-semibold text-gray-700">
                            Join us today and unlock a world of knowledge and opportunities.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <button className="px-6 py-2 bg-[#6096b3] text-white hover:bg-[#99CFEC] rounded-md">
                        Get Started
                    </button>
                </div>
            </div> */}
        </>
    );
};
