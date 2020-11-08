
if (document.getElementById('blog')) {
    let commentLoaded = false
    document.onscroll = function (e) {
        if (document.documentElement.scrollTop > 600 && !commentLoaded) {
            commentLoaded = true
            axios.get('http://localhost:3000/comments')
                .then(res => {
                    let str = ""
                    res.data.map(item =>
                        str += `<li>${item.title}</li>`
                    )
                    document.getElementById('comments').innerHTML = str
                }).catch(err => {
                    console.log(err);
                })
        }

    }
}