function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        alert("Login correcto");
        window.location.href = "tags.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

function mostrarContenido() {
    const opcion = document.querySelector('input[name="opcion"]:checked');

    if (opcion) {
        document.getElementById("contenido").style.display = "block";
    }
}

function activarBoton() {
    const check1 = document.getElementById("check1").checked;
    const check2 = document.getElementById("check2").checked;

    document.getElementById("btnCheck").disabled = !(check1 && check2);
}

function cargarPaises() {
    const paises = {
        Mexico: ["Nuevo León", "Coahuila", "Tamaulipas"],
        USA: ["Texas", "California", "Washington"]
    };

    const selectPais = document.getElementById("pais");
    const selectRegion = document.getElementById("region");

    selectPais.innerHTML = "<option>Selecciona país</option>";

    for (let pais in paises) {
        let option = document.createElement("option");
        option.value = pais;
        option.text = pais;
        selectPais.appendChild(option);
    }

    selectPais.addEventListener("change", function () {
        selectRegion.innerHTML = "";

        paises[this.value].forEach(region => {
            let option = document.createElement("option");
            option.text = region;
            selectRegion.appendChild(option);
        });
    });
}

window.onload = cargarPaises;