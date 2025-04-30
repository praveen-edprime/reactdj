import { useState } from 'react';
import backgroundImg from '/images/edprime-exclusive/Group_Scholarship.jpg';
import { IoPeopleSharp, IoSchool } from 'react-icons/io5';
import { FaCheck, FaClock, FaCogs, FaLink } from 'react-icons/fa';
import approvedScholarships from '/images/edprime-exclusive/ApprovedScholarship.jpg';
import testimonialImage from '/images/edprime-exclusive/Testimonial.jpg';
import Button from '../../components/ui/button/Button';
import contactus from '/images/edprime-exclusive/contact-us.png';
import testimonials from '../../edprimeData/TestimonialsData.json';
import ourScholarships from '../../edprimeData/OurScholarship.json';
import FacebookIcon from '/images/brand/brand-02.svg';
import InstagramIcon from '/images/brand/brand-04.svg';
import YoutubeIcon from '/images/brand/brand-06.svg';

const Scholarships = () => {

    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

    // FAQ Data
    const faqs = [
        { question: "Is there any registration fee?", answer: "It depends on the scholarship. There are no additional fees from EdPrime." },
        { question: "Is this scholarship renewable?", answer: "No the scholarship is not renewable." },
        { question: "What types of scholarships are available?", answer: "Scholarships of all types for secondary, higher secondary, graduation & post-graduation are available." },
        { question: "How much is the scholarship worth?", answer: "The worth of each scholarship depends and varies according to the nature of the scholarship." },
    ];

    const apply = [
        { icon: <IoSchool className='text-2xl' />, label: "1. Available Scholarships", background: "#ffd700" },
        { icon: <FaCheck className='text-2xl' />, label: "2. Apply on EdPrime", background: "#ff4d4f" },
        { icon: <FaLink className='text-2xl' />, label: "3. Go to Official Link", background: "#6f42c1" },
    ];

    const features = [
        {
            icon: <FaClock className='text-2xl' />, title: "Fast, Convenient, Safe",
            description: "It is fast, safe, and fully checked data from which children can apply for suitable categories.",
            background: "#ffd700"
        },
        {
            icon: <FaCogs className='text-2xl' />, title: "Modern Tools & Courses",
            description: "We have categorized all the upcoming scholarships for UG/PG and schooling education.",
            background: "#ff4d4f"
        },
        {
            icon: <IoPeopleSharp className='text-2xl' />, title: "A Team who Cares",
            description: "Our team updates regularly on this page. Also, keeps a check  on outgoing scholarships and ongoing ones.",
            background: "#6f42c1"
        },
    ];

    // Toggle FAQ
    const toggleFAQ = (index: number): void => {
        setExpandedFAQ(expandedFAQ === index ? null : index);
    };

    // Testimonial Navigation
    const handlePrev = () => {
        setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="max-w-[2000px] mx-auto">
            {/* Header Section */}
            <div
                className="relative h-[400px] text-white p-5 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImg})` }}
            >
                <h1 className='text-3xl bg-[#007bff] inline-block p-2 ml-[40%]'>SCHOLARSHIP</h1>
                <div className="absolute mt-28 right-5 bg-white p-4 rounded-[10px]">
                    <div className="text-black space-y-1">
                        <div><span className="text-[#ff4d4f]">●</span> Make education easier to access</div>
                        <div><span className="text-[#007bff]">●</span> Comes with extensive support</div>
                        <div><span className="text-[#6f42c1]">●</span> Helps you expand your network</div>
                        <div><span className="text-[#ff4d4f]">●</span> Allows you to focus on your studies</div>
                        <div><span className="text-[#007bff]">●</span> Provides access to more colleges</div>
                    </div>
                </div>
            </div>

            {/* Easy Access Section */}
            <div className='flex gap-20 p-8'>
                <h2 className='text-[#007bff] text-3xl'>EASY ACCESS TO SCHOLARSHIP</h2>
                <p className=' w-[50%]'>
                    EdPrime tries its best to instill the importance of education in the minds of the youth.
                    To encourage children to further their education, we show our support through the "EdPrime Scholarships".
                </p>
            </div>

            {/* Steps to Apply Section */}
            <div className='text-center p-10'>
                <h2 className='text-[#007bff] text-3xl'>STEPS TO APPLY</h2>
                <div className=' flex justify-center gap-8 mt-6'>
                    {apply.map((step, index) => (
                        <div key={index} className='text-center'>
                            <div className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center`}
                                style={{ background: step.background }}
                            >
                                {step.icon}
                            </div>
                            <p className='mt-2'>{step.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Approved Scholarships Section */}
            <div
                className="bg-cover bg-center text-white px-5 py-10 text-center"
                style={{ backgroundImage: `url(${approvedScholarships})` }}
            >
                <h2 className="text-[30px] font-semibold">APPROVED SCHOLARSHIPS FOR CAREER BENEFIT</h2>
                <p className="max-w-[600px] mx-auto mt-5">
                    There are many different scholarships that you can apply for, whether you are an undergraduate, postgraduate, or research student.
                    The process of applying makes great practice for thinking about your strengths. More importantly, a scholarship can help you on your way to success.
                    It can provide you with the funding and support you need to complete your degree.
                </p>
            </div>

            {/* Our Scholarships Section */}
            <div className="px-5 py-10 text-center">
                <h2 className="text-[30px] text-[#007bff]">OUR SCHOLARSHIPS</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                    {ourScholarships.map((scholarship, index) => (
                        <a
                            key={index}
                            href={scholarship.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-5 rounded-[10px] border hover:shadow-lg transition"
                            style={{ borderColor: scholarship.color }}
                        >
                            <h3 className="text-lg font-semibold text-black">{scholarship.title}</h3>
                            <p>{scholarship.description}</p>
                            {scholarship.deadline && (
                                <p><span className='font-semibold'>Deadline:</span> {scholarship.deadline}</p>
                            )}
                        </a>
                    ))}
                </div>
            </div>

            {/* Features Section */}
            <div className="flex flex-col md:flex-row justify-around px-5 py-10 text-center gap-10">
                {features.map((step, index) => (
                    <div key={index} className='text-center'>
                        <div
                            className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center`}
                            style={{ background: step.background }}
                        >
                            {step.icon}
                        </div>

                        <h3 className='text-lg font-semibold text-black'>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                ))}
            </div>

            {/* Testimonials Section */}
            <div className="py-10 text-center relative bg-cover bg-center"
                style={{ backgroundImage: `url(${testimonialImage})` }}
            >
                {/* Content */}
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-6 text-white">TESTIMONIALS</h2>
                    <div className="flex items-center justify-center">
                        <button onClick={handlePrev} className="text-5xl mx-4">←</button>
                        <div className="max-w-2xl">
                            <img
                                src={testimonials[activeTestimonial].img}
                                alt={testimonials[activeTestimonial].name}
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                            />
                            <p className="text-white italic mb-4">{testimonials[activeTestimonial].text}</p>
                            <p className="font-semibold text-white">{testimonials[activeTestimonial].name}</p>
                        </div>
                        <button onClick={handleNext} className="text-5xl mx-4">→</button>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-10 px-5 bg-gray-50">
                <h2 className="text-3xl text-[#007bff] mb-8 text-center">
                    <span>FREQUENTLY ASKED QUESTIONS</span>
                    <span className="ml-2 text-yellow-500 text-4xl font-bold">?</span>
                </h2>

                <div className="max-w-3xl mx-auto grid gap-4">
                    {faqs.map((faq, index) => (
                        <div key={index}
                            className="bg-white shadow-lg rounded-xl p-6 transition-all duration-300 hover:shadow-xl"
                        >
                            <button className="w-full flex justify-between items-center cursor-pointer text-left bg-transparent border-none p-0"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                                <span className="text-2xl text-[#007bff] transition-transform duration-300">
                                    {expandedFAQ === index ? '−' : '+'}
                                </span>
                            </button>
                            {expandedFAQ === index && (
                                <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Get in Touch Section */}
            <div className="relative h-[300px] text-white p-5 bg-cover bg-center"
                style={{ backgroundImage: `url(${contactus})` }}
            >
                <div className="absolute bg-white p-3 rounded-[5px] mt-4">
                    <div className="text-black space-y-1">
                        <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                        <p><span className="font-semibold">Telephone:</span> 896932632</p>
                        <p><span className="font-semibold">Email:</span> marketing@edprime.co</p>
                        <p><span className="font-semibold">Website:</span> https://edprime.co/</p>
                        <Button className="mt-2">Contact Us</Button>
                        <div className="flex space-x-2 mt-2">
                            <a href="https://www.facebook.com/EDPRIMEOriginal/" target="_blank" rel="noopener noreferrer">
                                <img src={FacebookIcon} alt="Facebook" className="cursor-pointer hover:opacity-80" />
                            </a>
                            <a href="https://www.instagram.com/edprimeofficial/?utm_medium=copy_link" target="_blank" rel="noopener noreferrer">
                                <img src={InstagramIcon} alt="Instagram" className="cursor-pointer hover:opacity-80" />
                            </a>
                            <a href="https://www.youtube.com/channel/UC_vYWqW-bRFEgTnBNV_DQ0w" target="_blank" rel="noopener noreferrer">
                                <img src={YoutubeIcon} alt="YouTube" className="cursor-pointer hover:opacity-80" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scholarships;
