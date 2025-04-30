import React from 'react';
import Button from '../../components/ui/button/Button';
import Label from '../../components/form/Label';

const GridItem: React.FC<{ title: string }> = ({ title }) => (
    <div className=" border border-gray-200 rounded-lg justify-center text-center p-4 shadow-sm">
        {title}
    </div>
);

const GreenScienceConservation: React.FC<object> = () => {

    const goBack = () => {
        window.history.back();
    }

    return (
        <div className="flex flex-col">

            <div className="flex items-center justify-between p-4">
                <Label className="text-4xl text-start text-black">Green Science and Conservation Content</Label>
                <Button
                    className="px-4 py-2 rounded mb-4 hover:text-blue-600 hover:bg-white"
                    onClick={goBack}
                >
                    BACK
                </Button>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <GridItem title="Embracing a Plastic-Free Lifestyle: A Guide to Sustainable Living" />
                <GridItem title="Introduction & How to have a plastic free party" />
                <GridItem title="Crafting Change: The Plastic Manufacturing Tale with a Sustainable Twist" />
                <GridItem title="Your Plastic-Free Guide to Back-to-School Season" />
                <GridItem title="DIY Videos for Paper & Craft Decoration" />
            </div>
        </div>
    );
};

export default GreenScienceConservation;