import { Card, Modal  } from 'antd'
import { EditOutlined,HeartOutlined,DeleteFilled ,PhoneOutlined,GlobalOutlined,MailOutlined,HeartFilled} from '@ant-design/icons';
import React,{useEffect,useState} from 'react'
import ModalForm from './ModalForm';


const UserCard = ({name,phone,website,email,id,username,deleteUser}) => {

const [avatar, setAvatar] = useState();
const [loading, setLoading] = useState(false);
const [like, setLike] = useState(false);
const [isModalOpen, setIsModalOpen] = useState(false);
const [formData,setFormData]=useState({name,phone,email,website})

  useEffect(() => {
  
    const fetchAvatar= async()=>{
    setLoading(true);
    const fetchedImg= await fetch(`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`);
    setAvatar(fetchedImg.url);
    setLoading(false);
    }
    fetchAvatar();
  }, [username])
  
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
  <div className='cards'>
    <Card
      style={{width:"100%"}}

      cover={
       <div style={{width:"100%", backgroundColor:"#f5f5f5"}}>
         <img
          alt="Avatar"
          src={avatar}
          width="200px"
          height={"200px"}
         />
        </div>
      
       }
      actions={
      [
        <div onClick={()=>{
          setLike((prevValue)=>{
            return !prevValue;
          })
        }}>
          {like?<HeartFilled style={{ color: 'rgb(255, 0, 0)' }}/>
          :
          <HeartOutlined className="heart" style={{ color: 'rgb(255, 0, 0)' }}  />}
        </div>,

        <div onClick={showModal}><EditOutlined key="edit" /></div>,
        <div onClick={()=>{
           deleteUser(id);
        }} ><DeleteFilled /></div>,
      ] 
    }
     >
     <div className='card-body'>

     <h3 className='name'>{formData.name}</h3>

     <div className='content email'>
     <MailOutlined />
      <p>{formData.email}</p>
      </div>

     <div className='content phone'>
      <PhoneOutlined />
      <p>{formData.phone}</p>
      </div>

     <div className='content website'>
      <GlobalOutlined />
      <p>{formData.website}</p>
     </div>
     </div>
   </Card>

   {/* Modal */}
   
    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
       <ModalForm  
       name={formData.name} 
       phone={formData.name} 
       email={formData.name} 
       website={formData.name} 
       setFormData={setFormData}
       handleOk={handleOk}/>
    </Modal>
  </div>
  )
}

export default UserCard

