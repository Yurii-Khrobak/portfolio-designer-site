const language = document.querySelector('.language')
const languageSvg = document.querySelector('.language-svg')

languageSvg.addEventListener('click', () => {
	if (body.classList.contains('language-svg active-eng')) {
		form.classList.add('language-svg active-ru')
	}
})
