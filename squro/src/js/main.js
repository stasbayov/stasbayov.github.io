$(document).ready(function() {
    /// click languages
    $("#lang-menu ul li").on("click", function(){
        //select lang and apply changes
        $lang = $(this).html();
        $("#lang-menu div").html($lang);
    });
});
