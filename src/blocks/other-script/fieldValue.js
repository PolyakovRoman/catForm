/* функция возвращает значение полей и их name (если есть)*/
function fieldValueCatForm(formObject, fieldObject, this_each, valueAllArr) {
    /* если есть ID у элемента */

    if(typeof($(fieldObject).attr("id")) != "undefined" && $.trim($(fieldObject).attr("id")) != ""){

        var idName = $.trim($(fieldObject).attr("id"));

        if(typeof($("#" + idName).attr("data-name")) != "undefined" && $("#" + idName).attr("data-name") != false){

            var valueName = $("#" + idName).attr("data-name");

            if($.trim(valueName) != "" && typeof(valueName) != "undefined"){

                return fieldArrayCatForm(valueAllArr, valueName, this_each);

            }else{

                return fieldArrayCatForm(valueAllArr, false, this_each);

            }
        }else{

            if(typeof($("#" + idName).attr("placeholder")) != "undefined" && $("#" + idName).attr("placeholder") != false && $.trim($("#" + idName).attr("placeholder")) != ""){

                var valueName = $("#" + idName).attr("placeholder");
                return fieldArrayCatForm(valueAllArr, valueName, this_each);

            }else{

                if($(formObject).find("label[for = '"+ idName +"']").length > 0){

                    var valueName = $(formObject).find("label[for = '"+ idName +"']").text();
                    return fieldArrayCatForm(valueAllArr, valueName, this_each);

                }else{

                    return fieldArrayCatForm(valueAllArr, false, this_each);

                }

            }
        }

    }else{

        var name = $.trim($(fieldObject).attr("name"));

        /* если нет ID у элемента, проверяем по name */

        if(typeof(name != "undefined")){

            var valueName = $.trim($(fieldObject).attr("data-name"));

            if($.trim(valueName) != "" && typeof(valueName) != "undefined"){

                return fieldArrayCatForm(valueAllArr, valueName, this_each);


            }else{

                valueName = $.trim($(fieldObject).attr("placeholder"));

                if($.trim(valueName) != "" && typeof(valueName) != "undefined"){

                    return fieldArrayCatForm(valueAllArr, valueName, this_each);

                }else{

                    return fieldArrayCatForm(valueAllArr, false, this_each);

                }

            }
        }else{

            return fieldArrayCatForm(valueAllArr, false, this_each);

        }

    }
}