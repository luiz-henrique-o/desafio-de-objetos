class hero{
    constructor(nome, idade, classe){
        this.nome = nome
        this.name = idade 
        this.classe = classe 

    }
    escrever(){
        let ataque = "magia"
        let tipo = "mago" 
        switch (tipo) {
            case "mago" :
                console.log("O mago atacou usando " + ataque )
                break; 
            case "guerreiro" :
                console.log("O guerreiro atacou usando " + ataque)
                break; 
            case "monge" :
                console.log("O monge atacou usando " + ataque)
                break;
            case  "ninja" :
                console.log("O ninja atacou usando " + ataque)
                break;   
        }

    }
} 
let player = new hero("Pedro ", 50, "mago")
player.escrever() 