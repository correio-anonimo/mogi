function text(){
let msg = {
    "content": document.getElementById("text").value
}
const  whurl ="https://discord.com/api/webhooks/1149489434123845692/XjqIN7xmkMd-9E3hsiAKUVkDzSVVOiI-ibEcoB_CsltHlL6VRE7nuFtXObrhObRNoFeT"

fetch(whurl + "?wait=true", 
{"method":"POST", 
"headers": {"content-type": "application/json"},
"body": JSON.stringify(msg)})
.then(a=xa.json()).then(console.log)
}
