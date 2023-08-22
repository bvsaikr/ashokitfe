import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl="http://ac6058102ae29481d88d79eeeea7c8b5-1387849189.ap-south-1.elb.amazonaws.com"

  constructor(private httpClient:HttpClient) { }

  createContact(contact:Contact):Observable<string>{
    return this.httpClient.post(`${this.baseUrl}/contact`, contact, { responseType:"text" } );
  }

  getContacts():Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`${this.baseUrl}/contacts`);
  }

  findContactById(id:number):Observable<Contact>{
    return this.httpClient.get<Contact>(`${this.baseUrl}/contact/${id}`);
  }

  deleteContactByid(id:number):Observable<string>{
    return this.httpClient.delete(`${this.baseUrl}/contact/${id}`, {responseType:"text"});
  }

}
