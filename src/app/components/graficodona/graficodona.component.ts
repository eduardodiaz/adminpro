import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficodona',
  templateUrl: './graficodona.component.html',
  styles: []
})
export class GraficodonaComponent implements OnInit {

  @Input ('chartLabels') doughnutChartLabels: string[] = [];
  @Input ('chartData') public doughnutChartData: number[] = [];
  @Input ('chartType') public doughnutChartType: string = '';
  

  constructor() { }

  ngOnInit() {
  }

}
