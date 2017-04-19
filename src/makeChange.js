export default function makeChange({price, amountGiven}) {
  let coins = { quarters: 25, dimes: 10, nickels: 5, pennies: 1 }
  let changeDue = amountGiven - price

  for ( let key in coins ) {
  	let numberOfCoins = Math.floor(changeDue / coins[key])
  	changeDue -= numberOfCoins * coins[key]

  	coins[key] = numberOfCoins
  }

  return coins
}
