export function CheckRegex(regex,data){
    let patrn = new RegExp(regex);
    if(patrn.exec(data)){
      return true
    }else{
      return false
    }
  }