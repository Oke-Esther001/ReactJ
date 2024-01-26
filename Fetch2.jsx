import axios from "axios"
import { useState } from "react"


const Fetch2 = () => {
    let endpoint2 = "https://api.github.com/users"
    const [data, setData] = useState([]);

    const fetch2Data  =()=>{
    axios.get(endpoint2)
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
            <h1>Fetch</h1>
            <button onClick={fetch2Data}>Fetch</button>
            {
                data.map((item, index)=> {
                    return(
                        <div key={index}>
                            <h1>{item.login}</h1>
                            <img src={item.avatar_url} alt="" />
                        </div>
                    )
                } )
            }
        </div>

  )
}

export default Fetch2