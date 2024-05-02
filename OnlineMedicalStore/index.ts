let UserIdAutoIncrement = 1000;
let medicineAutoIncerement=10;
let orderAutoIncrement=100;
class user{
    UserId:string;
    UserName:string;
    Password:string;
    Mobile: number;
    constructor (paramUserName:string,paramPassword:string,paramMobile:number)
    {
        UserIdAutoIncrement++;
        this.UserId="UI"+UserIdAutoIncrement.toString();
        this.UserName=paramUserName;
        this.Password=paramPassword;
        this.Mobile=paramMobile;
    }
}

class Medicine{
    MedicineId:string;
    MedcineName:string;
    MedicineCount:number;
    MedicinePrice:number;
    constructor(paramMedicineName:string,paramMedicineCount:number,paramMedicinePrice:number)
    {
        medicineAutoIncerement++;
        this.MedicineId="MID"+medicineAutoIncerement.toString();
        this.MedcineName=paramMedicineName;
        this.MedicineCount=paramMedicineCount;
        this.MedicinePrice=paramMedicinePrice
    }
}

class order{
    UserId:string;
    MedicineId:string;
    OrderId:string;

    MedicineName:string;
    MedicineCount:number;

    constructor(paramUserId:string,paramMedicineId:string,paramMedicineName:string,paramMedicineCount:number)
    {
        orderAutoIncrement++;
        this.OrderId="OID"+orderAutoIncrement.toString();
        this.UserId=paramUserId;
        this.MedicineId=paramMedicineId;
        this.MedicineName=paramMedicineName;
        this.MedicineCount=paramMedicineCount;
    }
}

let userList:Array<user> =new Array<user>();

userList.push(new user("gokul","krish",27337182));
userList.push(new user("gokulmurugesan","krishgokul",273371000000));

let MedicineList:Array<Medicine> =new Array<Medicine>();

MedicineList.push(new Medicine("paracetomal",24,10));
MedicineList.push(new Medicine("Zintac",50,5));
MedicineList.push(new Medicine("YoLO",99,12));
MedicineList.push(new Medicine("vicks",34,2));
MedicineList.push(new Medicine("zandu balm",50,10));



const tableBody = document.querySelector("#dataTable tbody") as HTMLTableSectionElement;
const element = document.getElementById('rows') as HTMLTableElement;
function MedicineDetail()
{
    element.innerHTML="";
    for(let i=0;i<MedicineList.length;i++)
        {
            const row=document.createElement("tr");
            row.innerHTML=`<td>${MedicineList[i].MedicineId}</td>
            <td>${MedicineList[i].MedcineName}</td>
            <td>${MedicineList[i].MedicineCount}</td>
            <td>${MedicineList[i].MedicinePrice}</td>
            `;
            tableBody.appendChild(row);
       }
}

















































function Signup()
{
    console.log(1);
    let showLogin=document.getElementById("show-login") as HTMLDivElement;
    let signup=document.getElementById("signup-page") as HTMLDivElement;
    showLogin.style.display="none";
    signup.style.display="block";
}
function signin()
{
    let showLogin=document.getElementById("show-login") as HTMLDivElement;
    let signin=document.getElementById("signin-page") as HTMLDivElement;
    showLogin.style.display="none";
    signin.style.display="block";
}
function inside()
{
    let signup=document.getElementById("signup-page") as HTMLDivElement;
    let inside=document.getElementById("inside") as HTMLDivElement;
    signup.style.display="none";
    inside.style.display="block";
}