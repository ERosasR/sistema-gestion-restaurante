document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que se recargue la página

    const usuarioInput = document.getElementById('usuario').value;
    const passwordInput = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    // Validación simulada de credenciales para el sistema de Trujillo
    if (usuarioInput === "admin" && passwordInput === "1234") {
        alert("¡Bienvenido al sistema, mozo / administrador!");
        // Redirige al panel principal del restaurante
        window.location.href = "index.html";
    } else {
        errorMsg.textContent = "Usuario o contraseña incorrectos. (Prueba admin / 1234)";
    }
});