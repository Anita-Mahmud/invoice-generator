
const calculateSum = ({weekly,daily,hourly,collision,liability,tax}) => {
    const sum = (weekly+daily+hourly+collision+liability+tax)
    return sum;
};

export default calculateSum;