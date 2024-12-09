import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostagensService {
  constructor(private readonly prisma: PrismaService) {}

  async criar(dados: { conteudo: string; autor: string }) {
    return this.prisma.postagem.create({ data: dados });
  }

  async listarTodas() {
    return this.prisma.postagem.findMany();
  }

  async excluir(id: number) {
    return this.prisma.postagem.delete({ where: { id } });
  }
}
