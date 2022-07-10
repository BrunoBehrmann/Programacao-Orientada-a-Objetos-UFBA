// Classe Local
import { UUID } from "./UUID";
import { Aeroporto,Classe,Aeronave } from "./Enums";


export class Local{
    
    private idLocal: UUID;
    private aeroporto: string;
    private cidade: string;
    private estado: string;
    private pais: string;

    //métodos especiais
    constructor(aeroporto: string, cidade: string, estado: string, pais: string){
        this.idLocal = new UUID()
        this.aeroporto = aeroporto;
        this.cidade = cidade;
        this.estado = estado;
        this.pais = pais;
    }

    get getIdLocal() {
        return this.idLocal;
    }

    get getAeroporto() {
        return this.aeroporto;
    }

    set setAeroporto(i: string) {
        this.aeroporto = i;
    }

    get getCidade() {
        return this.cidade;
    }

    set setCidade(i: string) {
        this.cidade = i;
    }

    get getEstado() {
        return this.estado;
    }

    set setEstado(i: string) {
        this.estado = i;
    }

    get getPais() {
        return this.pais;
    }

    set setPais(i: string) {
        this.pais = i;
    }
}
