import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JobsService {
  constructor(private prisma: PrismaService) {}

  async getAllJobs() {
    return this.prisma.job.findMany({ include: { company: true } });
  }
}
