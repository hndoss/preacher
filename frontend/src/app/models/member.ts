export class Member {
    public id?: string;
    public first_name?: string;
    public last_name?: string;
    // public sex?: string;
    public phone_number?: string;

    public constructor(id: string, first_name: string, last_name: string, phone_number: string) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        // this.sex = sex;
        this.phone_number = phone_number;
    }
}