import SortableTable from "../components/SortableTable";
import Table from "../components/Table";

const TablePage = () => {
    const data = [
        { name: "Orange", color: "bg-orange-500", score: 5 },
        { name: "Apple", color: "bg-red-500", score: 3 },
        { name: "Banana", color: "bg-yellow-500", score: 1 },
        { name: "Lime", color: "bg-green-500", score: 4 },
    ];
    const config = [
        {
            label: "Name", render: (fruit) => fruit.name,
            sortValues: (fruit) => fruit.name
        },
        {
            label: "Color",
            render: (fruit) => <div className={`p-2 m-2 ${fruit.color}`}></div>,
        },
        {
            label: "Score",
            render: (fruit) => fruit.score,
            sortValues: (fruit) => fruit.score
        },
        {
            label: 'Score Squered',
            render: (fruit) => fruit.score ** 2,
            sortValues: (fruit) => fruit.score ** 2
        }
    ];
    const keyFn = (fruit) => {
        return fruit.name;
    };
    return (
        <div>
            <SortableTable data={data} config={config} keyFn={keyFn} />

        </div>
    );
};
export default TablePage;
