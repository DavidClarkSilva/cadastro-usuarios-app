
import React, { useState } from 'react';
import { Container, Tab, Tabs } from '@mui/material';
import Cadastro from './pages/Cadastro';
import ListaUsuarios from './pages/ListaUsuarios';

function App() {
  const [aba, setAba] = useState(0);

  return (
    <Container>
      <Tabs value={aba} onChange={(e, val) => setAba(val)}>
        <Tab label="Cadastrar Usuário" />
        <Tab label="Lista de Usuários" />
      </Tabs>
      {aba === 0 && <Cadastro />}
      {aba === 1 && <ListaUsuarios />}
    </Container>
  );
}

export default App;
