import React, { useMemo } from "react";
import Table from "./Table";
import styled from "styled-components";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    tr:hover {
        background-color: #E8E8E8;
    }

    th {
        background-color: #E8E8E8;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Body({data, search}) {

    const columns = useMemo(

        () => [
            {
                Header: "Employee Directory",
                columns: [
                    {
                        Header: "First name",
                        accessor: "name.first"
                    },
                    {
                        Header: "Last name",
                        accessor: "name.last"
                    },
                    {
                        Header: "Email",
                        accessor: "email"
                    },
                    {
                        Header: "Phone",
                        accessor: "phone"
                    },
                    {
                        Header: "Country",
                        accessor: "location.country"
                    }
                ]
            }
        ],
        []
    );

    return (
        <div className="Body">
            <Styles>
                <Table columns={columns} data={data} />
            </Styles>

        </div>
    )

}

export default Body;