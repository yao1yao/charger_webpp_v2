export function formatMoney(value){
    return Number.parseFloat(value).toFixed(2) + ' '+'¥'
}