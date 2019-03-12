export function s(text = 'hello webapck') {
    const element = document.createElement('div');
    element.innerHTML = text;
    return element;
}

export function a() {
    console.log('a>>>')

    let a = query('GET', '/api/getArticleList?page=1', 0, null);
    a.then((data)=> {
        console.log(data);
        console.log('d>>>');
    })
    .then(() => {
        console.log('dd')
    })
    .catch((error) => {
        console.log(error);
    });

    // xhr.open('GET', '/api/getArticleList?page=1', true);
    // xhr.send(null);
        
    let b = query('POST', '/api/addArticle', '', {title: 'jsx', content: 'hello', createBy: 'meme'});
    b.then((data) => {
        console.log(data);
        console.log('e>>>');
    }, (reason) => {
        console.log(reason);
    })
    // xhr.open('POST', '/api/addArticle', true);
    // xhr.send({title: 'jsx', content: 'hello', createBy: 'meme'});

    // console.log('b>>>');
}

function query(type, url, async, data) {
    return new Promise((resolve, reject) => {
        async = async || true;
        const xhr = new XMLHttpRequest();
        xhr.open(type, url, async);
        xhr.send(data);
        xhr.onreadystatechange = () => {
            if (xhr.readyState != 4) {
                return;
            }
            if (xhr.status == 200) {
                resolve(JSON.parse(xhr.responseText));
                // console.log('c>>>');
            } else {
                reject(new Error(xhr.statusText));
            }
        }
    })
    
}