let goto_Movie = (resolve, reject) => {
    let amount = 500
    amount > 4000 ? resolve("Go to VR Mall Movie") : reject("Go to Udipi Hotel")

}

//goto_Movie(1,2)
//goto_Movie(()=>{},()=>{})
//goto_Movie(() => { }, () => { })
goto_Movie((msg) => {
    console.log(msg)
}, (err) => {
    console.log(err)
})