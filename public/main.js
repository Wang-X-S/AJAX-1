console.log('我是main.js2')
getCSS.onclick = () => { 
//在JS中加载CSS
const request = new XMLHttpRequest()//创建HTTPRequest对象
request.open('GET', '/style.css')//调用对象的open方法
    request.onload = () => { 
        console.log('request.response')
        console.log(request.response)//打印请求的响应内容
        //创建style标签
        const style = document.createElement('style')
        //填写style内容
        style.innerHTML = request.response
        //插到头里面
        document.head.appendChild(style)
    //生效CSS 相当于index.html中的<link rel="stylesheet" href="/style.css">
    }
request.onerror = () => { 
    console.log('失败了')
}
//监听对象的onload&onerror 事件 专业用onreadystatechange
request.send()
//调用对象的send方法(发送请求)
}
getJS.onclick = () => { 
    const request = new XMLHttpRequest
    request.open('GET', '/2.js')
    request.onload = () => { 
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => { }
    request.send()
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/3.html");
    request.onreadystatechange = () => {
        console.log(request.readyState)//监听readyState
        console.log(request.status)//监听状态码:404....
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
    };
    request.send();
};
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/4.xml");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) { 
            const dom = request.responseXML 
            const text = dom.getElementsByTagName('warning')[0].textContent  //getElementsByTagName只能得到数组需要[]
            console.log(text.trim())//trim去掉多余的空格回车
        }
    };
    request.send();
};
getJSON.onclick = () => { 
    const request = new XMLHttpRequest();
    request.open("GET", "/5.json")
    request.onreadystatechange = () => { 
        if (request.readyState === 4 && request.status === 200) { 
            const object = JSON.parse(request.response)//JSON.parse把符合json语法的字符串变成对应的对象或其他东西
            myName.textContent=object.name
        }
    }
    request.send()
}