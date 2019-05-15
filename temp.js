function Temp(c) {
    this.doC = c;
    this.CK = function () {
        return (c-273);
    };
this.CF = function () {
    return 9/5*c +32;
}
}
function hienThinhietdo(){
    let c =25;
let nhietDo = new Temp(c);
alert("do f la : "+ nhietDo.CF());
alert("do K la : "+ nhietDo.CK());

}
hienThinhietdo();