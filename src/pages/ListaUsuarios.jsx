
import React, { useEffect, useState } from 'react';
import { getUsuarios } from '../services/userStorage';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    setUsuarios(getUsuarios());
  }, []);

  return (
    <Paper sx={{ mt: 2, overflowX: 'auto' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usuarios.map((u, i) => (
            <TableRow key={i}>
              <TableCell>{u.nome}</TableCell>
              <TableCell>{u.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default ListaUsuarios;
