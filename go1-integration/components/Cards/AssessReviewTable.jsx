import React from 'react';
import { useTable } from 'react-table';

function AssessReviewTable() {
    const data = React.useMemo(
        () => [
            {
                col1: 'Database/storage',
                col2: '10'
            },
            {
                col1: 'Algorithms and Data Structures',
                col2: '12'
            },
            {
                col1: 'Programming Patterns',
                col2: '18'
            },
            {
                col1: 'Testing',
                col2: '14'
            },
            {
                col1: 'Client Side Coding',
                col2: '40'
            },
            {
                col1: 'Server Side Coding',
                // unsure how to add the Upgrade your level without making an additional column
                col2: '27     Upgrade your level',
            },
            {
                col1: 'Architecture',
                col2: '0'
            },
            {
                col1: 'Technical Design',
                col2: '12'
            },
            {
                col1: 'Delivery',
                col2: '14'
            },
            {
                col1: 'Version Control/Branching',
                col2: '12'
            },
            {
                col1: 'Business domain knowledge',
                col2: '6'
            },
            {
                col1: 'Infrastructure & DevOps',
                col2: '8'
            },
        ],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'Category Name',
                accessor: 'col1', //accessor is the "key" in the data
            },
            {
                Header: 'Score',
                accessor: 'col2',
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        // apply the table props
        <table {...getTableProps()} 
        style={{
            width: '400px',
        }}>
            <thead>
                {//Loop over the header rows
                headerGroups.map(headerGroup => (
                    // Apply the header row props
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {//Loop over the headers in each row
                        headerGroup.headers.map(column => (
                            // Apply the header cell props
                            <th {...column.getHeaderProps()}
                            style={{
                                background: '#114954',
                                width: '200px',
                                height: '48px',
                                paddingLeft: '8px',
                                color: 'white',
                                lineHeight: '22px',
                                fontWeight: 'normal',
                                fontSize: '14px',
                                textAlign: 'left',
                            }}
                            >
                                {// Render the header
                                column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            {/* Apply the table body props */}
            <tbody {...getTableBodyProps()}>
                {//Loop over the table rows
                rows.map(row => {
                    // Prepare the row for display
                    prepareRow(row)
                    return (
                        // Apply the row props
                        <tr {...row.getRowProps()}>
                            {// Loop over the rows cells
                            row.cells.map(cell => {
                                // Apply the cell props
                                return (
                                    <td {...cell.getCellProps()}
                                    style={{
                                    paddingLeft: '8px',
                                    paddingRight: '8px',
                                    paddingTop: '13px',
                                    paddingBottom: '13px',
                                    }}
                                    >
                                        {// Render the cell contents
                                        cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
};

export default AssessReviewTable;