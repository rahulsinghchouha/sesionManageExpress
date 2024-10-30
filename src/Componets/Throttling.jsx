import React, { useState } from "react";
import { Input } from 'antd';
import axios from "axios";

const Throttling = () => {

    const [searchInput, setSearchInput] = useState('');

    const [data, setData] = useState([]);


    //fetch search data

    const fetchSearchResult = async (query,b) => {
        console.log('Fetching search results for:', query , b);
        try {
            const response = await axios.get("http://localhost:4000/searchdata", {
                params: {
                    query: query
                }
            });
            console.log("response", response?.data?.response);
            setData(response.data.response);

        }

        catch (error) {
            console.log("Error------", error);
        }
    }



    // Throttle function 
    function throttle(func, limit) {
        let inThrottle;
        
      
        return function fun(...args) {
            console.log("throttele------", inThrottle);
            if (!inThrottle) {
               
                func.apply(this, args); // Call the function immediately we have call the function but here this keyword is referencing the fun and this will tell you the func to use the args of fun 
                inThrottle = true;
                setTimeout(() =>
                    (inThrottle = false), limit); // Wait for 'limit' milliseconds how much time setTimeout is running at that time inThrottle will be true.
            }
        };
    }
    //   Call, Apply, Bind, Execution Context in JS, Function Closures


    const handleSearch = throttle(fetchSearchResult, 3000); //this function will call on first render because we are not calling it explicitly and the retunring function will store on handle search and when we call this function the function it store will call and because of clousre it has access of that function

    // handleSearch = function (...args) {
    //     if (!inThrottle) {
    //         func.apply(this,args); // Call the function immediately
    //         inThrottle = true;
    //         setTimeout(() =>
    //         (inThrottle = false), limit); // Wait for 'limit' milliseconds how much time setTimeout is running at that time inThrottle will be true.
    //     }



    const handleChange = (e) => {
        const newValue = e.target.value;

        handleSearch(newValue);
        // setSearchInput(newValue); dont use variable also there
    }
    const onSearch = (values) => {
        console.log("on search", values);
    }


    return (
        <div>
            <h1>Jay maaa bhwani</h1>

            <Input.Search placeholder="input search text" type="text" onSearch={onSearch} onChange={(e) => handleChange(e)} enterButton />

        </div>


    )
}

export default Throttling;


