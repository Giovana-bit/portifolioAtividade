function toggleMode(){
    const html = document.documentElement;
    html.classList.toggle("light");

    //alterar imagem perfil
    const img = document.querySelector("#profile img");

    //verificar classe light adicionada
    if (html.classList.contains("light")) {
        img.setAttribute("src", "./img/avatar2.png");
    } else{
        img.setAttribute("src", "./img/avatar1.png");
    }
}