const customer = {
    firstName:"jake", 
    lastName: "Smith", 
    email: "jaekSmih!aol.com", 
    phone: undefined, 
    zipCode:"631", 
    favoriteFlavors:32,
    cupSize:"medium", 
    favoriteStore:"Target",
    firstVisit:false, 
};
customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = "'coffee', 'strawberry', 'matcha'";
delete customer["favoriteStore"];
delete customer["zipCode"];
customer.toppings = "'chocolate sprinkles', 'wafer straws', 'gummy bears'";
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;
console.log(Object.keys(customer));