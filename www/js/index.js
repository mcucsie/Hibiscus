document.addEventListener('deviceready', function() {
    var $app = document.getElementById('app'),
        $account = document.getElementById('account'),
        $password = document.getElementById('password'),
        $submit = document.getElementById('submit'),
        $table = document.createElement('table'),
        callback = function(hasError, data) {
            if (hasError) {
                alert('登入失敗，請確認帳號密碼是否輸入錯誤，已錯誤 ' + data.step + ' 次，\n請注意避免 10 次，否則會被鎖帳號，需要去課務組解鎖。');
                return;
            }
            
            $table.querySelectorAll('td').forEach(function() {
                this.innerHTML = '';
            });
            
            for (var i = 0; i < data.length; ++i) {
                var course = data[i],
                    html = course.subjectName + '<br />' + course.site.join('<br />');
                for (var j = 0; j < course.time.length; ++j) {
                    var time = course.time[j], cid = 'c' + time.day;
                    for (var k = 0; k < time.sec.length; ++k) {
                        var sec = time.sec[k], sid = cid + sec;
                        document.getElementById(sid).innerHTML = html;
                    }
                }
            }
        };
        
        $submit.onclick = function() {
            var data = JSON.stringify({account: $account.value, password: $password.value}),
                xhr = new XMLHttpRequest;
            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    callback(xhr.status !== 200, JSON.parse(xhr.responseText));
                }
            };
            xhr.open('POST', 'https://coapi.csie.mcu.edu.tw/course/8/my/');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(data);
        }
        
        $app.appendChild($table);
}, false);
