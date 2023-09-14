import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class GreetService {


getMessage(){
  return 'Hello There!! - Service Greeetings';
}



}
