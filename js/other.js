function getInputFieldValueId(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value ;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = ''
    return inputFieldValue

}


function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString= element.innerText;
    const value = parseFloat(elementValueString)

    return value
}

function setElementValueById(setId, newValue){
    const setValue = document.getElementById(setId);
    setValue.innerText = newValue

}
