var x = setInterval(function() {
    $.ajax({
        url: 'https://harker-schedule.herokuapp.com/',
        type: 'GET',
        //dataType: 'json',
        beforeSend: function(xhr){
            xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
        },
        success: function(res) {
            document.write(res)
            document.close()
        }
    });
}, 60000)