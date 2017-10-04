function solve(s) {
    var bufor = 0;
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) == "o" {
                bufor++
                if (count < bufor) {
                    count = bufor;
                }
            }
            else {
                bufor = 0
            }
    }
            return count;
    }
