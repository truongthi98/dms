var table;
function initTableData() {
    var data = [
        {   "Tên nhân viên": "Nguyen Van Anh",
            "Email": "anh@gmail.com",
            "Số lượng thiết bị mượn": "2",
            "Loại thiết bị": "Máy tính",
            "Mã thiết bị": "BU4",
        }
    ];
    table = $('#deviceStaff').DataTable({
        "processing": true,
        data,
        columns:[
            { data: 'Tên nhân viên' },
            { data: 'Email' },
            { data: 'Số lượng thiết bị mượn' },
            { data: 'Loại thiết bị' },
            { data: 'Mã thiết bị'}
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




