import React, { useMemo } from "react";
import Table from "./Table";

function Body({data, search}) {

    const columns = useMemo(

        () => [
            {
                Header: "Employees",
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
            <Table columns={columns} data={data} />
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