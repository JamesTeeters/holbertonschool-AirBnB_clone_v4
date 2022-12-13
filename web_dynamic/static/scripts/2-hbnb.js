$("input[type='checkbox']").change(function() {
    const checkList = {};
    if ($(this).is(':checked')) {
      checkList[$(this).data('id')] = $(this).data('name');
    } else {
      delete checkList[$(this).data('id')];
    }
    const checked = []
    for (const check in checkList) {
        checked.push(checkList[check]);
    }
    $('.amenities h4').text(checked.join(', '));
  });
  $.get('http://d969ef231c02.cd567695.hbtn-cod.io:5001/api/v1/status/', function(data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
