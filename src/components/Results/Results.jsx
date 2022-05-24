import React, { Component } from 'react';
import './Results.css';

class Results extends Component {

    componentDidUpdate = () => {
        this.updateCalButton(this.props.results);
    }

    updateCalButton(results) {
        
        
        
        
        var start_shift = results.start_time;
        var end_shift = results.end_time;
        var breaks = [];
        var breaksString = "";
        var total_breaks = "";
        var start_break = document.querySelector("#start_break").value;
        var end_break = document.querySelector("#end_break").value;

        // Pausas
        if (start_break !== "" && end_break !== "") {
            total_breaks = "\n<b>" + document.querySelector("#total_breaks").innerHTML + "</b>";
            breaks[0] = "<em>On Break: " + this.convertTime(start_break) + "</em>\n";
            breaks[1] = "<em>Off Break: " + this.convertTime(end_break) + "</em>\n";
            breaksString += breaks[0];
            breaksString += breaks[1];
        }
        
        // Set strings
        
       
    }

    convertTime(time24) {
        var ts = "";
        if (time24 !== "" || time24 !== null) {
            ts = time24;
            var H = +ts.substr(0, 2);
            var h = (H % 12) || 12;
            
            var ampm = H < 12 ? " am" : " pm";
            ts = h + ts.substr(2, 3) + ampm;
        }
        return ts;
    }
    
    calculateHours(results) {
        // Variáveis iniciais 
        var hoursWorked = 0;
        var minutesWorked = 0;
        var hoursOnBreak = 0;
        var minutesOnBreak = 0;
        var totalWorkHours = 0;
        var totalBreakHours = 0;
        var totalShiftHours = 0;
        var totalAmount = 0;
        var hoursv = 0;
        var hoursm= 0;
        var totalhorasv;
        var totalhorasm;
        var minutesv = 0;
        var minutesm = 0;
        
        // Buscar os dados
        const payRate = results.pay_rate;
        const multiplier = results.multiplier;
        const startTime = results.start_time;
        const endTime = results.end_time;
        const startBreak = results.breaks[0].start_break;
        const endBreak = results.breaks[0].end_break;
        

        

        if (startTime !== "" && endTime !== "")
        {
            // Hora entrada
            const startTimeHour = startTime.split(":")[0];
            const startTimeMin = startTime.split(":")[1];
            const startTimeInHours = Number(startTimeHour) + startTimeMin / 60;

            // Hora Saída
            const endTimeHour = endTime.split(":")[0];
            const endTimeMin = endTime.split(":")[1];
            const endTimeInHours = Number(endTimeHour) + endTimeMin / 60;
            
            if (startBreak !== "" && endTime !== "")
            {
                // Começo pausa
                const startBreakHour = startBreak.split(":")[0];
                const startBreakMin = startBreak.split(":")[1];
                const startBreakInHours = Number(startBreakHour) + startBreakMin / 60;

                // Fim pausa
                const endBreakHour = endBreak.split(":")[0];
                const endBreakMin = endBreak.split(":")[1];
                const endBreakInHours = Number(endBreakHour) + endBreakMin / 60;

                totalBreakHours = endBreakInHours - startBreakInHours;
            }
            // Horas Totais
            totalShiftHours = endTimeInHours - startTimeInHours;
            totalWorkHours = totalShiftHours - totalBreakHours;
            totalAmount = payRate * multiplier * totalWorkHours;
            totalhorasm = 12 - startTimeInHours;
            totalhorasv = endTimeInHours - 12;
            
            // Valores 
            hoursWorked = Math.floor(totalWorkHours);
            minutesWorked = Math.round((totalShiftHours % 1) * 60);
            hoursOnBreak = Math.floor(totalBreakHours);
            minutesOnBreak = Math.round((totalBreakHours % 1) * 60);
            minutesm = Math.floor((totalhorasm% 1)* 60)
            hoursm = Math.floor(totalhorasm);
            minutesv = Math.round((totalhorasv % 1) * 60)
            hoursv = Math.floor (totalhorasv);
            
            // Décimos
            totalWorkHours = totalWorkHours.toFixed(2);
            totalBreakHours = totalBreakHours.toFixed(2);
            totalAmount = totalAmount.toFixed(2);
            totalhorasm = totalhorasm.toFixed(2);
            totalhorasv = totalhorasv.toFixed(2);
        }
        return {
            hoursWorked: hoursWorked,
            minutesWorked: minutesWorked,
            hoursOnBreak: hoursOnBreak,
            minutesOnBreak: minutesOnBreak,
            totalWorkHours: totalWorkHours,
            totalBreakHours: totalBreakHours,
            totalAmount: totalAmount,
            totalhorasm: totalhorasm,
            totalhorasv: totalhorasv
        };
    }
    
    render() {
        const { results } = this.props;
        const data = this.calculateHours(results);

        return (
            <div className="results flexItem">
                <h3>Resultados</h3>
                <p id="hours_m">Horas Matutinas: {data.totalhorasm} horas</p>
                <p id="hours_v">Horas Vespertinas: {data.totalhorasv} horas </p>
                <p id="hours_worked">Horas Totais: {data.hoursWorked}h {data.minutesWorked}m | {data.totalWorkHours} horas</p>
                <p id="total_breaks">Total de Pausa: {data.hoursOnBreak}h {data.minutesOnBreak}m | {data.totalBreakHours} horas</p>
                <p id="gross_pay">Pagamento Bruto: R${data.totalAmount}</p>
                
               
                <br /><br />
            </div>
        );
    }
}

export default Results;
.addeventatc {
	border: solid 2px !important;
	border-color: dodgerblue !important;
}

.addeventatc_dropdown {
	padding: 6px 0px !important;
}

.addeventatc_dropdown .copyx {
	display: none !important;
}
