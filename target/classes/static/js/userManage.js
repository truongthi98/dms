var table;
function initTableData() {
    var data = [
        {   "UserID": "Anhnv@ominext.com",
            "Họ và tên" : "Nguyen Van Anh",
            "Passwowd": "12345678",
            "isAdmin" : "<i class='fa fa-check-circle-o overlay'></i>",
            "Ngày tạo" : "16/1/2020",
            "Người tạo" : "Admin",
            "Action": "<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#Editqlnk' style='background-color: gold; margin-right:5px'>Sửa</button>" +
                "<button type='button' onclick=\"alert('Bạn có muốn xóa không!!!')\" class='btn btn-primary btn-sm' data-toggle='modal' data-target='#Deleteqlnk'>Xóa</button>"
        },
        {
            "UserID": "Bacnv@ominext.com",
            "Họ và tên" : "Nguyen Van Bac",
            "Passwowd": "12345678",
            "isAdmin" : "<is class='fa fa-time overlay'></is>",
            "Ngày tạo" : "17/1/2020",
            "Người tạo" : "Admin",
            "Action": "<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#Editqlnk' style='background-color: gold; margin-right:5px'>Sửa</button>" +
                "<button type='button' onclick=\"alert('Bạn có muốn xóa không!!!')\" class='btn btn-primary btn-sm' data-toggle='modal' data-target='#Deleteqlnk'>Xóa</button>"

        }
    ];
    table = $('#users').DataTable({
        "processing": true,
        "ajax":{
            "url" : "/"
        },
        columns:[
            { data: 'UserID' },
            { data: 'Họ và tên' },
            { data: 'isAdmin' },
            { data: 'Ngày tạo' },
            { data: 'Người tạo'},
            { data: 'Action'}
        ],
        "lengthMenu": [[5,10,25,50,-1],[5,10,25,50,"ALL"]]
    });
}


$(document).ready(function (){
    initTableData();
    $("#list-header").on({
        mouseenter: function() {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(this).css("background-color", "lightblue");
        },
    });
});




