
import { useRef, useState } from "react";
function Updateid() {
    const [objectId, setObjectId] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      fetch('/updateDocument', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ objectId: "objectIdToUpdate" })
      })
        
       
      };
    
      return (
        <div>
          <h1>Update Document</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="objectId">Object ID:</label>
            <input type="text" id="objectId" value={objectId} onChange={(e) => setObjectId(e.target.value)} required />
    
            {/* Include other form fields here */}
    
            <button type="submit"onClick={handleSubmit}>Update</button>
          </form>
          </div>
  );
}

export default Updateid;