import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',
  //selector: '[app-servers]',
  selector: '.app-servers',
  //template: `<app-server></app-server><app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Nessun server creato';
  serverName = 'hardcoded server';
  serverCreated = false;

  // dopo 2s abilita il button add server
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server è stato creato. Il nome è ' + this.serverName;
  }

   //prima versione: passo event di tipo any
  //onUpdateServerName(event: any) {
  //    console.log(event);
  //  }

  // perchè non è scritto in giallo il nome del metodo?!? PERCHE' NON E' USATO!!!
  onUpdateServerName(event: Event) {

    // negli appunti su gDocs c'è spiegato da dove viene event.target.value
    // quando scrivo in un imput viene scatenato un evento (Event)
    // che ha una property target che a sua volta ha una property value
    // <HTMLInputElement>event.target serve a informare Angular che sappiamo da dove viene value: evento HTML

    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
