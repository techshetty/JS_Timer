tmr=document.getElementById('timer_main');
	var pretimer = document.getElementById('preTimer');
	var n;
	function tStart(){n = parseInt(document.getElementById('cdown').value);pretimer.style.display="none";
	tmr.style.display = "block";
	uTime()}
	function uTime() {if(n>=0){
		setTimeout(function(){tmr.innerHTML=n;n=n-1;uTime()},1000)
	}
	}
