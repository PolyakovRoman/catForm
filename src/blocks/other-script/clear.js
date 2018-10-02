/* функция очищает поля */
function clearCatForm(formObject) {
    $(formObject).find("input[type=\"text\"], input[type=\"password\"], textarea").val("");
}