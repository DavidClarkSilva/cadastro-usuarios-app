
import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import { salvarUsuario } from '../services/userStorage';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    salvarUsuario({ nome, email });
    setNome('');
    setEmail('');
  };

  return (
    <Stack spacing={2} mt={2}>
      <TextField label="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button variant="contained" onClick={handleSubmit}>
        Cadastrar
      </Button>
    </Stack>
  );
}

export default Cadastro;
