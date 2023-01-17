const Buttons = ({handleSortName, handleSortPop, handleSortArea}) => {

    return (
    <div>
        <h5 className="text-light mb-5">You can sort by:</h5>    
    <div className="btn-group align-items-center" role="group" aria-label="Vertical radio toggle button group">
        <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1" autoComplete="off" onChange={handleSortName}/>
        <label className="btn btn-outline-info" htmlFor="vbtn-radio1">Name</label>
        <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2" autoComplete="off" onChange={handleSortPop}/>
        <label className="btn btn-outline-info" htmlFor="vbtn-radio2">Population</label>
        <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio3" autoComplete="off" onChange={handleSortArea}/>
        <label className="btn btn-outline-info" htmlFor="vbtn-radio3">Area</label>
    </div>
    </div>
    )
}
export default Buttons