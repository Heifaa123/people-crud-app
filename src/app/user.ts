export class User {
/*
    private firstname: string;
    private lastname: string;
    private email: string;
    private  phone : string;
    private password : string;

    constructor(firstname: string, lastname: string, email: string, phone : string, password : string){
        this.firstname=firstname;
        this.lastname= lastname;
        this.email=email;
        this.phone= phone;
        this.password=password;
    }
    */
    constructor(
        
        private lastname: string,
        private firstname?: string | null,
        private email?: string | null,
        private  phone? : string | null,
        private password? : string,
        private id? : string| null,
    ){}
}
