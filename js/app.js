// when you expand the bio, show the rest of the text and add bottom margin to the image so that the next section doesn't overlap
function viewMore() {
	document.getElementById('viewMore').style.cssText = 'display: none;';
	document.getElementById('overflowText1').style.cssText = 'display: block;';
	document.getElementById('overflowText2').style.cssText = 'display: block;';
	document.getElementById('overflowText3').style.cssText = 'display: block;';
	document.getElementById('viewLess').style.cssText = 'display: block;';
	
	const mediaQuerySmall = window.matchMedia('(min-width: 768px)');
	const mediaQueryMedium = window.matchMedia('(min-width: 830px)');
	const mediaQueryLarge = window.matchMedia('(min-width: 1000px)');
	const mediaQueryXLarge = window.matchMedia('(min-width: 1300px)');
}

// when you collapse the bio, stop showing the extra text and remove the added bottom margin from the image
function viewLess() {
	document.getElementById('viewLess').style.cssText = 'display: none;';
	document.getElementById('overflowText1').style.cssText = 'display: none;';
	document.getElementById('overflowText2').style.cssText = 'display: none;';
	document.getElementById('overflowText3').style.cssText = 'display: none;';
	document.getElementById('viewMore').style.cssText = 'display: block;';
	document.getElementById('me').style.cssText = ''
}