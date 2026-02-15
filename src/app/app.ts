import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { WhatsappFabComponent } from './shared/components/whatsapp-fab/whatsapp-fab.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, WhatsappFabComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App { }
