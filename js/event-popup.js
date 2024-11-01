// JavaScript Document

window.onload = function(){
	
	const shortCutBtn = document.querySelectorAll('a.view');
	const closeBtn = document.querySelectorAll('button.closed')
	const popupBox = document.querySelectorAll('div.popupBox');
	const popupBg = document.querySelectorAll('div.popupBg');
	console.log(shortCutBtn);
	
	shortCutBtn.forEach(function(currentValue, currentIndex, listObj){
		currentValue.addEventListener('click',function(){
			popupBox[currentIndex].style.cssText = 'display: block;'
			popupBg[currentIndex].style.cssText = 'display: block;'
		});
	});
	closeBtn.forEach(function(currentValue, currentIndex, listObj){
		currentValue.addEventListener('click',function(){
			popupBox[currentIndex].style.cssText = 'display: none;'
			popupBg[currentIndex].style.cssText = 'display: none;'
		});
	});
	popupBg.forEach(function(currentValue, currentIndex, listObj){
		currentValue.addEventListener('click',function(){
			popupBox[currentIndex].style.cssText = 'display: none;'
			popupBg[currentIndex].style.cssText = 'display: none;'
		});
	});
	

}
