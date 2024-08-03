import axios from "axios";


const fetchCountries = async() => {

    try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        return response.data.map((country)=>country.name.common)

        
    } catch (error) {
        console.error('Error',error);
        return [];       
    }
}

export default fetchCountries