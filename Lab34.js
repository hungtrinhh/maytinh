let bt = "";
function toan_hang(x) {
  bt = bt + x;
  document.getElementById('pheptinh').innerHTML=bt;
}
function toan_tu(toan_tu){
bt = bt+toan_tu;
  document.getElementById('pheptinh').innerHTML=bt;
}
function thuc_hien(){
let kq = eval(bt);
bt = ''
document.getElementById('ketqua').innerHTML=kq;


}
function lam_lai(){
    bt=''
    document.getElementById('pheptinh').innerHTML=bt;
    document.getElementById('ketqua').innerHTML='';
}