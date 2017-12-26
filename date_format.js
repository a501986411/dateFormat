;(function(){
    $.extend({
        dateFormat:function(format,unixTime){
            if(format === undefined){
                format = 'Y-M-D H:I:S'
            }
            if(unixTime === undefined){
                unixTime = Date.now();
            }
            var date = new Date(unixTime);
            var y = date.getFullYear();
            var m = date.getMonth()+1;
            var d = date.getDate();
            var h = date.getHours();
            var i = date.getMinutes();
            var s = date.getSeconds();
            //年份
            if(format.indexOf('Y') > -1){
                format = format.replace('Y',y);
            }else if(format.indexOf('y') > -1){
                format = format.replace('y',y);
            }
            //月份
            if(format.indexOf('M') > -1){
                format = format.replace('M',m);
            } else if(format.indexOf('m') > -1){
                if(m < 10){
                    m = '0'+m.toString();
                }
                format = format.replace('m',m);
            }
            //日期
            if(format.indexOf('D') > -1){
                if(d < 10){
                    d = '0'+d.toString();
                }
                format = format.replace('D',d);
            }else if(format.indexOf('d') > -1){
                format = format.replace('d',d);
            }
            //小时
            if(format.indexOf('H') > -1){
                if(h < 10){
                    h = '0'+h.toString();
                }
                format = format.replace('H',h);
            }else if(format.indexOf('h') > -1){
                format = format.replace('h',h);
            }
            //分钟
            if(format.indexOf('I') > -1){
                if(i < 10){
                    i = '0'+i.toString();
                }
                format = format.replace('I',i);
            }else if(format.indexOf('i') > -1){
                format = format.replace('i',i);
            }
            //秒
            if(format.indexOf('S') > -1){
                if(s < 10){
                    s = '0'+s.toString();
                }
                format = format.replace('S',s);
            }else if(format.indexOf('s') > -1){
                format = format.replace('s',s);
            }
            return format;
        },
        nextYearOneDay:function(day){ //明年的此刻
                if(day === undefined){
                    day = this.dateFormat();
                }
                var date = new Date(Date.parse(day));
                var y = date.getFullYear();
                var m = date.getMonth()+1;
                var d = date.getDate();
                var h = date.getHours();
                var i = date.getMinutes();
                var s = date.getSeconds();
                var nextY = parseInt(y)+1;
                var nextM = parseInt(m);
                var nextd = parseInt(d);
                //是否是闰年
                if(parseInt(y)%4 == 0){ //闰年
                    if(parseInt(m) == 2 && parseInt(d) == 29){ //2月29日 那么明年的今天应该是3月1日
                        nextM = '03';
                        nextd = '01'
                    }
                }else{//平年
                    if(parseInt(nextY)%4 == 0 && parseInt(m) == 3 && parseInt(d) == 1){ //若果下一年是闰年
                        nextM = '02';
                        nextd = '29'
                    }
                }
            return Date.parse(nextY + '-' + nextM + '-' + nextd +' ' + h + ':' + i + ':' + s);
        }
    });
})(jQuery);