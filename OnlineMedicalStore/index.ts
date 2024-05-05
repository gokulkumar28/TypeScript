let UserIdAutoIncrement = 1000;
let medicineAutoIncerement=10;
let orderAutoIncrement=100;

let currentUserName:string;
let currentUserID: user;
let selectedIndex:number;
let UserBalance:number;
UserBalance=0;

let count=0;

class user{
    UserId:string;
    UserName:string;
    Password:string;
    Email:string;
    Mobile: string;
    Balance: number;
    constructor (paramUserName:string,paramPassword:string,paramEmail:string,paramMobile:string)
    {
        UserIdAutoIncrement++;
        this.UserId="UI"+UserIdAutoIncrement.toString();
        this.UserName=paramUserName;
        this.Email=paramEmail;
        this.Password=paramPassword;
        this.Mobile=paramMobile;
        this.Balance = 0;
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
    totalAmount:number;
    MedicineName:string;
    MedicineCount:number;
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

    constructor(paramUserId:string,paramMedicineId:string,paramMedicineName:string,paramMedicineCount:number,totalAmount:number)
    {
        orderAutoIncrement++;
        this.OrderId="OID"+orderAutoIncrement.toString();
        this.UserId=paramUserId;
        this.MedicineId=paramMedicineId;
        this.MedicineName=paramMedicineName;
        this.MedicineCount=paramMedicineCount;
        this.totalAmount=totalAmount;
    }
}


let userList:Array<user> =new Array<user>();

userList.push(new user("gokul","gokul","gokul@123","27337182"));
userList.push(new user("gokulmurugesan","krishgokul","krish@123","273371000000"));

let MedicineList:Array<Medicine> =new Array<Medicine>();

MedicineList.push(new Medicine("paracetomal",24,10));
MedicineList.push(new Medicine("Zintac",50,5));
MedicineList.push(new Medicine("YoLO",99,12));
MedicineList.push(new Medicine("vicks",34,2));
MedicineList.push(new Medicine("zandu balm",50,10));




function MedicineDetail()
{
    let purchase=document.getElementById("purchase-table") as HTMLDivElement;
    purchase.style.display="none";
    let inside=document.getElementById("medicine-table") as HTMLDivElement;
    inside.style.display="block";

    const tableBody = document.querySelector("#dataTable tbody") as HTMLTableSectionElement;
    const element = document.getElementById('rows') as HTMLTableElement;
    element.innerHTML="";
 
    for(let i=0;i<MedicineList.length;i++)
        {
            const row=document.createElement("tr");
            row.innerHTML=`<td>${MedicineList[i].MedicineId}</td>
            <td>${MedicineList[i].MedcineName}</td>
            <td id="medicine-count">${MedicineList[i].MedicineCount}</td>
            <td>${MedicineList[i].MedicinePrice}</td>
            </td>
            `;
            tableBody.appendChild(row);
       }
}


function purchase()
{
    let inside=document.getElementById("medicine-table") as HTMLDivElement;
    inside.style.display="none";

    let purchase=document.getElementById("purchase-table") as HTMLDivElement;
    purchase.style.display="block";

    const tableBody = document.querySelector("#data-Table tbody") as HTMLTableSectionElement;
    const element = document.getElementById('rows-1') as HTMLTableElement;
    element.innerHTML="";
    count=0;
    for(let i=0;i<MedicineList.length;i++)
        {
            const row=document.createElement("tr");
            row.innerHTML=`<td >${MedicineList[i].MedicineId}</td>
            <td >${MedicineList[i].MedcineName}</td>
            <td id="2">${MedicineList[i].MedicineCount}</td>
            <td >${MedicineList[i].MedicinePrice}</td>
            <td><button onclick="add('${i}')">Purchase</button>
            `;
            tableBody.appendChild(row);
            count++;
       }
   
}
function add(i:number)
{   
    let editMedicine=document.getElementById("medicine-edit") as HTMLDivElement;
    editMedicine.style.display="block";
    // edit();
    selectedIndex=i;
}

function edit()
{
    //let edit=document.getElementById("medicine-edit") as HTMLDivElement;
    let tableId=document.getElementById("2") as HTMLTableElement;
 
   
    let val=document.getElementById("edit-count") as HTMLInputElement;
   
    if(MedicineList[selectedIndex].MedicineCount>=Number(val.value))
        {
            
            let amount=MedicineList[selectedIndex].MedicineCount*MedicineList[selectedIndex].MedicinePrice;
            if(currentUserID.Balance>=amount)
                {
                    
                    MedicineList[selectedIndex].MedicineCount-=Number(val.value);
                    currentUserID.Balance-=amount;
                     cancelList.push(new order(currentUserID.UserId,MedicineList[selectedIndex].MedicineId,MedicineList[selectedIndex].MedcineName,parseInt(val.value),amount));
                    alert("purchesed successfully");
                }
                else
                {
                    alert("You have no balance please top up");
                }
        }
        else
        {
            alert("count not available for this medicine");
        }
}

let cancelList: Array<order> =new Array<order>();
cancelList.push(new order("uid100","MID16","ZINTAG",236,12398));
function cancel()
{
    let inside=document.getElementById("medicine-table") as HTMLDivElement;
    inside.style.display="none";

    let purchase=document.getElementById("purchase-table") as HTMLDivElement;
    purchase.style.display="none";
  
    let cancel=document.getElementById("cancel-order") as HTMLDivElement;
    cancel.style.display="block";
    const tableBody=document.querySelector("#cancel-show-table tbody") as HTMLTableElement;
    tableBody.innerHTML="";
    for(let i=0;i<cancelList.length;i++)
        {
            let row=document.createElement("tr");
            row.innerHTML=`<td>${cancelList[i].OrderId}</td>
            <td>${cancelList[i].UserId}</td>
            <td>${cancelList[i].MedicineName}</td>
            <td>${cancelList[i].MedicineCount}</td>
            <td>${cancelList[i].totalAmount}</td>
            <td>
            <button onclick="cancelOrder('${cancelList[i].MedicineId}')">cancel</button>
            </td>
            `;
            tableBody.appendChild(row);
        }
}



var cancelOrder= (id:any)=>
{
    for(let i=0;i<MedicineList.length;i++)
        {
           
            if(id===MedicineList[i].MedicineId)
                {
                   for(let j=0;j<cancelList.length;j++)
                    {
                        if(id===cancelList[j].MedicineId)
                            {
                                console.log(MedicineList[i].MedicineId);
                                console.log(MedicineList[j].MedicineId);
                                MedicineList[i].MedicineCount+=cancelList[j].MedicineCount;
                                currentUserID.Balance+=cancelList[j].totalAmount;
                                console.log(currentUserID.Balance);
                                alert("successfully order cancelled and balaced returned to your account");
                            }
                    }
                }
        }
}


function hi()
{
    let topUp=document.getElementById("topup") as HTMLDivElement;
    topUp.style.display="block";
}
function topUp()
{
    

    let form=document.getElementById("top-amount") as HTMLInputElement;
    // UserBalance+=parseInt(form.value);
    // console.log(form.value);
    //form.value="";
    currentUserID.Balance += parseInt(form.value);
    let topUp=document.getElementById("topup") as HTMLDivElement;
    topUp.style.display="none";
    form.value="";
}

function orderHistory()
{

}

function showBalance1()
{
    // let inside=document.getElementById("medicine-table") as HTMLDivElement;
    // inside.style.display="none";

    // let purchase=document.getElementById("purchase-table") as HTMLDivElement;
    // purchase.style.display="none";
  
    // let cancel=document.getElementById("cancel-order") as HTMLDivElement;
    // cancel.style.display="none";

    // let topUp=document.getElementById("topup") as HTMLDivElement;
    // topUp.style.display="none";
    
    let show=document.getElementById("showbalance") as HTMLDivElement;
    // show.style.display="block";

    show.innerText=`your balance is ${currentUserID.Balance}`;
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
    
    //currentUserID = userList[0];

    let name=document.getElementById("name") as HTMLInputElement;
    let password=document.getElementById("password") as HTMLInputElement;
    let email=document.getElementById("email") as HTMLInputElement;
    signin.style.display="block";
    userList.forEach((user)=>{
        if(user.Email==email.value&&password.value==user.Password)
            {
                currentUserID=user;
                showLogin.style.display="none";
                
                inside();
            }
    });



}
function inside()
{
    let signup=document.getElementById("signup-page") as HTMLDivElement;
    let inside=document.getElementById("inside") as HTMLDivElement;
    let name=document.getElementById("name") as HTMLFormElement;
    let welcome=document.getElementById("welcome") as HTMLElement;
    welcome.innerHTML= "Welcome "+name.value;
    let showLogin=document.getElementById("show-login") as HTMLDivElement;
    showLogin.style.display="none";
    currentUserName=name.value;
    welcome.style.alignContent="center";
    signup.style.display="none";
    inside.style.display="block";
}


