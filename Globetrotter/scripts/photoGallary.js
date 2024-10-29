$(function() {
    let container = $("#photoGallaryContainer")
    Array.from({ length: 9 }, (_, i) => i + 1).forEach((elem, _) => {
        container.append(`<img src='public/photo-gallary-photos/${elem}.jpg'></img>`)
    })

    console.log(container)
})