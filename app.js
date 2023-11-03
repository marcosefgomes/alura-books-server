const express = require("express");
const rotaLivro = require("./rotas/livro");

const app = express();

app.use("/livros", rotaLivro);

const port = 8000;

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
