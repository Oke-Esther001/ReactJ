import { useState } from "react";

const Tenary = () => {
        // let name = "Kehnieeeee"
        const [name, setName] = useState("")
        const [userName, setUserName] = useState("")
        let gender = "male"

        let allStudents = [
            {firstName:"OluwaKenny", lastName: "Taiwo"},
            {firstName:"Idowu", lastName:"Adebayo"},
        ]

        const changeName = () => {
            setName(userName)
        }

        const user = (e) =>{
            setUserName(e.target.value)
        }
    return (
    <div>
        <h1 className={ gender === "male"}>{name}</h1>
        <input onChange={user} type="text" placeholder="enter username"  />
        <button className=""onClick={changeName}>Change Name</button>
            <table>
                <th>
                    <td>S/N</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                </th>
                {allStudents.map((student, index)=>(
                    <tr key ={index}>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                    </tr>
                ))}
            </table>
    </div>
    );
        };

export default Tenary