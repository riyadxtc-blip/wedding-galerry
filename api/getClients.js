export default function handler(req,res){

global.clients = global.clients || []

res.status(200).json(global.clients)

}