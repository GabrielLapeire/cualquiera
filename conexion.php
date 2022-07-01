<?php
$user = "root";
$pass = "";
$db = "test_db";
$server = "localhost";
$conexion = new mysqli($server, $user, $pass, $db);
$sql = "select * from socios";
$consulta = mysqli_query($conexion, $sql);
$res = mysqli_fetch_array($consulta);

//if (mysqli_error($conexion)) {
//    echo "error en conexion";
//} else {
//    echo "ok"."<br>";
//}

$dni = $_POST['dni'];
$sql1 = "select * from socios where dni ='{$dni}'";
$consulta1 = mysqli_query($conexion, $sql1);
$res1 = mysqli_fetch_array($consulta1);

if ((!empty($res1))) {
    $apellido = $res1[0];
    $nombre = $res1[1];
    $edad = $res1[2];
    $facturas = $res1[3];
    echo "<strong>Apellido: </strong>".$apellido."<br>";
    echo "<strong>Nombre: </strong>".$nombre."<br>";
    echo "<strong>Edad: </strong>".$edad."<br>";
    echo "<strong>Facturas: </strong>".$facturas."<br>";
    echo "<strong>DNI: </strong>".$dni."<br>";
} else {
    echo "No existe un socio con este DNI";
}
?>