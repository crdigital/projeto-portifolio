import { Controller, Get } from '@nestjs/common';
import { Tecnologia } from '@prisma/client';
import { TecnologiaPrisma } from './tecnologia.prisma';

@Controller('tecnologias')
export class TecnologiaController {
    constructor(private readonly repo: TecnologiaPrisma){}

    @Get()
    async obterTodas(): Promise<Tecnologia[]>{
        return this.repo.obterTodas();
    }
    
    @Get("destaques")
    async obterDestaques(): Promise<Tecnologia[]>{
        return this.repo.obterDestaques();
    }
}
