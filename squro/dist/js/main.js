/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2020 YOUR NAME
 * MIT License
 * http://link-to-your-git-repo.com
 */

$(document).ready((function() {
    /// click languages
    $("#lang-menu").on('click', (function () {
        $('#lang-menu').toggleClass('opened');
    }))
    $("#lang-menu ul li").on("click", (function(){
        //select lang and apply changes
        $lang = $(this).html();
        $("#lang-menu div").html($lang);
    }));
    $(".nav-item").on('click', (function () {
        $(this).toggleClass('open-submenu');
    }))
}));
