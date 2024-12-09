import { PostagensService } from './postagens.service';
export declare class PostagensController {
    private readonly postagensService;
    constructor(postagensService: PostagensService);
    criar(body: {
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
