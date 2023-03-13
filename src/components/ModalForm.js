import React from 'react'
import { Form, Input,  } from 'antd';

const ModalForm = ({name,phone,email,website,setFormData}) => {


  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 20 },
  };
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  const onChange=(e)=>{
    const {name,value}=e.target;
  
    setFormData((prevValue)=>{
      return {
        ...prevValue,
        [name]:value
      }
    })
  }

  const [form] = Form.useForm();


  return (
    <Form
    form={form}
    {...layout}
    name="nest-messages"
    style={{ maxWidth: 600 }}
    validateMessages={validateMessages}
  >
    <Form.Item name={['user', 'name']} label="Name" rules={[{type:'string', required: true ,}]} >
     <Input onChange={onChange} value={name} name="name" />
    </Form.Item>
    <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email',required: true , message:"Not valid email" }]}>
     <Input  onChange={onChange} value={phone} name="email" />
    </Form.Item>
    <Form.Item name={['user', 'phone']} label="Phone" rules={[{type:"number", required: true ,message:"Not valid phone"}]}>
     <Input onChange={onChange} value={email} name="phone"/>
    </Form.Item>
    <Form.Item name={['user', 'website']} label="Website" rules={[{type:"url", required: true ,message:"Not valid website"}]}>
    <Input onChange={onChange} value={website} name="website"/>
    </Form.Item>
  </Form>
  )
}

export default ModalForm