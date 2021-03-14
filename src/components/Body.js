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
                        Header: "Profile picture",
                        accessor: "picture.thumbnail"
                    },
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

    // return(
    //     <div className="card">
    //         <div className="card-body">
    //             <h5 className="card-title">Special title treatment</h5>
    //             {
    //                 users
    //                     .filter((user) => {
    //                         // return true or false on if search is in the first or last name
    //                         // concatenate first and last name
    //                         return true;
    //                     })
    //                     .map(user => <p className="card-text">{user.name.first} {user.name.last}</p>)
    //             }
    //         </div>
    //     </div>
    // );

}

export default Body;