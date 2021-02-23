function print_timings() {
    $.ajax({
        url: 'https://harker-schedule.herokuapp.com/',
        type: 'GET',
        beforeSend: function(xhr){
            xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
        },
        success: function(res) {
            document.write(res)
            document.close()
            if (res == 'School\'s out!') {
                var y = setInterval(function() {
                    //
                }, 60000*3.5)
            }
        }
    })
}
print_timings()
var x = setInterval(function() {
    print_timings()
}, 45000)