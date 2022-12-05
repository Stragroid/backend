import dayjs from "dayjs"

export const formatDateReadable = (date) => {
    return dayjs(date).format('MMM D, YYYY h:mm A')
}

export const timeReadable = ({ time, format }) => {
    let newTime;
    switch (format) {
        case 'seconds':
            newTime = (Math.round(time / 3600) > 0 ? Math.round(time / 3600) + " Hour " : null) + Math.round(time % 60) + " Minutes"
            break;

        default:
            newTime = 'error'
            break;
    }
    return newTime
}