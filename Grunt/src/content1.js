var finalForgotPassword = function() {
    document.getElementById('passWindow').style.display = 'none';
    document.getElementById('messages').style.display = 'none';
    document.getElementById('passwordWindow').style.display = 'block';
    document.getElementById('forgotPassEmail').value = '';
};

function sendGAEvent(category, action, label, value, non_int){
    label = category + '-' + label;
    label = label.toUpperCase();
    if(value !== undefined) {
        if(non_int !== undefined) {
            window.ga('send', 'event', category, action, label, value, {'nonInteraction': 1});
        } else {
            window.ga('send', 'event', category, action, label, value);
        }
    }
    else {
        window.ga('send', 'event', category, action, label);
    }
};
