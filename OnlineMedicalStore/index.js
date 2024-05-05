var UserIdAutoIncrement = 1000;
var medicineAutoIncerement = 10;
var orderAutoIncrement = 100;
var currentUserName;
var currentUserID;
var selectedIndex;
var UserBalance;
UserBalance = 0;
var count = 0;
var user = /** @class */ (function () {
    function user(paramUserName, paramPassword, paramEmail, paramMobile) {
        UserIdAutoIncrement++;
        this.UserId = "UI" + UserIdAutoIncrement.toString();
        this.UserName = paramUserName;
        this.Email = paramEmail;
        this.Password = paramPassword;
        this.Mobile = paramMobile;
        this.Balance = 0;
    }
    return user;
}());
var Medicine = /** @class */ (function () {
    function Medicine(paramMedicineName, paramMedicineCount, paramMedicinePrice) {
        medicineAutoIncerement++;
        this.MedicineId = "MID" + medicineAutoIncerement.toString();
        this.MedcineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
        this.MedicinePrice = paramMedicinePrice;
    }
    return Medicine;
}());
var order = /** @class */ (function () {
    // orderStatus:string;
    // constructor(paramUserId:string,paramMedicineId:string,paramMedicineName:string,paramMedicineCount:number)
    // {
    //     orderAutoIncrement++;
    //     this.OrderId="OID"+orderAutoIncrement.toString();
    //     this.UserId=paramUserId;
    //     this.MedicineId=paramMedicineId;
    //     this.MedicineName=paramMedicineName;
    //     this.MedicineCount=paramMedicineCount;
    // }
    function order(paramUserId, paramMedicineId, paramMedicineName, paramMedicineCount, totalAmount) {
        orderAutoIncrement++;
        this.OrderId = "OID" + orderAutoIncrement.toString();
        this.UserId = paramUserId;
        this.MedicineId = paramMedicineId;
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
        this.totalAmount = totalAmount;
    }
    return order;
}());
var userList = new Array();
userList.push(new user("gokul", "gokul", "gokul@123", "27337182"));
userList.push(new user("gokulmurugesan", "krishgokul", "krish@123", "273371000000"));
var MedicineList = new Array();
MedicineList.push(new Medicine("paracetomal", 24, 10));
MedicineList.push(new Medicine("Zintac", 50, 5));
MedicineList.push(new Medicine("YoLO", 99, 12));
MedicineList.push(new Medicine("vicks", 34, 2));
MedicineList.push(new Medicine("zandu balm", 50, 10));
function MedicineDetail() {
    var purchase = document.getElementById("purchase-table");
    purchase.style.display = "none";
    var inside = document.getElementById("medicine-table");
    inside.style.display = "block";
    var tableBody = document.querySelector("#dataTable tbody");
    var element = document.getElementById('rows');
    element.innerHTML = "";
    for (var i = 0; i < MedicineList.length; i++) {
        var row = document.createElement("tr");
        row.innerHTML = "<td>".concat(MedicineList[i].MedicineId, "</td>\n            <td>").concat(MedicineList[i].MedcineName, "</td>\n            <td id=\"medicine-count\">").concat(MedicineList[i].MedicineCount, "</td>\n            <td>").concat(MedicineList[i].MedicinePrice, "</td>\n            </td>\n            ");
        tableBody.appendChild(row);
    }
}
function purchase() {
    var inside = document.getElementById("medicine-table");
    inside.style.display = "none";
    var purchase = document.getElementById("purchase-table");
    purchase.style.display = "block";
    var tableBody = document.querySelector("#data-Table tbody");
    var element = document.getElementById('rows-1');
    element.innerHTML = "";
    count = 0;
    for (var i = 0; i < MedicineList.length; i++) {
        var row = document.createElement("tr");
        row.innerHTML = "<td >".concat(MedicineList[i].MedicineId, "</td>\n            <td >").concat(MedicineList[i].MedcineName, "</td>\n            <td id=\"2\">").concat(MedicineList[i].MedicineCount, "</td>\n            <td >").concat(MedicineList[i].MedicinePrice, "</td>\n            <td><button onclick=\"add('").concat(i, "')\">Purchase</button>\n            ");
        tableBody.appendChild(row);
        count++;
    }
}
function add(i) {
    var editMedicine = document.getElementById("medicine-edit");
    editMedicine.style.display = "block";
    // edit();
    selectedIndex = i;
}
function edit() {
    //let edit=document.getElementById("medicine-edit") as HTMLDivElement;
    var tableId = document.getElementById("2");
    var val = document.getElementById("edit-count");
    if (MedicineList[selectedIndex].MedicineCount >= Number(val.value)) {
        var amount = MedicineList[selectedIndex].MedicineCount * MedicineList[selectedIndex].MedicinePrice;
        if (currentUserID.Balance >= amount) {
            MedicineList[selectedIndex].MedicineCount -= Number(val.value);
            currentUserID.Balance -= amount;
            cancelList.push(new order(currentUserID.UserId, MedicineList[selectedIndex].MedicineId, MedicineList[selectedIndex].MedcineName, parseInt(val.value), amount));
            alert("purchesed successfully");
        }
        else {
            alert("You have no balance please top up");
        }
    }
    else {
        alert("count not available for this medicine");
    }
}
var cancelList = new Array();
cancelList.push(new order("uid100", "MID16", "ZINTAG", 236, 12398));
function cancel() {
    var inside = document.getElementById("medicine-table");
    inside.style.display = "none";
    var purchase = document.getElementById("purchase-table");
    purchase.style.display = "none";
    var cancel = document.getElementById("cancel-order");
    cancel.style.display = "block";
    var tableBody = document.querySelector("#cancel-show-table tbody");
    tableBody.innerHTML = "";
    for (var i = 0; i < cancelList.length; i++) {
        var row = document.createElement("tr");
        row.innerHTML = "<td>".concat(cancelList[i].OrderId, "</td>\n            <td>").concat(cancelList[i].UserId, "</td>\n            <td>").concat(cancelList[i].MedicineName, "</td>\n            <td>").concat(cancelList[i].MedicineCount, "</td>\n            <td>").concat(cancelList[i].totalAmount, "</td>\n            <td>\n            <button onclick=\"cancelOrder('").concat(cancelList[i].MedicineId, "')\">cancel</button>\n            </td>\n            ");
        tableBody.appendChild(row);
    }
}
var cancelOrder = function (id) {
    for (var i = 0; i < MedicineList.length; i++) {
        if (id === MedicineList[i].MedicineId) {
            for (var j = 0; j < cancelList.length; j++) {
                if (id === cancelList[j].MedicineId) {
                    console.log(MedicineList[i].MedicineId);
                    console.log(MedicineList[j].MedicineId);
                    MedicineList[i].MedicineCount += cancelList[j].MedicineCount;
                    currentUserID.Balance += cancelList[j].totalAmount;
                    console.log(currentUserID.Balance);
                    alert("successfully order cancelled and balaced returned to your account");
                }
            }
        }
    }
};
function hi() {
    var topUp = document.getElementById("topup");
    topUp.style.display = "block";
}
function topUp() {
    var form = document.getElementById("top-amount");
    // UserBalance+=parseInt(form.value);
    // console.log(form.value);
    //form.value="";
    currentUserID.Balance += parseInt(form.value);
    var topUp = document.getElementById("topup");
    topUp.style.display = "none";
    form.value = "";
}
function orderHistory() {
}
function showBalance1() {
    // let inside=document.getElementById("medicine-table") as HTMLDivElement;
    // inside.style.display="none";
    // let purchase=document.getElementById("purchase-table") as HTMLDivElement;
    // purchase.style.display="none";
    // let cancel=document.getElementById("cancel-order") as HTMLDivElement;
    // cancel.style.display="none";
    // let topUp=document.getElementById("topup") as HTMLDivElement;
    // topUp.style.display="none";
    var show = document.getElementById("showbalance");
    // show.style.display="block";
    show.innerText = "your balance is ".concat(currentUserID.Balance);
}
function Signup() {
    console.log(1);
    var showLogin = document.getElementById("show-login");
    var signup = document.getElementById("signup-page");
    showLogin.style.display = "none";
    signup.style.display = "block";
}
function signin() {
    var showLogin = document.getElementById("show-login");
    var signin = document.getElementById("signin-page");
    //currentUserID = userList[0];
    var name = document.getElementById("name");
    var password = document.getElementById("password");
    var email = document.getElementById("email");
    signin.style.display = "block";
    userList.forEach(function (user) {
        if (user.Email == email.value && password.value == user.Password) {
            currentUserID = user;
            showLogin.style.display = "none";
            inside();
        }
    });
}
function inside() {
    var signup = document.getElementById("signup-page");
    var inside = document.getElementById("inside");
    var name = document.getElementById("name");
    var welcome = document.getElementById("welcome");
    welcome.innerHTML = "Welcome " + name.value;
    currentUserName = name.value;
    welcome.style.alignContent = "center";
    signup.style.display = "none";
    inside.style.display = "block";
}
