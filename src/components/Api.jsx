import { useEffect } from "react"



const Api = ({setData}) => {
    
    const getCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const db = await response.json();
        setData(db)
    };
    useEffect(() => {
        getCountries()
    }, [])
}
export default Api