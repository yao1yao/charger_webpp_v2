export const localStore = {
    get(item){
        return localStorage.getItem(item)?JSON.parse(localStorage.getItem(item)):'';
    },
    set(item,data){
        return localStorage.setItem(item,JSON.stringify(data));
    },
    clear(item=null){
        if(item){
            return localStorage.removeItem()
        }else{
            return localStorage.clear()
        }
    }
}