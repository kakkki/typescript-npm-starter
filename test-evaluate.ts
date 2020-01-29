import { main } from "./dist";
class HelloWorld
{
    constructor() {}

    greet()
    {
        main();
        console.log('HelloWorld.greet');
    }
}

let hello = new HelloWorld();
hello.greet();


require('.').main();