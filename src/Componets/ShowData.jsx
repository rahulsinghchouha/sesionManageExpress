import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { List, Card, Input } from "antd";


const ShowData = () => {

    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    let response;

    // useEffect(() => {

    //     async function fetchData() {
    //         try {
    //             response = await axios.get("http://localhost:4000/senddata");
    //             console.log("response", response?.data?.response);
    //             setData(response.data.response);

    //         }

    //         catch (error) {
    //             alert('data not found');
    //         }
    //     }
    //     fetchData();
    // }, [])




    const onSearch = (value) => {
        console.log("value", value);
        setSearchTerm(value);
    }

    const debounce = (func, delay) => {
        // console.log("debounce timer",func,"then - delay",delay);
        let timer;
        return function(...args) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }

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



    const handleSearch = debounce(fetchSearchResult, 10000); //for every handle Search call it will be wait for 3 second (because after every call debounce is set for 3 second)if user not type of 3 second then it will call the func.apply(this,obj)
    //this refers the current object for take arguments and in the args the e.target.value will be pass


    function handleChange(e) {
        console.log("handle change",e.target.value);
        const newValue = e.target.value;
        // setSearchTerm(newValue) //dont update the value inside this dont call the useState
        handleSearch(newValue); // Call the debounced search function
    }

//    steps for debouncing
//   1. create handle search function and in this funcion pass the  input value.
//   2. in handle search store the debounce this will wait for 3 second on every type 
//   3. then it will call the fetchSearchResult
    return (
        <div>

            <Input.Search placeholder="input search text" type="text" onSearch={onSearch} onChange={(e) => handleChange(e)} enterButton />
            <br />
            <br />
            {
                data &&
                data.map((item, index) => (
                    <Card key={index} itemLayout="horizontal" >
                        <p>
                            name:{item?.name}
                        </p>
                        <p>
                            password:{item?.password}
                        </p>

                    </Card>

                ))

            }</div>
    )

}
export default ShowData;