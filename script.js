const content=document.createElement("div");
content.setAttribute("class","content");
document.body.append(content);
const title=document.createElement("h1");
title.setAttribute("id","title");
title.append("Form");
content.append(title);
const desc=document.createElement("p");
desc.setAttribute("id","description");
desc.append("Form is used to collect data from user");
content.append(desc);
const formvar=document.createElement("form");
formvar.setAttribute("id","form")
formvar.setAttribute("name","form1")
content.append(formvar);
const fnamediv=document.createElement("div");
fnamediv.setAttribute("class","form-group");
formvar.append(fnamediv);
const fnamep=document.createElement("label");
fnamep.append("Enter first name ");
fnamediv.append(fnamep)
const fname=document.createElement("input");
fname.setAttribute("id","first-name");
fname.required=true;
fname.setAttribute("name","firstname");
fname.setAttribute("value","");
fname.setAttribute("type","text");
fname.setAttribute("placeholder","first name");
fnamediv.append(fname);
const lnamediv=document.createElement("div");
lnamediv.setAttribute("class","form-group");
formvar.append(lnamediv);
const lnamep=document.createElement("label");
lnamep.append("Enter last name ");
lnamediv.append(lnamep)
const lname=document.createElement("input");
lname.setAttribute("id","last-name");
lname.setAttribute("name","lastname");
lname.setAttribute("value","");
lname.required=true;
lname.setAttribute("type","text");
lname.setAttribute("placeholder","last name");
lnamediv.append(lname);
const pindiv=document.createElement("div");
pindiv.setAttribute("class","form-group");
formvar.append(pindiv);
const pinp=document.createElement("label");
pinp.append("Enter pin code ");
pindiv.append(pinp)
const pin=document.createElement("input");
pin.setAttribute("id","pincode");
pin.setAttribute("value","");
pin.required=true;
pin.setAttribute("name","pincode")
pin.setAttribute("type","text");
pin.setAttribute("placeholder","pin code");
pindiv.append(pin);
const adddiv=document.createElement("div");
adddiv.setAttribute("class","form-group");
formvar.append(adddiv);
const addp=document.createElement("label");
addp.setAttribute("class","form-group");
addp.append("Enter address ");
adddiv.append(addp)
const add=document.createElement("textarea");
add.setAttribute("id","address");
add.setAttribute("name","address");
add.setAttribute("value","");
// add.setAttribute("row","3");
// add.setAttribute("cols","10")
add.setAttribute("placeholder","address");
adddiv.append(add);
const parentElement=document.createElement("div");
parentElement.setAttribute("id","radio-container");
formvar.append(parentElement)
const radiolabel=document.createElement("label");
radiolabel.append("Select Gender");
parentElement.appendChild(radiolabel);
const radioBtn = document.createElement("input");
radioBtn.type = "radio";
radioBtn.name = "gender";
radioBtn.value = "Male";
const label = document.createElement("label");
label.for = radioBtn.id;
const labelText = document.createTextNode("Male");
label.appendChild(labelText);
parentElement.appendChild(radioBtn);
parentElement.appendChild(label);
/////////////
const radioBtn1 = document.createElement("input");
radioBtn1.type = "radio";
radioBtn1.name = "gender";
radioBtn1.value = "Female";
const label1 = document.createElement("label");
label1.for = radioBtn.id;
const labelText1 = document.createTextNode("Female");
label1.appendChild(labelText1);
parentElement.appendChild(radioBtn1);
parentElement.appendChild(label1);
///
const radioBtn2 = document.createElement("input");
radioBtn2.type = "radio";
radioBtn2.name = "gender";
radioBtn2.value = "Others";
const label2 = document.createElement("label");
label2.for = radioBtn.id;
const labelText2 = document.createTextNode("Others");
label2.appendChild(labelText2);
parentElement.appendChild(radioBtn2);
parentElement.appendChild(label2);
//////////////////////////
const parentmain=document.createElement("div");
parentmain.setAttribute("class","row");
formvar.append(parentmain);
const labmain=document.createElement("label");
labmain.setAttribute("id","labmain")
labmain.append("Select Food");
parentmain.append(labmain);
const parent=document.createElement("div");
parent.setAttribute("class","col-12");
parentmain.append(parent);
const check1=document.createElement("input");
check1.type="checkbox";
check1.name="food";
check1.value="Mutton Briyani";
check1.onchange="handle(this)"
const labelc1=document.createElement("label");
labelc1.for=check1.id;
const label1Text=document.createTextNode("Mutton Briyani");
labelc1.appendChild(label1Text)
parent.appendChild(check1);
parent.appendChild(labelc1);
const check2=document.createElement("input");
check2.type="checkbox";
check2.name="food";
check2.value="Pizza";
const labelc2=document.createElement("label");
labelc2.for=check2.id;
const label2Text=document.createTextNode("Pizza ");
labelc2.appendChild(label2Text)
parent.appendChild(check2);
parent.appendChild(labelc2);
const check3=document.createElement("input");
check3.type="checkbox";
check3.name="food";
check3.value="Malabar Parotta";
const labelc3=document.createElement("label");
labelc3.for=check3.id;
const label3Text=document.createTextNode("Malabar Parotta");
labelc3.appendChild(label3Text)
parent.appendChild(check3);
parent.appendChild(labelc3);
const check4=document.createElement("input");
check4.type="checkbox";
check4.name="food";
check4.value="Crab Lollipop";
const labelc4=document.createElement("label");
labelc4.for=check4.id;
const label4Text=document.createTextNode("Crab Lollipop");
labelc4.appendChild(label4Text)
parent.appendChild(check4);
parent.appendChild(labelc4);
const check5=document.createElement("input");
check5.type="checkbox";
check5.name="food";
check5.value="Chicken BBQ";
const labelc5=document.createElement("label");
labelc5.for=check5.id;
const label5Text=document.createTextNode("Chicken BBQ");
labelc5.appendChild(label5Text)
parent.appendChild(check5);
parent.appendChild(labelc5);
const statediv=document.createElement("div");
statediv.setAttribute("class","statediv");
formvar.append(statediv);
const statep=document.createElement("label");
statep.append("Enter State ");
statediv.append(statep)
const state=document.createElement("input");
state.setAttribute("id","state");
state.setAttribute("name","state");
state.setAttribute("value","");
state.setAttribute("type","text");
state.setAttribute("placeholder","state");
statediv.append(state);
const condiv=document.createElement("div");
condiv.setAttribute("class","condiv");
formvar.append(condiv);
const conp=document.createElement("label");
conp.append("Enter Country ");
condiv.append(conp)
const con=document.createElement("input");
con.setAttribute("id","con");
con.setAttribute("name","con");
con.setAttribute("value","");
con.setAttribute("type","text");
con.setAttribute("placeholder","country");
condiv.append(con);
const bdiv=document.createElement("div");
bdiv.setAttribute("class","buttondiv");
formvar.append(bdiv)
const btn10=document.createElement("button");
btn10.setAttribute("type","button");
btn10.setAttribute("class","btn btn-primary")
btn10.setAttribute("id","submit");
// btn10.setAttribute("value","0");
btn10.innerText="SUBMIT"
btn10.setAttribute("onclick","myFunction()")
bdiv.append(btn10);
const tdiv=document.createElement("div");
tdiv.setAttribute("class","tdiv");
document.body.append(tdiv)
// Create table element
const table = document.createElement('table');
table.setAttribute("class","table")
// Create thead element and append to table
const thead = document.createElement('thead');
table.appendChild(thead);

