const EMPTY = '—';

function actualizarBrief(input, exitId) {
    document.getElementById(exitId).textContent = input.value.trim() || EMPTY;
}

function armarMensaje({ client, projectType, price, context }) {
    const lines = [
        '¡Hola! Quiero solicitar un presupuesto.',
        '',
        `*Cliente:* ${client}`,
        `*Proyecto:* ${projectType} (desde ${price})`,
    ];
    if (context) lines.push(`*Contexto:* ${context}`);
    return lines.join('\n');
}

document.addEventListener('astro:page-load', () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const client = document.getElementById('client');

    // --- Brief en vivo ---
    form.querySelectorAll('input[name="projectType"]').forEach((radio) => {
        radio.addEventListener('change', () => {
            document.getElementById('project-brief').textContent = radio.value;
            const price = radio.closest('label').querySelector('.price');
            document.getElementById('price-brief').textContent = price.textContent;
        });
    });

    client.addEventListener('input', () => actualizarBrief(client, 'client-brief'));

    // --- Envío por WhatsApp ---
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!form.reportValidity()) return;

        const data = new FormData(form);
        const selected = form.querySelector('input[name="projectType"]:checked');

        const message = armarMensaje({
            client: String(data.get('client')).trim(),
            projectType: selected.value,
            price: selected.closest('label').querySelector('.price').textContent.trim(),
            context: String(data.get('context') ?? '').trim(),
        });

        const url = `https://wa.me/${form.dataset.whatsapp}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank', 'noopener');
    });
});
