import { Client } from "./client";

export interface Salarie {
    id?: number;
    nom: string;
    prenom: string;
    email: string;
    dateDeNaissance: Date | string;

    clientId?: number | null;
    client?: Client | null;
}
