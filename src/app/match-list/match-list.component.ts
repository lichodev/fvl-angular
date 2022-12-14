import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { MatchDataService } from '../match-data.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss'],
})
export class MatchListComponent implements OnInit {
  matchsData: Match[] = [];
  flagsEndpoint = 'https://flagcdn.com/h40';

  constructor(private matchDataService: MatchDataService) {}

  ngOnInit(): void {
    this.matchDataService
      .getAll()
      .subscribe((matchs) => (this.matchsData = matchs));
  }

  deleteMatch(id: number) {
    const confirm = window.confirm('Delete match?');
    if (!confirm) return;

    this.matchDataService.deleteMatch(id).subscribe({
      next: () =>
        (this.matchsData = this.matchsData.filter((match) => match.id !== id)),
      error: (e) => console.error(e),
    });
  }
}
