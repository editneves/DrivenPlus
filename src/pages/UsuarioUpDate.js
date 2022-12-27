import { AuthContext } from "../components/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import Seta from "../img/Seta.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function UsuarioUpDate() {
  const navigate = useNavigate();
  const { user,setUser, usuario, setUsuario } = useContext(AuthContext);
  const { userId } = useParams();
  console.log("user", user, usuario);
  console.log("id", userId);
  let disabled = "disabled";

  const handleUsuario = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const atualizarUsuario = (e) => {
    e.preventDefault();

    const requisicao = axios.put(`${BASE_URL}/users/`, usuario, {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    });

    requisicao.then((req) => {
      setUsuario(req.data);
      const user = req.data
      setUser(user)
      navigate("/users/:userId");
    });

    requisicao.catch((err) => {
      alert(err.response.data.message);
    });
  };

  return (
    <>
      <Link
        style={{ textDecoration: "none", color: "white" }}
        to={"/users/:userId"}
      >
        <ImgSeta src={Seta} alt="seta-voltar" />
      </Link>

      <Container>
        <Form onSubmit={atualizarUsuario}>
          <input
            type="name"
            name="name"
            placeholder={user.name}
            onChange={handleUsuario}
            value={usuario.name}
            required
          />

          <input
            type="cpf"
            name="cpf"
            style={{ opacity: 0.9 }}
            disabled={disabled}
            placeholder={user.cpf}
            onChange={handleUsuario}
            value={usuario.cpf=user.cpf}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={user.email}
            onChange={handleUsuario}
            value={usuario.email}
            required
          />

          <input
            type="password"
            name="currentPassword"
            placeholder="Senha atual"
            onChange={handleUsuario}
            value={usuario.currentPassword}
            required
          />
          <input
            type="password"
            name="newPassword"
            placeholder="Nova senha"
            onChange={handleUsuario}
            value={usuario.newPassword}
            required
          />

          <button type="submit">SALVAR</button>
        </Form>
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
const Form = styled.form`
  width: 299px;
  height: 420px;
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #7e7e7e;
  input {
    display:flex;
    margin-top: 16px;
    width: 299px;
    height: 52px;
    background: #ffffff;
    border-radius: 8px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #7e7e7e;
  }
  button {
    margin-top: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px 122px;
    gap: 10px;
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
  }
`;
