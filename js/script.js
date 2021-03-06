(function() {

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


