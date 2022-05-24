import React, { Component } from 'react';
import { Breaks } from '../';
// 

class ShiftTimes extends Component {
    render() {
        const { setStartTime, setStartBreak, setEndBreak, setEndTime } = this.props;

        return (
            <div className="shiftTimes flexItem">
                <h4>Entrada</h4>
                <form id="shift_times">
                    <div>Hora de Entrada: &nbsp; <input type="time" onChange={setStartTime} id="start_shift" list="times_list" /></div>
                    <h4>Pausa</h4>
                    <Breaks setStartBreak={setStartBreak} setEndBreak={setEndBreak} />
                    
                    <br />
                    <h4>Saída</h4>
                    <div>Hora de saída: &nbsp; <input type="time" onChange={setEndTime} id="end_shift" list="times_list" /></div>
                </form>
                <datalist id="times_list">
                    <option value="06:00" />
                    <option value="07:00" />
                    <option value="08:00" />
                    <option value="09:00" />
                    <option value="10:00" />
                    <option value="11:00" />
                    <option value="12:00" />
                    <option value="13:00" />
                    <option value="14:00" />
                    <option value="15:00" />
                    <option value="16:00" />
                    <option value="17:00" />
                    <option value="18:00" />
                    <option value="19:00" />
                    <option value="20:00" />
                    <option value="21:00" />
                    <option value="22:00" />
                    <option value="23:00" />
                </datalist>
                <br />
            </div> 
        );
    }
}

export default ShiftTimes;
