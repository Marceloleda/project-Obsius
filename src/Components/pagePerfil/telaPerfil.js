import styled from "styled-components";
import {FiMenu} from "react-icons/fi"
import {FaUserGraduate, FaLock,FaArrowCircleLeft, FaBirthdayCake, FaIdCard, FaFlag, FaFilePdf} from "react-icons/fa"
import { AiOutlineRight} from "react-icons/ai"
import { MdOutlineTransgender, MdSchool, MdDirections} from "react-icons/md" 
import { GiHouse, GiDirectionSigns} from "react-icons/gi"
import { SiStackbit} from "react-icons/si"
import { BsDownload} from "react-icons/bs"

import { ImLocation} from "react-icons/im"
import { BsPersonFill} from "react-icons/bs"
import { HiDocumentText} from "react-icons/hi" 
import {RiPagesLine} from "react-icons/ri"
import {MdOutlineAttachMoney} from "react-icons/md"
import Logo from "../../Assets/image/cactu.png"
import { PanelMenu } from 'primereact/panelmenu';
import { useContext, useState } from "react";
import Cactu from "../../Assets/image/cactu.png"
import { Sidebar } from 'primereact/sidebar';
import { useNavigate } from "react-router-dom";
import UserContext from "../../Contexts/UserContext";
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";   
import { BsFillPersonPlusFill } from 'react-icons/bs';









