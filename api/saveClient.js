let clients = global.clients || []
global.clients = clients

export default function handler(req,res){

if(req.method==="POST"){

const {nama,drive}=req.body

const data={
id:Date.now(),
nama,
drive
}

global.clients.push(data)

res.status(200).json({ok:true})

}else{

res.status(405).json({error:"method"})

}

}