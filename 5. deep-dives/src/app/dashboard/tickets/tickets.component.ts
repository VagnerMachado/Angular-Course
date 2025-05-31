import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket/ticket.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = []
  
  onAdd(ticketData : { title: string, text: string })
  {
    const ticket: Ticket = {
      title: ticketData.title,
      request:  ticketData.text,
      id: Math.random(), //.toString(36),
      status: 'open'
    };
    this.tickets.push(ticket);
    console.log('Ticket added!', this.tickets);
  }

}
