/* функция добавляет незаполненным обязательным полям класс, меняющий внешний вид */
function  addRequiredCatForm(required, formObject, requiredClass) {
    for (var i = 0; i < required.length; i++) {

        $(formObject).find("[name="+required[i]+"]").addClass(requiredClass);

    }
}