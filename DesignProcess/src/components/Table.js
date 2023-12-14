import { Fragment } from "react";
const Table = ({ data, config, keyFn }) => {
  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-2" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  const renderedHeads = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.name}>{column.label}</th>;
  });
  return (
    <table>
      <thead className="table-auto border-spacing-2">
        <tr className="border-b-2">{renderedHeads}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};
export default Table;
