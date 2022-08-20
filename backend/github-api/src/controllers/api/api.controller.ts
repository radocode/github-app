import { Controller, Get } from '@nestjs/common';
import { CommitService } from 'src/services/commit/commit.service';

@Controller('api')
export class ApiController {
  constructor(private readonly commitService: CommitService) {}

  @Get('commits')
  getCommits() {
    return this.commitService.getCommits();
  }
}
