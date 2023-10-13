function text(){
let msg = {
    "content": document.getElementById("text").value
}
const  whurl = document.getElementById("url").value

fetch(whurl + "?wait=true", 
{"method":"POST", 
"headers": {"content-type": "application/json"},
"body": JSON.stringify(msg)})
.then(a=xa.json()).then(console.log)
}
