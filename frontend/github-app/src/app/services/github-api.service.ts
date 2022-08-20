import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Commit } from 'src/model/commit.model';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  constructor(private http: HttpClient) {}

  getCommits() {
    return this.http.get<Commit[]>(`${environment.githubServiceUrl}/commits`);
  }
}
