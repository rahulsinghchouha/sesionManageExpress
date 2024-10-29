import React, { useState } from "react";
import { Input } from 'antd';
import axios from "axios";

const Throttling = () => {


    const [data,setData] = useState([]);


    //fetch search data

    const fetchSearchResult = async (query) => {
        console.log('Fetching search results for:', query);
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
           console.log("Error------",error);
        }
    }



    // Throttle function 
    function throttle(func, limit) {
        let inThrottle;
        return function (...args) {
            if (!inThrottle) {
                func.apply(this, args); // Call the function immediately
                inThrottle = true;
                setTimeout(() =>
                (inThrottle = false), limit); // Wait for 'limit' milliseconds 
            }
        };
    }


    const handleSearch = throttle(fetchSearchResult, 10000);



    const handleChange = (e) => {
        const newValue = e.target.value;

        handleSearch(newValue);

    }
    const onSearch = (values) =>{
        console.log("on search",values);
    }


    return (
        <div>
            <h1>Jay maaa bhwani</h1>

            <Input.Search placeholder="input search text" type="text" onSearch={onSearch} onChange={(e) => handleChange(e)} enterButton />

        </div>


    )
}

export default Throttling;

