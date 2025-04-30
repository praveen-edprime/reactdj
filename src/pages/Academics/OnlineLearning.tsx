import React, { useState } from 'react';

interface Topic {
  id: number;
  title: string;
  date?: string;
  hasAttachment?: boolean;
}

interface Chapter {
  id: number;
  title: string;
  topics?: Topic[];
}

interface Subject {
  id: number;
  name: string;
  totalTopics: number;
  chapters: Chapter[];
}

const subjectsData: Subject[] = [
  {
    id: 1,
    name: 'English',
    totalTopics: 31,
    chapters: [
      { id: 30, title: 'Chapter - 30',topics: [
        { id: 1, title: 'Fractions', date: '26 Jul 2023', hasAttachment: true },
      ], },
      { id: 29, title: 'Chapter - 29',topics: [
        { id: 1, title: 'Fractions', date: '26 Jul 2023', hasAttachment: true },
      ], },
      { id: 28, title: 'Chapter - 28',topics: [
        { id: 1, title: 'Fractions', date: '26 Jul 2023', hasAttachment: true },
      ], },
      { id: 27, title: 'Chapter - 27',topics: [
        { id: 1, title: 'Fractions', date: '26 Jul 2023', hasAttachment: true },
      ], },
      { id: 26, title: 'Chapter - 26',topics: [
        { id: 1, title: 'Fractions', date: '26 Jul 2023', hasAttachment: true },
      ], },
    ],
  },
  {
    id: 2,
    name: 'Hindi',
    totalTopics: 15,
    chapters: [
      { id: 15, title: 'पाठ - 15',topics: [
        { id: 1, title: 'Fractions', date: '26 Jul 2023', hasAttachment: true },
      ], },
      { id: 14, title: 'पाठ - 14',topics: [
        { id: 1, title: 'Fractions', date: '26 Jul 2023', hasAttachment: true },
      ], },
      { id: 13, title: 'पाठ - 13',topics: [
        { id: 1, title: 'Fractions', date: '26 Jul 2023', hasAttachment: true },
      ], },
      { id: 12, title: 'पाठ - 12',topics: [
        { id: 1, title: 'Fractions', date: '26 Jul 2023', hasAttachment: true },
      ], },
      { id: 11, title: 'पाठ - 11',topics: [
        { id: 1, title: 'Fractions', date: '26 Jul 2023', hasAttachment: true },
      ], },
    ],
  },
  {
    id: 3,
    name: 'Mathematics',
    totalTopics: 17,
    chapters: [
      {
        id: 17,
        title: 'Chapter No. -17',
        topics: [
          { id: 1, title: 'Fractions', date: '26 Jul 2023', hasAttachment: true },
        ],
      },
      { id: 16, title: 'Chapter No. -16',topics: [
        { id: 1, title: 'Fractions', date: '26 Jul 2023', hasAttachment: true },
      ], },
      { id: 15, title: 'Chapter No. -15',topics: [
        { id: 1, title: 'Fractions', date: '26 Jul 2023', hasAttachment: true },
      ], },
      { id: 14, title: 'Chapter No. -14',topics: [
        { id: 1, title: 'Fractions', date: '26 Jul 2023', hasAttachment: true },
      ], },
      { id: 13, title: 'Chapter No. -13',topics: [
        { id: 1, title: 'Fractions', date: '26 Jul 2023', hasAttachment: true },
      ], },
    ],
  },
  {
    id: 4,
    name: 'Environmental Studies',
    totalTopics: 22,
    chapters: [
      { id: 22, title: 'Chapter -22',topics: [
        { id: 1, title: 'Fractions', date: '26 Jul 2023', hasAttachment: true },
      ], },
      { id: 21, title: 'Chapter -21',topics: [
        { id: 1, title: 'Fractions', date: '26 Jul 2023', hasAttachment: true },
      ], },
      { id: 20, title: 'Chapter -20',topics: [
        { id: 1, title: 'Fractions', date: '26 Jul 2023', hasAttachment: true },
      ], },
      { id: 19, title: 'Chapter -19',topics: [
        { id: 1, title: 'Fractions', date: '26 Jul 2023', hasAttachment: true },
      ], },
      { id: 18, title: 'Chapter -18',topics: [
        { id: 1, title: 'Fractions', date: '26 Jul 2023', hasAttachment: true },
      ], },
    ],
  },
];

const OnlineLearning: React.FC = () => {
  const [expandedChapter, setExpandedChapter] = useState<{ [key: string]: boolean }>({});

  const toggleChapter = (subjectId: number, chapterId: number) => {
    setExpandedChapter((prev) => ({
      ...prev,
      [`${subjectId}-${chapterId}`]: !prev[`${subjectId}-${chapterId}`],
    }));
  };

  return (
    <div className="">
        <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">Online Learning</h2>
            <h2 className="text-sm text-orange-500 font-bold mb-4 border-b-2 border-orange-500 w-fit pb-1">SUBJECTS</h2>
        </div>
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subjectsData.map((subject) => (
          <div key={subject.id} className="border rounded shadow-sm p-4 bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">{subject.name}</h3>
              <span className="text-gray-400 text-sm">({subject.totalTopics} TOPICS)</span>
            </div>

            <div className="space-y-2">
              {subject.chapters.map((chapter) => (
                <div key={chapter.id} className="border-b pb-2">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleChapter(subject.id, chapter.id)}
                  >
                    <span>{chapter.title}</span>
                    {chapter.topics && (
                      <span className="text-gray-400">
                        {expandedChapter[`${subject.id}-${chapter.id}`] ? '-' : '+'}
                      </span>
                    )}
                  </div>

                  {chapter.topics && expandedChapter[`${subject.id}-${chapter.id}`] && (
                    <div className="ml-4 mt-2 space-y-1">
                      {chapter.topics.map((topic) => (
                        <div key={topic.id} className="flex items-center justify-between">
                          <div className="text-sm text-gray-600">{topic.title}</div>
                          <div className="flex items-center space-x-2 text-xs text-gray-400">
                            {topic.date && <span>{topic.date}</span>}
                            {topic.hasAttachment && (
                              <span className="text-green-500">&#x1F4E5;</span> // download icon emoji
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-4">
              <button className="px-4 py-1 text-sm border rounded bg-gray-100 hover:bg-gray-200">
                View All
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineLearning;
