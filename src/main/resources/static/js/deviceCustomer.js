var table;
var data = [];
$(document).ready(function (){
    initTableData();
    getCustomerDevices();
    $("#list-header").on({
        mouseenter: function() {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(this).css("background-color", "lightblue");
        },
    });
});
function getCustomerDevices() {
    $.ajax({
        url: 'api/customerdevices',
        method: 'GET',
        success: function (jqXHR) {
            loadCustomerDevices(jqXHR);
        }
    })
}

function loadCustomerDevices(jqXHR) {
    $.each(jqXHR,function (i) {
        var customerDevice = jqXHR[i];
        data.push({
            id: customerDevice.id,
            code: customerDevice.device_code,
            type: customerDevice.device_type,
            description: customerDevice.device_description,
            status: customerDevice.status,
            staffName: customerDevice.staff_name,
            staffEmail: customerDevice.staff_email,
            genCodeDate: customerDevice.gen_code_date,
            handOverDate: customerDevice.hand_over_date,
            revokeDate: customerDevice.revoke_date,
            returnDate: customerDevice.return_date,
            Action: "<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#Editqlnk' style='margin-right:5px'>Sửa</button>" +
        "<button type='button' onclick=\"alert('Bạn có muốn xóa không!!!')\" class='btn btn-danger btn-sm' data-toggle='modal' data-target='#Deleteqlnk'>Xóa</button>"
    })
    });
    table = $('#deviceCustomer').DataTable({
        "processing": true,
        data,
        columns:[
            { data: 'type' },
            { data: 'code' },
            { data: 'description' },
            { data: 'status' },
            { data: 'staffName' },
            { data: 'staffEmail' },
            { data: 'genCodeDate' },
            { data: 'handOverDate' },
            { data: 'revokeDate' },
            { data: 'returnDate' },
            { data: 'Action'}
        ],
        "lengthMenu": [[5,10,25,50,-1],[5,10,25,50,"ALL"]]
    });
}





