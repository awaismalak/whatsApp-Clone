export class Contact {
   "name": string;
   "message": string;
   "lastSms": string;
   "image": string;
   "conversation": Message[]

}

export interface Message {
   id: number,
   message: string,
   received: boolean,
   sent: boolean,
   time: string
}