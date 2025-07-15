import React, { useEffect,useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    // const [data, setData] = React.useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/mohitjaint")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, []);
    const data = useLoaderData();
    return ( 
        <>
        <div className="bg-gray-500 text-center m-4 p-4 text-white text-3xl flex">
            <div className="justify-center m-2">
                <img className="w-[300px]" src={data.avatar_url} alt="Github Profile Picture"/>
                <p className="bg-gray-100  w-[300px] rounded-none text-gray-500 text-xl">Github User: {data.login}</p>
                </div>
            <div className="ml-6 text-left text-xl flex flex-col justify-start">
                <ul className="list-none list-inside">

                    <li className="bg-gray-100 p-2 rounded-lg text-gray-500 m-2"><strong>Github Name:</strong> {data.name}</li>

                    <li className="bg-gray-100 p-2 rounded-lg text-gray-500 m-2"><strong>Github Bio:</strong> {data.bio}</li>
                    <li className="bg-gray-100 p-2 rounded-lg text-gray-500 m-2"><strong>Github Location:</strong> {data.location}</li>
                    <li className="bg-gray-100 p-2 rounded-lg text-gray-500 m-2"><strong>Github Followers:</strong> {data.followers}</li>
                </ul>
                
            </div>
            
            
        </div>
        </>
     );
}

export default Github;

