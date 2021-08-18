import React from 'react';
import './Datepicker.css';

export default function Datepicker({ ...args }) {
  return <input className="datepicker" type="date" {...args} />;
}
