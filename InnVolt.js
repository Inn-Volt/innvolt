    document.querySelector('.menu-toggle').addEventListener('click', function() {
        const navMenu = document.querySelector('nav ul');
        navMenu.classList.toggle('active');
    });

    function validarFormulario() {
        // Obtener los valores de los campos
        var nombre = document.getElementById("nombre").value;
        var email = document.getElementById("email").value;
        var mensaje = document.getElementById("mensaje").value;

        // Validar que no estén vacíos
        if (nombre == "" || email == "" || mensaje == "") {
            alert("Por favor, complete todos los campos.");
            return false; // Evita que el formulario se envíe
        }

        // Validar el formato del correo electrónico
        var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!regexEmail.test(email)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            return false; // Evita que el formulario se envíe
        }

        // Si todo está bien, permitir que se envíe el formulario
        alert("Formulario enviado con éxito.");
        return true;
    }