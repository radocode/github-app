import { Component, OnInit } from '@angular/core';
import { GithubApiService } from 'src/app/services/github-api.service';
import { DarkToggleService } from 'src/app/services/dark-toggle.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css'],
})
export class RepoListComponent implements OnInit {
  commits: any[];
  loaded: boolean;
  darkMode = this.darkToggleService.toggleState$;

  constructor(
    private githubApiService: GithubApiService,
    private darkToggleService: DarkToggleService
  ) {
    this.commits = [];
    this.loaded = false;
  }

  ngOnInit(): void {
    this.githubApiService.getCommits().subscribe((r) => {
      this.commits = r;
      this.loaded = true;
    });
  }
}
