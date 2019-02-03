function fizzbuzz(num) {
    if(num %5 == 0 && num %3 ==0){
        return "FizzBuzz";
    }else if(num %3 == 0 || num %10 == 3){
        return "Fizz";
    }else if(num %5 == 0 || num %10 == 5){
        return "Buzz";
    }else{
        return num.toString();
    }
    
  }
  module.exports = fizzbuzz;