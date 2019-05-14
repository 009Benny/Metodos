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
    for (var i = 0; i < characters.length; i++) {
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
      console.log('ch: '+characters[i]);
      console.log('end: '+end);
      console.log('init: '+init);
      console.log('flag: '+flag);
      if(end != 0){
        content = fun.substring(init+1,end);
        console.log(content);
        contents.push(content);
        end = 0;
      }
    }
    for (var i = 0; i < contents.length; i++) {
      contents[i]
    }
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