export default function Menu(){
    const {tasks, setTasks} = useContext(UserContext);
    console.log(tasks)
    const navigate = useNavigate()
    const [visibleLeft, setVisibleLeft] = useState(false);
    const usuario = localStorage.getItem("dados")
    const usuarioDados = JSON.parse(usuario)

    const perfil = JSON.stringify(tasks)
    localStorage.setItem("perfil", perfil)

    const perfilbase = localStorage.getItem("perfil")
    const perfilInf = JSON.parse(perfilbase)
    console.log("nao foi usado persistencia de dados")

    const items = [
        {
            label:<MenuItem>MENU</MenuItem>,
        },
        {
            label:<MenuItem>RH</MenuItem>,
            items:[
                {
                    label:'Bolsistas e CLTs',
                },
                {
                    label:'Banco de Talentos',
                }  
            ]
        },
        {
            label:<MenuItem>PROJETOS</MenuItem>,
            items:[
                {
                    label:'Lista de Projetos',
                },
            ]
        },
        {
            label:<MenuItem>FINANCEIRO</MenuItem>,
            items:[
                {
                    label:'DashBoard',
                },
            ]
        },
        {
            label:<MenuItem>CONTROLE DE ACESSO</MenuItem>,
            items:[
                {
                    label:'Lista de Projetos',
                },
            ]
        },
    ];
    
    return(
        <>
            <Container>
                <SidebarContainer>
                    <img src={Logo} alt="logo"/>
                    <List>
                        <IconMenu>
                            <ListItem><FiMenu size={24} onClick={() => setVisibleLeft(true)} className="mr-2"/></ListItem>
                        </IconMenu>
                        <IconRH>
                            <ListItem><FaUserGraduate size={24}/></ListItem>
                        </IconRH>
                        <IconPage>
                            <ListItem><RiPagesLine size={24}/></ListItem>
                        </IconPage>
                        <IconLock>
                            <ListItem><MdOutlineAttachMoney size={24}/></ListItem>
                        </IconLock>
                        <ListItem><FaLock size={24}/></ListItem>
                    </List>
                </SidebarContainer>
                <Sidebar dismissable={false} visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
                    <SidebarContainer>
                        <img src={Logo} alt="logo"/>
                        <List>
                            <IconMenu>
                                <ListItem><FiMenu size={24} onClick={() => setVisibleLeft(true)} className="mr-2"/></ListItem>
                            </IconMenu>
                            <IconRH>
                                <ListItem><FaUserGraduate size={24}/></ListItem>
                            </IconRH>
                            <IconPage>
                                <ListItem><RiPagesLine size={24}/></ListItem>
                            </IconPage>
                            <IconLock>
                                <ListItem><MdOutlineAttachMoney size={24}/></ListItem>
                            </IconLock>
                            <ListItem><FaLock size={24}/></ListItem>
                        </List>             
                    </SidebarContainer>
                    <SidebarContainer2>
                        <TopImage>
                            <img src={Logo} alt="logo"/>
                            <h1>OBSIUS</h1>
                        </TopImage>
                        <Categories>
                            <List>
                                <div className="card flex justify-content-center">
                                    <PanelMenu model={items} className="w-full md:w-25rem" />
                                </div>
                            </List>
                        </Categories>
                    </SidebarContainer2>   
                </Sidebar>
                <ContainerMenu>
                    <Header>
                        <Title>
                            <h1>Dados do Bolsista</h1>
                            <Title2>
                                <GiHouse style={{ color: 'blue' }} size={23}/> 
                                <AiOutlineRight size={23}/>
                                <a href="#">RH</a>
                                <AiOutlineRight size={23}/>
                                <a href="/menu">Bolsistas e CLTs</a>
                                <AiOutlineRight size={23}/>
                                <h3>Dados do Bolsista</h3>

                            </Title2>
                        </Title>
                        <Perfil>
                            <h1>{usuarioDados.name}<br/>
                            <br/>
                            {usuarioDados.email}</h1>
                            <img src={Cactu} alt="perfil"/>

                        </Perfil>
                    </Header>
                    <Bolsista>
                        <PerfilImag>
                        <FaArrowCircleLeft style={{color: 'blue', cursor: 'pointer'}} size={40} 
                        onClick={(()=>{
                            navigate("/menu")
                        })}/>
                            <img src={Logo}/>  
                            <h1>{perfilInf.nome}</h1>          
                        </PerfilImag>
                        <Botoes>
                            <ButStyle>
                                <StyledBotao label="Tornar CLT" icon={<BsFillPersonPlusFill />} />
                                <BotaoPdf label=" Baixar PDF" icon={<BsDownload />}  />
                            </ButStyle>
                                <div>
                                    <h1>Última atualização: 14/12/2019</h1>
                                </div>
                        </Botoes>
                    </Bolsista>
                    <Options>
                        <h2>Dados Cadastrais</h2>
                        <h3>Documentação</h3>
                        <h3>Projetos</h3>
                        <h3>Histórico Financeiro</h3>
                    </Options>
                    <Line/>
                    <BoxLine>
                        <h1>Dados Pessoais</h1>
                        <LineText/>
                    </BoxLine>
                    <Blocos>
                        <Dados>
                            <Icons>
                                <BsPersonFill size={25}/>
                                <FaBirthdayCake size={25}/>
                                <MdOutlineTransgender size={25}/> 
                                <SiStackbit size={25}/>
                            </Icons>
                            <Base1>
                                <h2>Nome</h2>
                                <h1>{perfilInf.nome}</h1>
                            </Base1>
                            <Base1>
                                <h2>Nascimento</h2>
                                <h1>{perfilInf.nascimento}</h1>
                            </Base1>
                            <Base1>
                                <h2>Sexo</h2>
                                <h1>{perfilInf.sexo}</h1>
                            </Base1>
                            <Base1>
                                <h2>Estado civil</h2>
                                <h1>{perfilInf.civil}</h1>
                            </Base1>
                        </Dados>
                        <Dados>
                            <Icons>
                                <FaIdCard size={25}/>
                                <FaIdCard size={25}/>
                                <MdSchool size={25}/>
                                <HiDocumentText size={25}/>

                            </Icons>
                            <Base1>
                                <h2>RG</h2>
                                <h1>{perfilInf.RG}</h1>
                            </Base1>
                            <Base1>
                                <h2>CPF</h2>
                                <h1>{perfilInf.CPF}</h1>
                            </Base1>
                            <Base1>
                                <h2>escolaridade</h2>
                                <h1>{perfilInf.escolaridade}</h1>
                            </Base1>
                            <Base1>
                                <h2>Curriculo Lattes</h2>
                                <a href={perfilInf.curriculo}>{perfilInf.curriculo}</a>
                            </Base1>
                        </Dados>
                    </Blocos>
                    <BoxLine>
                        <h1>Endereço</h1>
                        <LineText/>
                    </BoxLine>
                    <Blocos>
                        <Dado2>
                            <Icons>
                                <MdDirections size={25}/>
                                <MdDirections size={25}/>
                                <GiDirectionSigns size={25}/> 

                            </Icons>
                            <Base1>
                                <h2>Logradouro</h2>
                                <h1>{perfilInf.Logradouro}</h1>
                            </Base1>
                            <Base1>
                                <h2>Bairro</h2>
                                <h1>{perfilInf.Bairro}</h1>
                            </Base1>
                            <Base1>
                                <h2>Complemento</h2>
                                <h1>{perfilInf.Complemento}</h1>
                            </Base1>

                        </Dado2>
                        <Dado2 >
                            <Icons>
                                <FaFlag size={25}/>
                                <FaFlag size={25}/>
                                <ImLocation size={25}/>

                            </Icons>
                            <Base1>
                                <h2>Cidade</h2>
                                <h1>{perfilInf.Cidade}</h1>
                            </Base1>
                            <Base1>
                                <h2>Estado</h2>
                                <h1>{perfilInf.estado}</h1>
                            </Base1>
                            <Base1>
                                <h2>CEP</h2>
                                <h1>{perfilInf.CEP}</h1>
                            </Base1>
                        </Dado2>
                    </Blocos>
                    <BoxLineContatos>
                        <h1>Contatos</h1>
                        <LineText/>
                    </BoxLineContatos>
        
        
                </ContainerMenu>

               
            </Container>
        </>
    );
}
const Botoes = styled.div`
display:flex;
flex-direction: column;
width:500px;
margin-top: 10px;


h1{
    color:white;
    margin-left: 180px;
    margin-top: 10px;
    font-size:12px;

}
`;
const ButStyle = styled.div`
display:flex;
`;

