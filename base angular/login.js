var ingresarAdmin = document.getElementById('signIn');

ingresarAdmin.addEventListener('click', function() {

    var email = document.getElementById('correo').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(
        function(s){
            console.log(s);

                    window.location.href = 'app';


        },
        function(e) {
            console.log(e);
            alert('ESTE USUARIO NO EXISTE EN NUESTRA BASE DE DATOS, PONGA SE ENCONTACTO CON IZINAIT');
        }
    );
});

