
import React,{useEffect,useState} from 'react'
import UserCard from './UserCard';
import { List } from 'antd';

const Home = () => {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(false)

 useEffect( () => {

    setLoading(true);
    const usersData= async()=>{
        const response =await fetch("https://jsonplaceholder.typicode.com/users");
        const data= await response.json();
        setUsers(data);
        setLoading(false);
    }
    usersData();
    
 }, [])

 const deleteUser=(id)=>{
    console.log(id);
   let newUserList= users.filter((user)=>{
        return user.id!==id;
    })
    setUsers(newUserList);
 }

  return (
    <List 
        loading={loading}
        grid={{xs:1,sm:2,md:3,lg:3,xl:4}}
        dataSource={users} 
        renderItem={(user)=>{
        return(
            <UserCard key ={user.id} 
            name={user.name}
            phone={user.phone}
            username={user.username}
            email={user.email}
            website={user.website}
            id={user.id}
            deleteUser={deleteUser}
            />
        )
   }}>
  </List>
  )
}

export default Home