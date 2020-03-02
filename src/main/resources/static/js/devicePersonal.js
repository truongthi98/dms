var table;
function initTableData() {
    var data = [
        {   "Loại device": "TB_LAMVIEC",
            "Mã device": "Laptop 02",
            "Thông tin Device": "Dell 2019",
            "Họ tên nhân viên": "Nguyen Van Anh",
            "Phòng/ban": "BU4",
            "Email":"Anhnv@ominext",
            "Action": "<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#Editqlnk' style='margin-right:5px'>Sửa</button>" +
                "<button type='button' onclick=\"alert('Bạn có muốn xóa không!!!')\" class='btn btn-danger btn-sm' data-toggle='modal' data-target='#Deleteqlnk'>Xóa</button>"
        },
        {   "Loại device": "TB_TEST",
            "Mã device": "Iphone X",
            "Thông tin Device": "Iphone X",
            "Họ tên nhân viên": "Nguyen Van Vung",
            "Phòng/ban": "BU1",
            "Email":"Vungnv@ominext",
            "Action": "<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#Editqlnk' style='margin-right:5px'>Sửa</button>" +
                "<button type='button' onclick=\"alert('Bạn có muốn xóa không!!!')\" class='btn btn-danger btn-sm' data-toggle='modal' data-target='#Deleteqlnk'>Xóa</button>"
        }
    ];
    table = $('#devicePersonal').DataTable({
        "processing": true,
        data,
        columns:[
            { data: 'Loại device' },
            { data: 'Mã device' },
            { data: 'Thông tin Device' },
            { data: 'Họ tên nhân viên' },
            { data: 'Phòng/ban'},
            { data: 'Email' },
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




