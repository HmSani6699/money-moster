//get input flithe
function getInput(item) {
    const inputFlithe = document.getElementById(item + '-input');
    const inputValue = inputFlithe.value;
    const convertNum = parseInt(inputValue);
    return convertNum
}

//get calculta button add click heanler
document.getElementById('calculta').addEventListener('click', function () {
    var food = getInput('food');
    console.log(food)
})