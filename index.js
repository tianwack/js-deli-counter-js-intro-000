var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(`${name}`)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) {
    var nowServing = katzDeli[0];
    katzDeli.shift();
    return (`Currently serving ${nowServing}.`)
  } else {
    return `There is nobody waiting to be served!`;
  }
}
