import React, { Component } from 'react';
// import style from './Settings.module.css';

//Funcionalidade para calcular também o valor recebido pela jornada de trabalho. 
//Como não foi feita nenhuma diferenciação da remuneração por matutino ou vespertino na apresentação do modelo, não fiz aqui também.

class Settings extends Component {
    render() {
        const { setPayRate, setMultiplier } = this.props;

        return (
            <div className="settings flexItem">
                <h3>Configurações</h3>
                <form id="settings">
                <div>Pagamento por hora: &nbsp; R$<input type="number" onChange={setPayRate} id="pay_rate" placeholder="10.00" min="01.00" max="100.00" step="0.01"/></div>
                <br />
                
                <br />
                </form>
            </div> 
        );
    }
}

export default Settings;
