// script.js

// Configuración de Firebase (debes configurar tu propia cuenta de Firebase)
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_DOMINIO.firebaseapp.com",
    databaseURL: "https://TU_DOMINIO.firebaseio.com",
    projectId: "TU_PROYECTO_ID",
    storageBucket: "TU_DOMINIO.appspot.com",
    messagingSenderId: "TU_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Referencia a la base de datos de Firebase
const db = firebase.firestore();

// Capturar el formulario de contacto
const contactForm = document.getElementById('contactForm');

// Escuchar el envío del formulario
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const nombre = contactForm['nombre'].value;
    const email = contactForm['email'].value;
    const mensaje = contactForm['mensaje'].value;

    // Guardar la consulta en la base de datos de Firebase
    db.collection('consultas').add({
        nombre: nombre,
        email: email,
        mensaje: mensaje
    })
    .then(function(docRef) {
        console.log('Consulta guardada con ID: ', docRef.id);
        alert('Consulta enviada correctamente');
        contactForm.reset();
    })
    .catch(function(error) {
        console.error('Error al guardar la consulta: ', error);
        alert('Hubo un error al enviar la consulta. Por favor, intenta nuevamente más tarde.');
    });
});
