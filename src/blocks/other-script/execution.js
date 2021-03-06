/* функция, вополняемая во время отправки формы ajax'ом */
function executionCatForm(start, formObject, selector, selectorActivation, buttonDeactivatingClass) {

    var objectButton;

    objectButton = $(formObject).find("button, input[type=\"button\"], input[type=\"submit\"]");

    if(typeof(objectButton) != "undefined"){

        if(start){

            /* запуск лоадера */

            if(buttonDeactivatingClass){

                $(objectButton).addClass(buttonDeactivatingClass)

            }else{

                $(objectButton).hide();

            }

            if(selector){

                if(selectorActivation){

                    $(formObject).find($("." + selector)).addClass(selectorActivation);

                }else{

                    $(formObject).find($("." + selector)).show();

                }

            }else{

                if(buttonDeactivatingClass){

                    $(objectButton).addClass(buttonDeactivatingClass)

                }else{

                    $(objectButton).hide();

                }

                $(formObject).append("<div class=\"catFrom__loader catFrom__loader--black\"><?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?><svg xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.0\" viewBox=\"0 0 128 128\" xml:space=\"preserve\"><g><path d=\"M78.75 16.18V1.56a64.1 64.1 0 0 1 47.7 47.7H111.8a49.98 49.98 0 0 0-33.07-33.08zM16.43 49.25H1.8a64.1 64.1 0 0 1 47.7-47.7V16.2a49.98 49.98 0 0 0-33.07 33.07zm33.07 62.32v14.62A64.1 64.1 0 0 1 1.8 78.5h14.63a49.98 49.98 0 0 0 33.07 33.07zm62.32-33.07h14.62a64.1 64.1 0 0 1-47.7 47.7v-14.63a49.98 49.98 0 0 0 33.08-33.07z\" fill-opacity=\"1\"/><animateTransform attributeName=\"transform\" type=\"rotate\" from=\"-90 64 64\" to=\"0 64 64\" dur=\"400ms\" repeatCount=\"indefinite\"></animateTransform></g></svg></div>");

            }

        }else{

            /* остановка лоадера */

            if(buttonDeactivatingClass){

                $(".catForm").find("button, input[type=\"button\"], input[type=\"submit\"]").removeClass(buttonDeactivatingClass);

            }else{

                $(objectButton).show();

            }

            if(selector){

                if(selectorActivation){

                    $(formObject).find($("." + selector)).removeClass(selectorActivation);

                }else{

                    $(formObject).find($("." + selector)).hide();

                }

            }else{

                if(buttonDeactivatingClass){

                    $(".catForm").find("button, input[type=\"button\"], input[type=\"submit\"]").removeClass(buttonDeactivatingClass);

                }else{

                    $(objectButton).show();

                }

                $(formObject).find($(".catFrom__loader")).remove();

            }

        }

    }
}