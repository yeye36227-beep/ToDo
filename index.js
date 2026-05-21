
const btn1 =document.getElementById('ghldnjsrkdlq');
btn1.addEventListener('click', ghldnjsrkdlq);
function ghldnjsrkdlq () {
    const id1 =document.getElementById('id').value;
    const password1 =document.getElementById('password').value;

    localStorage.setItem(id1, password1); 
    alert('회원가입성공')
}
const btn2 =document.getElementById('fhrmdls');
btn2.addEventListener('click',fhrmdls);
function fhrmdls () {
    const id2 =document.getElementById('difn').value;
    const password2 =document.getElementById('difmfjd').value;
    
    const userData = localStorage.getItem(id2);

    if(!userData){
        alert('아이디 틀림');
    }
    if(userData===password2) {
        alert('로그인 성공');
        location.href="todo.html";


    } 
    else {
        alert('비번 틀림');

    }
}