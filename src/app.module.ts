import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PostagensService } from './postagens/postagens.service';
import { PostagensController } from './postagens/postagens.controller';

@Module({
  imports: [],
  controllers: [PostagensController],
  providers: [PrismaService, PostagensService],
})
export class AppModule {}
