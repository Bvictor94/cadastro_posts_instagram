import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { PostagensService } from './postagens.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('postagens')
@Controller('postagens')
export class PostagensController {
  constructor(private readonly postagensService: PostagensService) {}

  @Post()
  async criar(@Body() body: { conteudo: string; autor: string }) {
    return this.postagensService.criar(body);
  }

  @Get()
  async listarTodas() {
    return this.postagensService.listarTodas();
  }

  @Delete(':id')
  async excluir(@Param('id') id: number) {
    return this.postagensService.excluir(id);
  }
}
