if (localStorage.getItem("cont")!=null && localStorage.getItem("stat")!=null) {
    var localcont = JSON.parse(localStorage.getItem("cont"));
    var localstat = JSON.parse(localStorage.getItem("stat"));
    cont = localcont;
    stat = localstat;
} else {
    var cont = [];
    var stat = [];
}
window.onload = function()
{
    var localcont = JSON.parse(localStorage.getItem("cont"));
    var localstat = JSON.parse(localStorage.getItem("stat"));
    cont = localcont;
    stat = localstat;
    var Title = document.getElementById("TitleText");
    var Add = document.getElementById("Add");
    Add.onclick = function(e)
    {
        var check = false;
        for(i=0;i<cont.length;i++)
        {
            if(cont[i]==Title.value.trim())
            {
                check = true;
            }
        }
        if(Title.value.trim().length>0)
        {
            if(check == false)
            {
                cont.push(Title.value.trim());
                stat.push(false);
                localStorage.setItem('cont', JSON.stringify(cont));
                localStorage.setItem('stat', JSON.stringify(stat));
                Update();
            }
            else if (check == true) 
            {
                alert("Trùng Title");
            }
            else alert("Exception");
        }
        else alert("Tilte Rỗng");
        TitleText.value="";
        e.preventDefault();
    }
    if (localStorage.getItem("cont")!=null && localStorage.getItem("stat")!=null)
    {
        Show();
    }
}
function Show()
{
    var localcont = JSON.parse(localStorage.getItem("cont"));
    var localstat = JSON.parse(localStorage.getItem("stat"));
    for (i=0;i<localcont.length;i++)
    {
        if (localstat[i]==true)
        {
            List.innerHTML += "<li class="+localstat[i]+"1><div onclick='Done(" + i + ")' class='+ "+localstat[i]+" +'><i class='fas fa-check'></i>" + localcont[i] + "</div>" + "<i class='fas fa-times' onclick='Del("+i+")'></i></li>";
        }
        else List.innerHTML += "<li class="+localstat[i]+"1><div onclick='Done(" + i + ")' class='+ "+localstat[i]+" +'><i class='fas fa-check' style='visibility: hidden;'></i>" + localcont[i] + "</div>" + "<i class='fas fa-times' onclick='Del("+i+")'></i></li>";
    }
}
function Done(i)
{
    stat[i]=true;
    Update();
}
function Del(i)
{
    cont.splice(i,1);
    stat.splice(i,1);  
    Update();
}
function Update()
{
    localStorage.setItem('cont', JSON.stringify(cont));
    localStorage.setItem('stat', JSON.stringify(stat));
    document.getElementById("List").innerHTML = "";
    Show();
}
