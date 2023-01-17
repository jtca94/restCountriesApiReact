const Card = ({data, query, sorter}) => {
    const maper = pais=> {
        const {name: {common, official}, continents, tld, unMember, capital, area, population, flags: {png}} = pais
        return (
        <div key={official} className="col-sm-12 col-md-4 col-lg-3">
            <div  className="card h-100">
                <img src={png} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{common}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Capital: {capital}</li>
                    <li className="list-group-item">Continent: {continents}</li>
                    <li className="list-group-item">Population: {population.toLocaleString('es-ES')}</li>
                    <li className="list-group-item">Area: {area.toLocaleString('es-ES')} km²</li>
                    <li className="list-group-item">UN member: {unMember ? "Yes" : "No" }</li>
                    <li className="list-group-item">Name of domain: {tld}</li>
                </ul>
            </div>
        </div>
        )

    }
    if (sorter == 0) {
        return (
        data.filter((element) => element.name.common.toLowerCase().includes(query)).sort().map(maper)
    )}
    if (sorter == 1) {
        return (
            data.filter((element) => element.name.common.toLowerCase().includes(query)).sort((d1, d2) => (d1.name.common < d2.name.common) ? -1 : (d1.name.common > d2.name.common) ? 1 : 0).map(maper)
        )}
    if (sorter == 2) {
        return (
            data.filter((element) => element.name.common.toLowerCase().includes(query)).sort((d1, d2) => (d1.population < d2.population) ? 1 : (d1.population > d2.population) ? -1 : 0).map(maper)
        )}
    if (sorter == 3) {
        return (
            data.filter((element) => element.name.common.toLowerCase().includes(query)).sort((d1, d2) => (d1.area < d2.area) ? 1 : (d1.area > d2.area) ? -1 : 0).map(maper)
        )}


}


export default Card