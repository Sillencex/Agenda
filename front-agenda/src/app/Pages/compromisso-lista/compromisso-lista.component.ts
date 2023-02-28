import { Component } from '@angular/core';
import { Compromisso } from 'src/app/models/Compromisso';
import { CompromissoService } from 'src/app/services/Compromisso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compromisso-lista',
  templateUrl: './compromisso-lista.component.html',
  styleUrls: ['./compromisso-lista.component.scss']
})
export class CompromissoListaComponent {
  compromissos!: Compromisso[];

  constructor(private router: Router, 
              private compromissoService: CompromissoService) { }

  ngOnInit() {
    this.getCompromissosHoje();
  }

  private getCompromissosHoje() {
    const hoje = new Date().toISOString().split('T')[0];
    this.compromissoService.getCompromissos(hoje).subscribe(compromissos => this.compromissos = compromissos);
  }

  goToCompromissoHoje() {
    this.router.navigate(['/']);
  }
}
