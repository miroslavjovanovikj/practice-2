import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
const Accordion = ({ items }) => {
    const [expandedIndex, setExpendedIndex] = useState(-1);


    const expandItemHandler = (index) => {
        if (index === expandedIndex) {
            setExpendedIndex(-1)
        } else {
            setExpendedIndex(index)
        }

    }
    const renderedItems = items.map((item, index) => {
        let isExoanded = index === expandedIndex;

        const icon = (
            <span className="text-2xl">
                {isExoanded ? <GoChevronDown /> : <GoChevronLeft />}
            </span>
        );

        return (
            <div key={item.id}>
                <div
                    className="flex justify-between p3 bg-gray-50 border-b items-center cursor-pointer"
                    onClick={() => expandItemHandler(index)}>
                    {item.label} {icon}
                </div>
                {isExoanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        );
    });

    return <div className="border=x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
