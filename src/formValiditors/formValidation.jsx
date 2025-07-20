

export default function formValidation(e) {
 let {name , value}=e.target
 switch(name){
    case "name":
        if(!value || value.length===0)
            return name + " Filed is Mendatory"
        else if(value.length<3 || value.length>50)
            return name + " Filed Lenght Must Be 3-50 Characters"
        else
            return ""
        default:
            return ""

 }
 
}
