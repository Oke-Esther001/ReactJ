import axios from "axios"
import { useState } from "react"
const Fetch = () => {
    let endpoint = "https://jsonplaceholder.typicode.com/users"
    const [data, setData] = useState([]);

    const fetchData =() =>{
        axios.get(endpoint)
        .then((response)=> {
            console.log(response.data);
            setData(response.data);
        })
            .catch((err)=> {
                console.log(err);
        });
    };
    return (
        <div>
            <h1>Fetch</h1>
            <button onClick={fetchData}>Fetch</button>
            {
                data.map((item, index)=> {
                    return(
                        <div key={index}>
                            <h1>{item.name}</h1>
                        </div>
                    )
                } )
            }
        </div>

    )
    }

export default Fetch