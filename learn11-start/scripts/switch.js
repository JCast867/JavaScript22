function calculate() {
    var chi = '';
    let myname = document.getElementById("fname").value;
    let month = parseInt(document.getElementById("month").value);
    let date = parseInt(document.getElementById("date").value);
    let year = parseInt(document.getElementById("year").value);


    switch (year) {
        // year of the rat
        case 1924:
        case 1936:
        case 1948:
        case 1960:
        case 1972:
        case 1984:
        case 1996:
        case 2008:
        case 2020:
            chi = "Rat";
            break;
        // year of the ox
        case 1949:
        case 1961:
        case 1973:
        case 1985:
        case 1997:
        case 2009:
        case 2021:
            chi = "Ox";
            break;
        // year of the tiger
        case 1950:
        case 1962:
        case 1974:
        case 1986:
        case 1998:
        case 2010:
        case 2022:
            chi = "Tiger"
            break;
        // year of the rabbit
        case 1951:
        case 1963:
        case 1975:
        case 1987:
        case 1999:
        case 2011:
        case 2023:
            chi = "Rabbit";
            break;
        // year of the dragon
        case 1952:
        case 1964:
        case 1976:
        case 1988:
        case 2000:
        case 2012:
        case 2024:
            chi = "Dragon";
            break;
        // year of the snake
        case 1953:
        case 1965:
        case 1977:
        case 1989:
        case 2001:
        case 2013:
        case 2025:
            chi = "Snake";
            break;
        // year of the horse
        case 1954:
        case 1966:
        case 1978:
        case 1990:
        case 2002:
        case 2014:
        case 2026:
            chi = "Horse";
            break;
        // year of the goat
        case 1955:
        case 1967:
        case 1979:
        case 1991:
        case 2003:
        case 2015:
        case 2027:
            chi = "Goat"
            break;
        // year of the monkey
        case 1956:
        case 1968:
        case 1980:
        case 1992:
        case 2004:
        case 2016:
        case 2028:
            chi = "Monkey";
            break;
        // year of the rooster
        case 1957:
        case 1969:
        case 1981:
        case 1993:
        case 2005:
        case 2017:
        case 2029:
            chi = "Rooster";
            break;
        // year of the dog
        case 1958:
        case 1970:
        case 1982:
        case 1994:
        case 2006:
        case 2018:
        case 2030:
            chi = "Dog";
            break;
        // year of the pig
        case 1959:
        case 1971:
        case 1983:
        case 1995:
        case 2007:
        case 2019:
        case 2031:
            chi = "Pig";
            break;
        default:
            chi = "Unknown";
    }

    if ((month == 1 && date >= 20) || (month == 2 && date <= 18)) {
        zodiac = "Aquarius";
    } else if ((month == 2 && date >= 19) || (month == 3 && date <= 20)) {
        zodiac = "Pisces";
    } else if ((month == 3 && date >= 21) || (month == 4 && date <= 19)) {
        zodiac = "Aries";
    } else if ((month == 4 && date >= 20) || (month == 5 && date <= 20)) {
        zodiac = "Taurus";
    } else if ((month == 5 && date >= 21) || (month == 6 && date <= 20)) {
        zodiac = "Gemini";
    } else if ((month == 6 && date >= 21) || (month == 7 && date <= 22)) {
        zodiac = "Cancer";
    } else if ((month == 7 && date >= 23) || (month == 8 && date <= 22)) {
        zodiac = "Leo";
    } else if ((month == 8 && date >= 23) || (month == 9 && date <= 22)) {
        zodiac = "Virgo";
    } else if ((month == 9 && date >= 23) || (month == 10 && date <= 22)) {
        zodiac = "Libra";
    } else if ((month == 10 && date >= 23) || (month == 11 && date <= 21)) {
        zodiac = "Scorpio";
    } else if ((month == 11 && date >= 22) || (month == 12 && date <= 21)) {
        zodiac = "Sagittarius";
    } else if ((month == 12 && date >= 22) || (month == 1 && date <= 19)) {
        zodiac = "Capricorn";
    } else {
        zodiac = "Unknown";
    }

    document.getElementById("nameout").innerHTML = myname;
    document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;
    document.getElementById("zodiac").innerHTML = "Your zodiac sign is: " + zodiac;

}