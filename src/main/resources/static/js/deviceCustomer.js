var table;
var data = [];
$(document).ready(function (){
    getCustomerDevices();
    $("#list-header").on({
        mouseenter: function() {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(this).css("background-color", "lightblue");
        },
    });
    $("#submit-add").on('click',function () {
       sendAddCustomerDevice();
    })
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
        $.each(jqXHR, function (i) {
            var customerDevice = jqXHR[i];
            data.push({
                id: customerDevice.id,
                code: customerDevice.code,
                type: customerDevice.type,
                description: customerDevice.description,
                status: customerDevice.status,
                staffName: customerDevice.staffName,
                staffEmail: customerDevice.staffEmail,
                genCodeDate: customerDevice.genCodeDate,
                handOverDate: customerDevice.handOverDate,
                revokeDate: customerDevice.revokeDate,
                returnDate: customerDevice.returnDate,
                Action: "<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#Editqlnk' style='margin-right:5px'>Sửa</button>" +
                    "<button type='button' onclick=\"alert('Bạn có muốn xóa không!!!')\" class='btn btn-danger btn-sm' data-toggle='modal' data-target='#Deleteqlnk'>Xóa</button>"
            })
        });
        console.log(data);
        table = $('#deviceCustomer').DataTable({
            "processing": true,
            data,
            columns: [
                {data: 'type'},
                {data: 'code'},
                {data: 'description'},
                {data: 'status'},
                {data: 'staffName'},
                {data: 'staffEmail'},
                {data: 'genCodeDate'},
                {data: 'handOverDate'},
                {data: 'revokeDate'},
                {data: 'returnDate'},
                {data: 'Action'}
            ],
            "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "ALL"]]
        });
    }
    function sendAddCustomerDevice() {
        var id = null;
        var type = $('#Addqlnk select[name="cd-type"]').children('option:selected').val();
        var code = $('#Addqlnk input[name="cd-code"]').val();
        var description = $('#Addqlnk input[name="cd-description"]').val();
        var status = $('#Addqlnk select[name="cd-status"]').children('option:selected').val();
        var staffName = $('#Addqlnk input[name="staff-name"]').val();
        var staffEmail = $('#Addqlnk input[name="staff-email"]').val();
        var genCodeDate = $('#Addqlnk input[name="gen-code-date"]').val();
        var handOverDate = $('#Addqlnk input[name="hand-over-date"]').val();
        var revokeDate = $('#Addqlnk input[name="revoke-date"]').val();
        var returnDate = $('#Addqlnk input[name="return-date"]').val();
        var test=[];
        test.push({
            id: id,
            code: code,
            type: type,
            description: description,
            status: status,
            staffName: staffName,
            staffEmail: staffEmail,
            genCodeDate: genCodeDate,
            handOverDate: handOverDate,
            revokeDate: revokeDate,
            returnDate: returnDate,
        })
        console.log(test);
        $.ajax({
            contentType:'application/json; charset=utf-8',
            url: '/api/customerdevices',
            method: 'POST',
            data: JSON.stringify({
                "id":id,
                "type": type,
                "code": code,
                "description": description,
                "status": status,
                "staffName": staffName,
                "staffEmail": staffEmail,
                "genCodeDate": genCodeDate,
                "handOverDate": handOverDate,
                "revokeDate": revokeDate,
                "returnDate": returnDate,
            }),
            success: function (jqXHR) {
                alert('Thêm mới thiết bị khách hàng thành công!');
                addCustomerDevice(jqXHR);
                location.reload();
            }
        })
    }
function showLoadingGif(callback) {
    $('#loading-gif').css('visibility', 'visible');
    if (callback) callback();
}

function hideLoadingGif() {
    $('#loading-gif').css('visibility', 'hidden');
}
function addCustomerDevice(jqXHR) {
    data.push({
        id: jqXHR.id,
        code: jqXHR.code,
        type: jqXHR.type,
        description: jqXHR.description,
        status: jqXHR.status,
        staffName: jqXHR.staffName,
        staffEmail: jqXHR.staffEmail,
        genCodeDate: jqXHR.genCodeDate,
        handOverDate: jqXHR.handOverDate,
        revokeDate: jqXHR.revokeDate,
        returnDate: jqXHR.returnDate,
        Action: "<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#Editqlnk' style='margin-right:5px'>Sửa</button>" +
            "<button type='button' onclick=\"alert('Bạn có muốn xóa không!!!')\" class='btn btn-danger btn-sm' data-toggle='modal' data-target='#Deleteqlnk'>Xóa</button>"
    })
}






