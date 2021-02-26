function Body({users, search}) {

    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                {
                    users
                        .filter((users) => {
                            // return true or false on if search is in the first or last name
                            // concatenate first and last name
                            return true;
                        })
                        .map(users => <p className="card-text">{users.name.first} {users.name.last}</p>)
                }
            </div>
        </div>
    );

}

export default Body;