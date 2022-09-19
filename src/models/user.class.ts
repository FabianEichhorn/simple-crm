export class User {
    firstName: string;
    lastName: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;
    email: string;

    constructor(obj?: any) { // ? = objekt kann obtional reingegeben werden
        this.firstName = obj ? obj.firstName : ''; // eine Kurzschreibweise einer If else Abfrage wenn kein Objekt vorhanden ist wird ein leerer String reingeben
        this.lastName = obj ? obj.lastName: '';
        this.birthDate = obj ? obj.birthDate: '';
        this.street = obj ? obj.street: '';
        this.zipCode = obj ? obj.zipCode: '';
        this.city = obj ? obj.city: '';
        this.email = obj ? obj.email: '';

    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            email: this.email,
        }
    }
}

/* Dies ist eine Klasse in der die kompletten User daten gespeichert werden. Um darauf zuzugreifen, importiert man sie zb in der dialog-add-user und in der 
   User Component. mit Ngmodel kann dann den jeweiligen Variablen ein Inputwert zugewiesen werden. */