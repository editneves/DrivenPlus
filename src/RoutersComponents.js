import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../src/pages/Login'
import Cadastro from '../src/pages/Cadastro'
import Planos from '../src/pages/Planos'
import Plano from '../src/pages/Plano'
import Home from '../src/pages/Home'
import Usuario from '../src/pages/Usuario'
import UsuarioUpDate from '../src/pages/UsuarioUpDate'

function RoutersComponents() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Cadastro />} />
        <Route path="/subscriptions" element={<Planos />} />
        <Route path="/subscriptions/:planoId" element={<Plano />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users/:userId" element={<Usuario />} />
        <Route path="/users/:userId/upDate" element={<UsuarioUpDate />} />
      </Routes>
    </Router>
  )
}

export default RoutersComponents
