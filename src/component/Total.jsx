import React from 'react';
import {connect } from 'react-redux'

const Total = ({total,totalCompleted}) => {
    return (
        <div>
            <div>Total items :{total}</div>
            <div>Completed items : {totalCompleted}</div>
        </div>
    );
};

const mapStateToProps = (state) =>({
    total:state.total,
    totalCompleted:state.totalCompleted
})

export default connect(mapStateToProps)(Total);