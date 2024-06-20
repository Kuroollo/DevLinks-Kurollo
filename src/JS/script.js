function apertou() {
    const body = document.querySelector(".body")
    const sol = document.querySelector(".bi-brightness-high-fill")
    const lua = document.querySelector(".bi-moon-fill")

    // MUDANÇA DE TEMA
    body.classList.toggle('claro')

    // MUDANÇA DE ICONE DO SOL PARA ICONE DA LUA
    lua.classList.toggle('esconder')
    sol.classList.toggle('esconder')
}