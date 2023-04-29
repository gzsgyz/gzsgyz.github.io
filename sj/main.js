adminkey = localStorage.getItem('adminkey')
arr = localStorage.getItem('list').split(',')


cname = document.getElementById('name')


var myTimer = null
function goAndStop() {
    
    if (myTimer == null) {
        myTimer = setInterval(function () {
            var index = parseInt(Math.random() * arr.length)

            document.getElementById('name').innerHTML = arr[index]

        }, 10);
        document.getElementById("bt").value = "停 止"
    } else {
        window.clearInterval(myTimer)
        myTimer = null
        document.getElementById("bt").value = "开 始"
    }
}
function first() {
    localStorage.setItem('adminkey',prompt('建新管理员密码'))
    localStorage.setItem('list',["唐僧", "孙悟空", "猪八戒", "沙悟净", "白骨精", "玉皇大帝", "红孩儿", "白骨精", "太上老君"])}
function load() {
    if (adminkey == null) {
        first()
    }
    document.getElementById('jcmd').value=arr
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
  
    document.getElementById('nd').innerHTML=  today.toString()

}