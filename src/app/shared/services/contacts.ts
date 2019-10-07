export class Contact{
   "name":string;
   "message":string;
   "lastSms":string;
   "image":string;
   "conversation":{id: number, message: string, received: boolean, sent: boolean, time: string }[]

}