/**
 * Created by jialao on 2016/8/6.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import '../../stylesheets/writePage.less'
import markIt from'./marked'
import Controller from './controller';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import {parseArticle} from '../../utiles'

const mapStateToProps = (state) => {
    return {
        adminTagList:state.adminTagList.toJS()
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions :bindActionCreators(actions,dispatch)
    }
};

@connect(mapStateToProps,mapDispatchToProps)
export default class WriteArticle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text:'',
            tags:[],
            downloadURL:'',
            startPoint:0,
            endPoint:0
        }
        this.changeValue = this.changeValue.bind(this);
        this.tag = this.tag.bind(this);
        this.changeData = this.changeData.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.save = this.save.bind(this);
        this.selectTag = this.selectTag.bind(this)
    }

    componentDidMount(){
        const {adminTagList,actions} = this.props;
        if(adminTagList.items.length <1){
            actions.getAdminTagList();
        }
    }

    changeValue(e){

        this.setState({text:e.target.value});
    }
    tag(item){
        return function(){

            var myField = this.refs.input;
            var startPoint;
            var endPoint;
            var text = this.state.text;
            var newText = text;

            if (document.selection) {
                myField.focus()
                sel = document.selection.createRange()
                sel.text = item
                sel.select()
            }
            else if (myField.selectionStart || myField.selectionStart == '0') {
                var startPos = myField.selectionStart
                var endPos = myField.selectionEnd

                var restoreTop = myField.scrollTop
                newText = text.substring(0, startPos) + item + text.substring(endPos,text.length)
                if (restoreTop > 0) {

                    myField.scrollTop = restoreTop
                }
                myField.focus()
                startPoint = startPos + item.length
                endPoint = startPos + item.length
            } else {
                newText += item
                myField.focus()
            }


            this.setState({
                text:newText,
                startPoint:startPoint,
                endPoint:endPoint
            });

        }.bind(this)
    }
    componentDidUpdate(prevProps,prevState){
        console.log('update');
        if(this.state.startPoint != prevState.startPoint)
        {
            this.refs.input.selectionStart = this.state.startPoint;
            this.refs.input.selectionEnd = this.state.endPoint;
            this.refs.input.focus();
        }

    }
    changeData(){
        var value = this.state.text;
        var blob = new Blob([value]);
        var objURL = URL.createObjectURL(blob);
        this.setState({
            downloadURL:objURL
        })
    }
    clearAll(){
        this.setState({
            text:''
        })
    }

    save(){

        let article = this.state.text;
        let data = parseArticle(article);
        if(this.state.tags.length){
            data.tags = this.state.tags
        }
        console.log(data)
        const {actions} = this.props;
        actions.addArticle(data)

    }

    selectTag(e,tid){
        if(e.target.className.indexOf('active') == -1){
            e.target.className += ' active';
            let tags = this.state.tags;
            tags.push(tid);
            this.setState({
                tags:tags
            })
        }else{
            e.target.className = 'tag-item';
            let tags = this.state.tags;
            tags.splice(tags.indexOf(tid),1);
            this.setState({
                tags:tags
            })
        }
    }

    render(){

        const {adminTagList} = this.props;
        console.log(this.state.tags)
        var class1,class2;
        class1 = "col-xs-6";
        class2 = "col-xs-6";
        return (
            <div id="app">
                <div className="container-fluid">
                    <Controller insert={this.tag} save={this.save} changeData={this.changeData} downloadURL={this.state.downloadURL} clearAll={this.clearAll} />
                    <div className="tag-container clearfix">
                        {adminTagList.items.length&&adminTagList.items.map((item,index) =>
                            <div className="tag-item" key={index} onClick={e => this.selectTag(e,item._id)}>
                                {item.name}
                            </div>
                        )}
                    </div>
                    <div className="row work-container">
                        <div className={class1}>
                            <div className="page editor">
                                <p className="title">编辑栏</p>
                                <hr/>
                                <textarea ref="input" id="marking" value={this.state.text} onChange={this.changeValue}></textarea>
                            </div>
                        </div>
                        <div className={class2}>
                            <div className="page">
                                <p className="title">预览栏</p>
                                <hr/>
                                <div id="markdown-content" className="markdown-content" ref="output" dangerouslySetInnerHTML={{__html: markIt(this.state.text)}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}