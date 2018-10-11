import shortId from 'shortid'
import HashIds from 'hashids'

function createMsgId(){
    let hashIds = new HashIds(shortId.generate(),8)
    return hashIds.encode(1)
}
export const msgId = createMsgId()

// 判断一个数是否为整数
export function isInteger(number){
    let obj = parseFloat(number)
    return  typeof obj=== 'number'&& obj!=0 && obj%1===0
}