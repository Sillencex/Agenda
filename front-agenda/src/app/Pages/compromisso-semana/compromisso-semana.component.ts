import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Compromisso } from 'src/app/models/Compromisso';
import { CompromissoService } from 'src/app/services/Compromisso.service';

@Component({
  selector: 'app-compromisso-semana',
  templateUrl: './compromisso-semana.component.html',
  styleUrls: ['./compromisso-semana.component.scss']
})
export class CompromissoSemanaComponent {
  public diasMes: { data: Date, compromissos: Compromisso[], mes?: string }[] = [];

  constructor(private compromissoService: CompromissoService, private router: Router) { }

  ngOnInit(): void {
    this.getDiasMes();
  }

  private getDiasMes() {
    const hoje = new Date();
    const diasMes: { data: Date, compromissos: Compromisso[], mes: string }[] = [];
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dataInicio = new Date(hoje.getFullYear(), hoje.getMonth(), 1); // primeiro dia do mês
    const dataFim = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0); // último dia do mês
  
    const datas = Array.from({ length: (dataFim.getDate() - dataInicio.getDate() + 1) }, (_, i) => new Date(dataInicio.getFullYear(), dataInicio.getMonth(), dataInicio.getDate() + i)); // array com as datas do mês, em ordem crescente
  
    for (let i = 0; i < datas.length; i++) {
      const data = datas[i];
      const mes = new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' }).format(data);
        
      this.getCompromissosDia(data).subscribe(compromissos => {
        const compromissosFiltrados = compromissos.filter(compromisso =>
          new Date(compromisso.data).toDateString() === data.toDateString()
        );
        diasMes.push({ data, compromissos: compromissosFiltrados, mes });
        if (diasMes.length === datas.length) {
          this.diasMes = diasMes;
        }
      }, error => {
        diasMes.push({ data, compromissos: [], mes });
        if (diasMes.length === datas.length) {
          this.diasMes = diasMes;
        }
      });
    }
  }

  private getCompromissosDia(data: Date): Observable<Compromisso[]> {
    const dataString = data.toISOString().split('T')[0];
    return this.compromissoService.getCompromissos(dataString);
  }
}