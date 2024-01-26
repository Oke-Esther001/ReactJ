import axios from "axios"
import { useState } from "react"

const FetchAss = () => {
    let endpoint3 = "https://api.spotify.com/v1/albums"
    const [data,setData] = useState([]);

    const FetchAssData =() =>{
        axios.get(endpoint3)
    .then((response)=> {
        console.log(response.data);
        setData(response.data);
    })
        .catch((err)=> {
            console.log(err);
    });
    }
  return (
    <div>
        <h1>FetchAss</h1>
        <button onClick={FetchAssData}>Check</button>
            {
                data.map((item, index)=> {
                    return(
                        <div key={index}>
                            {/* <h1>{item.login}</h1> */}
                            <img src={item.external_urls} alt="" />
                        </div>
                    )
                } )
            }
    </div>
  )
}

export default FetchAss