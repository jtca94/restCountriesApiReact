import { useEffect } from "react"

const Api = ({setData}) => {
    
    const getCountries = async () => {

        try {
        
        const response = await fetch("https://restcountries.com/v3.1/all");
        const db = await response.json();
        setData(db)
        } catch (error) {
            console.log(error.message)

        }    
    };
    useEffect(() => {
        getCountries()
    }, [])
}
export default Api