import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import UsuarioProps from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';

@Controller('usuario')
export class UsuarioController {
  constructor(private repository: UsuarioRepository) {}
  @Post()
  async criar(@Body() usuario: UsuarioProps) {
    const novoUsuario = await this.repository.criar(usuario);
    return novoUsuario;
  }

  @Get()
  async obterTodos() {
    const usuarios = await this.repository.obterTodos();
    return usuarios;
  }

  @Get(':id')
  async obterPorId(@Param('id') id: string) {
    const usuario = await this.repository.obterPorId(+id);
    return usuario
  }

  @Patch(':id')
  async atualizar(@Param('id') id: string, @Body() usuario: UsuarioProps) {
    const usuarioAtualizado = await this.repository.atualizar({
      ...usuario,
      id: +id,
    })
    return usuarioAtualizado
  }

  @Delete(':id')
  async remover(@Param('id') id: string) {
    const usuario = await this.repository.remover(+id);
    return 'usuario deletado';
  }
}
