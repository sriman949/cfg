import React , {useEffect} from 'react'
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

function HomePage() {
    const history = useHistory();
    const checkAuth = () => {
        console.log("check");
        if (!localStorage.getItem("token")) {
          history.push("/login");
        }
      }; 

      const handleLogout = () => {
        localStorage.clear();
    
        window.location.reload();
      };

    useEffect(() => {
        checkAuth();
        
      }, []);
    return (
        <div>
            hello this is home!
            <Button variant="primary" type="submit" onClick={handleLogout}  >
          Logout
        </Button>
        </div>
    )
}

export default HomePage
