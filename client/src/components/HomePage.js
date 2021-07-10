import React , {useEffect} from 'react'
import { useHistory } from "react-router-dom";
function HomePage() {
    const history = useHistory();
    const checkAuth = () => {
        console.log("check");
        if (!localStorage.getItem("token")) {
          history.push("/login");
        }
      }; 

    useEffect(() => {
        checkAuth();
        
      }, []);
    return (
        <div>
            hello this is home!
        </div>
    )
}

export default HomePage
