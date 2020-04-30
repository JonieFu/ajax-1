getJSON.onclick = () => {
  console.log("我是json");
  const request = new XMLHttpRequest();
  request.open("GET", "5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const obj = JSON.parse(request.response);
      console.log(obj);
      console.log(obj.name);
      myName.textContent = obj.name;
    }
  };
  request.send();
};
getXML.onclick = () => {
  console.log("我是xml");
  const request = new XMLHttpRequest();
  request.open("GET", "4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      //
      const res = request.responseXML;
      console.dir(res);
      const string = res.getElementsByTagName("warning")[0].textContent;
      console.log(string.trim());
    }
  };
  request.send();
};

getHTML.onclick = () => {
  console.log("我是html");
  const request = new XMLHttpRequest();
  request.open("GET", "3.html");
  request.onload = () => {
    console.log("成功了");
    console.log(request.response);
    const div = document.createElement("div");
    div.innerHTML = request.response;
    document.body.appendChild(div);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};
getJs.onclick = () => {
  console.log("2.js");
  const request = new XMLHttpRequest();
  request.open("GET", "2.js");
  request.onload = () => {
    console.log("成功了");
    console.log(request.response);
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };
  request.onerror = () => {
    console.log("失败");
  };
  request.send();
};
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "style.css");
  request.onload = () => {
    console.log(request.response);
    const style = document.createElement("style");
    style.innerHTML = request.response;
    document.head.appendChild(style);
    console.log("成功了");
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};
let n = 1;
getPage.onclick = () => {
  if (n <= 3) {
    const request = new XMLHttpRequest();
    request.open("GET", `/page${n + 1}.json`);

    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const array = JSON.parse(request.response);
        array.forEach(function (item) {
          const li = document.createElement("li");
          li.innerText = item.number;
          xxx.appendChild(li);
        });
        n += 1;
      }
    };
    request.send();
  } else {
    console.log("已是最后一页");
  }
};
