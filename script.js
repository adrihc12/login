let emailValido = "root@cbtis258.edu.mx";
let passValido = "admin123";

const chequelogin = (event) => {
    event.preventDefault();

    const email = document.querySelector("email").value;
    const password = document.querySelector("password").value; // gido de "passaword" a "password"
    const mensaje = document.getElementById("Loginmensaje");

    if (email === emailValido && password === passValido) {
        mensaje.textContent = "Inicio de sesión correcto"; // Corregido "incio" a "Inicio"
        mensaje.style.color = "green";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);
    } else {
        mensaje.textContent = "[Email] o contraseña incorrecta"; // Corregido "email" a "Email"
        mensaje.style.color = "red";
    }
};
