(function() {


    // const toKebabCase = str =>
    // str &&
    // str
    //     .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    //     .map(x => x.toLowerCase())
    //     .join('-');

    // console.log(toKebabCase('camelCase'));
    // console.log(toKebabCase('some text'));
    // console.log(toKebabCase('some-mixed_string With spaces_underscores-and-hyphens'));
    // console.log(toKebabCase('AllThe-small Things'));
    // console.log(toKebabCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'));

    const input  = document.getElementById('input')
    const output = document.getElementById('output')
    const clear  = document.getElementById('clear-btn')
    const copy   = document.getElementById('copy-btn')

    clear.addEventListener('click', clearFunction)
    copy.addEventListener('click', copyToClipboard)

    //Clear Function
    function clearFunction() {
        input.value = ''
        output.value = ''
    }

    //Copy Function 
    function copyToClipboard() {
        output.select()
        output.setSelectionRange(0, 99999)
        document.execCommand("copy")
    }

})();


