<script>
    $(document).ready(function(){
        // Función para validar el formulario
        function validateForm() {
            var isValid = true;

            // Validar que se haya seleccionado un tipo
            if ($('#type').val() == '') {
                isValid = false;
                $('#type').addClass('is-invalid');
            } else {
                $('#type').removeClass('is-invalid');
            }

            // Validar que se haya seleccionado un tamaño
            if ($('#Tamaño').val() == '') {
                isValid = false;
                $('#Tamaño').addClass('is-invalid');
            } else {
                $('#Tamaño').removeClass('is-invalid');
            }

            // Validar que se haya ingresado una cantidad en centímetros
            if ($('#centimeters').val() == '') {
                isValid = false;
                $('#centimeters').addClass('is-invalid');
            } else {
                $('#centimeters').removeClass('is-invalid');
            }

            // Validar que se haya ingresado una cantidad de dinero
            if ($('#money').val() == '') {
                isValid = false;
                $('#money').addClass('is-invalid');
            } else {
                $('#money').removeClass('is-invalid');
            }

            // Validar que se haya ingresado una descripción
            if ($('#description').val() == '') {
                isValid = false;
                $('#description').addClass('is-invalid');
            } else {
                $('#description').removeClass('is-invalid');
            }

            return isValid;
        }
        // Función para mostrar la vista previa de la imagen
    }

    // Función para mostrar la vista previa de la imagen
    $('#image').change(function(){ }
    var input = this;
    var url = $(this).val();
    var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
    if (input.files && input.files[0] && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) { }
    var reader = new FileReader();
    reader.onload = function (e) {$('#preview').attr('src', e.target.result)};
            }
    reader.readAsDataURL(input.files[0]);
        } else {$('#preview').attr('src', '/assets/no_preview.png')};
            }
    });

    // Cuando se hace clic en el botón "Confirmar"
    $('#confirmationModal').on('show.bs.modal', function (event) {
        // Si el formulario es válido, enviar datos
    }
        // Si el formulario es válido, enviar datos
    if (validateForm()) {
        // Aquí puedes enviar los datos del formulario
        // Ejemplo: $.post('url_del_servidor', $('#productForm').serialize(), function(response) { ... });
    } else {
        // Si el formulario no es válido, puedes mostrar un mensaje de error o realizar alguna otra acción
        alert('Por favor, complete todos los campos obligatorios.')};
    return false; // Evita que se abra el modal de confirmación si el formulario no es válido
        }
    });
});
</script>;
