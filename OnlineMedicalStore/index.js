var UserIdAutoIncrement = 1000;
var medicineAutoIncerement = 10;
var orderAutoIncrement = 100;
var user = /** @class */ (function () {
    function user(paramUserName, paramPassword, paramMobile) {
        UserIdAutoIncrement++;
        this.UserId = "UI" + UserIdAutoIncrement.toString();
        this.UserName = paramUserName;
        this.Password = paramPassword;
        this.Mobile = paramMobile;
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
    function order(paramUserId, paramMedicineId, paramMedicineName, paramMedicineCount) {
        orderAutoIncrement++;
        this.OrderId = "OID" + orderAutoIncrement.toString();
        this.UserId = paramUserId;
        this.MedicineId = paramMedicineId;
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
    }
    return order;
}());
var userList = new Array();
userList.push(new user("gokul", "krish", 27337182));
userList.push(new user("gokulmurugesan", "krishgokul", 273371000000));
var MedicineList = new Array();
MedicineList.push(new Medicine("paracetomal", 24, 10));
MedicineList.push(new Medicine("Zintac", 50, 5));
MedicineList.push(new Medicine("YoLO", 99, 12));
MedicineList.push(new Medicine("vicks", 34, 2));
MedicineList.push(new Medicine("zandu balm", 50, 10));
var tableBody = document.querySelector("#dataTable tbody");
var element = document.getElementById('rows');
function MedicineDetail() {
    element.innerHTML = "";
    for (var i = 0; i < MedicineList.length; i++) {
        var row = document.createElement("tr");
        row.innerHTML = "<td>".concat(MedicineList[i].MedicineId, "</td>\n            <td>").concat(MedicineList[i].MedcineName, "</td>\n            <td>").concat(MedicineList[i].MedicineCount, "</td>\n            <td>").concat(MedicineList[i].MedicinePrice, "</td>\n            ");
        tableBody.appendChild(row);
    }
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
    showLogin.style.display = "none";
    signin.style.display = "block";
}
function inside() {
    var signup = document.getElementById("signup-page");
    var inside = document.getElementById("inside");
    signup.style.display = "none";
    inside.style.display = "block";
}
