import React from 'react';
import Button from '../../components/ui/button/Button';
import Label from '../../components/form/Label';

const GridItem: React.FC<{ title: string }> = ({ title }) => (
    <div className=" border border-gray-200 rounded-lg justify-center text-center p-4 shadow-sm">
        {title}
    </div>
);

const PoemStories: React.FC<object> = () => {

    const goBack = () => {
        window.history.back();
    }

    return (
        <div className="flex flex-col">

            <div className="flex items-center justify-between p-4">
                <Label className="text-4xl text-start text-black">Poems and Stories Content</Label>
                <Button
                    className="px-4 py-2 rounded mb-4 hover:text-blue-600 hover:bg-white"
                    onClick={goBack}
                >
                    BACK
                </Button>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <GridItem title="Whispers of the Wind" />
                <GridItem title="The Journey of Dreams" />
                <GridItem title="The Lost Kingdom" />
                <GridItem title="Under the Moon's Gaze" />
                <GridItem title="The Colors of Hope" />
                <GridItem title="A Tale of Two Souls" />
                <GridItem title="The Path Unseen" />
                <GridItem title="Shadows in the Mist" />
            </div>
        </div>
    );
};

export default PoemStories;