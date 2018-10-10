export function formatMoney(value){
    if(value&&value!='0.00'){
        return value.toFixed(2) + ' '+'¥'
    }else{
        return value
    }
}