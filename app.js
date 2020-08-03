//classlist  - display all classes
//contains - check classlist for a named class
//adds
//remove
//toggle

const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function() {
    // console.log(links.classList)
    // console.log(links.classList.contains('links'))

    // if(links.classList.contains('links')) {
    //     links.classList.remove('show-links')
    // } else {
    //     links.classList.add('show-links')
    // }
    links.classList.toggle('show-links')
})