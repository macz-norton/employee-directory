import React from "react";

function Body({users, search}) {

    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                {
                    users
                        .filter((user) => {
                            // return true or false on if search is in the first or last name
                            // concatenate first and last name
                            return true;
                        })
                        .map(user => <p className="card-text">{user.name.first} {user.name.last}</p>)
                }
            </div>
        </div>
    );

}

export default Body;