const Filter = ({newFilter, handleFilterChange}) =>{


    return(
        <>
        Filter Name : <input value={newFilter} onChange={handleFilterChange}/>
        </>
    )
}

export default Filter