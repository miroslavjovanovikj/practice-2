import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";
const Dropdown = ({ options, onChange, value }) => {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef()
    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return
            }
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('click', handler, true)
        console.log("before clean up")
        return () => {
            console.log('clean up')
            document.removeEventListener('click', handler)
        }
    }, [])
    const renderedOptions = options.map((option) => {
        return (
            <div
                className="hover:bg-sky-100 rounded coursor-pointer p-1"
                onClick={() => selectedItemHandler(option)}
                key={options.value}>
                {option.label}
            </div>
        );
    });
    const selectedItemHandler = (value) => {
        onChange(value);
        setIsOpen(!isOpen);
    };
    const isOpenHandler = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div ref={divEl} className="w-48 relative">
            <Panel
                className="flex justify-between items-center coursor-pointer"
                onClick={isOpenHandler}>
                {value?.label || "Selected..."}
                <GoChevronDown className="text-lg" />
            </Panel>
            {isOpen && <Panel className="absolute top-full ">{renderedOptions}</Panel>}
        </div>
    );
};
export default Dropdown;
