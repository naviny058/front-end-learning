function run() {
    const htmlBox = document.querySelector('#html').value
    const cssBox = document.querySelector('#css').value
    const jsBox = document.querySelector('#js').value
    const output = document.querySelector('.output')

    output.contentDocument.body.innerHTML = htmlBox + '<style>' + cssBox + '</style>'
    output.contentWindow.eval(jsBox)
}