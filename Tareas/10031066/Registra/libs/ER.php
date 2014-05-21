
<?php
class Es{
	function CP($cadena){
			//echo $cadena;
			$patron= "/^([0-9])([0-9])([0-9])([0-9])([0-9])$/";
			return preg_match($patron,$cadena);
	}
	
	function RFC($cadena){
		$patron = "/^([A-Z]{4})([0-9]{2})(1[0-2]|0[1-9])([0-3][0-9])([-])([A-Z0-9]{4})$/";
		return preg_match($patron,$cadena);
	}

	function password($cadena){
		$patron = "/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/";
		return preg_match($patron,$cadena);
	}
	
	function correo($cadena){
		$patron="/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/";
		
		return preg_match($patron,$cadena);
        
	}
}

class nodo{
    var $siguiente= array();
    var $valor= array();
    var $i=0;
    var $palabra;
    var $term=false;
    
	function termina($bool){
		$this->term=$bool;
	}
	
    function agregar($a,$b){
		$this->siguiente[$this->i]=$b;
		$this->valor[$this->i]=$a;
        $this->i++;
    }
    
    function avanza($word){
		//echo $word."<br/>";
        if(strlen($word)==0){
            if($this->term)
                return true;
            else
                return false;
        }else 
        for($j=0;$j<$this->i;$j++){
			//echo $j."  ".$this->i;
            if(substr($word,0,1)==$this->valor[$j]){
                return $this->siguiente[$j]->avanza(substr($word,1));
            }
        }
    }
}


?>