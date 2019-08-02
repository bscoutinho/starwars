import React, { Component } from 'react';




export class Desafio extends Component {

    constructor(){
        super();
        this.state = {
            planetas:[],
            filmes:[],
            titulos:[]
        }; 

    }

    componentDidMount(){
        this.refreshList();
    }

    refreshList(){

        let randomNumber = Math.floor((Math.random() * 61) + 1)
        let apiUrl = 'https://swapi.co/api/planets/' + randomNumber
        /*let apiUrl = 'https://swapi.co/api/planets/2'*/
        

        fetch(apiUrl)
        .then(response=> response.json())
        .then(data => {
             this.setState({planetas:data});
             this.setState({filmes: data.films})

             this.state.filmes.map((film) =>
                    fetch(film)
                    .then(response=> response.json())
                    .then(data => {
                       let titulos = this.state.titulos
                       titulos.push(data.title)
                       this.setState({titulos: titulos})
                    })
             )
             

        }); 

        
          
    }

    atualizaPagina() {
        window.location.reload()
    }

    render(){

        let msgFilmes;
        if (this.state.titulos.length < 1) {
            msgFilmes = <h6>Nenhum Filme Encontrado!</h6>
          } 

        return(
            <div>
                <h1>Planeta:</h1>
                <hr></hr>
                <h3>Nome: {this.state.planetas.name}</h3>
                <h3>Clima: {this.state.planetas.climate}</h3>
                <h3>Terreno: {this.state.planetas.terrain}</h3>
                <hr></hr>
                <h2>Filmes que participou</h2>
                <hr></hr>
                <div>

                {msgFilmes}    

                {this.state.titulos.map(item => (
                        <h6 key={item}>{item}</h6>
                    ))}
                
                </div>
                <hr></hr>
                <button onClick={this.atualizaPagina}>Novo Planeta</button>
            </div>

            

        )
    }

}
