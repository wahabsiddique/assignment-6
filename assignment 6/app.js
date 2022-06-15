alert("Welcome to My DESI Adda");

var extra = ["chicken chowmein", "salad starter", "raita chaat", "fresh cocktail", "chilled Latte"]
var arr = ["Tangri kabab", "Bihari boti", "Mallai tikka Boti", "chiceken karahi", "beef karahi", "Muttan Karahi", "Peshawari Charsi Karahi", "Quetta special Beef roast", "PIzza", "BUrger", "cheese cake", "Tea", "Coffee", "Apple JUice", "FRuit cocktail", "icecream", "ice Cake"]

var ask = prompt("what would you like to have ")
var small = ask.toLowerCase()
var match = false
if (ask === "") {

    alert("please order something else")
}


for (var i = 0; i < arr.length; i++) {
    if (arr[i] === small) {
        match = true
        alert(arr[i] + " is available \n Also try our New items " + extra);
        break
    }
}

if (match === false) {
    alert(" is not available  \n TRy something Different  " + extra)
}
alert("thank you For the visit")
