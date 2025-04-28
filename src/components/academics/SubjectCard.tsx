import React from "react";
import SyllabusItem from "./SyllabusItem";
// import ViewAllButton from "./ViewAllButton";

interface Props {
  subject: string;
  color: string;
  items: string[];
}

const SubjectCard: React.FC<Props> = ({ subject, color, items }) => {
  return (
    <div className="bg-white rounded shadow-md">
      <div className={`flex justify-between items-center px-4 py-2 text-white ${color}`}>
        <h3 className="font-semibold">{subject}</h3>
        {/* <ViewAllButton /> */}
      </div>
      <div>
        {items.map((item, idx) => (
          <SyllabusItem key={idx} title={item} />
        ))}
      </div>
    </div>
  );
};

export default SubjectCard;
