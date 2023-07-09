import axios from "axios";
import { useEffect, useState } from "react";
import "./Doctor.css";


function Doctor()
{
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:7000/doctorList');
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
       <>
       <div className="d-flex justify-content-center w-40"> Meet Worlds Top Doctors</div>
       <div className="row align-items-center h-100">
      <table>
        <thead>
          <tr>
            
            <th>Name</th>
            <th>type</th>
            <th>email</th>
            <th>Operations1</th>
            <th>Operations2</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.email}</td>
              <td><a href="/editdoc">edit</a></td>
              <td><a href="/deletedoc">delete</a></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </>
    );
}
export  default Doctor;