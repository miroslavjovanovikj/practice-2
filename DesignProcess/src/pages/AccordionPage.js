import Accordion from "../components/Accordion";
const items = [
    {
        id: '1',
        label: "Can i use react on a prjoect",
        content: "You can use React on any project you want",
    },
    {
        id: '2',
        label: "Can i use Html on a prjoect",
        content: "You can use Html on any project you want",
    },
    {
        id: '3',
        label: "Can i use Css on a prjoect",
        content: "You can use Css on any project you want",
    },
];
function AccordionPage() {
    return <Accordion items={items} />;
}

export default AccordionPage;
