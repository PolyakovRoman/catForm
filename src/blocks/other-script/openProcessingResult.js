/* функция отображения результата работы скрипта */
function openProcessingResultCatForm(text, type) {

    var mess = text;
    var status = "";

    if(type == "error"){
        status = "catForm-result__text--error";
    }else{
        status = "";
    }

    var contentProcessing = "" +
        "<div class=\"catForm-result\">\n" +
        "    <div class=\"catForm-result__content\">\n" +
        "        <div class=\"catForm-result__text " + status + "\">" + mess + "</div>\n" +
        "    </div>\n" +
        "</div>";

    $("body").append(contentProcessing);

    setTimeout(function () {
        $(".catForm-result").addClass("catForm-result--active");
    }, 1);

    setTimeout(function () {
        $(".catForm-result").removeClass("catForm-result--active");
        setTimeout(function () {
            $(".catForm-result").remove();
        }, 300);
    }, 3600);

}