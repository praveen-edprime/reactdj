import React from 'react';
import Button from '../../components/ui/button/Button';
import Label from '../../components/form/Label';

const GridItem: React.FC<{ title: string }> = ({ title }) => (
    <div className=" border border-gray-200 rounded-lg justify-center text-center p-4 shadow-sm">
        {title}
    </div>
);

const Hindi: React.FC<object> = () => {

    const goBack = () => {
        window.history.back();
    }

    return (
        <div className="flex flex-col">

            <div className="flex items-center justify-between p-4">
                <Label className="text-4xl text-start text-black">Hindi Content</Label>
                <Button
                    className="px-4 py-2 rounded mb-4 hover:text-blue-600 hover:bg-white"
                    onClick={goBack}
                >
                    BACK
                </Button>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <GridItem title="अधिक बलवान कौन?" />
                <GridItem title="दोस्त की मदद" />
                <GridItem title="बहुत हुआ" />
                <GridItem title="मेरी किताब" />
                <GridItem title="तितली और कली" />
                <GridItem title="बुलबुल" />
                <GridItem title="मीठी सारंगी" />
                <GridItem title="टेसू राजा बीच बाजार" />
                <GridItem title="बस के निचे बाघ" />
                <GridItem title="सूरज जल्दी आना जी" />
                <GridItem title="नटखट चूहा" />
                <GridItem title="एक्की - दुक्की" />
            </div>
        </div>
    );
};

export default Hindi;