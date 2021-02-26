function Body({users}) {

    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                {users.map(users => <p className="card-text">{users.name.first} {users.name.last}</p>)}
            </div>
        </div>
    );

}

export default Body;