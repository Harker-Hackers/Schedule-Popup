function print_timings() {
    $.ajax({
        url: 'https://harker-schedule.herokuapp.com/',
        type: 'GET',
        beforeSend: function(xhr){
            xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
        },
        success: function(res) {
            res = '<title>Harker Schedule</title><link rel="stylesheet" href="style.css"><p>' + res + '</p>'
            document.write(res)
            document.close()
            if (res == 'School\'s out!') {
                setInterval(function() {
                    //
                }, 60000*3.5)
            }
        }
    })
}
print_timings()
setInterval(function() {
    print_timings()
}, 45000)