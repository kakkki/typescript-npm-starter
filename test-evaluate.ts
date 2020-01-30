import { main } from './dist'
class HelloWorld {
  constructor() {}

  greet() {
    main()
    console.log('HelloWorld.greet')
  }
}

const hello = new HelloWorld()
hello.greet()

require('.').main()
