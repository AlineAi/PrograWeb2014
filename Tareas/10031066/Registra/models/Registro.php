<?php
class Registro extends Modelo{
	public $nombre_tabla = 'usuario';
    public $pk = 'idusuario';
	
	public $atributos = array(
        'email'=>array(),
        'username'=>array(),
        'password'=>array(),
        'foto'=>array(),
		'rfc'=>array(),
		'cp'=>array()
    );
	function ER(){
        parent::Modelo();
    }
	public $errores = array();
	
	var $email;
    var $username;
    var $password;
    var $foto;
	var $rfc;
	var $cp;
	
	public function get_atributos(){
        $rs = array();
        foreach ($this->atributos as $key => $value) {
            $rs[$key]=$this->$key;
        }
        return $rs;
    }
	
}

?>