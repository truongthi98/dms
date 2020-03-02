var table;
function initTableData() {
    var data = [
        {   "Loại device": "TB_LAMVIEC",
            "Mã device": "Laptop 02",
            "Thông tin Device": "Dell 2019",
            "Trạng thái": "Đang mượn",
            "Người mượn": "Nguyen Van Anh",
            "Email":"Anhnv@ominext",
            "Ngày nhận": "10/1/2020",
            "Ngày bàn giao": "11/1/2020",
            "Ngày thu hồi": "20/1/2020",
            "Ngày trả": "21/1/2020",
            "Action": "<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#Editqlnk' style='margin-right:5px'>Sửa</button>" +
                "<button type='button' onclick=\"alert('Bạn có muốn xóa không!!!')\" class='btn btn-danger btn-sm' data-toggle='modal' data-target='#Deleteqlnk'>Xóa</button>"
        },
        {   "Loại device": "TB_LAMVIEC",
            "Mã device": "Laptop 01",
            "Thông tin Device": "HP 2019",
            "Trạng thái": "Đang mượn",
            "Người mượn": "Nguyen Van Bac",
            "Email":"Bacnv@ominext",
            "Ngày nhận": "8/1/2020",
            "Ngày bàn giao": "9/1/2020",
            "Ngày thu hồi": "15/1/2020",
            "Ngày trả": "16/1/2020",
            "Action": "<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#Editqlnk' style='margin-right:5px'>Sửa</button>" +
                "<button type='button' onclick=\"alert('Bạn có muốn xóa không!!!')\" class='btn btn-danger btn-sm' data-toggle='modal' data-target='#Deleteqlnk'>Xóa</button>"
        },
        {   "Loại device": "TB_TEST",
            "Mã device": "IPAD 01",
            "Thông tin Device": "Ipad 2019",
            "Trạng thái": "Đã Trả",
            "Người mượn": "Pham Phu Cuong",
            "Email":"Cuongnp@ominext",
            "Ngày nhận": "3/1/2020",
            "Ngày bàn giao": "4/1/2020",
            "Ngày thu hồi": "10/1/2020",
            "Ngày trả": "12/1/2020",
            "Action": "<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#Editqlnk' style='margin-right:5px'>Sửa</button>" +
                "<button type='button' onclick=\"alert('Bạn có muốn xóa không!!!')\" class='btn bbtn-danger btn-sm' data-toggle='modal' data-target='#Deleteqlnk'>Xóa</button>"
        },
        {   "Loại device": "TB_LAMVIEC",
            "Mã device": "Laptop 05",
            "Thông tin Device": "Mac 2018",
            "Trạng thái": "Đã Trả",
            "Người mượn": "Vu Van The",
            "Email":"thevv@ominext",
            "Ngày nhận": "3/1/2020",
            "Ngày bàn giao": "4/1/2020",
            "Ngày thu hồi": "11/1/2020",
            "Ngày trả": "12/1/2020",
            "Action": "<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#Editqlnk' style='margin-right:5px'>Sửa</button>" +
                "<button type='button' onclick=\"alert('Bạn có muốn xóa không!!!')\" class='btn btn-danger btn-sm' data-toggle='modal' data-target='#Deleteqlnk'>Xóa</button>"
        },
        {   "Loại device": "TB_LAMVIEC",
            "Mã device": "Laptop 05",
            "Thông tin Device": "Mac 2018",
            "Trạng thái": "Đã Trả",
            "Người mượn": "Vu Van The",
            "Email":"thevv@ominext",
            "Ngày nhận": "3/1/2020",
            "Ngày bàn giao": "4/1/2020",
            "Ngày thu hồi": "11/1/2020",
            "Ngày trả": "12/1/2020",
            "Action": "<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#Editqlnk' style='margin-right:5px'>Sửa</button>" +
                "<button type='button' onclick=\"alert('Bạn có muốn xóa không!!!')\" class='btn btn-danger btn-sm' data-toggle='modal' data-target='#Deleteqlnk'>Xóa</button>"
        },
        {   "Loại device": "TB_LAMVIEC",
            "Mã device": "Laptop 05",
            "Thông tin Device": "Mac 2018",
            "Trạng thái": "Đã Trả",
            "Người mượn": "Vu Van The",
            "Email":"thevv@ominext",
            "Ngày nhận": "3/1/2020",
            "Ngày bàn giao": "4/1/2020",
            "Ngày thu hồi": "11/1/2020",
            "Ngày trả": "12/1/2020",
            "Action": "<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#Editqlnk' style='margin-right:5px'>Sửa</button>" +
                "<button type='button' onclick=\"alert('Bạn có muốn xóa không!!!')\" class='btn btn-danger btn-sm' data-toggle='modal' data-target='#Deleteqlnk'>Xóa</button>"
        },
        {   "Loại device": "TB_LAMVIEC",
            "Mã device": "Laptop 05",
            "Thông tin Device": "Mac 2018",
            "Trạng thái": "Đã Trả",
            "Người mượn": "Vu Van The",
            "Email":"thevv@ominext",
            "Ngày nhận": "3/1/2020",
            "Ngày bàn giao": "4/1/2020",
            "Ngày thu hồi": "11/1/2020",
            "Ngày trả": "12/1/2020",
            "Action": "<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#Editqlnk' style='margin-right:5px'>Sửa</button>" +
                "<button type='button' onclick=\"alert('Bạn có muốn xóa không!!!')\" class='btn btn-danger btn-sm' data-toggle='modal' data-target='#Deleteqlnk'>Xóa</button>"
        }
    ];
    table = $('#deviceCustomer').DataTable({
        "processing": true,
        data,
        columns:[
            { data: 'Loại device' },
            { data: 'Mã device' },
            { data: 'Thông tin Device' },
            { data: 'Trạng thái' },
            { data: 'Người mượn' },
            { data: 'Email' },
            { data: 'Ngày nhận' },
            { data: 'Ngày bàn giao' },
            { data: 'Ngày thu hồi'},
            { data: 'Ngày trả' },
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




