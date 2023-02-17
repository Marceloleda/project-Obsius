import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";   

import { useRef, useState } from 'react';
import styled from 'styled-components';
import { Button } from 'primereact/button'; 
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { FaEnvelope, FaLock} from 'react-icons/fa';
import Logo from "../../Assets/image/logo.png";
import Background1 from "../../Assets/image/android.jpg";
import {Toast} from "primereact/toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const toastRef = useRef();


  const submitLogin = (event) => {
    event.preventDefault();
    if(password === "marcelo" && email=== "marcelo@g.com"){
        toastRef.current.show({severity: 'info', summary: 'Sucesso', detail: 'Login Efetuado!'})
        const user = {name: 'marcelo', email: 'marcelo@g.com'}

        const userDados = JSON.stringify(user)
        localStorage.setItem("dados", userDados)
        
        setTimeout(changeRoute, 5000);
    }
    else
        toastRef.current.show({severity: 'error', summary: 'Falha', detail: 'Senha Incorreta!'})

  };
  function changeRoute(){
    navigate("/menu")
  }


  return (
    <Container>
        <Toast ref={toastRef}/>
        <Left>
            <ContainerLogin>
                <img src={Logo} alt="logo"/>
                <h2>Login</h2>
                
                <form onSubmit={submitLogin}>
                <InputContainer>
                    <SubTitle><h3>E-mail</h3></SubTitle>
                    <span className="p-input-icon-left">
                        <FaEnvelope/>
                        <StyleInputEmail 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </span>
                    <SubTitle><h3>Senha</h3></SubTitle>
                    <span className="p-input-icon-left">
                        <Lock/>
                        <StyledPassword 
                            inputStyle={{ width: '320px' }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            toggleMask
                            feedback={false} 
                            required
                            />

                    </span>
                </InputContainer>
                <StyleButton type="submit" label="Entrar" className="p-button-raised "  raised  />
            </form>
            <SingUp>
                <h4>Não possui uma conta? <a href="#">Criar conta</a></h4>
            </SingUp>
            </ContainerLogin>
        </Left>
        <Right>
            <TextRigth>
                <h1>O ERP que seu <br />intituto precisa!</h1>
            </TextRigth>
        </Right>
    </Container>
  );
}


const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
`;
const ContainerLogin = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
height: 100vh;
width: 450px;

img{
    height:80px;
    width: 80px;
    margin-bottom:70px;
}
h2{
    font-size:20px;
    color:brack;
    margin-bottom:20px;
}
`;
const SubTitle = styled.div`
margin-bottom:5px;
margin-top:25px;
h3{
    font-size:16px;
    color:black;
    font-weight: bold;
}
`;
const SingUp = styled.div`
margin-top: 15px;
a {
    text-decoration: none; /* Remove sublinhado */
    color: blue; /* Define a cor do link */
  }
`;
const Left = styled.div`
display:flex;
justify-content:center;
align-items:center;
width: 50%;
height:100%;

background-color: #f2f2f2;
`;

const Right = styled.div`
height: 100%;
width: 50%;

background-image: url(${Background1});
background-repeat: repeat;
background-size: cover;

h1{
    font-size:50px;
    color:white;
}
`;

const TextRigth = styled.div`
    margin-top: 125px;
    margin-left: 100px;
`;

const StyleButton = styled(Button)`
width: 320px;
margin-top:50px;
`;

const StyleInputEmail = styled(InputText)`
width: 320px;

`;

const InputContainer = styled.div`
display:flex;
flex-direction:column;
`;

const Lock = styled(FaLock)`
color: black;
position: absolute;
left: 0;
z-index:1;
`;
const StyledPassword = styled(Password)`
.p-inputtext {
    padding-left: 2rem;
  }
  .p-inputtext .p-inputtext-icon {
    left: 0;
  }
  .p-inputtext .p-inputtext-icon > svg {
    position: absolute;
    left: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;
