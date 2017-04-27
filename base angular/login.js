var ingresarAdmin = document.getElementById('signIn');

ingresarAdmin.addEventListener('click', function() {

    var email = document.getElementById('correo').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(
        function(s){
            console.log(s);
            firebase.database().ref('/adminMarioGrua/' + s.uid).once('value').then(function(snapshot) {
                if (snapshot.val() != null)
                    window.location.href = 'app';
                else {
                    alert('ESTE USUARIO NO ES ADMINISTRADOR DE WWW.MARIOGRUA.CL');
                    firebase.auth().signOut();
                }
            });
        },
        function(e) {
            console.log(e);
            alert('ESTE USUARIO NO EXISTE EN NUESTRA BASE DE DATOS, PONGA SE ENCONTACTO CON IZINAIT');
        }
    );
});
