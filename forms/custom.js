$(document).ready(function() {
    $("#i-nav").click(function() {
        $("ul").toggleClass("show");
    });
    $("#hela4").click(function() {
        if ($("ul").hasClass("show") === false) {
            $("ul").removeClass("show");
        }
    });
});









/* #navigation {
    
}

.ul {
    width:75%;
    float:right;
    display:none;
}

.li {
    display:inline;
    float:left;
    width:100%;
    height:140px;
    background-color:rgb(144,144,144);
}

.klass {
    height:140px;
    display:block;
    float:left;
    line-height:140px;
    color: #fff;
    font-family:sans-serif;
    width:100%;
    text-align:center;
}

#meny2 {
    float:left;
    width:50%;
    height:140px;
    background-color:grey;
}

ul li a:hover {
    background:blue;
}

#i-nav {
    display:none;
    position:absolute;
    top:7px;
    right:20px;
    width:44px;
    height:44px;
    background:aqua;
    text-align:center;
}

.show{
    display:block;
} */