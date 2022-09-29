import { Component, Input, OnInit } from '@angular/core';
import { Commit } from 'src/model/commit.model';

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.css'],
})
export class RepoItemComponent implements OnInit {
  @Input() commit: Commit;

  constructor() {
    this.commit = {
      date: new Date().toString(),
      description: '',
      author: '',
      avatar: '',
      sha: '',
    };
  }

  ngOnInit(): void {}
}
