<template>
<div>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <div>
      <h1>Calculator</h1>
      <div class="container1">
        <div class="header">Calculator</div>
        <input type="text" class="result" disabled v-model="display"> 
        <div class="first-row">
          <v-btn @click="onfunc('^')">
            <input type="button" name="" value="^" class="global">
          </v-btn>
        </div>
        <div class="second-row">
          <v-btn @click="addnumber(7)">
            <input type="button" name="" value="7" class="global">
            </v-btn>
          <v-btn @click="addnumber(8)">
            <input type="button" name="" value="8" class="global">
            </v-btn>
          <v-btn @click="addnumber(9)">
            <input type="button" name="" value="9" class="global">
            </v-btn>
          <v-btn @click="onfunc('/')">
            <input type="button" name="" value="/" class="global">
            </v-btn>
        </div>
        <div class="third-row">
          <v-btn @click="addnumber(4)">
            <input type="button" name="" value="4" class="global">
            </v-btn>
          <v-btn @click="addnumber(5)">
            <input type="button" name="" value="5" class="global">
            </v-btn>
          <v-btn @click="addnumber(6)">
            <input type="button" name="" value="6" class="global">
            </v-btn>
          <v-btn @click="onfunc('X')">
            <input type="button" name="" value="X" class="global">
            </v-btn>
        </div>
        <div class="fourth-row">
          <v-btn @click="addnumber(1)">
            <input type="button" name="" value="1" class="global">
            </v-btn>
          <v-btn @click="addnumber(2)">
            <input type="button" name="" value="2" class="global">
            </v-btn>
          <v-btn @click="addnumber(3)">
            <input type="button" name="" value="3" class="global">
            </v-btn>
          <v-btn @click="onfunc('-')">
            <input type="button" name="" value="-" class="global">
            </v-btn>
        </div>
        <div class="conflict">
          <div class="left">
          <v-btn @click="addnumber(0)">
            <input type="button" name="" value="0" class=" big">
            </v-btn>
          <v-btn @click="addnumber('.')">
            <input type="button" name="" value="." class=" small">
          </v-btn>
          <v-btn @click="calculate()">
            <input type="button" name="" value="=" class=" green white-text big top-margin">
          </v-btn>
          <v-btn @click="clear()">
            <input type="button" name="" value="C" class=" red small white-text top-margin">
          </v-btn>
          <!-- <v-btn @click="root">
            <input type="button" name="" value="root" class=" small">
          </v-btn> -->
          </div>
          <div class="right">
          <v-btn @click="onfunc('+')">
            <input type="button" name="" value="+" class="global grey plus">
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h1>Ruang Bangun</h1>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="input-group mb-3">
              <span class="input-group-text">Panjang</span>
              <input type="text" class="form-control" v-model="panjang">
            </div>
          </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Lebar</span>
              <input type="text" class="form-control" v-model="lebar">
            </div>
          </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Sisi A</span>
              <input type="text" class="form-control" v-model="sisiA">
              <span class="input-group-text">Sisi B</span>
              <input type="text" class="form-control" v-model="sisiB">
              <span class="input-group-text">Sisi C</span>
              <input type="text" class="form-control" v-model="sisiC">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Alas</span>
              <input type="text" class="form-control" v-model="alas">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Tinggi</span>
              <input type="text" class="form-control" v-model="tinggi">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Jari</span>
              <input type="text" class="form-control" v-model="jari">
            </div>
        <div class="container">
          <div class="row">
            <v-btn @click="LuasBangun('persegi')" class="btn col-6 btn-outline-primary">
              Luas Persegi
            </v-btn>
            <v-btn @click="KelilingBangun('persegi')" class="btn col-6 btn-outline-primary">
              Keliling Persegi
            </v-btn>
          </div>
          <div class="row" >
            <v-btn @click="LuasBangun('segitiga')" class="btn col-6 btn-outline-primary">
              Luas Segitiga
            </v-btn>
            <v-btn @click="KelilingBangun('segitiga')" class="btn col-6 btn-outline-primary">
              Keliling Segitiga
            </v-btn>
          </div>
          <div class="row">
            <v-btn @click="LuasBangun('lingkaran')" class="btn col-6 btn-outline-primary">
              Luas Lingkaran
            </v-btn>
            <v-btn @click="KelilingBangun('lingkaran')" class="btn col-6 btn-outline-primary">
              Keliling Lingkaran
            </v-btn>
          </div>
          <div class="row">
            <v-btn @click="LuasBangun('persegipanjang')" class="btn col-6 btn-outline-primary">
              Luas Persegi Panjang
            </v-btn>
            <v-btn @click="KelilingBangun('persegipanjang')" class="btn col-6 btn-outline-primary">
              Keliling Persegi Panjang
            </v-btn>
          </div>
        </div>
        
      </div>
    </div>
