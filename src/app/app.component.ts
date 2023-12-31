import { Component,signal, computed} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  userName:string =" John Doe"
  collapsed = signal(false)

  sidenavWidth = computed(()=> this.collapsed()?'65px':'250px')
}
