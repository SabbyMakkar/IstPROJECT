function countCharacterType() {
        var str = document.getElementById('string').value
        var vowels = 0,
          consonant = 0,
          specialChar = 0,
          digit = 0,
          uppercase = 0,
          lowercase = 0;
        for (var i = 0; i < str.length; i++) {
          var ch = str[i];
          var ch1 = ch;
          if ((ch >= "a" && ch <= "z") ||
          (ch >= "A" && ch <= "Z")) {
            if (ch == ch.toUpperCase())
            uppercase++;
            else
            lowercase++;
            ch = ch.toLowerCase();

            if (ch == "a" || ch == "e" || ch == "i" ||
            ch == "o" || ch == "u")
              vowels++;
            else consonant++;
          } else if (ch >= "0" && ch <= "9") digit++;
          else specialChar++;
        }
        document.write("Vowels: " + vowels + "<br>");
        document.write("Consonant: " + consonant + "<br>");
        document.write("Digit: " + digit + "<br>");
        document.write("UpperCase Characters: " + uppercase + "<br>");
        document.write("LowerCase CHaracters: "+ lowercase+"<br>");
        document.write("Special Character: " + specialChar + "<br>");
      }
