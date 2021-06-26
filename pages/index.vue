<template>
<div>
    <div>
      <h1>Kalkulator|Kelompok 2</h1>
      <div class="container">
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
          <v-btn @click="clear()">
            <input type="button" name="" value="C" class=" red small white-text top-margin">
          </v-btn>
          <v-btn @click="calculate">
            <input type="button" name="" value="=" class=" green white-text big top-margin">
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
        <div s class="first-row">
          <label for="">Panjang</label>
          <input type="text" v-model="panjang">
        </div>
        <br>
        <br>
        <div>
          <label for="">Lebar</label>
          <input type="text" v-model="lebar">
        </div>
        <br>
        <div>
          <label for="">Sisi</label>
          <input type="text" v-model="sisi">
        </div>
        <br>
        <div>
          <label for="">Alas</label>
          <input type="text" v-model="alas">
        </div>
        <br>
        <div>
          <label for="">Tinggi</label>
          <input type="text" v-model="tinggi">
        </div>
        <br>
        <div>
          <label for="">Jari Jari</label>
          <input type="text" v-model="jari">
        </div>
        <br>
        <div class="first-row" style="display:flex;align-items:center;justify-content:center">
          <v-btn @click="LuasBangun('persegi')">
            <input type="button" style="width:140px" name="" value="Luas Persegi" class="global">
          </v-btn>
          <v-btn @click="KelilingBangun('persegi')">
            <input type="button" style="width:160px" name="" value="Keliling Persegi" class="global">
          </v-btn>
        </div>
        <div class="first-row" style="display:flex;align-items:center;justify-content:center;padding:20px">
          <v-btn @click="LuasBangun('segitiga')">
            <input type="button" style="width:140px" name="" value="Luas Segi Tiga" class="global">
          </v-btn>
          <v-btn @click="KelilingBangun('segitiga')">
            <input type="button" style="width:160px" name="" value="Keliling Segi Tiga" class="global">
          </v-btn>
        </div>
        <div class="first-row" style="display:flex;align-items:center;justify-content:center;">
          <v-btn @click="LuasBangun('lingkaran')">
            <input type="button" style="width:160px" name="" value="Luas Lingkaran" class="global">
          </v-btn>
          <v-btn @click="KelilingBangun('lingkaran')">
            <input type="button" style="width:160px" name="" value="Keliling Lingkaran" class="global">
          </v-btn>
        </div>
        <div class="first-row" style="display:flex;align-items:center;justify-content:center;">
          <v-btn @click="LuasBangun('persegipanjang')">
            <input type="button" style="width:160px" name="" value="Luas PP" class="global">
          </v-btn>
          <v-btn @click="KelilingBangun('persegipanjang')">
            <input type="button" style="width:160px" name="" value="Keliling PP" class="global">
          </v-btn>
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
.container{
  border-radius:5px;
  margin: auto;
  width: 25%;
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
    sisi:0,
    panjang:0,
    lebar:0,
    alas:0,
    tinggi:0,
    jari:0
  })
  ,methods: {
    LuasBangun(option){
      if(option=="persegi"){
        this.hasil = Math.pow(parseFloat(this.sisi),2)
      }else if(option=="persegipanjang"){
        this.hasil = this.panjang*this.lebar
      }else if(option=="segitiga"){
        this.hasil = (this.alas/2) * this.tinggi
      }else if(option=="lingkaran"){
        this.hasil = Math.PI*Math.pow(this.jari,2)
      }
      alert(this.hasil)
    },
    KelilingBangun(option){
      if(option=="persegi"){
        this.hasil = 4*this.sisi
      }else if(option=="persegipanjang"){
        this.hasil = 2*(this.panjang+this.lebar)
      }else if(option=="segitiga"){
        this.hasil = this.sisi+this.sisi+this.sisi
      }else if(option=="lingkaran"){
        this.hasil = (2*Math.PI)*this.jari
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
            // this.result = value*
            // console.log(value)
            // console.log("value:",this.numbers[index])
            // console.log("value:",this.lastnum)
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
