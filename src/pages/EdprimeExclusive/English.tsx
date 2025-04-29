import React from 'react';
import Button from '../../components/ui/button/Button';
import Label from '../../components/form/Label';

const GridItem: React.FC<{ title: string }> = ({ title }) => (
    <div className=" border border-gray-200 rounded-lg justify-center text-center p-4 shadow-sm">
        {title}
    </div>
);

const English: React.FC<object> = () => {

    const goBack = () => {
        window.history.back();
    }

    return (
        <div className="flex flex-col">

            <div className="flex items-center justify-between p-4">
                <Label className="text-4xl text-start text-black">English Content</Label>
                <Button
                    className="px-4 py-2 rounded mb-4 hover:text-blue-600 hover:bg-white"
                    onClick={goBack}
                >
                    BACK
                </Button>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <GridItem title="Identification of Character" />
                <GridItem title="Comprehension" />
                <GridItem title="Noun" />
                <GridItem title="Identification of Great Personalities" />
                <GridItem title="Pronouns" />
                <GridItem title="Identification of Monuments" />
                <GridItem title="Sound" />
                <GridItem title="Identification of Objects" />
                <GridItem title="Verb" />
                <GridItem title="Jumbled Words" />
                <GridItem title="Adjectives" />
                <GridItem title="Jumbled Sentence" />
                <GridItem title="Word formation" />
                <GridItem title="Prepositions" />
                <GridItem title="People And Their Profession" />
                <GridItem title="Articles" />
                <GridItem title="Antonyms And Synonyms" />
                <GridItem title="Analogy 372" />
                <GridItem title="Gender And Singular-plural" />
                <GridItem title="Comprehension(prose and poetry)" />
                <GridItem title="Spoken And Written Expression" />
                <GridItem title="Adverbs" />
                <GridItem title="Conjunctions" />
                <GridItem title="Contractions" />
                <GridItem title="Capitalization And Punctuation" />
                <GridItem title="Tenses" />
                <GridItem title="Making a Word" />
                <GridItem title="Word Power" />
                <GridItem title="Answering general Questions" />
                <GridItem title="Formation of Short & Simple Formation" />
            </div>
        </div>
    );
};

export default English;