import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TeamService } from './team.service';
import { Team } from './team.model';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams = new MatTableDataSource<Team>();
  displayedColumns: string[] = ['name', 'tla', 'stadium', 'website', 'founded', 'action'];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.loadTeams();
  }

  loadTeams(): void {
    this.teamService.getTeams().subscribe((data: Team[]) => {
      this.teams.data = data;
    });
  }

  addTeam(): void {
    // Logic to add a new team
  }

  updateTeam(id: number): void {
    // Logic to update a team
  }

  deleteTeam(id: number): void {
    this.teamService.deleteTeam(id).subscribe(() => {
      this.loadTeams();
    });
  }

  viewPlayerDetails(id: number): void {
    // Logic to view player details
  }
}
