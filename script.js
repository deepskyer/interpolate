//window.onload = () => console.log("running");

window.onload = () => {
  var marker = ["{{", "}}"];

  var match = function(item) {
    return (
      item.textContent.indexOf(marker[0]) > -1 &&
      item.textContent.indexOf(marker[1]) > -1
      //能找到index就会是0以上的数字
    );
  };
  var interpolate = function(props) {
    var NodeList = document.querySelectorAll("[label]"); //定位所有标注的元素
    var elements = Array.from(NodeList); //把Nodelist转成array
    console.log(elements);

    elements.forEach(function(element) {
      if (match(element) === true) {
        var val = element.textContent.slice(
          2, //因为有两个{{
          element.textContent.lastIndexOf(marker[1])
        ); //得到要传数据的key
        //找到对应的值
        console.log(val);

        console.log(props[0].val);
      }
    });
  };
  interpolate({
    name: "james",
    age: 18
  });
};
