
	if ( navigator.serviceWorker ) {
    	navigator.serviceWorker.register('sw.js');
	}

	function cargarPagina(){
		var divReloj=document.getElementById("reloj");
		//divReloj.style.display='none';	
		divReloj.classList.add('invisible')
	}

	function menuTabata(){
		console.log('tabota');
		var mnuTabata=document.getElementById("mnTabata");
		var mnuLibre=document.getElementById("mnLibre");
		var mnuPrincipal=document.getElementById("mnPrincipal");
		mnuLibre.classList.add('invisible');
		mnuTabata.classList.remove('invisible');
		mnuPrincipal.classList.add('invisible');
		var mnuPrincipal=document.getElementById("mnPrincipal");
	}
	function menuLibre() {
		console.log('libre');
		var mnuTabata=document.getElementById("mnTabata");
		var mnuLibre=document.getElementById("mnLibre");
		var mnuPrincipal=document.getElementById("mnPrincipal");
		mnuLibre.classList.remove('invisible');
		mnuTabata.classList.add('invisible');
		mnuPrincipal.classList.add('invisible');
	}
	function irMenu(){

		var mnuTabata=document.getElementById("mnTabata");
		var mnuLibre=document.getElementById("mnLibre");
		var mnuPrincipal=document.getElementById("mnPrincipal");
		mnuLibre.classList.add('invisible');
		mnuTabata.classList.add('invisible');
		mnuPrincipal.classList.remove('invisible');	
	}
	function agregar(){
		console.log('agregar click');
		var cboEjercicio=document.getElementById("cboEjercicio");
		var listaEjercicio=document.getElementById("listaEjercicio");
		var cadena='';
		cadena=listaEjercicio.innerHTML;
		if(!cadena.includes(cboEjercicio.value)){
			listaEjercicio.innerHTML=listaEjercicio.innerHTML + cboEjercicio.value +",";
		}else{
			alert('Ya agrego el ejercicio elegido');
		}
	}

	function comenzarLibre(){
		var divOcultar=document.getElementById('datos1');
		var divReloj=document.getElementById('relojEJ');
		var divReloj2=document.getElementById('reloj2EJ');
		var txtRepeticiones=document.getElementById('repeticionesEJ');
		var txtTiempo=document.getElementById('tiempoEj');
		var txtDescanso=document.getElementById('descansoEj');
		var lblSegundos=document.getElementById('lblSegundosEj');
		var aud=document.getElementById('audioReprod');
		var lista=document.getElementById('listaEjercicio');
		var spnTitulo=document.getElementById('tituloTiempoEJ');
	
		if(txtRepeticiones.value.length>0 && txtTiempo.value.length>0 && txtDescanso.value.length>0){
			//divOcultar.style.display='none';
			divOcultar.classList.add('invisible');
			//divReloj.style.display='block';
			//divReloj2.style.display='block';
			divReloj.classList.remove('invisible');
			divReloj2.classList.remove('invisible');
			var totalTiempo=txtTiempo.value;
			var serie=txtRepeticiones.value;
			var descanso=txtDescanso.value;
			var arreglo=lista.innerHTML.split(',');
			spnTitulo.classList.remove('invisible');
			lblSegundos.classList.remove('invisible');


				
			aud.style.display='block';
			aud.play();
			aud.style.display='none'
			var timeleft = totalTiempo;
			var bandera=true;
			var contador=1;	
			var ejercicios=0;

			console.log("timeleft",timeleft);

			console.log(arreglo.length-1);

			document.getElementById('tituloTiempoEJ').innerHTML="ENTRENAR / SERIE N&ordm;:" + contador + " / Ejer:" + arreglo[ejercicios] ;

			var downloadTimer = setInterval(function(){
				lblSegundos.innerHTML =  timeleft--;
				
				if(timeleft <= 0 && serie>0){
				console.log("bandera",bandera);
       				if (bandera ){
       					timeleft=descanso;
       					bandera=false;
       					ejercicios++;

       					if(ejercicios==arreglo.length-1){
	       					serie--;
	       					ejercicios=0;
	       					//contador=1;
	       					contador++;
	       				}
       					//console.log("bandera==0");

  						aud.style.display='block';
						aud.play();
						aud.style.display='none'
  						document.getElementById('tituloTiempoEJ').innerHTML="DESCANSO";
  						document.body.style.backgroundColor = "White";
       				}else{
       					
       					timeleft=totalTiempo;
       					bandera=true;
       					//console.log	("bandera==1");
       					document.getElementById('tituloTiempoEJ').innerHTML="ENTRENAR / SERIE N&ordm;:" + contador + " / Ejer:" + arreglo[ejercicios] ;
  						aud.style.display='block';
						aud.play();
						aud.style.display='none'
  						document.body.style.backgroundColor = "#BDB76B";
  						
       				}
       				
       				
       				if(serie==0){
       					clearInterval(downloadTimer);
       					//divOcultar.style.display='block';
		
						//divReloj.style.display='none';
						//divReloj2.style.display='none';
						divOcultar.classList.remove('invisible');
						divReloj.classList.add('invisible');
						divReloj2.classList.add('invisible');
						lblSegundos.classList.add('invisible');
						location.reload();
	       			}	

	       			console.log('serie',serie);
       			}
			},1000);
				
			
		}else{
			alert('Debe completar la repetición, tiempo y descanso. Revise!!!');
		}

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
		var spnTitulo=document.getElementById('tituloTiempo');
		

		if (txtSerie.value.length>0 && txtTiempo.value.length>0 && txtDescanso.value.length>0){

			//divOcultar.style.display='none';
			divOcultar.classList.add('invisible');
			
			//divReloj.style.display='block';
			//divReloj2.style.display='block';
			divReloj.classList.remove('invisible');
			divReloj2.classList.remove('invisible');
			spnTitulo.classList.remove('invisible');
			lblSegundos.classList.remove('invisible');
			var totalTiempo=txtTiempo.value;
			var serie=txtSerie.value;
			var descanso=txtDescanso.value;

				
				aud.style.display='block';
				aud.play();
				aud.style.display='none'
				var timeleft = totalTiempo;
				var bandera=true;
				var contador=1;
				var downloadTimer = setInterval(function(){

					
	     			lblSegundos.innerHTML =  timeleft--;
	     			if(timeleft <= 0 && serie>0){
	       				console.log("bandera",bandera);
	       				if (bandera){
	       					timeleft=descanso;
	       					bandera=false;
	       					serie--;
	       					console.log("bandera==0");

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
	  						aud.style.display='block';
							aud.play();
							aud.style.display='none'
	  						document.body.style.backgroundColor = "#BDB76B";
	       				}
	       				if(serie==0){
	       					clearInterval(downloadTimer);
	       					/*divOcultar.style.display='block';
			
							divReloj.style.display='none';
							divReloj2.style.display='none';
							*/
							divOcultar.classList.remove('invisible');
							divReloj.classList.add('invisible');
							divReloj2.classList.add('invisible');
							spnTitulo.classList.add('invisible');
							lblSegundos.classList.add('invisible');
							location.reload();
	       				}
	       				
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

	function limpiarLibre(){
		var txtRepeticiones=document.getElementById('repeticionesEJ');
		var txtTiempo=document.getElementById('tiempoEj');
		var txtDescanso=document.getElementById('descansoEj');
		txtRepeticiones.value="";
		txtTiempo.value="";
		txtDescanso.value="";
	}

	function limpiar(){
		var txtSerie=document.getElementById('serie');
		var txtTiempo=document.getElementById('tiempo');
		var txtDescanso=document.getElementById('descanso');

		txtSerie.value="";
		txtTiempo.value="";
		txtDescanso.value="";

	}