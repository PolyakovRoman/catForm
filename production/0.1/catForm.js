"use strict";function isJsonCatForm(t){try{JSON.parse(t)}catch(t){return!1}return!0}function openProcessingResultCatForm(t,r){var e='<div class="catForm-result">\n    <div class="catForm-result__content">\n        <div class="catForm-result__text '+("error"==r?"catForm-result__text--error":"")+'">'+t+"</div>\n    </div>\n</div>";$("body").append(e),setTimeout(function(){$(".catForm-result").addClass("catForm-result--active")},1),setTimeout(function(){$(".catForm-result").removeClass("catForm-result--active"),setTimeout(function(){$(".catForm-result").remove()},300)},3600)}function clearCatForm(t){$(t).find('input[type="text"], input[type="password"], textarea').val("")}function addRequiredCatForm(t,r,e){for(var a=0;a<t.length;a++)$(r).find("[name="+t[a]+"]").addClass(e)}function fieldValueCatForm(t,r,e,a){if(void 0!==$(r).attr("id")&&""!=$.trim($(r).attr("id"))){var o=$.trim($(r).attr("id"));if(void 0===$("#"+o).attr("data-name")||0==$("#"+o).attr("data-name"))return void 0===$("#"+o).attr("placeholder")||0==$("#"+o).attr("placeholder")||""==$.trim($("#"+o).attr("placeholder"))?0<$(t).find("label[for = '"+o+"']").length?fieldArrayCatForm(a,i=$(t).find("label[for = '"+o+"']").text(),e):fieldArrayCatForm(a,!1,e):fieldArrayCatForm(a,i=$("#"+o).attr("placeholder"),e);var i=$("#"+o).attr("data-name");return""!=$.trim(i)&&void 0!==i?fieldArrayCatForm(a,i,e):fieldArrayCatForm(a,!1,e)}$.trim($(r).attr("name")),i=$.trim($(r).attr("data-name"));return""!=$.trim(i)&&void 0!==i?fieldArrayCatForm(a,i,e):(i=$.trim($(r).attr("placeholder")),""!=$.trim(i)&&void 0!==i?fieldArrayCatForm(a,i,e):fieldArrayCatForm(a,!1,e))}function fieldArrayCatForm(t,r,e){var a=[];return"object"==typeof t?(void 0!==t.value&&1<t.value.length?(a=t.value).push(e.value):a.push(t.value,e.value),void 0!==r&&""!=$.trim(r)&&0!=r?{title:r,value:a}:a):void 0!==e?void 0!==t&&0<t.length?(1<t.length?(a=t).push(e.value):a.push(t,e.value),void 0!==r&&""!=$.trim(r)&&0!=r?{title:r,value:a}:a):void 0!==r&&""!=$.trim(r)&&0!=r?{title:r,value:e.value}:e.value:void 0}function executionCatForm(t,r,e,a,o){var i;void 0!==(i=$(r).find('button, input[type="button"], input[type="submit"]'))&&(t?(o?$(i).addClass(o):$(i).hide(),e?a?$("."+e).addClass(a):$("."+e).show():(o?$(i).addClass(o):$(i).hide(),$(r).append('<div class="catFrom__loader catFrom__loader--black"><?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" viewBox="0 0 128 128" xml:space="preserve"><g><path d="M78.75 16.18V1.56a64.1 64.1 0 0 1 47.7 47.7H111.8a49.98 49.98 0 0 0-33.07-33.08zM16.43 49.25H1.8a64.1 64.1 0 0 1 47.7-47.7V16.2a49.98 49.98 0 0 0-33.07 33.07zm33.07 62.32v14.62A64.1 64.1 0 0 1 1.8 78.5h14.63a49.98 49.98 0 0 0 33.07 33.07zm62.32-33.07h14.62a64.1 64.1 0 0 1-47.7 47.7v-14.63a49.98 49.98 0 0 0 33.08-33.07z" fill-opacity="1"/><animateTransform attributeName="transform" type="rotate" from="-90 64 64" to="0 64 64" dur="400ms" repeatCount="indefinite"></animateTransform></g></svg></div>'))):(o?$(".catForm").find('button, input[type="button"], input[type="submit"]').removeClass(o):$(i).show(),e?a?$("."+e).removeClass(a):$("."+e).hide():(o?$(".catForm").find('button, input[type="button"], input[type="submit"]').removeClass(o):$(i).show(),$(".catFrom__loader").remove())))}$(document).ready(function(){$('.catForm button, .catForm input[type="button"], .catForm input[type="submit"]').on("click",function(t){t.preventDefault();var e=$(this).closest(".catForm"),r=$(e).attr("action"),a=$(e).attr("method");"GET"!=$.trim(a).toUpperCase()&&"POST"!=$.trim(a).toUpperCase()&&(a="GET");var o=$(e).attr("data-required-class");void 0!==o&&""!=$.trim(o)||(o="catFrom--required");var i=$(e).attr("data-loader-class");void 0!==i&&""!=$.trim(i)||(i=!1);var s=$(e).attr("data-loader-class-activation");void 0!==s&&""!=$.trim(s)||(s=!1);var n=$(e).attr("button-deactivating-class");void 0!==n&&""!=$.trim(n)||(n=!1),$(e).find("input, textarea").removeClass(o);var m=[],l={},d=$(e).serializeArray();if(0<d.length)if(void 0!==$(e).attr("name")||void 0!==$(e).attr("data-name")){void 0!==$(e).attr("data-name")?l["form-name"]=$(e).attr("data-name"):void 0!==$(e).attr("name")&&(l["form-name"]=$(e).attr("name"));var u=0;$.each(d,function(){var t=$(e).find("[name="+this.name+"]");"true"==$(t).attr("data-required")&&void 0!==$(t).attr("data-required")?""!=$.trim(this.value)?""!=l[this.name]?l[this.name]=fieldValueCatForm(e,t,this,l[this.name]):l[this.name]=fieldValueCatForm(e,t,this):(m[u]=this.name,u++):void 0!==l[this.name]?l[this.name]=fieldValueCatForm(e,t,this,l[this.name]):l[this.name]=fieldValueCatForm(e,t,this)}),0<m.length?addRequiredCatForm(m,e,o):(executionCatForm(!0,e,i,s,n),$.ajax({url:r,type:a,data:l,cache:!1,success:function(t){if(void 0===t.result||"ok"!=t.result&&"error"!=t.result)if(isJsonCatForm(t)){var r=$.parseJSON(t);void 0===r.result||"ok"!=r.result&&"error"!=r.result?openProcessingResultCatForm("Сервер не вернул верный ответ","error"):"error"!=r.result?(openProcessingResultCatForm(r.message,"ok"),clearCatForm(e)):openProcessingResultCatForm(r.message,"error"),executionCatForm(!1,e,i,s,n)}else openProcessingResultCatForm("Сервер не вернул верный ответ","error"),executionCatForm(!1,e,i,s,n);else"error"!=t.result?(openProcessingResultCatForm(t.message,"ok"),clearCatForm(e)):openProcessingResultCatForm(t.message,"error"),executionCatForm(!1,e,i,s,n)},error:function(){executionCatForm(!1,e,i,s,n),openProcessingResultCatForm("Произошла ошибка отправки формы","error")}}))}else openProcessingResultCatForm("Не задано имя формы","error");else openProcessingResultCatForm("Нет полей в форме","error")})});