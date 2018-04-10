import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import DatePresetPicker from 'react-dates-presets';
import '../styles/FollowerGrowth.css';

class PredefinedRanges extends React.Component {
  onChange(vals) {
    console.log('onChange called with args: ', vals);
  };

  render() {
    const initialState = { startDate: moment().format('YYYY-MM-DD'), endDate: moment().format('YYYY-MM-DD') };

    const ranges = [
      { id: 'today', range: { startDate: moment(), endDate: moment() }, label: 'Today' },
      { id: '7_days', range: { startDate: moment().subtract(7, 'days'), endDate: moment() }, label: 'Last 7 days' },
      { id: '1_month', range: { startDate: moment().subtract(1, 'month'), endDate: moment() }, label: 'Last month' },
      { id: '2_months', range: { startDate: moment().subtract(2, 'months'), endDate: moment() }, label: 'Last 2 months' },
    ];

    return (
      <DatePresetPicker
        value={initialState}
        onChange={this.onChange}
        ranges={ranges}
        isOutsideRange={() => false /* allow future & past dates */}
        /* customRangeLabel="other range..." */
      />
    );
  }
}

export default PredefinedRanges;