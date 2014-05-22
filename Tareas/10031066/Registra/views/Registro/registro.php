<?php
	    include ('../../libs/adodb5/adodb-pager.inc.php');
	    include ('../../libs/adodb5/adodb.inc.php');
	    include ('../../models/Conexion.php');
	    include ('../../models/Modelo.php');
		include ('../../models/Registro.php');
	    include ('../../libs/ER.php');
	    include ('../layouts/header.php');
		
?>
<pre>

<?php
	$correo=true;
	$pass=true;
	$cp=true;
	$rfc=true;
	if (isset($_POST["email"])) {
		//echo "HOLA";
		$es = new Es();
		$correo = $es->correo($_POST["email"]);
		$pass = $es->password($_POST["password"]);
		$cp = $es->CP($_POST["cp"]);
		$rfc = $es->RFC($_POST["rfc"]);
		$Registra = new Registro();
		
		if($correo && $pass && $cp && $rfc){
			$Registra->email = $_POST["email"];
			$Registra->username = $_POST["username"];
			$Registra->password = $_POST["password"];
			$Registra->foto = $_POST["foto"];
			$Registra->rfc = $_POST["rfc"];
			$Registra->cp = $_POST["cp"];
			
			
			$Registra->inserta($Registra->get_atributos());
			echo "se ha Agregado nuevo registro a la base de datos";
		}
	}
?>	


<form action="" method="POST">
	<label for="profundidad">Correo</label>
		<input type="text" name="email" id="email" value=<?php if(isset($_POST["email"])){ echo $_POST["email"]; }?> ><?php if(!$correo){echo "No es un email aceptable";} ?>
		
	<label for="sube">Nombre De usuario</label>
		<input type="text" name="username" id="username" value=<?php if(isset($_POST["username"])){ echo $_POST["username"]; }?>>
	<label for="baja">Contraseña</label>
		<input type="text" name="password" id="password" value=<?php if(isset($_POST["password"])){ echo $_POST["password"]; }?>><?php if(!$pass){echo "No es una contraseña aceptable";} ?>
		
	<label for="dias">Foto</label>
		<input type="text" name="foto" id="foto">
	<label for="dias">RFC</label>
		<input type="text" name="rfc" id="rfc" value=<?php if(isset($_POST["rfc"])){ echo $_POST["rfc"]; }?>><?php if(!$rfc){echo "No es un RFC aceptable";} ?>
	
	<label for="dias">CP</label>
		<input type="text" name="cp" id="cp" value=<?php if(isset($_POST["cp"])){ echo $_POST["cp"]; }?>><?php if(!$cp){echo "No es un CP aceptable";} ?>

	<input type="submit" value="insertar" >
</form>

</pre>

<?php
  include ('../layouts/footer.php');
?>
