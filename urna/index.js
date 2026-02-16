function atualizarHorario() {
        var hoje = new Date();
        var hora = hoje.getHours();
        var minuto = hoje.getMinutes();
        var saudacao = window.document.querySelector(".hello");
        if (hora >= 0 && hora < 12) {
            saudacao.innerHTML = "Bom dia, seja bem vindo a urna eletrônica";
        } else if (hora >= 12 && hora < 18) {
            saudacao.innerHTML = "Boa tarde, seja bem vindo a urna eletrônica";
        } else {
            saudacao.innerHTML = "Boa noite, seja bem vindo a urna eletrônica";
        }
        var horario = window.document.getElementById("horario");
        horario.innerHTML = hora + ":" + minuto;
        
    }
    
    atualizarHorario();
    setInterval(atualizarHorario, 60000);
    