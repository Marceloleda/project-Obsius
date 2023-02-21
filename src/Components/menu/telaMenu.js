import styled from "styled-components";
import {FiMenu} from "react-icons/fi"
import {FaUserGraduate, FaLock,FaSearch} from "react-icons/fa"
import { GiHouse} from "react-icons/gi"
import { AiOutlineRight} from "react-icons/ai"
import {RiPagesLine} from "react-icons/ri"
import {MdOutlineAttachMoney} from "react-icons/md"
import Logo from "../../Assets/image/cactu.png"
import { PanelMenu } from 'primereact/panelmenu';
import { Button } from 'primereact/button';
import { useContext, useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext';
import Cactu from "../../Assets/image/cactu.png"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Sidebar } from 'primereact/sidebar';
import { SplitButton } from 'primereact/splitbutton';
import { useNavigate } from "react-router-dom";
import UserContext from "../../Contexts/UserContext";







export default function Menu(){
    const data = [
        { imagem: '', nome: 'João fulano de tal', projeto: 'Projeto A', escolaridade: 'Graduado', email: 'joao@example.com', situacao: 'Em andamento', nascimento: '20/02/2000', sexo: 'masculino', civil: 'casado', RG: '12.345.678-90',CPF: '123.456.789-09', curriculo: 'http://lattes.cnpq.br/6505242672214312', Logradouro: 'Rua de Tal', Bairro: 'bairro de tal', Complemento: ' Complemento de tal', Cidade: 'jorge texa', estado: "estado de tal", CEP:'12.345-67'},
        { imagem: '', nome: 'Maria fulano de tal', projeto: 'Projeto B', escolaridade: 'Pós-graduado', email: 'maria@example.com', situacao: 'Concluido', nascimento: '20/02/2000', sexo: 'feminino', civil: 'solteiro', RG: '12.345.678-90', CPF: '123.456.789-09', curriculo: 'http://lattes.cnpq.br/6505242672214312', Logradouro: 'Rua de fulano', Bairro: 'bairro de sal', Complemento: ' Complemento de tal', Cidade: 'de tal', estado: 'estado de tal', CEP:'12.345-67' },
        { imagem: '', nome: 'Pedro fulano de tal', projeto: 'Projeto C', escolaridade: 'Graduado', email: 'pedro@example.com', situacao: 'Interrompido', nascimento: '20/02/2000', sexo: 'masculino', civil: 'casado', RG: '12.345.678-90', CPF: '123.456.789-09', curriculo: 'http://lattes.cnpq.br/6505242672214312', Logradouro: 'Rua de Tal', Bairro: 'bairro de tal', Complemento: ' Complemento de tal', Cidade: 'jorge texa', estado: "estado de tal", CEP:'12.345-67'},
        { imagem: '', nome: 'Ana fulano de tal', projeto: 'Projeto D', escolaridade: 'Mestrado', email: 'ana@example.com', situacao: 'Cancelado', nascimento: '20/02/2000', sexo: 'feminino', civil: 'solteiro', RG: '12.345.678-90', CPF: '123.456.789-09', curriculo: 'http://lattes.cnpq.br/6505242672214312', Logradouro: 'Rua de Tal', Bairro: 'bairro de tal', Complemento: ' Complemento de tal', Cidade: 'jorge texa', estado: "estado de tal", CEP:'12.345-67'},
        { imagem: '', nome: 'Ana Paula', projeto: 'Projeto E', escolaridade: 'Mestrado', email: 'anaPaula@example.com', situacao: 'Em andamento', nascimento: '20/02/2000', sexo: 'feminino', civil: 'casado', RG: '12.345.678-90', CPF: '123.456.789-09', curriculo: 'http://lattes.cnpq.br/6505242672214312', Logradouro: 'Rua de Tal', Bairro: 'bairro de tal', Complemento: ' Complemento de tal', Cidade: 'jorge texa', estado: "estado de tal", CEP:'12.345-67'},
        { imagem: '', nome: 'Paula fulano de tal', projeto: 'Projeto F', escolaridade: 'Mestrado', email: 'Paula@example.com', situacao: 'Em andamento', nascimento: '20/02/2000', sexo: 'feminino', civil: 'casado', RG: '12.345.678-90', CPF: '123.456.789-09', curriculo: 'http://lattes.cnpq.br/6505242672214312', Logradouro: 'Rua de Tal', Bairro: 'bairro de tal', Complemento: ' Complemento de tal', Cidade: 'jorge texa', estado: "estado de tal", CEP:'12.345-67'}
      ];

    const navigate = useNavigate()
    const {tasks, setTasks} = useContext(UserContext);
    const [visibleLeft, setVisibleLeft] = useState(false);
    const usuario = localStorage.getItem("dados")
    const usuarioDados = JSON.parse(usuario)

    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState(data);
    const [selectedStatus, setSelectedStatus] = useState("");
    const [perfilDados, setPerfilDados] = useState({})



    const handleStatusChange = (status) => {
    setSelectedStatus(status);
    console.log(status)
    };

  useEffect(() => {
    const filtered = data.filter(
      (item) =>
        item.nome.toLowerCase().includes(searchText.toLowerCase()) ||
        item.projeto.toLowerCase().includes(searchText.toLowerCase()) ||
        item.email.toLowerCase().includes(searchText.toLowerCase())||
        item.escolaridade.toLowerCase().includes(searchText.toLowerCase())
    ).filter((item) => {
      if (selectedStatus === "") {
        return true;
      }
      return item.situacao === selectedStatus;
    });
    setFilteredData(filtered);
  }, [searchText, selectedStatus]);


    const filterOptions = [
        { label: <Concluido>Concluido</Concluido>, value: 'Concluido' },
        { label: <EmAndamento>Em andamento</EmAndamento>, value: 'Em andamento' },
        { label: <Cancelado>Cancelado</Cancelado>, value: 'Cancelado' },
        { label: <Interrompido>Interrompido</Interrompido>, value: 'Interrompido' }
      ];
   
     

   const renderEyeButton = (rowData) => {
    return (
      <EyeButton
        icon="pi pi-eye"
        onClick={() => {
         setPerfilDados(rowData)
         const perfil = JSON.stringify(tasks)
         localStorage.setItem("perfil", perfil)
          setTasks(rowData)
          navigate("/perfil")
        }

        }
      />
    );
  };
  
 

  const renderStatusButton = (rowData) => {
    return <StatusButton status={rowData.situacao}>{rowData.situacao}</StatusButton>;
  };

  

const onSearch = (event) => {
  setSearchText(event.target.value);
};

useEffect(() => {
  const filtered = data.filter(
    (item) =>
      item.nome.toLowerCase().includes(searchText.toLowerCase()) ||
      item.projeto.toLowerCase().includes(searchText.toLowerCase()) ||
      item.email.toLowerCase().includes(searchText.toLowerCase()) ||
      item.escolaridade.toLowerCase().includes(searchText.toLowerCase())

  );
  setFilteredData(filtered);
}, [searchText]);
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
                            <h1>Bolsistas e CLTs</h1>
                            <Title2>
                                <GiHouse style={{ color: 'blue' }} size={23}/> 
                                <AiOutlineRight size={23}/>
                                <a href="#">RH</a>
                                <AiOutlineRight size={23}/>
                                <h2>Bolsistas e CLTs</h2>
                            </Title2>
                        </Title>
                        <Perfil>
                            <h1>{usuarioDados.name}<br/>
                            <br/>
                            {usuarioDados.email}</h1>
                            <img src={Cactu} alt="perfil"/>

                        </Perfil>
                    </Header>
                    <Options>
                        <h2>Bolsistas</h2>
                        <h3>CLTs</h3>
                    </Options>
                    <Line/>
                    <Colunnas>
                        <SearchBar>
                        <SplitButton
                        label="Filtrar por situação"
                        model={filterOptions.map(option => {
                          return {
                            label: option.label,
                            command: () => handleStatusChange(option.value)
                          }
                        })}
                      />
                        <span className="p-input-icon-left">
                                <FaSearch size={20}/>
                                <StyleSearch placeholder="Pesquisar"
                                value={searchText}
                                 onChange={onSearch} />
                            </span>
                        </SearchBar>
                        <Table value={filteredData }>

                            <Column field="imagem" body={(rowData) => <img src={Logo} />} />
                            <Column field="nome" header="Nome" />
                            <Column field="projeto" header="Projeto" />
                            <Column field="escolaridade" header="Escolaridade" />
                            <Column field="email" header="Email" />
                            <Column
                            header="Situação"
                            body={renderStatusButton}
                            style={{ textAlign: "center", }}
                            />
                            <Column
                            header="Detalhes"
                            body={renderEyeButton}
                            style={{ textAlign: "center" }}
                            />
                        </Table>
                    </Colunnas>
                </ContainerMenu>

               
            </Container>
        </>
    );
}
const Concluido =styled.div`
    color:green;
    font-size:20px;
    color:green;
`;
const Interrompido =styled.div`
    color:yellow;
    font-size:20px;
`;
const Cancelado =styled.div`
    color:red;
    font-size:20px;
`;
const EmAndamento =styled.div`
    color:blue;
    font-size:20px;
`;

