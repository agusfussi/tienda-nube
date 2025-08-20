document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    alert('Este botón simula la acción "Crear tienda gratis".');
  });
});
