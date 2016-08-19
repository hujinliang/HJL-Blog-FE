/**
 * Created by jialao on 2016/7/21.
 */
import {UserResource,AuthResource,ArticleResource,TagResource,MobileResource,CommentResource} from './resources'

export default {
    //user
    localLogin: function (data) {

        return AuthResource('post', 'local', data)
    },
    getSnsLogins: function () {
        return UserResource('get', 'snsLogins')
    },
    getMe: function (data) {
        return UserResource('get', 'me', data)
    },
    mdUser: function (data) {

        return UserResource('put', 'mdUser', data)
    },
    getTagList:function () {
        return TagResource('get','getFrontTagList')
    },
    getApps:function () {
        return MobileResource('get','getApps')
    },
    //article
    getArticleList:function (options) {
        return ArticleResource('get', 'getFrontArticleList', null, {params:options})
    },
    getArticleDetaile:function (id) {
        return ArticleResource('get', id, 'getFrontArticle')
    },
    toggleLike:function (id) {
        return ArticleResource('put',id,'toggleLike')
    },
    getPrenext:function (id,options) {
        return ArticleResource('get',id,'getPrenext', {params:options})
    },
    //comment
    getCommentList:function (id) {
        return CommentResource('get',id,'getFrontCommentList')
    },
    addNewComment:function (data) {
        return CommentResource('post', 'addNewComment', null, data)
    },
    addNewReply: function (id,data) {
        return CommentResource('post', id, 'addNewReply', data)
    },
    delComment:function (id) {
        return CommentResource('delete', id)
    },
    delReply: function (id,data) {
        return CommentResource('delete', id, 'delReply', data)
    },
    //admin
    getUserList: function(){
        return UserResource('get','getUserList');
    },
    addUser: function(data){
        return UserResource('post','addUser',data);
    },
    deleteUser: function(id){
        return UserResource('delete',id);
    },
    addTag: function(data){
        return TagResource('post','addTag',data);
    },
    getAdminTagList: function(){
        return TagResource('get','getTagList');
    } ,
    deleteTag: function(id){
        return TagResource('delete',id);
    },
    getAdminCommentList: function(){
        return CommentResource('get','getCommentList');
    },
    deleteComment: function(id){
        return CommentResource('delete',id);
    },
    addArticle: function(data){
        return ArticleResource('post','addArticle',null,data);
    },
    getAdminArticleList:function(){
        return ArticleResource('get','getArticleList');
    },
    deleteArticle: function(id){
        return ArticleResource('delete',id);
    }
}