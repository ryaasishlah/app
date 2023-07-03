import { addInner } from "https://jscroot.github.io/element/croot.js";
import { get } from "https://jscroot.github.io/api/croot.js"; 
import { getRandomColorName } from "./randomcol.js";
import {rowtabel, svg, pgr} from "../template/tabel.js";
import { URLProyek2 } from "../config/url.js";
get(URLProyek2, tabelContent);
 

function tabelContent(result){
    userTable(result);
}

function userTable(jsonParse){
    let row = '';
    jsonParse.forEach((element) => {
    let svgicon = svg.replace("#WARNA#", getRandomColorName());
    let pengajar = pgr.replace("#col#", getRandomColorName());
    console.log(pengajar);
    row = rowtabel.replace("#nama_kursus#", element.nama_kursus).
        replace("#jenjang_kursus#", element.jenjang_kursus).
        replace("#pgr#", pengajar).
        
        replace("#SVG#", svgicon);
    addInner("demo",row);
    });
}