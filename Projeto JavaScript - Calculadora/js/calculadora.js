function calcular(tipo, valor) {
    if(tipo === 'acao')
    {
        switch (valor) {
            case 'c':
                document.getElementById('resultado').value = ''
                break;
            case '=':
                var operacao = document.getElementById('resultado').value
                document.getElementById('resultado').value = eval(operacao)
                break;
            default:
                document.getElementById('resultado').value += valor
                break;
        }
    }
    else if (tipo === 'valor')
    {
        document.getElementById('resultado').value += valor
    }
}