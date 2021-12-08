const PHONE_PRICE = 100;
const TAX_RATE = .08;
const ACCESSORY_PRICE = 10;

let bankBalance = 0;
let threshold = 100;

bankBalance = prompt('What is the balance of your bank account?')
threshold = prompt('What is the most you will spend on phone and extras?')

while (bankBalance >= PHONE_PRICE + (PHONE_PRICE * TAX_RATE)) {
    let totalBeforeTax = phoneWithOrWithoutAccessories();
    bankBalance -= finalPurchaseAmount(totalBeforeTax)
    console.log(`You spent $${finalPurchaseAmount(totalBeforeTax).toFixed(2)}`)
}

console.log(`Your bank account is $${bankBalance}`)

function phoneWithOrWithoutAccessories() {
    if (PHONE_PRICE + ACCESSORY_PRICE <= threshold 
        && PHONE_PRICE + ACCESSORY_PRICE + ((PHONE_PRICE + ACCESSORY_PRICE) * TAX_RATE) <= bankBalance) {
        return PHONE_PRICE + ACCESSORY_PRICE;
    } else {
        return PHONE_PRICE
    }
}
function finalPurchaseAmount(totalBeforeTax) {
    return totalBeforeTax + (totalBeforeTax * TAX_RATE);
}