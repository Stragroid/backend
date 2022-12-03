
// For Options //

const blue100 = '#99ccf9';
const blue500 = '#5a98ce';
const green100 = '#86ea86';
const green500 = '#4eb94e';
const grey = '#eaeaea';
const lavender100 = '#E4E5FF';
const lavender500 = '#CFD0FF';
const maxBluePurple100 = '#9B9FFF';
const maxBluePurple500 = '#4F53FF';
const red100 = '#f07171';
const red500 = '#970c0c';
const white = 'white'

export const optStyles = {
    viewMode: {
        correct: {
            lightGreen: `${green100}`,
            darkGreen: `${green500}`,
            background: `${green100}`,
            border: `2px solid ${green500}`,
            color: `${green500}`
        },
        wrong: {
            lightRed: `${red100}`,
            darkRed: `${red500}`,
            background: `${red100}`,
            border: `2px solid ${red500}`,
            color: `${red500}`
        },
        notSelected: {
            background: `${lavender100}`,
            border: `2px solid ${lavender500}`
        }
    },
    normal: {
        selected: {
            background: `${maxBluePurple100}`,
            border: `2px solid ${maxBluePurple500}`,
            color: `${maxBluePurple500}`
        },
        notSelected: {
            background: `${lavender100}`,
            border: `2px solid ${lavender500}`,
            color: `${lavender500}`
        },
        onHover: {
            border: `2px solid ${maxBluePurple500}`
        }
    }
};

export const qPanel = {
    viewMode: {
        correct: {
            background: `${green100}`,
            border: `2px solid ${green500}`
        },
        wrong: {
            background: `${red100}`,
            border: `2px solid ${red500}`
        },
        notAttempted: {
            background: `${lavender100}`,
            border: `2px solid ${lavender500}`
        }
    },
    normal: {
        notVisited: {
            background: `${lavender100}`,
            border: `2px solid ${lavender500}`
        },
        visited: {
            background: `${blue100}`,
            border: `2px solid ${blue500}`
        },
        attempted: {
            background: `${green100}`,
            border: `2px solid ${green500}`
        },
        current: {
            background: `${maxBluePurple100}`,
            border: `2px solid ${maxBluePurple500}`
        }
    }
};

export const solColor = {
    background: `none`,
    border: `2px solid ${green500}`,
    color: `${green500}`
};

export const resultPanel = {
    background100: `${white}`,
    background300: `${grey}`,
    tile: {
        pass: {
            background: `rgba(134, 234, 134, 0.2)`
        },
        fail: {
            background: `rgba(240, 113, 113, 0.2)`
        }
    },
    button: {
        normal: {
            background: `${grey}`,
            color: `black`
        },
        hover: {
            background: `${lavender100}`,
            color: `black`
        }

    }
}

export const navBarColors = {
    background: 'lightblue',
    textPrimary: 'black',
    navlinkColor: 'black',
    navlinkSelectedColor: 'black',
    navlinkBackground: 'none',
    navlinkSelectedBackground: 'white',
    buttonBackground: 'none',
    buttonOnhoverBackground: 'lavender',
    buttonColor: 'black',
    buttonOnhoverColor: 'black',
    popUpPanelBackground: '#1e1724b5'
}

export const subNavBarColors = {
    background: 'white',
    textPrimary: 'black',
    subNavlinkColor: 'black',
    subNavlinkSelectedColor: 'black',
    subNavlinkSelectedBackground: 'lightblue',
    subNavlinkBackground: 'none'
}