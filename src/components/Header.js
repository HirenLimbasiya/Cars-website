const Header = ({ handleFilter, model }) => {

    function handleChange(e) {
        handleFilter(e.target.value);
    }


    if (window.location.pathname !== "/") {
        return;
    }


    return (
        <section>
            <select onChange={handleChange} value={model}>
                <option value="all">All</option>
                <option value="suv">Suv</option>
                <option value="estate">Estate</option>
                <option value="sedan">Sedan</option>
            </select>
        </section>
    )
}

export default Header