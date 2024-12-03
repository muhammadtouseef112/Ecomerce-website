function signup(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log(name)
    console.log(email)
    console.log(password)

    var name1  = window.localStorage.setItem("name" , name)
    var email1 = window.localStorage.setItem("email" , email)
    var pass = window.localStorage.setItem("password" , password)

    window.location.href = "login.html"
}

function login(){
    var email2 = document.getElementById("email2").value;
    var pass2 = document.getElementById("password2").value;

    var storeemail = window.localStorage.getItem("email")
    var storepass = window.localStorage.getItem("password")

    if(email2 === storeemail && pass2 === storepass){
        alert("login succesfully")
    }else{
        alert("Enter signup email & password")
    }

    window.location.href = "home.html"
}

function order(){
    alert("items are stored")
    var obj = {
        id : 1,
        name :document.getElementById("name"),
        product : "Grocery",
        price : "2500 pkr",
        role : "customer",
        items : ["Rice","Salt","Daal","tomato","chicken","soaps"]
    }
    console.log(obj)
}

function order1(){
    var arrays=[]
    alert("items are stored")
    var obj1 = {
        id : 2,
        name : window.localStorage.getItem("name"),
        product : "Wardrobe",
        price : "10000",
        role : "customer",
        items : ["shalwar kameez","coat pant","jeans pant","t-shirts"]
    }
    arrays.push(obj1)
    console.log(obj1)
}

function order2(){
    alert("items are stored")
    var obj2 = {
        id: 3,
        name : window.localStorage.getItem("name"),
        product : "books",
        pricee : "1000",
        role : "customer",
        items : ["copies","books","generals"]
    }
    console.log(obj2)
}

function orderhere(){
    alert("items are stored")
    var obj4 = {
        id: 4,
        name : window.localStorage.getItem("name"),
        product : "grocery",
        pricee : "2500",
        role : "customer",
        items : ["vegetable","oils","Rice"]
    }
    console.log(obj4)
}

function orderhere1(){
    alert("items are stored")
    var obj5 = {
        id: 5,
        name : window.localStorage.getItem("name"),
        product : "Sports",
        pricee : "10000",
        role : "customer",
        items : ["Bat","ball","gloves","paths","kit"]
    }
    console.log(obj5)
}

function orderhere2(){
    alert("items are stored")
    var obj6 = {
        id: 6,
        name : window.localStorage.getItem("name"),
        product : "wardrobe",
        pricee : "5000",
        role : "customer",
        items : ["coat pant","shalwar kameez","shorts"]
    }
    console.log(obj6)
}

function orderhere3(){
    alert("items are stored")
    var obj7 = {
        id: 7,
        name : window.localStorage.getItem("name"),
        product : "pants",
        pricee : "1000",
        role : "customer",
        items : ["jeans pant","cotton pant","denim pant"]
    }
    console.log(obj7)
}

function orderhere4(){
    alert("items are stored")
    var obj8 = {
        id: 8,
        name : window.localStorage.getItem("name"),
        product : "trousers",
        pricee : "1500",
        role : "customer",
        items : ["addids","nike","puma"]
    }
    console.log(obj8)
}

function orderhere5(){
    alert("items are stored")
    var obj9 = {
        id: 9,
        name : window.localStorage.getItem("name"),
        product : "T-shirts",
        pricee : "2000",
        role : "customer",
        items : ["half slip","full slip","down shoulders"]
    }
    console.log(obj9)
}
function newuser(){
    var name =window.localStorage.getItem("name")
    var email4 = window.localStorage.getItem("email")
}