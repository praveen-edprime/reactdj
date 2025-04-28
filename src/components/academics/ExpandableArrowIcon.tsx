import { FiChevronDown } from "react-icons/fi";
import React from "react";

interface Props {
  isExpanded: boolean;
}

const ExpandableArrowIcon: React.FC<Props> = ({ isExpanded }) => {
  return (
    <FiChevronDown
      size={18}
      className={`text-gray-500 transition-transform duration-300 ${
        isExpanded ? "rotate-180" : ""
      }`}
    />
  );
};

export default ExpandableArrowIcon;
