    console.log(`Variables scope in a block`);
    debugger;

    let i = 0;
    console.log(i);

    { 
        let a = 5;
        console.log(a);

        // let i = 99;
        console.log(i);

        // declaring using var
        //var x = 'woooow';

        // variable declaration without using a reserver keyword
        //doNotDoThisEver = 'nooooo';
    }

    console.log(i);
    // console.log(a);