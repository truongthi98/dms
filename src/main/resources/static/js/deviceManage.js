var table;
function initTableData() {
    var data = [
        {   "Loại device": "TB_LAMVIEC",
            "Mã device": "Laptop 02",
            "Thông tin Device": "Dell 2019",
            "Ngày nhập kho": "20/1/2020",
            "Thời hạn bảo hành": "20/1/2020",
            "Đơn vị cung cấp và bảo hành":"Anhnv@ominext",
            "Thời gian bàn giao lần đầu tiên": "10/1/2020",
            "Action":"<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#Editqlnk' style='margin-right:5px'>Sửa</button>" +
                "<button type='button' onclick=\"alert('Bạn có muốn xóa không!!!')\" class='btn btn-danger btn-sm' data-toggle='modal' data-target='#Deleteqlnk'>Xóa</button>"
        },
        {   "Loại device": "TB_LAMVIEC",
            "Mã device": "Laptop 02",
            "Thông tin Device": "Dell 2019",
            "Ngày nhập kho": "20/1/2020",
            "Thời hạn bảo hành": "20/1/2020",
            "Đơn vị cung cấp và bảo hành":"Anhnv@ominext",
            "Thời gian bàn giao lần đầu tiên": "10/1/2020",
            "Action": "<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#Editqlnk' style='margin-right:5px'>Sửa</button>" +
                "<button type='button' onclick=\"alert('Bạn có muốn xóa không!!!')\" class='btn btn-danger btn-sm' data-toggle='modal' data-target='#Deleteqlnk'>Xóa</button>"
        },
        {  "Loại device": "TB_LAMVIEC",
            "Mã device": "Laptop 02",
            "Thông tin Device": "Dell 2019",
            "Ngày nhập kho": "20/1/2020",
            "Thời hạn bảo hành": "20/1/2020",
            "Đơn vị cung cấp và bảo hành":"Anhnv@ominext",
            "Thời gian bàn giao lần đầu tiên": "10/1/2020",
            "Action": "<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#Editqlnk' style='margin-right:5px'>Sửa</button>" +
                "<button type='button' onclick=\"alert('Bạn có muốn xóa không!!!')\" class='btn btn-danger btn-sm' data-toggle='modal' data-target='#Deleteqlnk'>Xóa</button>"
        },
        {  "Loại device": "TB_LAMVIEC",
            "Mã device": "Laptop 02",
            "Thông tin Device": "Dell 2019",
            "Ngày nhập kho": "20/1/2020",
            "Thời hạn bảo hành": "20/1/2020",
            "Đơn vị cung cấp và bảo hành":"Anhnv@ominext",
            "Thời gian bàn giao lần đầu tiên": "10/1/2020",
            "Action": "<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#Editqlnk' style='margin-right:5px'>Sửa</button>" +
                "<button type='button' onclick=\"alert('Bạn có muốn xóa không!!!')\" class='btn btn-danger btn-sm' data-toggle='modal' data-target='#Deleteqlnk'>Xóa</button>"
        },
        {  "Loại device": "TB_LAMVIEC",
            "Mã device": "Laptop 02",
            "Thông tin Device": "Dell 2019",
            "Ngày nhập kho": "20/1/2020",
            "Thời hạn bảo hành": "20/1/2020",
            "Đơn vị cung cấp và bảo hành":"Anhnv@ominext",
            "Thời gian bàn giao lần đầu tiên": "10/1/2020",
            "Action": "<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#Editqlnk' style='margin-right:5px'>Sửa</button>" +
                "<button type='button' onclick=\"alert('Bạn có muốn xóa không!!!')\" class='btn btn-danger btn-sm' data-toggle='modal' data-target='#Deleteqlnk'>Xóa</button>"
        },
        {  "Loại device": "TB_LAMVIEC",
            "Mã device": "Laptop 02",
            "Thông tin Device": "Dell 2019",
            "Ngày nhập kho": "20/1/2020",
            "Thời hạn bảo hành": "20/1/2020",
            "Đơn vị cung cấp và bảo hành":"Anhnv@ominext",
            "Thời gian bàn giao lần đầu tiên": "10/1/2020",
            "Action": "<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#Editqlnk' style='margin-right:5px'>Sửa</button>" +
                "<button type='button' onclick=\"alert('Bạn có muốn xóa không!!!')\" class='btn btn-danger btn-sm' data-toggle='modal' data-target='#Deleteqlnk'>Xóa</button>"
        }
    ];
    table = $('#deviceManage').DataTable({
        "processing": true,
        data,
        columns:[
            { data: 'Loại device' },
            { data: 'Mã device' },
            { data: 'Thông tin Device' },
            { data: 'Ngày nhập kho' },
            { data: 'Thời hạn bảo hành' },
            { data: 'Đơn vị cung cấp và bảo hành' },
            { data: 'Thời gian bàn giao lần đầu tiên' },
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




