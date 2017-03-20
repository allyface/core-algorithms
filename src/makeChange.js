export default function makeChange({price, amountGiven}) {
  let coins = { quarters: 25, dimes: 10, nickels: 5, pennies: 1 }
  let changeDue = amountGiven - price

  for ( let key in coins ) {
  	let change = Math.floor(changeDue / coins[key])
  	changeDue -= change * coins[key]

  	coins[key] = change >= 1 ? change : 0
  }

  return coins
}
