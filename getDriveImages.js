export default async function handler(req,res){

const link=req.query.link

let match=link.match(/folders\/(.*)/)

if(!match){

return res.status(400).json({error:"invalid link"})

}

let folderId=match[1]

let url="https://drive.google.com/drive/folders/"+folderId

const r=await fetch(url)

const html=await r.text()

let files=[]

let regex=/\"(https:\/\/lh3.googleusercontent.com[^\"]+)/g

let i=0
let m

while((m=regex.exec(html))!==null && i<200){

files.push({
name:"IMG_"+i,
thumb:m[1],
link:m[1]
})

i++

}

res.status(200).json(files)

}