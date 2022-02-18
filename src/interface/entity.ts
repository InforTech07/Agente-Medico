export interface Patient{
    name: string;
}

export interface Appointement{
    fecha: Date;
    hora: string;
    resultado: string;
}

interface Test{
    test:string;
    options:{
        yes: boolean,
        no:boolean,
        aveces:boolean
    }
}


export interface TestMedic{
    tests:Test    

}