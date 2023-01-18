const Buttons = ({handleSortName, handleSortPop, handleSortArea}) => {

    return (
    <div>
        <h5 className="text-light mb-5">You can sort by:</h5>    
    <div className="btn-group align-items-center" role="group" aria-label="Vertical radio toggle button group">
        <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1" autoComplete="off" onChange={handleSortName}/>
        <label className="btn btn-outline-info" htmlFor="vbtn-radio1">Name <i className="fa-solid fa-earth-americas"></i></label>
        <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2" autoComplete="off" onChange={handleSortPop}/>
        <label className="btn btn-outline-info" htmlFor="vbtn-radio2">Population <i className="fa-solid fa-person-arrow-up-from-line"></i></label>
        <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio3" autoComplete="off" onChange={handleSortArea}/>
        <label className="btn btn-outline-info" htmlFor="vbtn-radio3">Area <i className="fa-solid fa-chart-area"></i></label>
    </div>
    </div>
    )
}
export default Buttons