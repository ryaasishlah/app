import { addInner } from "https://jscroot.github.io/element/croot.js";
import { get } from "https://jscroot.github.io/api/croot.js"; 
import { getRandomColorName } from "./randomcol.js";
import { rowtabel, svg, em } from "../template/tabel.js";
get("https://gocroot-baru.herokuapp.com/hd", tabelContent);
 

function tabelContent(result){
    userTable(result);
}

function userTable(jsonParse){
    let row = '';
    jsonParse.forEach((element, index) => {
    let svgicon = svg.replace("#WARNA#", getRandomColorName());
    let emailcol = em.replace("#col#", getRandomColorName());
    console.log(emailcol);
    row = rowtabel.replace("#Nama#", element.user.nama).replace("#phonenumber#", element.user.handphone).replace("#namasistem#", element.sistemcomp).replace("#em#", emailcol).replace("#email#", element.user.email).replace("#status#", element.status).replace("#SVG#", svgicon);
    addInner("demo",row);
    });
}