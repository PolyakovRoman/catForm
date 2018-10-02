/* функция проверяет повторные значения у одного name, то бишь является ли он массивом, и возвращает объект поля */
function fieldArrayCatForm(valueAllArr, valueName, this_each) {

    var currentValue = [];

    if(typeof(valueAllArr) == "object"){

        if(typeof(valueAllArr.value) != "undefined" && valueAllArr.value.length > 1){

            currentValue = valueAllArr.value;
            currentValue.push(this_each.value);

        }else{

            currentValue.push(valueAllArr.value, this_each.value);

        }

        if(typeof(valueName) != "undefined" && $.trim(valueName) != "" && valueName != false){

            return {"title":valueName, "value":currentValue};

        }else{

            return currentValue;

        }

    }else{

        if(typeof(this_each) != "undefined"){

            if(typeof(valueAllArr) != "undefined"){

                if(valueAllArr.length > 0){

                    if(valueAllArr.length > 1){

                        currentValue = valueAllArr;
                        currentValue.push(this_each.value);

                    }else{

                        currentValue.push(valueAllArr, this_each.value);

                    }

                    if(typeof(valueName) != "undefined" && $.trim(valueName) != "" && valueName != false){

                        return {"title":valueName, "value":currentValue};

                    }else{

                        return currentValue;

                    }

                }else{

                    if(typeof(valueName) != "undefined" && $.trim(valueName) != "" && valueName != false){

                        return {"title":valueName, "value":this_each.value};

                    }else {

                        return this_each.value;

                    }

                }

            }else{

                if(typeof(valueName) != "undefined" && $.trim(valueName) != "" && valueName != false){

                    return {"title":valueName, "value":this_each.value};

                }else {

                    return this_each.value;

                }

            }

        }

    }
}