import { useEffect } from "react"; 
function Counter()
 { useEffect(() => {
     console.log("Mounted");
      return () => { 
        console.log("Unmounted"); }; 
    }, []); 
        return ( 
        <div>
             <h2>Counter</h2>
              </div> 
              ); }
              
              export default Counter;