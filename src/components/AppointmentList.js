import axios from "axios";
import { useEffect, useState } from "react";
import "./AppointmentList.css";


function AppointmentList()
{
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:7000/appointment-findAll');
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <table>
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Email</th>
            <th>date</th>
            <th>time</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}
export  default AppointmentList;