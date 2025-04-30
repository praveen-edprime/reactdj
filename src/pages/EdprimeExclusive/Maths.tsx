import React from 'react';
import Button from '../../components/ui/button/Button';
import Label from '../../components/form/Label';

const GridItem: React.FC<{ title: string }> = ({ title }) => (
    <div className=" border border-gray-200 rounded-lg justify-center text-center p-4 shadow-sm">
        {title}
    </div>
);

const Maths: React.FC<object> = () => {

    const goBack = () => {
        window.history.back();
    }

    return (
        <div className="flex flex-col">

            <div className="flex items-center justify-between p-4">
                <Label className="text-4xl text-start text-black">Mathematics Content</Label>
                <Button
                    className="px-4 py-2 rounded mb-4 hover:text-blue-600 hover:bg-white"
                    onClick={goBack}
                >
                    BACK
                </Button>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <GridItem title="What is Long, What is Round" />
                <GridItem title="Counting in Groups" />
                <GridItem title="How much can you Carry?" />
                <GridItem title="Counting in Tens" />
                <GridItem title="Patterns" />
                <GridItem title="Footprints" />
                <GridItem title="Jugs & Mugs" />
                <GridItem title="Tens & Ones" />
                <GridItem title="My Funday" />
                <GridItem title="Add our Points" />
                <GridItem title="Lines & Lines" />
                <GridItem title="Give and Take" />
                <GridItem title="The Longest Step" />
                <GridItem title="Addition" />
                <GridItem title="Subtraction" />
                <GridItem title="Multiplication" />
                <GridItem title="Division" />
                <GridItem title="Fraction" />
            </div>
        </div>
    );
};

export default Maths;