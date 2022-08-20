import { Component, OnInit } from '@angular/core';
import { GithubApiService } from 'src/app/services/github-api.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css'],
})
export class RepoListComponent implements OnInit {
  commits: any[];
  constructor(private githubApiService: GithubApiService) {
    this.commits = [];
  }

  ngOnInit(): void {
    this.githubApiService.getCommits().subscribe((r) => {
      this.commits = r;
    });
  }
}
