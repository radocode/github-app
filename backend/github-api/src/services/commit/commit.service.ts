import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class CommitService {
  constructor(private readonly httpService: HttpService) {}

  getCommits(): Observable<AxiosResponse<any>> {
    return this.httpService
      .get(
        `${process.env.GH_API_URL}/repos/${process.env.GH_OWNER}/${process.env.GH_REPO}/commits`,
      )
      .pipe(
        map(({ data }) => {
          return data.map((result: any) => {
            return {
              author: result.commit.author.name,
              avatar: result.author.avatar_url,
              date: result.commit.author.date,
              description: result.commit.message,
              sha: result.sha,
            };
          });
        }),
      );
  }
}
