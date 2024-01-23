const figure = document.getElementById('figure');
const button = document.querySelector('button');
const codeBox = document.getElementById('get-code')
const topLeftRadius = document.getElementById('top-left')
const topRightRadius = document.getElementById('top-right')
const bottomLeftRadius = document.getElementById('bottom-left')
const bottomRightRadius = document.getElementById('bottom-right')
const copiedMsg = document.getElementById('copy-success')


topLeftRadius.addEventListener('input', () => {
    figure.style.borderTopLeftRadius=`${topLeftRadius.value}px`
})

topRightRadius.addEventListener('input', () => {
    figure.style.borderTopRightRadius=`${topRightRadius.value}px`
})

bottomLeftRadius.addEventListener('input', () => {
    figure.style.borderBottomLeftRadius=`${bottomLeftRadius.value}px`
})

bottomRightRadius.addEventListener('input', () => {
    figure.style.borderBottomRightRadius=`${bottomRightRadius.value}px`
})

button.addEventListener('click', () => {
    const code = getComputedStyle(figure).borderRadius
    codeBox.innerText = `border-radius:${code};`

    const copyCode = () => {
        navigator.clipboard.writeText(`border-radius: ${code};`)
        // "code has been copied" message was created using setTimeout(). Maybe it  would be better to use Promises."
        setTimeout(() => {
            copiedMsg.style.display="block"
        },200,
        setTimeout(() => {
            copiedMsg.style.display="none"
        },150))
    
    }
    copyCode()
})

    
    
   