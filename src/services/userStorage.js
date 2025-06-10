
export const salvarUsuario = (usuario) => {
  const dados = JSON.parse(localStorage.getItem('usuarios')) || [];
  dados.push(usuario);
  localStorage.setItem('usuarios', JSON.stringify(dados));
};

export const getUsuarios = () => {
  return JSON.parse(localStorage.getItem('usuarios')) || [];
};
