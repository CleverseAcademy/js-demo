const callMe = () => {
  console.log("hello from callback function")
}

const helloSomeone = (name) => {
  console.log(`hello, ${name}`)
}

const greeting = (callback) => {
  console.log("hello world")
  callback("Tiger and Art")
}

greeting((name) => {
  console.log(`hello, ${name} from another callback function`)
})