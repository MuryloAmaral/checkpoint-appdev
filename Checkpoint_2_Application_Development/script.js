// Mostra os atores e atrizes na tela
function mostrarAtores(lista) {
    const galeria = document.querySelector(".galeria");
    galeria.innerHTML = "";

    lista.forEach((ator) => {
        galeria.innerHTML += `
            <div class="card">
                <img src="${ator.foto}" alt="Foto de ${ator.nome}" onerror="this.onerror=null; this.src='sem-foto.svg'">
                <div class="informacoes">
                    <h2>${ator.nome}</h2>
                    <p><strong>País:</strong> ${ator.pais}</p>
                    <p><strong>Nascimento:</strong> ${ator.nascimento}</p>
                </div>
            </div>
        `;
    });

    document.getElementById("quantidade").innerText = lista.length + " resultado(s) encontrado(s)";

    if (lista.length === 0) {
        galeria.innerHTML = "<p class='sem-resultado'>Nenhum ator ou atriz encontrado.</p>";
    }
}

// Filtra pelo nome conforme o usuário digita
function filtrarAtores() {
    const texto = document.getElementById("busca").value.toLowerCase();

    const resultado = atores.filter((ator) =>
        ator.nome.toLowerCase().includes(texto)
    );

    mostrarAtores(resultado);
}

// Mostra todos ao abrir o site
mostrarAtores(atores);
