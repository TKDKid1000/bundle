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
    if (s8 != "") {
        nbt = nbt + `{Count:1b,id:"${s8}"},`
    }
    var s9 = document.getElementById("s9").value;
    if (s9 != "") {
        nbt = nbt + `{Count:1b,id:"${s9}"},`
    }
    var s10 = document.getElementById("s10").value;
    if (s10 != "") {
        nbt = nbt + `{Count:1b,id:"${s10}"},`
    }
    var s11 = document.getElementById("s11").value;
    if (s11 != "") {
        nbt = nbt + `{Count:1b,id:"${s11}"},`
    }
    var s12 = document.getElementById("s12").value;
    if (s12 != "") {
        nbt = nbt + `{Count:1b,id:"${s12}"},`
    }
    var s13 = document.getElementById("s13").value;
    if (s13 != "") {
        nbt = nbt + `{Count:1b,id:"${s13}"},`
    }
    var s14 = document.getElementById("s14").value;
    if (s14 != "") {
        nbt = nbt + `{Count:1b,id:"${s14}"},`
    }
    var s15 = document.getElementById("s15").value;
    if (s15 != "") {
        nbt = nbt + `{Count:1b,id:"${s15}"},`
    }
    var s16 = document.getElementById("s16").value;
    if (s16 != "") {
        nbt = nbt + `{Count:1b,id:"${s16}"},`
    }
    document.getElementById("outputcmd").innerHTML = `/give @s bundle{Items:[${nbt}]}`;
}
