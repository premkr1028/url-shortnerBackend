let sessionIdUserMap = new Map()

function setUserId(id,user){
    // console.log(sessionIdUserMap)
    sessionIdUserMap.set(id,user)
    console.log(sessionIdUserMap)
}
function getUserId(id){
    return sessionIdUserMap.get(id)
}

const funCarr = [setUserId , getUserId]
export default funCarr