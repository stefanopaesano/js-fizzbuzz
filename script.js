for (let i= 1; i <= 100; i++ ){
     console.log (i);


    if ((i % 3 == 0) && (i % 5 == 0)){
        console.log ('fizzbuzz', i );

        

    }

    else if (i % 3 == 0){
        console.log ('fizz', i);

    }

    else if (i % 5 == 0){
        console.log ('buzz', i);


    }

    

    else {
        console.log (i);
    }
}