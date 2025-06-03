window.onload = function () {
    var display = document.getElementById('display');
    var buttons = document.getElementsByClassName('btn');
    var input = '';

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            var value = this.getAttribute('data-value');

            if (value === 'C') {
                input = '';
                display.textContent = '';
            } else if (value === '=') {
                try {
                    var result = eval(input);
                    display.textContent = result;
                    input = result.toString();
                } catch (e) {
                    display.textContent = 'Error';
                    input = '';
                }
            } else {
                input += value;
                display.textContent = input;
            }
        };
    }
};
