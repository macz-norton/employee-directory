function Filters({handleInputChange}){

    return (
        <div className="card mg-5">
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="filterName">Filter By Name</label>
                        <input type="text" className="form-control" name="search" id="filterName" onChange={handleInputChange}/>                
                    </div>
                </form>
            </div>
        </div>
    );

}

export default Filters;