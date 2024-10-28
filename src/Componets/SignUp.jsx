import React from "react";
import axios from "axios";

const SignUp = () =>{

const getToken = () =>{

  axios.get('http://localhost:4000/token',  { withCredentials: true })
.then(response => {
    console.log('Response:');
})
.catch(error => {
    console.error('Error fetching protected resource:', error);
});

}



    return (<div>
        <button onClick={()=>{getToken()}}>Get Token</button>
    </div>)
}

export default SignUp;


