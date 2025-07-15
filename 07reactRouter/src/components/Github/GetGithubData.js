import React from 'react';
const GetGithubData = async () => {
    const response = await fetch("https://api.github.com/users/mohitjaint")
    
    return response.json();
}
export default GetGithubData;
