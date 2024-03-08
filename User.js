 export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome //variável com propriedade privada
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    get nome() {
        return this.#nome 
    }
    //pega o nome sem prejudicar a declaração principal (propriedade privada)
    get email() {
        return this.#email
    }
    get nascimento() {
        return this.#nascimento
    }
    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }



    set nome(novoNome) {
        if (novoNome === ''){
            throw new Error('formato não válido')
        }
        this.#nome = novoNome
    }

    exibirInfos() { //função compartilhada entre todas as classes, para exibir informações do usuário.
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
    }
 }
