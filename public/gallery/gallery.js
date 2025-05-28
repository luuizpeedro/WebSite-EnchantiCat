// Exemplo do fetch:
fetch("http://localhost:3000/api/images")
  .then((res) => res.json())
  .then((images) => createImageColumns(images))
  .catch(console.error);

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(
    ".album .responsive-container-block.bg"
  );

  fetch("http://localhost:3000/api/images")
    .then((res) => res.json())
    .then((images) => {
      container.innerHTML = ""; // limpa o container

      images.forEach((imgSrc) => {
        const img = document.createElement("img");
        img.src = `http://localhost:3000/pictures/${imgSrc}`;
        img.alt = imgSrc;
        img.classList.add("img");
        container.appendChild(img);
      });
    })
    .catch((err) => {
      console.error("Erro ao carregar imagens:", err);
      container.innerHTML = "<p>Erro ao carregar imagens.</p>";
    });
});
