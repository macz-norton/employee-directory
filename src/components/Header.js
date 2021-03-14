import "./Header.css";

function Header() {

    return (
        <div className="jumbotron">
            <h1 className="display-4">Employee Directory</h1>
            <p className="lead">Use this employee directory to find important employee information easily</p>
            <p>Search by country to filter the table or click the table headers to sort the table.</p>
            <hr className="my-4" />
        </div>
    )

}

export default Header;