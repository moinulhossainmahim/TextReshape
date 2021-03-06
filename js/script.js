(function() {

    const uppercaseInputText  =  document.getElementById('input-text')
    const uppercaseOutputText =  document.getElementById('output-text')
    const clearButton         = document.getElementById('clear-button')

    clearButton.addEventListener('click', clearInput)
    uppercaseInputText.addEventListener('input', showOutput)

    //Convert Text To Uppercase Function
    function showOutput(e) {
        uppercaseOutputText.innerHTML = e.target.value.toUpperCase()
    }

    //Clear Function
   

})();