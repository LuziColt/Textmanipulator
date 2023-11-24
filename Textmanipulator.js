
function upper()
{
var text = document.getElementById("writestuff").value;
alert(text.toUpperCase());
}

function lower()
{
var text = document.getElementById("writestuff").value;
alert(text.toLowerCase());
}

function length()
{
var text = document.getElementById("writestuff").value;
alert(text.length);
}


function count()
{

var d = new Date();
var date = d.getDate();
var mon = d.getMonth();
var year = d.getFullYear();

    for (let i=1; i <= 5; i++)
    {

        if (i <= 5)
        {
             alert (i);
        }
        else
        {
            alert ("Ende" + date + "-" + mon + "-" + year);
        }
    }
alert ("Ende" + "-"  + date + "-" + mon + "-" + year);
}
