function validarCorreoYTelefono(correo, telefono) { 
     const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
     if (!regexCorreo.test(correo)) { 
        return { valido: false, 
            mensaje: 'Correo electrónico inválido.' }; } 

     const regexTelefono = /^\d{10}$/;
     if (!regexTelefono.test(telefono)) { 
        return { valido: false, mensaje: 
            'Número de teléfono inválido. Debe tener 10 dígitos.' }; } 
             return { valido: true, 
                mensaje: 'Correo y número de teléfono válidos.' }; }

const imagenes = document.querySelectorAll('.imagenes img');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 0;
                
function mostrarImagen(nuevaIndex) {
   imagenes[index].classList.remove('mostrar');
   index = (nuevaIndex + imagenes.length) % imagenes.length;
   imagenes[index].classList.add('mostrar');
}
                
prev.addEventListener('click', () => {
   mostrarImagen(index - 1);
});
                
next.addEventListener('click', () => {
   mostrarImagen(index + 1);
});
                
mostrarImagen(index)

