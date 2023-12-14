import React, { useEffect, useState } from 'react'

export default function UsersLogic() {
    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url ="https://jsonplaceholder.typicode.com/users";
            try {
                const response = await fetch(url);

                if(response.ok){
                    const data = await response.json();
                    setUsers(data);   
                }else{
                    throw new Error(response.status.toString());
                }
                
            } catch (error) {
                console.log(`Failed fetching users ${error}`)
            }
        };
        fetchData();
    },[]);

    const listAllUsers = () => {
        return users;
    }

    const readUser = (userId) => {
        return users.filter((obj) => obj.id  === userId);
    }

  return {
    listAllUsers,
    readUser,
  }
}
