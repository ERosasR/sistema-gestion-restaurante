// Arreglo para almacenar los platos seleccionados en el pedido
let pedidoActual = [];

function agregarAlPedido(nombrePlato, precioPlato) {
    // Añadimos el plato como objeto al arreglo
    pedidoActual.push({ nombre: nombrePlato, precio: precioPlato });
    actualizarVistaPedido();
}

function actualizarVistaPedido() {
    const listaPedido = document.getElementById('lista-pedido');
    const totalPagar = document.getElementById('total-pagar');
    
    // Limpiamos la lista visual antes de renderizar de nuevo
    listaPedido.innerHTML = '';
    
    let sumaTotal = 0;

    pedidoActual.forEach((item, index) => {
        sumaTotal += item.precio;

        const li = document.createElement('li');
        li.innerHTML = `
            ${item.nombre} - S/ ${item.precio.toFixed(2)}
            <button class="btn-danger" style="padding: 2px 6px; font-size: 12px;" onclick="eliminarItem(${index})">X</button>
        `;
        listaPedido.appendChild(li);
    });

    totalPagar.textContent = sumaTotal.toFixed(2);
}

function eliminarItem(index) {
    // Eliminamos el elemento del arreglo según su posición
    pedidoActual.splice(index, 1);
    actualizarVistaPedido();
}

function procesarPago() {
    if (pedidoActual.length === 0) {
        alert("El pedido está vacío. Seleccione al menos un plato típico.");
        return;
    }

    alert("¡Pedido enviado a cocina de Huanchaco/Trujillo con éxito! Total a cobrar impreso en ticket.");
    
    // Limpiamos el pedido después de cobrar
    pedidoActual = [];
    actualizarVistaPedido();
}