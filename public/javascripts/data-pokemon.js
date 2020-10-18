$('#exampleModal').on('show.bs.modal', function (event) {
  const button = $(event.relatedTarget);
  const nombre = button.data('name');
  const id = button.data('id');
  var modal = $(this);
  modal.find('.modal-title').text('¿Queres eliminar a ' + nombre+"?");
  modal.find('.modal-link').attr("href","/borrar/"+id);
})