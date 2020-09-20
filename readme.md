# Language keyboard jQuery plugin

-Plugin adding opportunity to use "special" language letters directly from keyboard without changing computer/browser language

# Live Demo
You can preview this plugin on: ``

# Quick Start

Import needed files

```
<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
  
  /* plugin files */
<script src="languageKeyboard.jquery.min.js"></script>
```

Init form

```
$("form").languageKeyboard()
```

# Options
`replaceLetters`: {} - Object containing letter and letter to replace in array
Example:
```
{
            'a': ['á'],
            'e': ['é'],
            'i': ['í'],
            'o': ['ó'],
            '?': ['¿'],
            'n': ['ñ'],
            'u': ['ú','ü'],
}
```

`timeout`:'number' - Time needed to hold key for start replacing letter (by default `500`)
`interval`:'number' - Time needed to swipe replace letter options (by default `500`

**Example initializate option for Spanish keyboard**
```

        $("form").languageKeyboard({replaceLetters:{
            'a': ['á'],
            'e': ['é'],
            'i': ['í'],
            'o': ['ó'],
            '?': ['¿'],
            'n': ['ñ'],
            'u': ['ú','ü'],
        }});
```
# Author

### Krzysztof Łokaj "Wokay"
- Blog https://wokay.me/
- Twitter https://twitter.com/_Wokay
- Linkedin https://www.linkedin.com/in/wokay/
