import React , {useEffect, useState} from 'react'
import axios from 'axios';
import ProfilePageCard from './ProfilePageCard';
import '../App.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Activityreport from './ActivityReport';


const ModalforUpload = ({userid}) => {
    const [open, setOpen] = useState(false);
  
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
  
    return (
        <div>
         <div class="col-sm-12" >
                      <a class="btn btn-info " onClick={onOpenModal}>Upload Work</a>
                    </div>
        <Modal open={open} onClose={onCloseModal} center>
          <Activityreport userid={userid}/>
        </Modal>
      </div>
    );
  };


function Profile() {


    const [ userDets , setUserDets] = useState({});
    const [ joined , setJoined] = useState("");
    const [loading , setLoading] = useState(true);
    const[modal , setModal] = useState(true);
    const [activities , setActivities] = useState([]);

     const userPosts = async () => {
         console.log(userDets._id);
         const id = localStorage.getItem("userid");
        try {
            const resp = await axios.get(`/report/${id}`);
            console.log(resp.data.datasave);
             setActivities(resp.data.datasave);
            //setLoading(false);
          } catch (error) {
            console.log(error.message);
          }
     }


    const getUser = async () => {
        const config = {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        };
    
        try {
          const resp = await axios.get("/user/fetchMe", config);
          console.log(resp.data.data);
           setUserDets(resp.data.data);
           const dateString = resp.data.data.enrolledAt;
           const formatDate = (dateString) => {
            const options = { year: "numeric", month: "long", day: "numeric" }
            return new Date(dateString).toLocaleDateString(undefined, options)
          }
          
          userPosts();
          setJoined(formatDate(dateString));
          setLoading(false);
          //setLoading(false);
        } catch (error) {
          console.log(error.message);
        }
      };
  
   useEffect(async() => {
       await getUser();
       
   }, []);

   if(loading === true){
       return (
           <div className="profile">
               Loading
           </div>
       )
   }

    return (
       <div className="profile">
        <div class="container" >
    <div class="main-body">
    
        
       
    
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png" alt="Admin" class="rounded-circle" width="150" />
                    <div class="mt-3">
                      <h4>{userDets.name}</h4>
                      {userDets.role ===0 && <p class="text-secondary mb-1">Admin</p> }
                      {userDets.role ===1 && <p class="text-secondary mb-1">Co-Ordinator</p> }
                      {userDets.role ===2 && <p class="text-secondary mb-1">Volunteer</p> }
                      <p class="text-muted font-size-sm">Member since {joined}</p>
                      {/* <button class="btn btn-primary">Follow</button>
                      <button class="btn btn-outline-primary">Message</button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" >
                    
                    <span >Programs Enrolled</span>
                  </li>
                  {userDets.programs.map((u , ind) => {
                      return(
<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" >
                    
                    <span class="text-secondary">{u}</span>
                  </li>
                      );
                  })}
                  
                  
                  
                </ul>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {userDets.name}
                    </div>
                  </div>
                 
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {userDets.email}
                    </div>
                  </div>
                
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {userDets.phone}
                    </div>
                  </div>
                
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {userDets.address}
                    </div>
                  </div>
                  
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">About Me</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {userDets.description}
                    </div>
                  </div>
                   <ModalforUpload userid={userDets._id}/>
                  
                </div>
              </div>

              <div class="row gutters-sm">
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3"><span style={{color : "green" , marginRight : "7px"}}>Verified </span>Activity</h6>
                     {activities.filter((u) =>{
                         if(u.verified === true)return u;
                     }).reverse().map((u , ind)=> {
                         return (
                            <div style={{marginBottom : "10px"}} key={ind}>
                                <ProfilePageCard user={u}/>
                                </div>
                         );
                     })}
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3"><span style={{color : "red"  , marginRight : "7px"}}>Unverified </span> Activity</h6>
                      {activities.filter((u) =>{
                         if(u.verified === false)return u;
                     }).reverse().map((u , ind)=> {
                         return (
                            <div style={{marginBottom : "10px"}} key={ind}>
                                <ProfilePageCard user={u}/>
                                </div>
                         );
                     })}
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>

        </div>
    </div>
       </div>
    )
}

export default Profile;
