import React, { Fragment } from 'react';

export default function Hours(props) {
  // console.log('props.hours in Hours.js: ', props.hours);
  // console.log(Array.isArray(props.hours));

  if (!props.hours) {
      return null;
  }

  return (
    <div className='hours-box'>
      <h3>
        Öffnungszeiten
      </h3>
      <div className='hours'>
        {props.hours.map(item => {
          return (
            <Fragment key={item.id}>
              <div className='hours-row'>
                {item.day} {item.open_h}:{item.open_m} - {item.close_h}:{item.close_m}
              </div>
            </Fragment>
          );
        })}
      </div>

    </div>
  );
}
