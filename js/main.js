let counter = document.querySelectorAll(".counter")
let arr = Array.from(counter)

arr.map((item) => {
    let endTime = item.innerHTML
    let starTime = 0;
    item.innerHTML = ""
    function timer() {
        starTime++

        item.innerHTML = starTime
        if (starTime == endTime) {
            clearInterval(stop)
        }
    }

    let stop = setInterval(() => {
        timer()
    }, item.dataset.speed)

})

