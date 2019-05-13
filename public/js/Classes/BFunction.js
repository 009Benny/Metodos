import $ from 'jquery';

class BFunction{
  constructor(fun){
    this.initialFunction = fun;
    console.log(fun);
    var fun = this.getInsideContent(fun);
    console.log(fun);
  }

  getSimpleContent(fun){
    var content;
    var contents = [];
    var flag = 0,
        init = 0,
        end = 0;
    var characters = fun.split('');
    console.log(characters);
    for (var i = 0; i <= characters.length; i++) {
      console.log(characters[i]);
      console.log('flag: '+flag);
      console.log('init: '+init);
      console.log('end: '+end);
      if(end == 1){
        content = fun.substring(init,end);
        contents.push(content);
        end = 0;
      }
      if(characters[i] == '('){
        flag++;
        if(init == 0){
          init = i;
        }
      }
      if(characters[i] == ')'){
        flag--;
        if(flag == 0){
          end = i;
        }
      }
    }
    console.log(contents);
    return contents;
  }

  getInsideContent(fun){
    var contents = [];
    if(fun.indexOf('(') >= 0){
      contents = this.getSimpleContent(fun);
    }
  }
}

export default BFunction;
