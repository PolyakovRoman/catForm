$(document).ready(function(){

    $(".catForm button, .catForm input[type=\"button\"], .catForm input[type=\"submit\"]").on("click", function (e) {
        e.preventDefault();

        /* Создаем объект формы */
        var formObject = $(this).closest(".catForm");

        /* берем нужные атрибуты у формы */
        var action = $(formObject).attr("action");
        var method = $(formObject).attr("method");
        if($.trim(method).toUpperCase() != "GET" && $.trim(method).toUpperCase() != "POST"){
            method = "GET";
        }
        var requiredClass = $(formObject).attr("data-required-class");
        if(typeof(requiredClass) == "undefined" || $.trim(requiredClass) == ""){
            requiredClass = "catFrom--required";
        }
        var dataLoaderSelector = $(formObject).attr("data-loader-class");
        if(typeof(dataLoaderSelector) == "undefined" || $.trim(dataLoaderSelector) == ""){
            dataLoaderSelector = false;
        }
        var dataLoaderSelectorActivation = $(formObject).attr("data-loader-class-activation");
        if(typeof(dataLoaderSelectorActivation) == "undefined" || $.trim(dataLoaderSelectorActivation) == ""){
            dataLoaderSelectorActivation = false;
        }
        var dataButtonDeactivatingClass = $(formObject).attr("button-deactivating-class");
        if(typeof(dataButtonDeactivatingClass) == "undefined" || $.trim(dataButtonDeactivatingClass) == ""){
            dataButtonDeactivatingClass = false;
        }

        $(formObject).find("input, textarea").removeClass(requiredClass);

        var required = [];
        var dataAjax = {};

        /* Получение всех полей формы */
        var data = $(formObject).serializeArray();

        if(data.length > 0){

            /* Проверка имени формы */
            if(typeof($(formObject).attr("name")) != "undefined" || typeof($(formObject).attr("data-name")) != "undefined"){

                if(typeof($(formObject).attr("data-name")) != "undefined"){

                    dataAjax["form-name"] = $(formObject).attr("data-name");

                }else{
                    if(typeof($(formObject).attr("name")) != "undefined"){

                        dataAjax["form-name"] = $(formObject).attr("name");

                    }
                }

                /* Прогонка всех полей по циклу */
                var i = 0;
                $.each(data,function(){

                    /* Объект элемента формы */
                    var fieldObject = $(formObject).find("[name=" + this.name + "]");

                    /* Проверка обязательных полей */

                    if($(fieldObject).attr("data-required") == "true" && typeof($(fieldObject).attr("data-required")) != "undefined"){
                        if($.trim(this.value) != ""){

                            if(dataAjax[this.name] != ""){

                                dataAjax[this.name] = fieldValueCatForm(formObject, fieldObject, this, dataAjax[this.name]);

                            }else{

                                dataAjax[this.name] = fieldValueCatForm(formObject, fieldObject, this);

                            }

                        }else{

                            required[i] = this.name;
                            i++;

                        }
                    }else{

                        if(typeof(dataAjax[this.name]) != "undefined"){

                            dataAjax[this.name] = fieldValueCatForm(formObject, fieldObject, this, dataAjax[this.name]);

                        }else{

                            dataAjax[this.name] = fieldValueCatForm(formObject, fieldObject, this);

                        }

                    }
                });

                /* Если есть обязательные незаполненные поля */
                if(required.length > 0){

                    addRequiredCatForm(required, formObject, requiredClass);

                }else{

                    /* Скрываем кнопку, что бы небыло поторного нажатия */
                    executionCatForm(true, formObject, dataLoaderSelector, dataLoaderSelectorActivation, dataButtonDeactivatingClass);

                    /* Отправляем ajax */
                    $.ajax({
                        url: action,
                        type: method,
                        data: dataAjax,
                        cache: false,
                        success: function(response)
                        {
                            if(typeof(response.result) != "undefined" && (response.result == "ok" || response.result == "error")){

                                if(response.result != "error"){

                                    openProcessingResultCatForm(response.message, "ok");
                                    clearCatForm(formObject);

                                }else{
                                    openProcessingResultCatForm(response.message, "error");
                                }

                                executionCatForm(false, formObject, dataLoaderSelector, dataLoaderSelectorActivation, dataButtonDeactivatingClass);

                            }else{
                                if(isJsonCatForm(response)){

                                    var ajax_response = $.parseJSON(response);

                                    if(typeof(ajax_response.result) != "undefined" && (ajax_response.result == "ok" || ajax_response.result == "error")){

                                        if(ajax_response.result != "error"){

                                            openProcessingResultCatForm(ajax_response.message, "ok");
                                            clearCatForm(formObject);

                                        }else{

                                            openProcessingResultCatForm(ajax_response.message, "error");

                                        }

                                        executionCatForm(false, formObject, dataLoaderSelector, dataLoaderSelectorActivation, dataButtonDeactivatingClass);

                                    }else{

                                        openProcessingResultCatForm("Сервер не вернул верный ответ", "error");

                                        executionCatForm(false, formObject, dataLoaderSelector, dataLoaderSelectorActivation, dataButtonDeactivatingClass);

                                    }
                                }else{

                                    openProcessingResultCatForm("Сервер не вернул верный ответ", "error");

                                    executionCatForm(false, formObject, dataLoaderSelector, dataLoaderSelectorActivation, dataButtonDeactivatingClass);

                                }
                            }
                        },
                        error: function () {

                            executionCatForm(false, formObject, dataLoaderSelector, dataLoaderSelectorActivation, dataButtonDeactivatingClass);

                            openProcessingResultCatForm("Произошла ошибка отправки формы", "error");

                        }
                    });

                }
            }else{

                openProcessingResultCatForm("Не задано имя формы", "error");

            }

        }else{

            openProcessingResultCatForm("Нет полей в форме", "error");

        }

    });
});