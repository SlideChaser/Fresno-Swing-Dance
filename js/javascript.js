let 	showDropdown = false;
const dropdown		 = document.getElementById('nav_dropdown');

document.getElementById('menu_bars').addEventListener('click', ()=>{

	if(!showDropdown){

		dropdown.style.display = 'block';
		showDropdown 					 = true;

	}else{
		
		dropdown.style.display = 'none';
		showDropdown 					 = false;
	}
});

window.addEventListener('resize', ()=>{

	dropdown.style.display	= 'none'
	showDropdown 						= false;
});