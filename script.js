window.onload = () => {

  //template literals
  var text = "expression"
  document.getElementById("app").innerHTML = `<h3>
   ${text}</h3>`

  var marker = ["{{", "}}"];

  //如果元素里面的文字有marker标注
  var match = function (item) {
    return (
      item.textContent.indexOf(marker[0]) > -1 &&
      item.textContent.indexOf(marker[1]) > -1
      //能找到index就会是0以上的数字
    );
  };
  var interpolate = function (props) {
    //定位所有标注的元素, <div label>{{name }}</div>
    var NodeList = document.querySelectorAll("[label]");
    //把Nodelist转成array
    var elements = Array.from(NodeList);

    elements.forEach(function (element) {
      if (match(element) === true) {
        //取出marker的内容, 去掉空格
        val = element.textContent.slice(
          2, //因为有两个{{
          element.textContent.lastIndexOf(marker[1])
        ).split(' ').join('');
        //通过传入的参数（props Object) 找到对应的值进行替换
        if (props.hasOwnProperty(val) && val != null) {
          element.textContent = props[val];
        }

      }
    });
  };

  // call the fucntion, 传入替换值
  interpolate({
    name: "Steven",
    age: 18
  });
};
