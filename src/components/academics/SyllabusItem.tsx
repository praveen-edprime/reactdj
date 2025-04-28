import React, { useState } from "react";
import StatusBadge from "./StatusBadge";
import ExpandableArrowIcon from "./ExpandableArrowIcon";

interface Props {
  title: string;
  content?: string; // optionally render nested content
}

const SyllabusItem: React.FC<Props> = ({ title, content = "Topic details coming soon..." }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b">
      <div
        className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-gray-50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="text-sm">{title}</div>
        <div className="flex items-center gap-2">
          <StatusBadge />
          <ExpandableArrowIcon isExpanded={isExpanded} />
        </div>
      </div>
      {isExpanded && (
        <div className="px-4 py-2 text-sm text-gray-600 bg-gray-50">
          {content}
        </div>
      )}
    </div>
  );
};

export default SyllabusItem;
