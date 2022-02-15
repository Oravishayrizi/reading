		function hardtoggle(){
		var x = document.getElementById("btn_tip");
		if (x.style.visibility === "visible") {
		  x.style.visibility = "hidden";
		} else {
		  x.style.visibility = "visible";
		}
		}
	
	
		function selects(){  
                var ele=document.getElementsByName('pl');  
                for(var i=0; i<ele.length; i++){  
                    if(ele[i].type=='checkbox')  
                        ele[i].checked=true;  
                }  
            }  
        function deSelect(){  
                var ele=document.getElementsByName('pl');  
                for(var i=0; i<ele.length; i++){  
                    if(ele[i].type=='checkbox')  
                        ele[i].checked=false;  
                      
                }  
            }             
		function choosenikud() {
		var markedCheckbox = document.getElementsByName('pl');
		const checkedvar = [] ;
		for (var checkbox of markedCheckbox) {
		    if (checkbox.checked)
				checkedvar.push(checkbox.value);
		}
		return(checkedvar);
		}

		function images(rannum){
		document.getElementById("myImg").src = "letters/"+rannum+".png";
        document.getElementById("mytip").src = "words/"+rannum+".png";
		document.getElementById("mytip").style.visibility = "hidden";
		}

        function drawletter(){
		const nikudall = choosenikud()
		var x = document.getElementById("btn_tip");
		if (x.style.visibility === "visible") {
			rannum1 = Math.floor(Math.random() * 4) + 1;
		} else {
			rannum1 = Math.floor(Math.random() * 22) + 1;
		}
		rannum2 = nikudall[Math.floor(Math.random() * nikudall.length)];
		rannum = rannum1 + (rannum2-1)*22
		images(rannum)
		}
		
		function drawnikud(){
		const nikudall = choosenikud()
		x = document.getElementById("myImg").src.split(/letters\//).pop();
		rannum1 = parseInt(x) % 22;
		rannum2 = nikudall[Math.floor(Math.random() * nikudall.length)];
		rannum = rannum1 + (rannum2-1)*22
		images(rannum)
		}
		


	    function showtip(){
		var x = document.getElementById("mytip");
		if (x.style.visibility === "visible") {
		  x.style.visibility = "hidden";
		} else {
		  x.style.visibility = "visible";
		}
		}
/*		
		function findsource(){     /*For debugging /*
		x = document.getElementById("myImg").src.split(/letters\//).pop();
		x = x.replace(/\D/g, "");

		document.getElementById('theDiv').innerHTML = x;

		}

*/
