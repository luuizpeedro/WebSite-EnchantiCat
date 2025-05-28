const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Caminho da pasta com imagens
const picturesDir = path.join(__dirname, "pictures");

// Servir a pasta public inteira (incluindo /gallery)
app.use(express.static(path.join(__dirname, "public")));

// Servir as imagens pelo endpoint /pictures
app.use("/pictures", express.static(picturesDir));

// API para listar imagens
app.get("/api/images", (req, res) => {
  fs.readdir(picturesDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao ler pasta de imagens" });
    }
    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|gif|svg)$/i.test(file)
    );
    res.json(imageFiles);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
