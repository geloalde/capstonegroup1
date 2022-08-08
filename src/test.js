function Level1(){
    console.log("Level 1");
    Level2();
    function Level2(){
        console.log("Level 2");
        Level3();
        function Level3(){
            console.log("Level 3");
            //Level4();
            function Level4(){
                console.log("Level 4");
            }
        }
    }
}






Level1();