import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import UsuarioProps from './usuario.entity';

@Injectable()
export class UsuarioRepository {
  constructor(private prismaService: PrismaService) {}
  async obterTodos() {
    return this.prismaService.usuario.findMany();
  }

  async obterPorId(id: number) {
    return this.prismaService.usuario.findUnique({
      where: {
        id,
      },
    });
  }

  async criar(usuario: UsuarioProps) {
    return this.prismaService.usuario.create({
      data: usuario as any,
    });
  }

  async atualizar(usuario: UsuarioProps) {
    if (!usuario.id) throw new Error('Id do usuario precisa ser informado');
    return this.prismaService.usuario.update({
      where: {
        id: usuario.id,
      },
      data: usuario as any,
    });
  }

  async remover(id: number) {
    return this.prismaService.usuario.delete({
      where: {
        id,
      },
    });
  }
}
