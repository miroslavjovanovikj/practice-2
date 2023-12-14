import Table from "./Table";
import { useState } from "react";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
const SortableTable = (props) => {
    const { config, data } = props;

    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const handleClick = (label) => {
        if (sortBy && label !== sortBy) {
            setSortOrder('asc')
            setSortBy(label)
            return
        }


        if (sortOrder === null) {
            setSortOrder("asc");
            setSortBy(label);
        } else if (sortOrder === "asc") {
            setSortOrder("desc");
            setSortBy(label);
        } else if (sortOrder === "desc") {
            setSortOrder(null);
            setSortBy(null);
        }
    };
    const updatedConfig = config.map((column) => {
        if (!column.sortValues) {
            return column;
        }
        return {
            ...column,
            header: () => (
                <th className="coursor-pointer hover:bg-gray-100" onClick={() => handleClick(column.label)}>
                    <div className="flex items-center">  {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}</div>

                </th>
            ),
        };
    });

    let sortedData = data;
    if (sortOrder && sortBy) {
        const { sortValues } = config.find((column) => column.label === sortBy);

        sortedData = [...data].sort((a, b) => {
            const valueA = sortValues(a);
            const valueB = sortValues(b);
            console.log(valueA)
            const reverseOrder = sortOrder === "asc" ? 1 : -1;

            if (typeof valueA === "string") {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }
        });
    }

    return (
        <Table {...props} data={sortedData} config={updatedConfig} />
    );
};


function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>
    }
    if (sortOrder === null) {
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>
    } else if (sortOrder === 'asc') {
        return <GoArrowSmallUp />
    } else if (sortOrder === 'desc') {
        return <GoArrowSmallDown />
    }
}

export default SortableTable;