// Create tr element and append to thead
const headerRow = document.createElement('tr');
thead.appendChild(headerRow);

// Create th elements and append to tr
const headerCell1 = document.createElement('th');
headerCell1.textContent = 'First Name';
headerRow.appendChild(headerCell1);

const headerCell2 = document.createElement('th');
headerCell2.textContent = 'Last name';
headerRow.appendChild(headerCell2);
 
const headerCell3 = document.createElement('th');
headerCell3.textContent = 'Pincode';
headerRow.appendChild(headerCell3);

const headerCell4 = document.createElement('th');
headerCell4.textContent = 'Address';
headerRow.appendChild(headerCell4);

const headerCell5 = document.createElement('th');
headerCell5.textContent = 'Gender';
headerRow.appendChild(headerCell5);

const headerCell6 = document.createElement('th');
headerCell6.textContent = 'Food chosen';
headerRow.appendChild(headerCell6);

const headerCell7 = document.createElement('th');
headerCell7.textContent = 'State';
headerRow.appendChild(headerCell7);

const headerCell8 = document.createElement('th');
headerCell8.textContent = 'Country';
headerRow.appendChild(headerCell8);

// Create tbody element and append to table
const tbody = document.createElement('tbody');
table.appendChild(tbody);

// Create tr element and append to tbody
const dataRow = document.createElement('tr');
tbody.appendChild(dataRow);

// Create td elements and append to tr
const dataCell1 = document.createElement('td');
dataRow.appendChild(dataCell1);

const dataCell2 = document.createElement('td');
dataRow.appendChild(dataCell2);

const dataCell3 = document.createElement('td');
dataRow.appendChild(dataCell3);

const dataCell4 = document.createElement('td');
dataRow.appendChild(dataCell4);

const dataCell5 = document.createElement('td');
dataRow.appendChild(dataCell5);

const dataCell6 = document.createElement('td');
dataRow.appendChild(dataCell6);

const dataCell7 = document.createElement('td');
dataRow.appendChild(dataCell7);

const dataCell8 = document.createElement('td');
dataRow.appendChild(dataCell8);

// Append table to the body of the document
tdiv.appendChild(table);
function myFunction()
{   myFunc();
    tableCreation();
    alert("User data updated Successfully!!!");
    clearForm();
}


function tableCreation()
{
    const gen=form1.gender.value;
    const fooddata=myFunc();
    let fnameInput = document.getElementById('first-name');
let lnameInput = document.getElementById('last-name');
let pinInput = document.getElementById('pincode');
let addInput=document.getElementById('address');
let genInput=gen;
let foodInput=fooddata;
let stateInput=document.getElementById('state');
let conInput=document.getElementById('con');
dataCell1.textContent = fnameInput.value;
dataCell2.textContent = lnameInput.value;
dataCell3.textContent = pinInput.value;
dataCell4.textContent = addInput.value;
dataCell5.textContent = genInput;
dataCell6.textContent = foodInput;
dataCell7.textContent = stateInput.value;
dataCell8.textContent = conInput.value;
}
function myFunc() {
    let arr = [];
    let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    for (let i = 0; i < checkboxes.length; i++) 
    {
    arr.push(checkboxes[i].value)
    }
    // Converted array to string & alert
    return (arr.toString());
    }
function clearForm()
{
    form1.firstname.value=" ";
    form1.lastname.value=" ";
    form1.pincode.value=" ";
    form1.address.value=" ";
    form1.state.value=" ";
    form1.con.value=" "
    check1.checked=false;
   check2.checked=false;
   check3.checked=false;
   check4.checked=false;
   check5.checked=false;
   radioBtn.checked=false;
   radioBtn1.checked=false;
   radioBtn2.checked=false;
   
}









