import { Alert, Button, Card, Form, Input, Space } from 'antd';
import CrudProductClass from '../../services/CrudProductClass';
import { useState } from 'react';
import CrudClientClass from '../../services/crudclient/CrudClient';


function CreateClient(){
    

  const [sucess, setSucess] = useState(false)
  const [erro, setErro] = useState(false)
  

const crudclient = new CrudClientClass

    const onFinish = (values) => {
        console.log('Success:', values);
        crudclient.postClient(values).then(data => {setSucess(true); console.log(data)}).catch(erro => {setErro(true); console.log(erro)})
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    
    return(

<Card 
bordercolor="gray"
style={{
  width: 500,
}}

>


<Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Favor insira o  Nome do produto!',
        },
      
      
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="cpf"
      name="cpf"
      rules={[
        {
          required: true,
          message: 'Favor insira a Descrição!',
        },
      
      
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Endereço"
      name="address"
      rules={[
        {
          required: true,
          message: 'Favor insira a Validade!',
        },
      
      
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Fone"
      name="phone"
      rules={[
        {
          required: true,
          message: 'Favor insira a categoria!',
        },
      
      
      ]}
    >
       <Input/>
   </Form.Item>
    
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
   
    </Form.Item>

    

    </Form>
    <card
    bordered={false}
    style={{
      width: 800,
    }}>
    {sucess &&
     <Space
     direction="vertical"
     style={{
       width: '40%',
     }}
   >
     <Alert
       message="Inserido com Sucesso"
       type="success"
       showIcon
       action={
         <Button size="small" type="text">
           
         </Button>
       }
       closable
     />
    </Space>}
      
      {erro &&
          <Space
          direction="vertical"
          style={{
            width: '80%',
          }}>

<Alert
       message="Erro ao inserir"
       type="error"
       showIcon
       action={
         <Button size="small" type="text">
           
         </Button>
       }
       closable
     />

          </Space>
          
      

    }
</card>

       
        </Card>
    
    )
 
    
    
}

export default CreateClient