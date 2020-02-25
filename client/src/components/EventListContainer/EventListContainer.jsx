import React from 'react';
import './EventListContainer.css';
import axios from 'axios'
import EventListTable from './EventListTable';
import Button from '@material-ui/core/Button';

class EventListContainer extends React.Component {

    renderHeader() {
        return (
            <div className="header row flex-middle">
                <div className="col col-center">
                    Important Dates
                </div>
                <div></div>
            </div>
        );
    }

    renderList() {
        return (
            <div>
                <div className="body">
                    <EventListTable />
                </div>
            </div>
        );
    }

    renderButtons() {
        return (
            <div>
                <div className="button col-center" >
                    <Button variant="contained" size="small" color="primary" onClick={(e) => this.addToList(e)}>
                        Add event
                    </Button>
                </div>
            </div>
        );
    }

    render () {
        //{this.renderHeader()}
        return (
            <div className="list">
                {this.renderHeader()}
                {this.renderList()}
                {this.renderButtons()}
            </div>
        );
    }
}

export default EventListContainer;