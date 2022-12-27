import { AuthContext } from "../components/AuthContext";
import { useContext } from "react";
import styled from "styled-components";
import Seta from "../img/Seta.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Usuario() {
  const { user } = useContext(AuthContext);
  const { userId } = useParams();

  return (
    <>
      <Link
        style={{ textDecoration: "none", color: "white" }}
        to={`/subscriptions`}
      >
        <ImgSeta src={Seta} alt="seta-voltar" />
      </Link>
      <Container>
        <Div>
          <ButtonDadosUsuario>{user.name}</ButtonDadosUsuario>
          <ButtonDadosUsuario>{user.cpf}</ButtonDadosUsuario>
          <ButtonDadosUsuario>{user.email}</ButtonDadosUsuario>

          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/users/${userId}/upDate`}
            key={user.id}
          >
            <ButtonAtualizar>ATUALIZAR</ButtonAtualizar>
          </Link>
        </Div>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 299px;
  height: 667px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ImgSeta = styled.img`
  margin-top: 24px;
  margin-right: 320px;
  width: 28px;
  height: 28px;
`;
const Div = styled.div`
  margin-top: 53px;
  width: 299px;
  height: 400px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;
const ButtonDadosUsuario = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  width: 299px;
  height: 52px;
  background: #ebebeb;
  border-radius: 8px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #7e7e7e;
`;

const ButtonAtualizar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  width: 299px;
  height: 52px;
  background: #ff4791;
  border-radius: 8px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`;
