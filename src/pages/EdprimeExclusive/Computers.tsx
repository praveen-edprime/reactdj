import React from 'react';
import Button from '../../components/ui/button/Button';
import Label from '../../components/form/Label';

const GridItem: React.FC<{ title: string }> = ({ title }) => (
    <div className=" border border-gray-200 rounded-lg justify-center text-center p-4 shadow-sm">
        {title}
    </div>
);

const Computer: React.FC<object> = () => {

    const goBack = () => {
        window.history.back();
    }

    return (

        <div className="flex flex-col">
            <div className="flex items-center justify-between p-4">
                <Label className="text-4xl text-start text-black">Computer Content</Label>
                <Button
                    className="px-4 py-2 rounded mb-4 hover:text-blue-600 hover:bg-white"
                    onClick={goBack}
                >
                    BACK
                </Button>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <GridItem title="Introduction" />
                <GridItem title="Day-1 Introduction and Home Row Keys" />
                <GridItem title="Home Row Keys and Top Row Keys" />
                <GridItem title="Typing Ergonomics and Bottom Row Keys" />
                <GridItem title="Capital Letters" />
                <GridItem title="Punctuation" />
                <GridItem title="Numeric Keys" />
                <GridItem title="Symbol Keys" />
            </div>
        </div>
    );
};

export default Computer;