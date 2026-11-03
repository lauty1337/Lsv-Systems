function actualizarBrief(inputId, exitId) {
    const input = document.getElementById(inputId)
    const exit = document.getElementById(exitId)
    exit.textContent = input.value || "—"
}
document.querySelectorAll('input[name="project-type"]').forEach(radio => {
    radio.addEventListener("change" , () => {
        const valor = radio.value
        document.getElementById("project-brief").textContent = valor
        const price = radio.closest("label").querySelector(".price")
        document.getElementById("price-brief").textContent = price.textContent
    })
})
document.getElementById("client").addEventListener("input" , () => {
    actualizarBrief("client", "client-brief")
})

document.getElementById("address").addEventListener("input" , () => {
    actualizarBrief("address", "contact-brief")
})

document.getElementById("context").addEventListener("input" , () => {
    actualizarBrief("context", "context-brief")
})
