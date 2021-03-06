(function() {

    const uppercaseInputText  = document.getElementById('input-text')
    const uppercaseOutputText = document.getElementById('output-text')
    const clearButton         = document.getElementById('clear-button')
    const copyButton          = document.getElementById('copy-button')

    clearButton.addEventListener('click', clearInput)
    copyButton.addEventListener('click', copyToClipboard)
    uppercaseInputText.addEventListener('input', showOutput)

    //Convert Text To Uppercase Function
    function showOutput(e) {
        uppercaseOutputText.innerHTML = e.target.value.toUpperCase()
    }

    //Clear Function
    function clearInput() {
        uppercaseInputText.value = ''
        uppercaseOutputText.value = ''
    }

    //Copy Function 
    function copyToClipboard() {
        uppercaseOutputText.select()
        uppercaseOutputText.setSelectionRange(0, 99999)
        document.execCommand("copy")
    }

})();