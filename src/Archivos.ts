import * as fs from 'fs'
import path from 'path'
export default class Archivos{
    ruta:string;
    constructor(ruta:string){
        this.ruta=path.join(__dirname,ruta)
    }
    agregarDatos(str:string){
        // this.eliminarDatos();
        fs.writeFileSync(this.ruta,str)
    }
    eliminarDatos(){
        fs.unlinkSync(this.ruta)
    }
    listar(id:number){
        const obj = this.listarAll()
        console.log(obj);
        for (let i = 0; i < obj.length; i++) {
            if(obj[i].id==id){
                return obj[i]
            }
        }
        return []
    }
    listarAll(){
        try {
            const objs = fs.readFileSync(this.ruta, 'utf-8');
            return JSON.parse(objs)
        } catch (error) {
            return []   
        }
    }
}