</div>
</template>
<style>
h1{
  text-align: center;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
}
*{
  margin: 0;
  padding: 0;
}
.container1{
  border-radius:5px;
  margin: auto;
  width: 300px;
  padding: 10px;
  border: 1px solid #f2f2f2;
  -webkit-box-shadow: 1px 1px 4px 0px rgba(176,176,176,1);
     -moz-box-shadow: 1px 1px 4px 0px rgba(176,176,176,1);
          box-shadow: 1px 1px 4px 0px rgba(176,176,176,1);
  background-color: #fff;
  /* height: 450px; */
  background-color: #F8F8F8;
}
.header{
  background-color: #459c5f;
  padding: 10px;
  color: #fff;
  text-align: center;
}
.result{
  font-size: 24px;
  padding: 24px 5px;
  font-weight: 700;
  text-align: right;
  width: 96%;
  border: none;
  background-color: #F8F8F8;
}
.first-row,
.second-row,
.third-row,
.fourth-row,
.conflict
{
  display: inline-block;
  width: 100%;
}
.global{
 padding: 15px;
 font-weight: bold;
 font-size: 16px;
 border: none;
 border-radius: 3px;
 background-color: #F2F2F2;
 float: left;
 width: 23.5%;
 margin: 0 2px;
 /*border: 1px solid #000;*/
}
.conflict .left,
.conflict .right{
  float: left;
  position: relative;
}
.left{
  width: 74%;
}
.right{
  width: 24%;
}
.big{
  padding: 15px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 3px;
  background-color: #F2F2F2;
  float: left;
  width: 64.5%;
  margin: 0 2px;
}
.small{
  padding: 15px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 3px;
  background-color: #F2F2F2;
  float: left;
  width: 31.5%;
  margin: 0 2px;
}
.plus{
  height: 105px;
  width: 100%;
}
.green{
  background-color: #459c5f ;
}
.red{
  background-color: #F50258
}
.grey{
  background-color: #F2F2F2;
}
.white-text{
  color: #fff;
}
.top-margin{
  margin-top: 4px;
}

/* Media Queries : Tablet Landscape */
@media screen and (max-width:1060px) {
  #primary {width: 67%;}
  #secondary {width: 30%; margin-left: 3%;}
}

/* Media Queries: Tabled Portrait */
@media screen and (max-width: 768px) {
  #primary {width: 100%;}
  #secondary {width: 100%; margin: 0; border: none;}
  
}

</style>
    
    <script>
export default {
  asyncData() {
    return {
      rendering: process.server ? 'server' : 'client'
    }
    
  },data:()=>({
    numbers: [],
    display:"",
    temp: "",
    symbols: [],
    lastnum:0,
    result:0,
    hasil:0,
    sisiA:0,
    sisiB:0,
    sisiC:0,
    panjang:0,
    lebar:0,
    alas:0,
    tinggi:0,
    jari:0
  })
  ,methods: {
    LuasBangun(option){
      if(option=="persegi"){
        this.hasil = Math.pow(parseFloat(this.sisiA),2)
      }else if(option=="persegipanjang"){
        this.hasil = Number(this.panjang)*Number(this.lebar)
      }else if(option=="segitiga"){
        this.hasil = (this.alas/2) * Number(this.tinggi)
      }else if(option=="lingkaran"){
        this.hasil = Math.PI*Math.pow(this.jari,2)
      }
      alert(this.hasil)
    },
    KelilingBangun(option){
      if(option=="persegi"){
        this.hasil = 4*this.sisiA
      }else if(option=="persegipanjang"){
        this.hasil = 2*(Number(this.panjang)+Number(this.lebar))
      }else if(option=="segitiga"){
        this.hasil = Number(this.sisiA)+Number(this.sisiB)+Number(this.sisiC)
      }else if(option=="lingkaran"){
        this.hasil = (2*Math.PI)*Number(this.jari)
      }
      alert(this.hasil)
    },
    addnumber (number) {
      this.display=this.display+""+number
      this.temp=this.temp+""+number
    },
    clear(){
      this.display = "",
      this.temp = "",
      this.numbers = []
      this.symbols = []
      this.result = 0
      this.lastnum= 0
    },
    calculate(){
      if(this.numbers.length<1 ){
        return
      }
      this.numbers.push(parseFloat(this.temp))
      console.log("first",this.numbers)
      this.numbers.forEach((value, index) => {
        if(this.lastnum>0){
          let symbol = this.symbols.shift()
          console.log("second",this.numbers)
          if(symbol=='X'){
            if(this.result>0){
              this.result = this.lastnum*this.numbers[this.numbers.length-1]
              this.lastnum = this.result
              this.display = this.result  
            }else{
              this.result = this.lastnum*value
              this.lastnum = this.result
              this.display = this.result  
            }
          }else if(symbol=='+'){
            if(this.result>0){
              this.result = this.lastnum+this.numbers[this.numbers.length-1]
              this.lastnum = this.result
              this.display = this.result  
            }else{
              this.result = this.lastnum+value
              this.lastnum = this.result
              this.display = this.result  
            }
          }else if(symbol=='-'){
            if(this.result>0){
              this.result = this.lastnum-this.numbers[this.numbers.length-1]
              this.lastnum = this.result
              this.display = this.result  
            }else{
              this.result = this.lastnum-value
              this.lastnum = this.result
              this.display = this.result  
            }
          }else if(symbol=='/'){
            if(this.result>0){
              this.result = this.lastnum/this.numbers[this.numbers.length-1]
              this.lastnum = this.result
              this.display = this.result  
            }else{
              this.result = this.lastnum/value
              this.lastnum = this.result
              this.display = this.result  
            }
          }else if(symbol=='^'){
            if(this.result>0){
              this.result = Math.pow(this.result,this.numbers[this.numbers.length-1])
              this.lastnum = this.result
              this.display = this.result
            }else{
              this.result = Math.pow(this.lastnum,value)
              this.lastnum = this.result
              this.display = this.result
            }
          }
          this.numbers.shift()
        }else{
          this.numbers.shift()
          this.lastnum = value
          this.result = value
          this.calculate()
        }
      })
    },
    onfunc(symbol){
      this.display=this.display+symbol
      this.symbols.push(symbol)
      this.numbers.push(parseFloat(this.temp))
      this.temp=""
    }
  }
}
</script>
