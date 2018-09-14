import shortId from 'shortid'
import HashIds from 'hashids'

function createMsgId(){
    let hashIds = new HashIds(shortId.generate(),8)
    return hashIds.encode(1)
}
export const msgId = createMsgId()
