import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
            props.tabs.map((tab, index) => <Tab key={index} selectTabHandler={props.selectTabHandler} selectTab={props.selectTab} tab={tab}/>)}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs : PropTypes.arrayOf(PropTypes.string),
  selectTabHandler : PropTypes.func,
  selectTab : PropTypes.string
}

// Make sure to use PropTypes to validate your types!
export default Tabs;
