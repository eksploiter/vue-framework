// property short hand & concise method
let language = "javascript";
let oldStyle = {
  language: language,
  sayLang: function () {
    console.log(`사용 언어는 ${this.language} 이다.`);
  },
};

let newStyle = {
  language,
  sayLang() {
    console.log(`사용 언어는 ${this.language} 이다.`);
  },
};
