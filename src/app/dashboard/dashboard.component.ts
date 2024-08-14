import { Component, OnInit } from '@angular/core';
import { KpiService } from '../services/kpi.service'; // Adjust the import path as needed

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  kpiData: any;

  constructor(private kpiService: KpiService) { }

  ngOnInit(): void {
    this.kpiService.getKpiData().subscribe(
      data => {
        this.kpiData = data;
        console.log(this.kpiData); // For debugging
      },
      error => {
        console.error('Error fetching KPI data', error);
      }
    );
  }
}