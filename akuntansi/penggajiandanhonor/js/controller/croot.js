import { addInner } from "https://jscroot.github.io/element/croot.js";
import { get } from "https://jscroot.github.io/api/croot.js"; 
import { getRandomColorName } from "./randomcol.js";
import {rowtabel, svg ,jbt} from "../template/tabel.js";
import { URLPenggajian } from "../config/url.js";
get(URLPenggajian, tabelContent);
 

function tabelContent(result){
    userTable(result);
}

function userTable(jsonParse){
    let row = '';
    jsonParse.forEach((element) => {
    let svgicon = svg.replace("#WARNA#", getRandomColorName());
    let jabat = jbt.replace("#col#", getRandomColorName());
    console.log(jabat);
    row = rowtabel.replace("#nama#", element.nama).
        replace("#status#", element.status).
        replace("#jbt#", jabat).
        replace("#jabatan#", element.jabatan).
        replace("#gaji#", element.gaji).
        replace("#SVG#", svgicon);
    addInner("demo",row);
    });
}
     
      
  
  
     