const input = document.querySelector('.search-area input')
const btn = document.querySelector('.click')

const resArea = document.querySelector('.result-area')

let page = 2
let accessKey = 'CMJUhI1c0XgESUiy0IMAnwGCi8o8t1fvHw4pqPx3WQw'
btn.addEventListener('click', async function () {
    let value = input.value
    console.log(value);
    const url = `http://api.unsplash.com/search/photos?page=${page}&query=${value}&client_id=${accessKey}`
    const res = await fetch(url)
    const data = await res.json()
    const results = data.results


    let clutter = ''
    results.map((result) => (
        clutter += `
        <div class="single-img">
            <img class="img"
                src=${result.urls.small}
                alt="">
            <h4 class="image-des">
            ${result.alt_description}
            </h4>
        </div>
        `
    ))
    resArea.innerHTML = clutter
    input.value = ''
})

async function showImg() {
    const url = `https://api.unsplash.com/photos/:2`
}