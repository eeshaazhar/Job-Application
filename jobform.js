var applications = [];

function validation()
{
    var elements=[];
    elements[0]=document.getElementById("fname");
    elements[1]=document.getElementById("lname");
    elements[2]=document.getElementById("phno");
    elements[3]=document.getElementById("email");
    elements[4]=document.getElementById("hno");
    elements[5]=document.getElementById("stno");
    elements[6]=document.getElementById("city");
    elements[7]=document.getElementById("state");
    elements[8]=document.getElementById("zip");
    elements[9]=document.getElementById("resume");
    elements[10]=document.getElementById("coverletter");
    elements[11]=document.getElementById("level");
    elements[12]=document.getElementById("school");
    elements[13]=document.getElementById("major");
    elements[14]=document.getElementById("year");
    elements[15]=document.getElementById("history");
    elements[16]=document.getElementById("company");
    elements[17]=document.getElementById("employment");
    elements[18]=document.getElementById("responsibilities");
    elements[19]=document.getElementById("skills");
    elements[20]=document.getElementById("certifications");
    elements[21]=document.getElementById("date");
    elements[22]=document.getElementById("schedule");
    elements[23]=document.getElementById("refname");
    elements[24]=document.getElementById("refcontact");
    elements[25]=document.getElementById("relationship");
    elements[26]=document.getElementById("Questions");
    var radio=[]
    radio[0]=document.getElementsByName("Are you willing to relocate?");
    radio[1]=document.getElementsByName("Do you accept Terms?")
    for(var i=0; i<elements.length;i++)
    {
        if(!emptyvalidation(elements[i]))
            return false;
    }
    for (var i=0; i<2;i++)
    {
        if(!radiovalidation(radio[i]))
            return false;
    }
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    email=elements[3].value;
    if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return false;
    }
    
    var phone=[];
    phone[0]=elements[2];
    phone[1]=elements[24];
    for(var i=0; i<phone.length;i++)
    {
        if(!phonevalidation(phone[i]))
            return false;

    }
    var num=[]
    num[0]=elements[4];
    num[1]=elements[5];
    num[2]=elements[8];
    num[3]=elements[14];
    for(var i=0;i<num.length;i++)
    {
        //if(!numbervalidation(num[i]))
          //  return false;
    }
    var application=[]
    for (var i=0; i<elements.length;i++)
    {
        application[i]=elements[i].value;
    }
    applications.push(application);
    console.log("Great");
    console.log(applications[0]);


    var table = document.getElementById("info").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
    var cell9 = newRow.insertCell(8);
    var cell10 = newRow.insertCell(9);
    cell1.innerHTML = elements[0].value;
    cell2.innerHTML = elements[1].value;
    cell3.innerHTML = elements[2].value;
    cell4.innerHTML = elements[3].value;
    cell5.innerHTML = elements[4].value;
    cell6.innerHTML = elements[5].value;
    cell7.innerHTML = elements[6].value;
    cell8.innerHTML = elements[7].value;
    cell9.innerHTML = elements[8].value;
    cell10.innerHTML = elements[9].value;
    var table = document.getElementById("resume").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    cell1 = newRow.insertCell(0);
    cell2 = newRow.insertCell(1);
    cell1.innerHTML = elements[10].value;
    cell2.innerHTML = elements[11].value;
    var table = document.getElementById("edu").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    cell1.innerHTML = elements[12].value;
    cell2.innerHTML = elements[13].value;
    cell3.innerHTML = elements[14].value;
    cell4.innerHTML = elements[15].value;
    cell5.innerHTML = elements[16].value;
    var table = document.getElementById("com").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    cell1.innerHTML = elements[17].value;
    cell2.innerHTML = elements[18].value;
    cell3.innerHTML = elements[19].value
    var table = document.getElementById("skills").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = elements[20].value;
    cell2.innerHTML = elements[21].value;
    var table = document.getElementById("work").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    cell1.innerHTML = elements[22].value;
    cell2.innerHTML = elements[23].value;
    cell3.innerHTML = radio[0].value;
    var table = document.getElementById("ref").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    cell1.innerHTML = elements[24].value;
    cell2.innerHTML = elements[25].value;
    var table = document.getElementById("q").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = elements[26].value;
    var table = document.getElementById("terms").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = radio[1].value;
    console.log("WOW");
    return true;
    
}
function emptyvalidation(temp)
{
    if (temp.value == "") {
        alert("Please enter your "+ temp.name);
        return false;
      }
      return true
      
}
function radiovalidation(radios)
{
    var checked=false;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            checked = true;
            break;
        }
    }

    if (!checked) {
        alert("Please select "+ radios.name);
        return false;
    }
    return true
}
function phonevalidation(temp)
{
    var phonePattern = /^\d{10}$/;
    var phone=temp.value;
    if (!phone.match(phonePattern)) {
    alert("Please enter a valid 10-digit" + temp.value);
    return false;
    }
    return true
}
function numbervalidation(temp)
{
    var num=temp.value
    var numPattern = /^\d$/;
    if (!num.match(numPattern)) {
        alert("Please enter only number in "+ temp.value);
        return false;
        }
        return true
}
function view()
{
    console.log(applications[0]);
    //insertDataIntoTable();
    
    window.location = "viewapplication.html";
    
    return false;

}

function insertDataIntoTable() {
    // var table = document.getElementById("modifiable").getElementsByTagName('tbody')[0];
    // applications.forEach(function(application) {
    //     var newRow = table.insertRow(table.rows.length);
    //     var cell=[]
    //     for(var i=0;i<9;i++)
    //     {
    //         cell[i] = newRow.insertCell(i);
    //         cell[i].innerHTML="GREAT";
    //     }
        
    // });

}
function submitform()
{
    var newwrow=[];
    count=0;
    applications.forEach(function(application) {
        newwrow[0] = document.createElement("tr");
        var newd;
        for(var i=0;i<9;i++)
        {
            newd=document.createElement("td");
            newd.textContent = application[i];
            newwrow[count].appendChild(newd);
        }
        count=count+1;
        
    });
    var d=document.getElementById("infobody");
    for (var i=0; i<applications.length; i++)
    {
        d.appendChild(newwrow[i]);
    }
    
    return true;
}
