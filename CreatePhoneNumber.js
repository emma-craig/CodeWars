const CreatePhoneNumber = (arr) => {
    const str =`(${arr.slice(0,3)}) ${arr.slice(3,6)}-${arr.slice(6,10)}`
    return str.replace(/,/g,'')
  }
  /* or */ 
  function createPhoneNumber(numbers){
    numbers = numbers.join('');
    return '(' + numbers.substring(0, 3) + ') ' 
        + numbers.substring(3, 6) 
        + '-' 
        + numbers.substring(6);
  }
  /* or */ 
  function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
  
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
  
    return format;
  }
  
  /*CreatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); */
  
  /* "(123) 456-7890" */