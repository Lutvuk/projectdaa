exports.ids = [2];
exports.modules = {

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1b7833da", content, true, context)
};

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h1{text-align:center;margin-top:.67em;margin-bottom:.67em}*{margin:0;padding:0}.container{border-radius:5px;margin:auto;width:25%;padding:10px;border:1px solid #f2f2f2;box-shadow:1px 1px 4px 0 #b0b0b0;background-color:#fff;background-color:#f8f8f8}.header{background-color:#a95084;padding:10px;color:#fff;text-align:center}.result{font-size:24px;padding:24px 5px;font-weight:700;text-align:right;width:96%;border:none;background-color:#f8f8f8}.conflict,.first-row,.fourth-row,.second-row,.third-row{display:inline-block;width:100%}.global{padding:15px;font-weight:700;font-size:16px;border:none;border-radius:3px;background-color:#f2f2f2;float:left;width:23.5%;margin:0 2px}.conflict .left,.conflict .right{float:left;position:relative}.left{width:74%}.right{width:24%}.big{width:64.5%}.big,.small{padding:15px;font-weight:700;font-size:16px;border:none;border-radius:3px;background-color:#f2f2f2;float:left;margin:0 2px}.small{width:31.5%}.plus{height:105px;width:100%}.green{background-color:#a95084}.red{background-color:#f50258}.grey{background-color:#f2f2f2}.white-text{color:#fff}.top-margin{margin-top:4px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=83ff9252&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<h1>Kalkulator|Kelompok 2</h1> "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"header\">Calculator</div> <input type=\"text\" disabled=\"disabled\""+(_vm._ssrAttr("value",(_vm.display)))+" class=\"result\"> "),_vm._ssrNode("<div class=\"first-row\">","</div>",[_c('v-btn',{on:{"click":function($event){return _vm.onfunc('^')}}},[_c('input',{staticClass:"global",attrs:{"type":"button","name":"","value":"^"}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"second-row\">","</div>",[_c('v-btn',{on:{"click":function($event){return _vm.addnumber(7)}}},[_c('input',{staticClass:"global",attrs:{"type":"button","name":"","value":"7"}})]),_vm._ssrNode(" "),_c('v-btn',{on:{"click":function($event){return _vm.addnumber(8)}}},[_c('input',{staticClass:"global",attrs:{"type":"button","name":"","value":"8"}})]),_vm._ssrNode(" "),_c('v-btn',{on:{"click":function($event){return _vm.addnumber(9)}}},[_c('input',{staticClass:"global",attrs:{"type":"button","name":"","value":"9"}})]),_vm._ssrNode(" "),_c('v-btn',{on:{"click":function($event){return _vm.onfunc('/')}}},[_c('input',{staticClass:"global",attrs:{"type":"button","name":"","value":"/"}})])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"third-row\">","</div>",[_c('v-btn',{on:{"click":function($event){return _vm.addnumber(4)}}},[_c('input',{staticClass:"global",attrs:{"type":"button","name":"","value":"4"}})]),_vm._ssrNode(" "),_c('v-btn',{on:{"click":function($event){return _vm.addnumber(5)}}},[_c('input',{staticClass:"global",attrs:{"type":"button","name":"","value":"5"}})]),_vm._ssrNode(" "),_c('v-btn',{on:{"click":function($event){return _vm.addnumber(6)}}},[_c('input',{staticClass:"global",attrs:{"type":"button","name":"","value":"6"}})]),_vm._ssrNode(" "),_c('v-btn',{on:{"click":function($event){return _vm.onfunc('X')}}},[_c('input',{staticClass:"global",attrs:{"type":"button","name":"","value":"X"}})])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"fourth-row\">","</div>",[_c('v-btn',{on:{"click":function($event){return _vm.addnumber(1)}}},[_c('input',{staticClass:"global",attrs:{"type":"button","name":"","value":"1"}})]),_vm._ssrNode(" "),_c('v-btn',{on:{"click":function($event){return _vm.addnumber(2)}}},[_c('input',{staticClass:"global",attrs:{"type":"button","name":"","value":"2"}})]),_vm._ssrNode(" "),_c('v-btn',{on:{"click":function($event){return _vm.addnumber(3)}}},[_c('input',{staticClass:"global",attrs:{"type":"button","name":"","value":"3"}})]),_vm._ssrNode(" "),_c('v-btn',{on:{"click":function($event){return _vm.onfunc('-')}}},[_c('input',{staticClass:"global",attrs:{"type":"button","name":"","value":"-"}})])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"conflict\">","</div>",[_vm._ssrNode("<div class=\"left\">","</div>",[_c('v-btn',{on:{"click":function($event){return _vm.addnumber(0)}}},[_c('input',{staticClass:" big",attrs:{"type":"button","name":"","value":"0"}})]),_vm._ssrNode(" "),_c('v-btn',{on:{"click":function($event){return _vm.addnumber('.')}}},[_c('input',{staticClass:" small",attrs:{"type":"button","name":"","value":"."}})]),_vm._ssrNode(" "),_c('v-btn',{on:{"click":function($event){return _vm.clear()}}},[_c('input',{staticClass:" red small white-text top-margin",attrs:{"type":"button","name":"","value":"C"}})]),_vm._ssrNode(" "),_c('v-btn',{on:{"click":_vm.calculate}},[_c('input',{staticClass:" green white-text big top-margin",attrs:{"type":"button","name":"","value":"="}})])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"right\">","</div>",[_c('v-btn',{on:{"click":function($event){return _vm.onfunc('+')}}},[_c('input',{staticClass:"global grey plus",attrs:{"type":"button","name":"","value":"+"}})])],1)],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<h1>Ruang Bangun</h1> "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div s class=\"first-row\"><label for>Panjang</label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.panjang)))+"></div> <br> <br> <div><label for>Lebar</label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.lebar)))+"></div> <br> <div><label for>Sisi</label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.sisi)))+"></div> <br> <div><label for>Alas</label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.alas)))+"></div> <br> <div><label for>Tinggi</label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.tinggi)))+"></div> <br> <div><label for>Jari Jari</label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.jari)))+"></div> <br> "),_vm._ssrNode("<div class=\"first-row\" style=\"display:flex;align-items:center;justify-content:center\">","</div>",[_c('v-btn',{on:{"click":function($event){return _vm.LuasBangun('persegi')}}},[_c('input',{staticClass:"global",staticStyle:{"width":"140px"},attrs:{"type":"button","name":"","value":"Luas Persegi"}})]),_vm._ssrNode(" "),_c('v-btn',{on:{"click":function($event){return _vm.KelilingBangun('persegi')}}},[_c('input',{staticClass:"global",staticStyle:{"width":"160px"},attrs:{"type":"button","name":"","value":"Keliling Persegi"}})])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"first-row\" style=\"display:flex;align-items:center;justify-content:center;padding:20px\">","</div>",[_c('v-btn',{on:{"click":function($event){return _vm.LuasBangun('segitiga')}}},[_c('input',{staticClass:"global",staticStyle:{"width":"140px"},attrs:{"type":"button","name":"","value":"Luas Segi Tiga"}})]),_vm._ssrNode(" "),_c('v-btn',{on:{"click":function($event){return _vm.KelilingBangun('segitiga')}}},[_c('input',{staticClass:"global",staticStyle:{"width":"160px"},attrs:{"type":"button","name":"","value":"Keliling Segi Tiga"}})])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"first-row\" style=\"display:flex;align-items:center;justify-content:center;\">","</div>",[_c('v-btn',{on:{"click":function($event){return _vm.LuasBangun('lingkaran')}}},[_c('input',{staticClass:"global",staticStyle:{"width":"160px"},attrs:{"type":"button","name":"","value":"Luas Lingkaran"}})]),_vm._ssrNode(" "),_c('v-btn',{on:{"click":function($event){return _vm.KelilingBangun('lingkaran')}}},[_c('input',{staticClass:"global",staticStyle:{"width":"160px"},attrs:{"type":"button","name":"","value":"Keliling Lingkaran"}})])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"first-row\" style=\"display:flex;align-items:center;justify-content:center;\">","</div>",[_c('v-btn',{on:{"click":function($event){return _vm.LuasBangun('persegipanjang')}}},[_c('input',{staticClass:"global",staticStyle:{"width":"160px"},attrs:{"type":"button","name":"","value":"Luas PP"}})]),_vm._ssrNode(" "),_c('v-btn',{on:{"click":function($event){return _vm.KelilingBangun('persegipanjang')}}},[_c('input',{staticClass:"global",staticStyle:{"width":"160px"},attrs:{"type":"button","name":"","value":"Keliling PP"}})])],2)],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=83ff9252&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  asyncData() {
    return {
      rendering:  true ? 'server' : undefined
    };
  },

  data: () => ({
    numbers: [],
    display: "",
    temp: "",
    symbols: [],
    lastnum: 0,
    result: 0,
    hasil: 0,
    sisi: 0,
    panjang: 0,
    lebar: 0,
    alas: 0,
    tinggi: 0,
    jari: 0
  }),
  methods: {
    LuasBangun(option) {
      if (option == "persegi") {
        this.hasil = Math.pow(parseFloat(this.sisi), 2);
      } else if (option == "persegipanjang") {
        this.hasil = this.panjang * this.lebar;
      } else if (option == "segitiga") {
        this.hasil = this.alas / 2 * this.tinggi;
      } else if (option == "lingkaran") {
        this.hasil = Math.PI * Math.pow(this.jari, 2);
      }

      alert(this.hasil);
    },

    KelilingBangun(option) {
      if (option == "persegi") {
        this.hasil = 4 * this.sisi;
      } else if (option == "persegipanjang") {
        this.hasil = 2 * (this.panjang + this.lebar);
      } else if (option == "segitiga") {
        this.hasil = this.sisi + this.sisi + this.sisi;
      } else if (option == "lingkaran") {
        this.hasil = 2 * Math.PI * this.jari;
      }

      alert(this.hasil);
    },

    addnumber(number) {
      this.display = this.display + "" + number;
      this.temp = this.temp + "" + number;
    },

    clear() {
      this.display = "", this.temp = "", this.numbers = [];
      this.symbols = [];
      this.result = 0;
      this.lastnum = 0;
    },

    calculate() {
      this.numbers.push(parseFloat(this.temp));
      console.log("first", this.numbers);
      this.numbers.forEach((value, index) => {
        if (this.lastnum > 0) {
          let symbol = this.symbols.shift();
          console.log("second", this.numbers);

          if (symbol == 'X') {
            if (this.result > 0) {
              this.result = this.lastnum * this.numbers[this.numbers.length - 1];
              this.lastnum = this.result;
              this.display = this.result;
            } else {
              this.result = this.lastnum * value;
              this.lastnum = this.result;
              this.display = this.result;
            } // this.result = value*
            // console.log(value)
            // console.log("value:",this.numbers[index])
            // console.log("value:",this.lastnum)

          } else if (symbol == '+') {
            if (this.result > 0) {
              this.result = this.lastnum + this.numbers[this.numbers.length - 1];
              this.lastnum = this.result;
              this.display = this.result;
            } else {
              this.result = this.lastnum + value;
              this.lastnum = this.result;
              this.display = this.result;
            }
          } else if (symbol == '-') {
            if (this.result > 0) {
              this.result = this.lastnum - this.numbers[this.numbers.length - 1];
              this.lastnum = this.result;
              this.display = this.result;
            } else {
              this.result = this.lastnum - value;
              this.lastnum = this.result;
              this.display = this.result;
            }
          } else if (symbol == '/') {
            if (this.result > 0) {
              this.result = this.lastnum / this.numbers[this.numbers.length - 1];
              this.lastnum = this.result;
              this.display = this.result;
            } else {
              this.result = this.lastnum / value;
              this.lastnum = this.result;
              this.display = this.result;
            }
          } else if (symbol == '^') {
            if (this.result > 0) {
              this.result = Math.pow(this.result, this.numbers[this.numbers.length - 1]);
              this.lastnum = this.result;
              this.display = this.result;
            } else {
              this.result = Math.pow(this.lastnum, value);
              this.lastnum = this.result;
              this.display = this.result;
            }
          }

          this.numbers.shift();
        } else {
          this.numbers.shift();
          this.lastnum = value;
          this.result = value;
          this.calculate();
        }
      });
    },

    onfunc(symbol) {
      this.display = this.display + symbol;
      this.symbols.push(symbol);
      this.numbers.push(parseFloat(this.temp));
      this.temp = "";
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(26)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2ff6bf14"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map