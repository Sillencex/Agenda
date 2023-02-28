import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Compromisso } from 'src/app/models/Compromisso';
import { CompromissoService } from 'src/app/services/Compromisso.service';

@Component({
  selector: 'app-compromisso-hoje',
  templateUrl: './compromisso-hoje.component.html',
  styleUrls: ['./compromisso-hoje.component.scss']
})
export class CompromissoHojeComponent {
  hoje!: Date;
  compromissos!: Compromisso[];
  nomeDiaSemanaAtual!: string;
  nomeMesAtual!: string;

  constructor(private compromissoService: CompromissoService,
    private router: Router,) { }

  ngOnInit(): void {
    this.hoje = new Date();
    this.getCompromissosHoje()
    this.setNomeDiaSemanaAtual(); 
    this.setNomeMesAtual();
  }

  private getCompromissosHoje() {
    const hoje = new Date().toISOString().split('T')[0]; // pega apenas a parte da data
    this.compromissoService.getCompromissos(hoje).subscribe(compromissos => {
      this.compromissos = compromissos.filter(compromisso => {
        return new Date(compromisso.data).toISOString().split('T')[0] === hoje; // converte a data do compromisso para uma string no formato ISO 8601 e compara apenas a parte da data
      });
    });
  }

  private setNomeDiaSemanaAtual() {
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const data = new Date();
    const indexDiaSemana = data.getDay();
    this.nomeDiaSemanaAtual = diasSemana[indexDiaSemana];
  }

  private setNomeMesAtual() {
    const data = new Date();
    this.nomeMesAtual = data.toLocaleString('pt-br', { month: 'long' });
  }

  goToAllCompromissos() {
    this.router.navigate(['/compromisso-lista']);
  }
}
