/* функция возвращает значение полей и их name (если есть)*/
function fieldValueCatForm(formObject, fieldObject, this_each, valueAllArr) {
    /* если есть ID у элемента */

    if(typeof($(fieldObject).attr("id")) != "undefined" && $.trim($(fieldObject).attr("id")) != ""){

        var fieldId = $.trim($(fieldObject).attr("id"));

        if(typeof($("#" + fieldId).attr("data-name")) != "undefined" && $("#" + fieldId).attr("data-name") != false){

            var fieldName = $("#" + fieldId).attr("data-name");

            if($.trim(fieldName) != "" && typeof(fieldName) != "undefined"){

                return fieldArrayCatForm(valueAllArr, fieldName, this_each);

            }else{

                return fieldArrayCatForm(valueAllArr, false, this_each);

            }
        }else{

            if(typeof($("#" + fieldId).attr("placeholder")) != "undefined" && $("#" + fieldId).attr("placeholder") != false && $.trim($("#" + fieldId).attr("placeholder")) != ""){

                var fieldPlaceholder = $("#" + fieldId).attr("placeholder");
                return fieldArrayCatForm(valueAllArr, fieldPlaceholder, this_each);

            }else{

                if($(formObject).find("label[for = '"+ fieldId +"']").length > 0){

                    var fieldlabel = $(formObject).find("label[for = '"+ fieldId +"']").text();
                    return fieldArrayCatForm(valueAllArr, fieldlabel, this_each);

                }else{

                    return fieldArrayCatForm(valueAllArr, false, this_each);

                }

            }
        }

    }else{

        var name = $.trim($(fieldObject).attr("name"));

        /* если нет ID у элемента, проверяем по name */

        if(typeof(name != "undefined")){

            var fieldName = $.trim($(fieldObject).attr("data-name"));

            if($.trim(fieldName) != "" && typeof(fieldName) != "undefined"){

                return fieldArrayCatForm(valueAllArr, fieldName, this_each);


            }else{

                var fieldPlaceholder = $.trim($(fieldObject).attr("placeholder"));

                if($.trim(fieldPlaceholder) != "" && typeof(fieldPlaceholder) != "undefined"){

                    return fieldArrayCatForm(valueAllArr, fieldPlaceholder, this_each);

                }else{

                    return fieldArrayCatForm(valueAllArr, false, this_each);

                }

            }
        }else{

            return fieldArrayCatForm(valueAllArr, false, this_each);

        }

    }
}