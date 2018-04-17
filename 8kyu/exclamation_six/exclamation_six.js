function remove(str, num){
  var array = str.split('');
  for(var i = 0; i < array.length; i++){
    if(array[i] === '!' && num > 0){
        array.splice(i, 1,'')
        num--
    }
  }
  return array.join('')
}
