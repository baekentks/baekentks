const pledgeLogo = document.querySelectorAll('div.logo')[0];
const pledgeText = document.querySelectorAll('div.text_wrap')[0];
const ceoWordText = document.querySelectorAll('p.ceotext');
const valuesBox = document.querySelectorAll('div.value');
var isDesk = window.matchMedia('(min-width: 1025px)').matches;
var isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)').matches;
var isMobile = window.matchMedia('(max-width: 767px)').matches;
console.log(isDesk,isTablet,isMobile);

window.addEventListener('scroll',function(){
	const st_pos = window.pageYOffset;
	const sh_pos = st_pos+window.innerHeight;
	const pledgeLogo_top = pledgeLogo.offsetTop;
	const ceoWordText_top = ceoWordText[0].parentNode.offsetTop;
	const valuesBox_top = valuesBox[0].offsetTop;
	console.log(sh_pos);
	console.log(ceoWordText[0].parentNode);
	console.log(ceoWordText_top);
	console.log(sh_pos-ceoWordText_top);

	if (sh_pos-pledgeLogo_top>600)
	{
		pledgeLogo.classList.add('fadein');
		setTimeout(function(){pledgeText.classList.add('fadein');},400);
	}
	if ( sh_pos-ceoWordText_top > 1300)
	{
		ceoWordText[1].classList.add('fadein');
		setTimeout(function(){ceoWordText[3].classList.add('fadein');},1000);
		setTimeout(function(){
			ceoWordText[0].classList.add('fadein');
			ceoWordText[2].classList.add('fadein');
		},2000);
	}
	if (sh_pos-valuesBox_top>200)
	{
		valuesBox[0].classList.add('fadein');
		setTimeout(function(){valuesBox[1].classList.add('fadein');},300);
		setTimeout(function(){valuesBox[2].classList.add('fadein');},600);
	}
});