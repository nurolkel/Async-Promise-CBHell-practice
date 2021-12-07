// synchronous 
// top to bottom
// console.log(" I ")

// console.log(" Eat")

// console.log(" ice cream")

// console.log(" with a  ")

// console.log(" spoon ")

// Asynchronous

// console.log(" I ")

// console.log(" Eat")

// console.log(" ice cream")

// console.log(" with a  ")

// console.log(" spoon ")

// setTimeout(() => {
//     console.log(" ice cream")
// },4000)

// function abcdefg() {

// }

// let abcdefg = () => {

// }

// function one() {
//     console.log(" step 1")
// }
// function two() {
//     console.log(" setp 2")
// }

// one();
// two();

// setTimeout(one, 1000)

// one(two);

let stocks = { 
    fruits: ["strawberry", 'grapes', 'banana', 'apple'],
    liquid: ['water','ice'],
    holder: ["cone","cup", "sticks"],
    toppings: ["chocolate","peanuts"]
}

let order = (fruit_name,call_production) => {
    
    setTimeout(function() {
        console.log(`${stocks.fruits[fruit_name]} was selected`)
        call_production();
    },2000)
    
}
// callback hell
let production = () => {
    
    setTimeout(() =>{
        console.log('order received, starting production')

        setTimeout(() => {
            console.log("The Fruit has been chopped")

            setTimeout(()=> {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

                setTimeout(() => {
                    console.log("The machine was started")

                    setTimeout(() => {
                        console.log(`ice cream was placed on the ${stocks.holder[0]}`)

                        setTimeout(() => {
                            console.log(`the ${stocks.toppings[0]} is topping the ice cream`)

                            setTimeout(() => {
                                console.log("Serve ice cream")

                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)
        },2000)
    },0000)
    
}

order(0,production);


// stocks.fruits.forEach(item => {
//     console.log(item)
// })

// try catch block

let is_shop_open = true;

const orderPromise = (time,work) => {
    return new Promise((res,rej) =>{

        if(is_shop_open) {

            setTimeout(() => {
                res(work())
            },time)
            
        } else {
            rej(console.log("our Shop is closed"))
        }
    } )
}

orderPromise(2000, ()=> console.log(`${stocks.fruits[0]}`))
.then(()=> {
    
    return orderPromise(0000,()=> console.log("Production has started"))
})
.then(() => {

    return orderPromise(2000,()=> console.log("The fruit was chopped"))
})
.then(()=> {

    return orderPromise(1000, ()=> {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
    })
})
.then(()=> {

    return orderPromise(1000,()=> console.log("The machine was started"))
})
.then(() => {

    return orderPromise(2000, ()=> {
        console.log(`ice cream was placed on the ${stocks.holder[0]}`)
    })
})
.then(() => {

    return orderPromise(3000, () => {
        console.log(`the ${stocks.toppings[0]} is topping the ice cream`)
    })
})
.then(() => {
    return orderPromise(2000,()=> console.log("serve ice cream"))
})
.catch(() => {
    console.log("Customer left")
})
.finally(() => {
    console.log('Day ended, shop is closed')
})

const orderAsync = () => {
    return new Promise((res,rej) => {
        if (true) {
            res()
        } else {
            rej()
        }
    })
}

async function orderAsyncFunc() {
    try {
        await abc;
    }
    catch(error) {
        console.log("abc doesn't exist", error)
    }
    finally{
        console.log("run code anyway")
    }
}

orderAsyncFunc()
.then(() => {
    console.log("hello world")
})

let toppins_choice = ()=> {
    return new Promise((res,rej) => {
     setTimeout(() => {

        res(console.log('Which toppings would you love?'))
        
     },3000)
    })
}

async function kitchen() {
    console.log("A")
    console.log("B")
    console.log("C")

    await toppins_choice();

    console.log("D")
    console.log("E")
}

kitchen();

console.log("Doing the dishes")
console.log("Cleaning the tables")
console.log("Taking the order")

function time(ms) {
    return new Promise((res,rej) => {
        if (is_shop_open) {
            setTimeout(res,ms)
        } else {
            rej(console.log("Shop is closed"))
        }
    })
}

async function kitchenAsync() {
    try {
        
        await time(2000)
        console.log(`${stocks.fruits[0]} was selected`)
        
        await time(0000)
        console.log("start the production")

        await time(2000)
        console.log("cut the fruit")

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was picked`)

        await time(1000)
        console.log("The Machine is started")

        await time(2000)
        console.log(`The ${stocks.holder[0]} was selected`)

        await time(3000)
        console.log(`The ${stocks.toppings[0]} was selected`)

        await time(2000)
        console.log("Ice cream is served!")
    }
    catch(error) {
        console.log(`customer left ${error}`)
    }
    finally {
        console.log("day ended, shop is closed")
    }
}

kitchenAsync();