export function formatMoney(value){
    if(value){
        return value.toFixed(2) + ' '+'¥'
    }else{
        return value
    }
}