const BotaoPdf = styled(Button)`
background: #007bff;
justify-content: space-around;
margin-left: 30px;

width: 200px;
`;
const StyledBotao = styled(Button)`
  background-color: transparent;
  border: 2px solid #007bff;
  color: #007bff;
  font-weight: bold;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

const Blocos = styled.div`
display:flex;
`;
const Base1 = styled.div`
width:95%;
height: 50px;
display:flex;
display:flex;
flex-direction: column;
margin-top: 5px;

margin-right:250px;
margin-bottom: 20px;

h1{
    font-weight:bold;
}
h2{
    font-size:15px;
    margin-bottom:10px;
}
`;
const Icons =styled.div`

width:40px;
height:90%;

display:flex;
align-items:center;
flex-direction:column;
justify-content: space-around;
shadow-box:borde-box;


`;
const Dado2 = styled.div`

height:260px;
width:30%;
margin-top: 25px;
margin-left: 55px;
shadow-box:borde-box;
padding:15px;

display:flex;
flex-direction:column;
flex-wrap:wrap;
`;
const Dados = styled.div`

height:350px;
width:30%;
margin-top: 25px;
margin-left: 55px;
shadow-box:borde-box;
padding:15px;

display:flex;
flex-direction:column;
flex-wrap:wrap;
`;

const BoxLine = styled.div`
display:flex;
align-items:center;
margin-left: 45px;
margin-top: 45px;
h1{
    width:150px;
    font-weight:bold;
}
`;
const BoxLineContatos = styled.div`
display:flex;
align-items:center;
margin-left: 45px;
margin-top: 15px;
margin-botton:50px;

h1{
    width:120px;
    font-weight:bold;
    
}`;
const Bolsista = styled.div`
display:flex;
justify-content:left;
justify-content: space-between;
align-items:center;
height:130px;
width:100%;
background-color: #1B1F2E;
shadow-box:borde-box;
padding:30px;

`;
const PerfilImag = styled.div`
display:flex;
align-items:center;
margin-left:30px;

    img{
        height: 70px;
        border: 2px solid white;
        border-radius:50%;
        margin-left:50px;
        margin-right:30px;

    }
    h1{
        font-size:25px;
        color: white;
    }
`;
const LineText = styled.div`
  height: 2px;
  width: 100%;
  background-color: #1B1F2E;
  

`;

const IconMenu = styled.div`
  margin-top: 10px;
  margin-bottom:36px;
`;
const IconRH = styled.div`
  margin-top: 10px;
  margin-bottom:30px;
`;
const IconPage = styled.div`
  margin-top: 10px;
  margin-bottom:30px;
`;
const IconLock = styled.div`
  margin-top: 10px;
  margin-bottom:30px;
`;
const ContainerMenu = styled.div`
display:flex;
flex-direction:column;
height: 100%;

`;
const Options = styled.div`
    width: 605px;
    margin-top: 30px;
    margin-bottom: 0px;
    display:flex;
    justify-content:space-around;
    h2{
        font-size:15px;
        font-weight: bold;
        color: #55B2FB;
    }h3{
        font-size:15px;
        font-weight: bold;
    }
`;
const Perfil = styled.div`
display:flex;
align-items:center;
margin-left:680px;
    img{
        height:60px;
    }

`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 10px;
  background-color: #55B2FB;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 3.7%;
    top: 1;
    bottom: 0;
    width: 4%;
    height: 4px;
    border-radius:7px;
    background-color: #55B2FB;
  }
`;
const Header = styled.div`
display:flex;
align-items: center;
justify-content:space-around;
width: 100vw;
background:#F1F5FA;
shadow-box:borde-box;
padding:15px;

`;
const Title =styled.div`
width: 400px;

h1{
    font-size:20px;
    font-weight: bold;

}
`;
const Title2 =styled.div`
margin-top:25px;
display:flex;
align-items:center;
width: 480px;

a {
    color: blue; 
  }
h1{
    font-size:20px;
    font-weight: bold;

}
h2{
    color: blue; 

}`;
const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;
margin-left: 125px;
background:#FFFFFF;
`;
const SidebarContainer = styled.div`
  height: 100%;
  width: 60px;
  z-index:10;
  overflow: hidden;

  position: fixed;
  top: 0;
  left: 0;
  background-color: #1B1F2E;
  color: #fff;
  padding: 5px;
  img{
    height: 35px;
    margin-top: 95px;
    margin-left: 5px;
    margin-bottom: 30px;
  }
`;
const SidebarContainer2 = styled.div`
overflow: hidden;

  height: 100%;
  width: 290px;
  border-right: 3px solid #1B1F2E;
  background-color: #FFFFFF;
  padding: 3px;
  img{
    height: 50px;
    margin-left: 55px;
    margin-bottom: 30px;
  }
`;
const TopImage = styled.div`
display:flex;
align-items:center;
  h1{
    font-size:30px;
    color: #1B1F2E;
    margin-left:10px;
  }
`;
const Categories = styled.div`
height:100%;
margin-left:60px;
display:flex;
flex-direction: column;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;


const MenuItem = styled.span`
  color: black; 
  font-weight: bold;

`;


