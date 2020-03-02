var table;
function initTableData() {
    var data = [
        {"Mã device": "Laptop 02",
            "Thông số mô tả Device": "Dell 2019",
            "Tình trạng": "Mới",
            "Trạng thái": "Sử dụng",
            "Người sử dụng gần nhất": "Anhnv",
            "Ngày cấp gần nhất":"12/1/2020",
            "Action":"<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#Editqlnk' style='margin-right:5px'>Sửa</button>" +
                "<button type='button' onclick=\"alert('Bạn có muốn xóa không!!!')\" class='btn btn-danger btn-sm' data-toggle='modal' data-target='#Deleteqlnk'>Xóa</button>"
        }
    ];
    table = $('#deviceCompany').DataTable({
        "processing": true,
        data,
        columns:[
            { data: 'Mã device' },
            { data: 'Thông số mô tả Device' },
            { data: 'Tình trạng' },
            { data: 'Trạng thái' },
            { data: 'Người sử dụng gần nhất' },
            { data: 'Ngày cấp gần nhất'},
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




