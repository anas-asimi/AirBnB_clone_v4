$('document').ready(function () {
  const selected = [];
  $('li input').click(function () {
    if ($(this).prop('checked') === true) {
      selected.push($(this).attr('data-name'));
      console.log('selected.push');
    } else {
      delete selected.pop($(this).attr('data-name'));
      console.log('selected.pop');
    }
    if (selected.length === 0) {
      $('#selected').html('&nbsp;');
    } else {
      $('#selected').text(selected.join(', '));
    }
  });
});
