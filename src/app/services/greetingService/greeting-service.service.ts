import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {
  getDynamicGreeting(currentHour:Date): string {
  
    if (currentHour.getHours()  >= 5 && currentHour.getHours() < 12) {
      return 'Good morning,';
    } else if (currentHour.getHours()  >= 12 && currentHour.getHours()  < 18) {
      return 'Good afternoon,';
    } else { 
      return 'Good evening,';
    }
  }
}
