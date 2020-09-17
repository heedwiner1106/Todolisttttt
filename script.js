var dssv = [];
var listbox = [];
var listdel = [];
var editID;

class SinhVien
{
    constructor(mssv, hoten, email)
    {
        this.mssv = mssv;
        this.hoten = hoten;
        this.email = email;
    }
}
function Update()
{
            document.getElementById("dssv").innerHTML = "";
            Show();
}
function Del()
    {
        var count = 0;
        for(i = 0; i < listbox.length; i++){
               
            if(listbox[i].checked == true){
                listdel[count] = i - count;
                count++; 
            }
        }
        for(i = 0; i < listdel.length; i++)
        {
                dssv.splice(listdel[i],1);
        }
        Update();
    }
function Edit(id)
    {
        var savebtn = document.getElementById("save");
        var btnsubmit = document.getElementById("submit-btn");
        var btndel = document.getElementById("del");
        savebtn.disabled = false;
        btnsubmit.disabled = false;
        btndel.disabled = false;
        document.getElementById("ma-sinh-vien").value = dssv[id].mssv;
        document.getElementById("ho-va-ten").value = dssv[id].hoten;
        document.getElementById("email").value = dssv[id].email;
        editID = id;
    }
function Show()
    {
        for(i=0;i<dssv.length;i++)
            {
                document.getElementById("dssv").innerHTML += "<input type='checkbox' name='delete'>" + dssv[i].mssv + " " + dssv[i].hoten + " " + dssv[i].email + " " + "<button id='btnEdit" + (i) + "' onclick='Edit(" + (i) + ")''>EDIT</button>" + "<br/>";
            }
    }
function Save(id)
{
    var savebtn = document.getElementById("save");
    var btnsubmit = document.getElementById("submit-btn");
    var btndel = document.getElementById("del");

    savebtn.disabled = true;
    btnsubmit.disabled = false;
    btndel.disabled = false;
    dssv[id].mssv = document.getElementById("ma-sinh-vien").value;
    dssv[id].hoten = document.getElementById("ho-va-ten").value;
    dssv[id].email = document.getElementById("email").value;
    document.getElementById("sinh-vien-form").reset();
    Update();
}
window.onload = function()
{
    len = dssv.length;
    var savebtn = document.getElementById("save");
    savebtn.disabled = true;
    var btndel = document.getElementById("del");
    listbox = document.getElementsByName("delete");
    var btnsubmit = document.getElementById("submit-btn");
    btnsubmit.onclick = function(e)
    {
        var mssv = document.getElementById("ma-sinh-vien").value;
        var hoten = document.getElementById("ho-va-ten").value;
        var email = document.getElementById("email").value;
        s = new SinhVien(mssv, hoten, email);
        dssv.push(s);
        len = dssv.length;
        document.getElementById("sinh-vien-form").reset();
        Update();
        //document.getElementById("dssv").innerHTML += "<input type='checkbox' name='delete'>" + s.mssv + " " + s.hoten + " " + s.email + " " + "<br/>";  
        e.preventDefault();
    }
    savebtn.onclick = function(e)
    {
        Save(editID);
        e.preventDefault();
    }

    btndel.onclick = function(e) {
        e.preventDefault();
        Del();
    }
}
