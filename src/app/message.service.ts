import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(public http: HttpClient) {}

  sendMessage(body) {
    return this.http.post('<Change this to your own API>', body).subscribe((data: any) => {});
  }
}
