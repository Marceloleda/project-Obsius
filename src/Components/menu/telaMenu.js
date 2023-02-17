import styled from "styled-components";
import {FiMenu} from "react-icons/fi"
import {FaUserGraduate, FaLock} from "react-icons/fa"
import {RiPagesLine} from "react-icons/ri"
import {MdOutlineAttachMoney} from "react-icons/md"
import Logo from "../../Assets/image/cactu.png"

export default function Menu(){
    const usuario = localStorage.getItem("dados")
    const usuarioDados = JSON.parse(usuario)
    console.log(usuarioDados)
    return(
        <>
            <Container>
                <SidebarContainer>
                    <img src={Logo} alt="logo"/>
                    <List>
                        <ListItem><FiMenu size={24}/></ListItem>
                        <ListItem><FaUserGraduate size={24}/></ListItem>
                        <ListItem><RiPagesLine size={24}/></ListItem>
                        <ListItem><MdOutlineAttachMoney size={24}/></ListItem>
                        <ListItem><FaLock size={24}/></ListItem>
                    </List>
                </SidebarContainer>
                <SidebarContainer2>
                    <TopImage>
                        <img src={Logo} alt="logo"/>
                        <h1>OBSIUS</h1>
                    </TopImage>
                    <Categories>

                    </Categories>
                    <List>
                        <ListItem>teste</ListItem>
                        <ListItem><FaUserGraduate size={24}/></ListItem>
                        <ListItem><RiPagesLine size={24}/></ListItem>
                        <ListItem><MdOutlineAttachMoney size={24}/></ListItem>
                        <ListItem><FaLock size={24}/></ListItem>
                    </List>
                </SidebarContainer2>
            </Container>
        </>
    );
}
const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;
`;
const SidebarContainer = styled.div`
  height: 100%;
  width: 60px;

  position: fixed;
  top: 0;
  left: 0;
  background-color: #1B1F2E;
  color: #fff;
  padding: 5px;
  img{
    height: 35px;
    margin-top: 30px;
    margin-left: 5px;
    margin-bottom: 30px;
  }
`;
const SidebarContainer2 = styled.div`
  height: 100%;
  width: 290px;
  border-right: 3px solid #1B1F2E;
  background-color: #FFFFFF;
  padding: 3px;
  img{
    height: 50px;
    margin-top: 24px;
    margin-left: 95px;
    margin-bottom: 30px;
  }
`;
const TopImage = styled.div`
display:flex;
align-items:center;
  background: red;
  h1{
    font-size:30px;
    color: #1B1F2E;
    margin-left:10px;
  }
`;
const Categories = styled.div`
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