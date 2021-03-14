import React, { useState } from "react";
import { useTable, useSortBy, useFilters } from "react-table";

function Table({columns, data}) {

    const [filterInput, setFilterInput] = useState("");

    const handleFilterChange = event => {
        const value = event.target.value || undefined;
        setFilter("location.country", value)
        setFilterInput(value);
    }

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setFilter,
    } = useTable({
        columns,
        data
    },
    useFilters,
    useSortBy
    );

    return (
        <div>
            <input 
            value={filterInput}
            onChange={handleFilterChange}
            placeholder={"Search by country"}
            />

            <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render("Header")}
                        <span>
                            {column.isSorted
                                ? (column.isSortedDesc
                                    ? " ⬇"
                                    : " ⬆"
                                )
                                : ""
                            }
                        </span>
                    </th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                    })}
                    </tr>
                );
                })}
            </tbody>
            </table>

        </div>

      );

}

export default Table;