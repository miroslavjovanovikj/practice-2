import { useEffect, useState } from "react";
const useCounter = (initialCount) => {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log(count, 'od use effectt');
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
        console.log(count, 'od click')
    };
    return {
        count,
        handleClick
    }
}
export default useCounter