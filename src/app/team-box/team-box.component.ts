import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { Team } from '../team';
import { TeamModalService } from '../team-modal.service';

@Component({
  selector: 'team-box',
  templateUrl: './team-box.component.html',
  styleUrls: ['./team-box.component.scss'],
})
export class TeamBoxComponent implements OnInit {
  data: Team | null = null;
  matchs: Match[] = [];
  flagsEndpoint = 'https://flagcdn.com/h20';

  constructor(private teamModalService: TeamModalService) {}

  ngOnInit(): void {
    this.teamModalService.teamData.subscribe((data) => {
      this.data = data;
      this.orderMatchs();
    });
  }

  orderMatchs() {
    this.data?.matchsLocal?.forEach((data) => this.matchs.push(data));
    this.data?.matchsVisitante?.forEach((data) => this.matchs.push(data));
    this.matchs.sort((a, b) => a.id - b.id);
  }

  closeModal() {
    this.teamModalService.setTeam(null);
    this.matchs = [];
  }

  formatCountry() {
    const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
    return regionNames.of(this.data?.country ?? 'ar');
  }
}
