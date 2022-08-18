import fs from 'fs'
export const getTime = () => {
	let fyh =new Date().toLocaleString();
	let h=fyh.slice(0,9);
	return {
		dah: new Date().toLocaleString(),
		timestamp: Date.now(),//milisegundos desde 1/01/1971
		hour:new Date().toLocaleTimeString(),//reloj digital
		fecha:h//dia,mes y año
	}
}
import path from 'path'
const obtenerId=()=>{
	let data = fs.readFileSync(path.join(__dirname,'./id.json'),'utf-8')
	return data
}

class Id{
	static miId=Number(obtenerId());
	constructor(){
		Id.miId++
	}
}
import Archivo from "../Archivos"
const id = new Archivo('./id.json')
export const miId=()=>{
	new Id();
	id.agregarDatos(Id.miId.toString());
	console.log(obtenerId());
	return Id.miId;
}
