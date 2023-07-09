import TimeField from 'react-simple-timefield';

<TimeField
    value={time}                     // {String}   required, format '00:00' or '00:00:00'
        // {Function} required
    input={<MyCustomInputElement />} // {Element}  default: <input type="text" />
    colon=":"                        // {String}   default: ":"
    showSeconds                      // {Boolean}  default: false
/>