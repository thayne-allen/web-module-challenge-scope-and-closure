function walk (){
  
    var dist = '1780 feet';
    
    function fly(){
      console.log('At '+dist);
    }
    
    return fly;
  }

var flyFunc = walk();