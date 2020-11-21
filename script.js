function generatecmd() {
    var nbt = "";
    var s1 = document.getElementById("s1").value;
    if (s1 != "") {
        nbt = nbt + `{Count:1b,id:"${s1}"},`
    }
    var s2 = document.getElementById("s2").value;
    if (s2 != "") {
        nbt = nbt + `{Count:1b,id:"${s2}"},`
    }
    var s3 = document.getElementById("s3").value;
    if (s3 != "") {
        nbt = nbt + `{Count:1b,id:"${s3}"},`
    }
    var s4 = document.getElementById("s4").value;
    if (s4 != "") {
        nbt = nbt + `{Count:1b,id:"${s4}"},`
    }
    var s5 = document.getElementById("s5").value;
    if (s5 != "") {
        nbt = nbt + `{Count:1b,id:"${s5}"},`
    }
    var s6 = document.getElementById("s6").value;
    if (s6 != "") {
        nbt = nbt + `{Count:1b,id:"${s6}"},`
    }
    var s7 = document.getElementById("s7").value;
    if (s7 != "") {
        nbt = nbt + `{Count:1b,id:"${s7}"},`
    }
    var s8 = document.getElementById("s8").value;
    var s9 = document.getElementById("s9").value;
    var s10 = document.getElementById("s10").value;
    var s11 = document.getElementById("s11").value;
    var s12 = document.getElementById("s12").value;
    var s13 = document.getElementById("s13").value;
    var s14 = document.getElementById("s14").value;
    var s15 = document.getElementById("s15").value;
    var s16 = document.getElementById("s16").value;
    document.getElementById("outputcmd").innerHTML = `/give @s bundle{Items:[${nbt}]}`;
}