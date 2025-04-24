const user={
    userName : "Abhishek",
    priceOfProduct : 999,
    welcomeMessage : function () {
        console.log(`${this.userName}, welcome to the website.`);
       // console.log(this);
        
    }
}

user.welcomeMessage();
user.userName = "Surbhi";
user.welcomeMessage();