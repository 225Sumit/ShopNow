

export default function imageValidation(e) {
 let files = e.target.files
 if(files.length===0)
    return "Pic field is Mendatory"
 if(files.length<2){
    let file=files[0]
    if(file.size>1048567)
        return "Pic size is Too High . pls Upload an Image Upto 1MB"
    else if(!(file.type==="image/png"||file.type==="image/jpg"||file.type==="image/jpeg")||file.type==="image/gif")
        return "Invaild Pic Formate . pls Upload (.png,.gif,.jpg,.jpeg)"
    else
        return ""
 }
 else{

 }

}
