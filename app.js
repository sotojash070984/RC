
	if ( navigator.serviceWorker ) {
    	navigator.serviceWorker.register('sw.js');
	}

	function cargarPagina(){
		var divReloj=document.getElementById("reloj");
		divReloj.style.display='none';	
	}
	
	function comenzar(){

		var divOcultar=document.getElementById('datos');
		var divReloj=document.getElementById("reloj");
		var divReloj2=document.getElementById("reloj2");
		var txtSerie=document.getElementById('serie');
		var txtTiempo=document.getElementById('tiempo');
		var txtDescanso=document.getElementById('descanso');
		var lblSegundos=document.getElementById('lblSegundos');
		var aud=document.getElementById('audioReprod');

		if (txtSerie.value.length>0 && txtTiempo.value.length>0 && txtDescanso.value.length>0){

			divOcultar.style.display='none';
			
			divReloj.style.display='block';
			divReloj2.style.display='block';
			var totalTiempo=txtTiempo.value;
			var serie=txtSerie.value;
			var descanso=txtDescanso.value;

				
				aud.style.display='block';
				aud.play();
				aud.style.display='none'
				//var snd1 = new Audio("coche_8.mp3");
				//snd1.load();
	  			//snd1.play();	
		
			
			

				var timeleft = totalTiempo;
				var bandera=true;
				var contador=1;
				var downloadTimer = setInterval(function(){

					
	     			document.getElementById("lblSegundos").innerHTML =  timeleft--;
	     			//console.log("timeleft",timeleft);
	     			//console.log("serie%",serie);
	     			//console.log("descanso",descanso);
	     			if(timeleft <= 0 && serie>0){
	       				console.log("bandera",bandera);
	       				if (bandera){
	       					timeleft=descanso;
	       					bandera=false;
	       					serie--;
	       					console.log("bandera==0");

	       					//var snd = new Audio("coche_8.mp3");
	       					//snd.load();
	  						//snd.play();
	  						aud.style.display='block';
							aud.play();
							aud.style.display='none'
	  						document.getElementById('tituloTiempo').innerHTML="DESCANSO";
	  						document.body.style.backgroundColor = "White";
	       				}else{
	       					contador++;
	       					timeleft=totalTiempo;
	       					bandera=true;
	       					console.log	("bandera==1");
	       					document.getElementById('tituloTiempo').innerHTML="ENTRENAR / SERIE N&ordm;:" + contador ;
	       					//var snd = new Audio("coche_8.mp3");
	       					//snd.load();
	  						//snd.play();
	  						aud.style.display='block';
							aud.play();
							aud.style.display='none'
	  						document.body.style.backgroundColor = "#BDB76B";
	       				}
	       				if(serie==0){
	       					clearInterval(downloadTimer);
	       					divOcultar.style.display='block';
			
							divReloj.style.display='none';
							divReloj2.style.display='none';
							location.reload();
	       				}
	       				/*contador++;
	       				
	       				if(contador%2==0){
	       					bandera=0;
	       					timeleft=descanso;
	       					serie--;
	       				}else{
	       					
	       					bandera=1;
	       					timeleft=totalTiempo;
	       				}

	       				//if (bandera==0){
	       					       				//}


	       				
	       				console.log("serie",serie);
	       				console.log	("intervalo",timeleft);
	       				console.log	('contador',contador);
	       				*/

	     			}
				},1000);
				
	
		}else{
			alert('Debe completar la serie, tiempo y descanso. Revise!!!');
		}
		



	}

var totalTiempo=10;
	function actualizarReloj(){
		
		var lblSegundos=document.getElementById('lblSegundos');
		/*if(totalTiempo==0){
			alert('Final');
		}else{
			lblSegundos.innerHTML=totalTiempo;
			totalTiempo-=1;
			setTimeout(actualizarReloj(),1000);
			
		}
		*/
		console.log(totalTiempo)
		lblSegundos.innerHTML=totalTiempo
		totalTiempo-=1;
		if(totalTiempo>0){
			var contador=setInterval(actualizarReloj(),1000);
			//setTimeout(actualizarReloj(totalTiempo,3,2),1000);
		}

	}

	function limpiar(){
		var txtSerie=document.getElementById('serie');
		var txtTiempo=document.getElementById('tiempo');
		var txtDescanso=document.getElementById('descanso');

		txtSerie.value="";
		txtTiempo.value="";
		txtDescanso.value="";

	}