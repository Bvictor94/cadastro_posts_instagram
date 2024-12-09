import { PrismaService } from '../prisma/prisma.service';
export declare class PostagensService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    criar(dados: {
        conteudo: string;
        autor: string;
    }): Promise<{
        conteudo: string;
        autor: string;
        criadoEm: Date;
        id: number;
    }>;
    listarTodas(): Promise<{
        conteudo: string;
        autor: string;
        criadoEm: Date;
        id: number;
    }[]>;
    excluir(id: number): Promise<{
        conteudo: string;
        autor: string;
        criadoEm: Date;
        id: number;
    }>;
}
