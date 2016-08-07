/**
 * Created by jialao on 2016/8/7.
 */
var express = require('express')
router = express.Router(),
    formidable = require('formidable'),
    fs = require('fs'),
    TITLE = 'formidable上传示例';
var path = require('path')
var app = express();
/* GET home page. */
AVATAR_UPLOAD_FOLDER = path.join(__dirname,'/upload/')
app.use(express.static(path.join(__dirname)));

app.get('/upload', function(req, res) {
    res.sendFile(path.join(__dirname,'upload.html'));
});

app.post('/', function(req, res) {

    var form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'utf-8';		//设置编辑
    form.uploadDir =   AVATAR_UPLOAD_FOLDER;	 //设置上传目录
    form.keepExtensions = true;	 //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小

    form.parse(req, function(err, fields, files) {


        console.log(files)

        if (err) {
            res.locals.error = err;
            res.render('index', { title: TITLE });
            return;
        }

        var extName = '';  //后缀名
        switch (files.fulAvatar.type) {
            case 'image/pjpeg':
                extName = 'jpg';
                break;
            case 'image/jpeg':
                extName = 'jpg';
                break;
            case 'image/png':
                extName = 'png';
                break;
            case 'image/x-png':
                extName = 'png';
                break;
        }

        if(extName.length == 0){
            res.locals.error = '只支持png和jpg格式图片';
            res.render('index', { title: TITLE });
            return;
        }

        var filename = files.fulAvatar.name;
        
        var newPath = form.uploadDir + filename;

        console.log(newPath);
        fs.renameSync(files.fulAvatar.path, newPath);  //重命名
    });

    res.locals.success = '上传成功';
    res.sendFile(path.join(__dirname,'upload.html'));
});

app.listen('2337',function(err){
    if(err){
        console.log(err)
    }
    console.log('listening on http://localhost:%s/',1337);
})

