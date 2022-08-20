function cekZodiak() {
    let bulan = document.getElementById("bulan").value;
    let box = document.getElementById("notif");

    if ( bulan === "mei" ) {
        box.innerHTML = "Zodiak Anda Aries";
    }else if ( bulan === "april") {
        box.innerHTML = "Zodiak Anda Taurus";
    }else if ( bulan === "juni") {
        box.innerHTML = "Zodiak Anda Gemini";
    }else if ( bulan === "juli") {
        box.innerHTML = "Zodiak Anda Cancer";
    }else if ( bulan === "agustus") {
        box.innerHTML = "Zodiak Anda Leo";
    }else if ( bulan === "september") {
        box.innerHTML = "Zodiak Anda Virgo";
    }else if ( bulan === "oktober") {
        box.innerHTML = "Zodiak Anda Libra";
    }else if ( bulan === "november") {
        box.innerHTML = "Zodiak Anda Scorpio";
    }else if ( bulan === "desember") {
        box.innerHTML = "Zodiak Anda Sagitarius";
    }else if ( bulan === "januari") {
        box.innerHTML = "Zodiak Anda Capricorn";
    }else if ( bulan === "februari") {
        box.innerHTML = "Zodiak Anda Aquarius";
    }else if ( bulan === "maret") {
        box.innerHTML = "Zodiak Anda Pisces";
    }else {
        box.innerHTML = "Yang anda masukan bukan bulan!";
    }
}