const user = {
    nome: "Raphael",
    email: "r@r.com",
    nascimento: "2002/05/06",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Zé",
    email: "ze@ze.com",
    role: "admin",
    criarCurso() {
        console.log('Curso Criado!')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()