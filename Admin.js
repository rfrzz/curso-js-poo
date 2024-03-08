import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    exibirInfos() { //função compartilhada entre todas as classes, para exibir informações do usuário.
        return `${this.nome}, ${this.role}, ${this.ativo}`
    }

    criarCurso(nomeDoCurso, vagas) { //função específica do admin
         return `Curso de ${nomeDoCurso} criado com ${vagas} vagas.`
    }
}