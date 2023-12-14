import Dropdown from "../components/Dropdown";
import { useState } from 'react';
function DropdownPage() {
    const options = [
        { label: "Red", value: "red" },
        { label: "Green", value: "green" },
        { label: "Blue", value: "blue" },
    ];
    const [selected, setSelected] = useState(null)
    const selectedItem = (item) => {
        setSelected(item)
    }
    return <div className="flex">
        <Dropdown options={options} onChange={selectedItem} value={selected} />
    </div>;
}

export default DropdownPage;
