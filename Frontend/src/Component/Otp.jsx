import React, { useEffect } from 'react';
import { useState } from 'react';
import { Flex, Input, Typography } from 'antd';
import { useParams } from 'react-router-dom';
const { Title } = Typography;

const Otp = () => {
  const onChange = (text) => {
    console.log('onChange:', text);
  };
  const onInput = (value) => {
    console.log('onInput:', value);
  };
  const sharedProps = {
    onChange,
    onInput,
  };
  const handleCopyClick = () => {
    try {
        window.navigator.clipboard.writeText(text);
        alert("Copied to clipboard!");
    } catch (err) {
        console.error("Unable to copy to clipboard.",err);
        alert("Copy to clipboard failed.");
    }
  };
  const [text, setText] = useState("");
  const { email_address } = useParams();
  
  useEffect(() => {
    const updateSign = JSON.parse(localStorage.getItem("Credential")) || [];
    const userSign = updateSign.find((user)=> user.EmailAddress === email_address)
    console.log("userSign",userSign);

    setText(userSign?.Recovery_code)
    
  }, [])

  return<>
  <div className='container' style={{display:"flex",alignItems:"center",
    justifyContent:"center",gap:"20px"
  }}>
   <Flex gap="middle" align="flex-start" vertical>
      <Title level={5} style={{marginLeft:"100px"}}> Recovery Code </Title>

      <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps}
        value={text.toString()}
      />


    </Flex>
    <div style={{paddingTop:"50px"}}>
        <button onClick={handleCopyClick} ><i class="fa-solid fa-copy"></i></button>    
    </div>
  </div>
  </>
}
export default Otp;