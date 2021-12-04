function hideIconBar()
{
    var iconBar=document.getElementById("iconBar");
    var navigation=document.getElementById("navigation");
    iconBar.setAttribute("style","display:none;");
    navigation.classList.remove("hide");
}
function showIconBar()
{
    var iconBar=document.getElementById("iconBar");
    var navigation=document.getElementById("navigation");
    iconBar.setAttribute("style","display:block;");
    navigation.classList.add("hide");
}
function showComment()
{
    var commentArea=document.getElementById("comment-area");
    commentArea.classList.remove("hide");
    //commentArea.setAttribute("style","display:block;");
}
function showReply(id)
{
    var replyArea=document.getElementById(id);
    replyArea.classList.remove("hide");
    //replyArea.setAttribute("style","display:block;");
}
