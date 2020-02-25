import React from "react";
import * as dateFns from "date-fns";
import './WeekContainer.css'


//TODO: Add button to return to current
class WeekContainer extends React.Component {
    state = {
        selectedWeek : new Date()
    }

    renderHeader() {
        const dayFormat = "MMM d"
        const currentWeek = new Date()

        let startDate = dateFns.startOfISOWeek(this.state.selectedWeek)
        let endDate = dateFns.endOfISOWeek(this.state.selectedWeek)

        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={this.prevWeek}>
                        chevron_left
                    </div>
                </div>
            <div className="col col-center" >
                <span >
                    Week of {dateFns.format(startDate, dayFormat)} - {dateFns.format(endDate, dayFormat)} 
                </span>
                {
                    dateFns.isWithinInterval(currentWeek, {start: startDate, end: endDate}) &&
                        <span className="current"> (Current week)</span>
                }
            </div>
            <div className="col col-end">
                <div className="icon" onClick={this.nextWeek}>chevron_right</div>
            </div>
          </div>
        );
    }

    renderWeek() {
        const dateFormat = "iii d"
        const days = []

        let formattedDate = "";
        let startDate = dateFns.startOfISOWeek(this.state.selectedWeek)

        for (let i = 0; i < 7; i++) {
            formattedDate = dateFns.format(dateFns.addDays(startDate, i), dateFormat)

            days.push(
                <div className="col cell" key={i}>
                    <span className="number">{formattedDate}</span>
                </div>
            );
        }

        return <div className="body"><div className="row">{days}</div></div>;
    }

    nextWeek = () => {
        this.setState({
            selectedWeek: dateFns.addWeeks(this.state.selectedWeek,1)
        });
    }

    prevWeek = () => {
        this.setState({
            selectedWeek: dateFns.subWeeks(this.state.selectedWeek,1)
        });
    }

    render() {
        return (
            <div className = "calendar">
                {this.renderHeader()}
                {this.renderWeek()}
            </div>
        );
      }
}

export default WeekContainer;