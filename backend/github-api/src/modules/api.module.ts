import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CommitService } from 'src/services/commit/commit.service';
import { ApiController } from '../controllers/api/api.controller';

@Module({
  imports: [HttpModule],
  controllers: [ApiController],
  providers: [CommitService],
})
export class ApiModule {}