const IconMenu = styled.div`
  margin-top: 10px;
  margin-bottom:13px;
`;
const IconRH = styled.div`
  margin-top: 10px;
  margin-bottom:16px;
`;
const IconPage = styled.div`
  margin-top: 10px;
  margin-bottom:16px;
`;
const IconLock = styled.div`
  margin-top: 10px;
  margin-bottom:20px;
`;
const Colunnas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const SearchBar = styled.div`
    height:80px;
    width:100%;
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 1rem;

  .p-inputtext {
    width: 320px;
    margin-right: 75px;
    
  }
`;

const Table = styled(DataTable)`
  width: 100%;
  margin-top: 1rem;
  img{
    height:40px;
    border-radius: 50%;
  }

  .p-datatable-thead > tr > th {
    font-weight: 700;
        background-color: #1B1F2E;
        color:white;
  }
  .p-datatable-tbody > tr:nth-child(even) > td {
    background-color: #f9f9f9;
  }
  .p-datatable-tbody > tr:hover > td {
    background-color: #e6f2ff;
    cursor: pointer;
  }
`;


const StatusButton = styled(Button)`
  background-color: ${(props) => {
    if (props.status === "Concluido") return "green";
    if (props.status === "Em andamento") return "blue";
    if (props.status === "Interrompido") return "yellow";
    if (props.status === "Cancelado") return "red";
  }};
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 4px;
`;

const EyeButton = styled(Button)`
  background-color: transparent;
  border: none;
  color: #6c757d;

  &:hover {
    color: #000;
  }
`;

const StyleSearch = styled(InputText)`
outline: none;
border-bottom: 3px solid black;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
  
`;
const ContainerMenu = styled.div`
display:flex;
flex-direction:column;
height: 100%;

`;
const Options = styled.div`
    width: 205px;
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
    left: 1%;
    top: 1;
    bottom: 0;
    width: 5%;
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
height: 100px;
background:#F1F5FA;
box-shadow: 2px 2px 6px black;


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

}`;
const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;
margin-left: 125px;

background:#FFFFFF;
`;
const SidebarContainer = styled.div`
overflow: hidden;

  height: 100%;
  width: 60px;
  z-index:10;

  position: fixed;
  top: 0;
  left: 0;
  background-color: #1B1F2E;
  color: #fff;
  padding: 5px;
  img{
    height: 35px;
    margin-top: 75px;
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


