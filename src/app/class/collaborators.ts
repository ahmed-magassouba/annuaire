export class Collaborator {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  section: string;

  constructor(
    name: string = 'Entrer un nom et un prénom',
    username: string = "Entrer un nom d'utilisateur",
    email: string = 'Entrer un email',
    phone: string = 'Entrer un numéro de téléphone',
    section: string = 'Entrer une section'
  ) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.section = section;
  }
}
