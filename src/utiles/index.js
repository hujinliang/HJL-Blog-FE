/**
 * Created by lenovo on 2016/7/23.
 */
import {API_ROOT} from '../config.js'


export function customTime(item){
    let nowTime = new Date().getTime();
    let minuteTime = 60*1000;
    let hourTime = 60*minuteTime;
    let dayTime = 24*hourTime;
    let monthTime = 30*dayTime;
    let yearTime = monthTime*12;

    let created = new Date(item).getTime()
    let delta = parseInt(nowTime) - parseInt(created);
    let descTime;
    if(delta >= yearTime){
        descTime = parseInt(delta/yearTime) + '年前';
    }else if(delta >= monthTime){
        descTime = parseInt(delta/monthTime) + '月前'
    }else if(delta >= dayTime){
        descTime = parseInt(delta/dayTime) +'天前'
    }else if(delta >=hourTime){
        descTime = parseInt(delta/hourTime) + '小时前'
    }else if(delta >= minuteTime){
        descTime = parseInt(delta/minuteTime) + '分钟前'
    }else{
        descTime = '刚刚'
    }
    return descTime
}

export function formatDate(time){
    let tmp = new Date(time);
    let year = tmp.getFullYear();
    let month = tmp.getMonth() + 1;
    let day = tmp.getDate();
    let hours = tmp.getHours();
    let minutes = tmp.getMinutes();
    return month + '月' + day + '日';
}

//分离title和content，并处理content中的image地址：![cat](cat.png)
export function parseArticle(text){

    let titleRegex = /#*\s+/;
    let divide = text.indexOf('\n');
    if(divide == -1){
        return {
            title:text.replace(titleRegex,''),
            content:''
        }
    }


    let title = text.slice(0,divide).replace(titleRegex,'');
    var content = text.slice(divide+1);

    
    content = content.replace(/([^\(]*\.(jpe?g|png|gif))(?=\))/g,function(match,$1,$2){
        return API_ROOT + 'upload/' + match
    });
    
    return {
        title,
        content
    }

}