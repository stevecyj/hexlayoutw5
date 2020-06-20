$(document).ready(function () {
    // 漢堡選單
    // $('.ham-icon').click(function(e) {
    //     e.preventDefault();
    //     $('.navbar').toggleClass('active')
    // })
    
    $('#sub-menu-dropdown').hide();
    $('#sub-menu-add-admin').hide();
    
    let params = (new URL(document.location)).searchParams;
    // let title = params.get('title'); // is the string "Jonathan Smith".
    // let age = parseInt(params.get('age')); // is the number 18
    var title = $(this).attr('title');
    console.log(title);
    // 動態產生子選單Title
    if (title == 'Assignment'){
        $('#sub-menu-dropdown').show();
    }else if (title == 'Admin'){
        $('#sub-menu-add-admin').show();
    }

    // Assignment 單元replay按鈕跳出簡易編輯畫面
    $('.custom-btn-success').click(function (e) {
        // 取消預設 event 事件
        e.preventDefault();
        // 顯示編輯視窗
        $('.replay').show();
    })
    
    $('.custom-btn-cancel').click(function (e) {
        // 取消預設 event 事件
        e.preventDefault(); 
        // 隱藏編輯視窗
        $('.replay').hide();    
    })

    // admin單元arrow_down icon 切換180度
    $('.arrow-down').click(function (e) {
        // 取消預設 event 事件
        e.preventDefault();       
        $('.arrow-down').toggleClass('arrow-active')   
    })
});