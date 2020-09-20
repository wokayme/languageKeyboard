$.fn.languageKeyboard = function(options) {

    var defaults = {
        timeout: 500,
        interval: 500,
        replaceLetters: {}
    };

    var settings = $.extend( {}, defaults, options );
    var hold = false;
    var holdTimeout;
    var letterChangeInterval;
    var clickedLetter;

    $(this).on('input',function(){
        holdTimeout = setTimeout(function(){
            hold = true;
        }, settings.timeout)
    })

    $(this).on('keydown',function(e){
        clickedLetter = e.key;
        var value = e.target.value;
        var cursorPosition = e.target.selectionStart - 1;

        if(hold && settings.replaceLetters[clickedLetter] && !letterChangeInterval){
            var currentIndex = 0;
            letterChangeInterval = setInterval(()=>{
                e.target.value = value.split('').map(function(letter, index){return index === cursorPosition ? settings.replaceLetters[clickedLetter][currentIndex] : letter}).join('');
                e.target.selectionStart = cursorPosition+1;
                e.target.selectionEnd = cursorPosition+1;

                currentIndex = settings.replaceLetters[clickedLetter].length <= currentIndex+1 ? 0 : currentIndex + 1;
            }, settings.interval)
        }
    })

    $(this).on('keyup',function(){
        clearTimeout(holdTimeout);
        clearInterval(letterChangeInterval);
        hold = false;
        letterChangeInterval = undefined;
    })

    return this;
};

$.fn.languageKeyboard