function toggleMode() {
    const html = document.documentElement

//  if(html.classList.contains('light')) {
//     html.classList.remove('light')
// } else {
//   html.classList.add('light')
// }

html.classList.toggle('light')

//pegar a tag img

const img = document.querySelector ('#profile img')

//substituir imagem
if (html.classList.contains('light')){
//se tiver light mode, adicionar imagem light
    img.setAttribute('src', './assets/1.png')

} else {
// setiver sem light mode, manter imagem normal
    img.setAttribute('src', './assets/2.png')
}

}