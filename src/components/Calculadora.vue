<template>
    <div class="container">
              <div class="calculadora">
                  <div id="resultado" class="display">
                      {{resultado}}
                  </div>
                  <button class="fila1" @click="resetear">reset</button>
                  <button @click="borrar">&larr;</button>
                  <button @click="agregarOperacion('%')">%</button>
                  <button @click="agregarOperacion('/')">/</button>
                  <button @click="asignarNumero(7)">7</button>
                  <button @click="asignarNumero(8)">8</button>
                  <button @click="asignarNumero(9)">9</button>
                  <button @click="agregarOperacion('*')">*</button>
                  <button @click="asignarNumero(4)">4</button>
                  <button @click="asignarNumero(5)">5</button>
                  <button @click="asignarNumero(6)">6</button>
                  <button @click="agregarOperacion('-')">-</button>
                  <button @click="asignarNumero(1)">1</button>
                  <button @click="asignarNumero(2)">2</button>
                  <button @click="asignarNumero(3)">3</button>
                  <button @click="agregarOperacion('+')">+</button>
                  <button @click="asignarNumero(0)">0</button>
                  <button @click="asignarNumero('.')">.</button>
                  <button @click="calcular">=</button>
              </div>
          </div>
  </template>
  
  <script>
  
  export default {
      data(){
          return{
              numero1: '',
              numero2:'',
              operacionActual:'',
              resultado: '',
          };
      },
  
      methods:{
          asignarNumero(valor) {
              if (this.operacionActual === '') {
                  this.numero1 += valor;
                  this.resultado= this.numero1;
              } else {
                  this.numero2 += valor;
                  this.resultado = this.numero2;
              }
          },
  
          agregarOperacion(operacion) {
             this. operacionActual = operacion;
          },
  
          calcular() {
              let resultado = '';
              let numero1 = parseFloat(this.numero1)
              let numero2 = parseFloat(this.numero2)
              switch (this.operacionActual) {
                  case '+':
                      resultado = numero1 + numero2;
                      break;
                  case '-':
                      resultado = numero1 - numero2;
                      break;
                  case '*':
                      resultado = numero1 * numero2;
                      break;
                  case '/':
                      if (numero2 !== 0) {
                          resultado = numero1 / numero2;
                      } else {
                          resultado = 'Error';
                      }
                      break;
                  case '%':
                      resultado = numero1 % numero2;
                      break;
              }
  
              this.resultado= resultado;
             
          },
  
          resetear() {
              this.numero1 = '';
              this.numero2 = '';
              this.operacionActual = '';
              this.resultado='';
          },
  
          borrar() {
              if (this.operacionActual === '') {
                  this.numero1 = this.numero1.slice(0, -1);
                  this.resultado = this.numero1;
              } else {
                  this.numero2 = this.numero2.slice(0, -1);
                  this.resultado = this.numero2;
              }
          },  
      }
  };
  </script>
  
  <style scoped>
  .container {
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  .calculadora {
      display: grid;
      grid-template-columns: repeat(4, 75px);
      grid-template-rows: 100px repeat(5, 75px);
      background-color: #6971e6;
      padding: 15px;
      border-radius: 20px;
      box-shadow: 15px 10px 5px 5px #00000033;
  }
  
  .display {
      grid-column: span 4;
      padding: 15px;
      margin: 10px 10px 20px 10px;
      background-color: #363636;
      border-radius: 15px;
      text-align: right;
      box-shadow: 0px 0px 0px 10px #00000033;
      color: #abfff4;
  }
  
  button {
      cursor: pointer;
      margin: 5px;
      padding: 0;
      border-radius: 30px;
      border: none;
      background-color: #1895bb;
      box-shadow: 5px 5px 10px 2px #00000040;
      font-size: 25px;
  }
  
  button:active{
      background-color: #89dfeb;
  
  }
  
  body{
      background: lightsteelblue;
  }
  
  *{
      color:aliceblue;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
  
  .fila1{
      grid-column: span 2;
  }
      
  
  </style>