$(document).ready(function(){
    $('#carousel-images').slick({
        autoplay: true,
        arrows: false,
    });

    $('#cpf').mask('000.000.000-00')

    $('#tel').mask('(00) 0000-0000', {
        placeholder: '(00) 1234-5678'
    })

    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            firstname: {
                required: true
            },
            lastname: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            terms: {
                required: true
            }
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(event, validator) {
            let fieldInvalid = validator.numberOfInvalids();
            if (fieldInvalid) {
                alert(`There is ${fieldInvalid} field(s) missing.`)
            }
            console.log(fieldInvalid);
        }
    })
})
