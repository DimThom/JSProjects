let color = undefined

/**
 * Listener
 */
document.querySelector('#btn').addEventListener('click', function() {
    onClickMeClicked()
})

/**
 * Controller
 * Actions taken after 'Click Me' button, clicked
 */
function onClickMeClicked() {
    updatebg()
}

/**
 * Model
 * Gets a color and update th UI background
 */
function updatebg() {
    color = getBgColor()
    showBgColor(color)
}

/**
 * Chooses, randomly, a color from a standard list
 * @returns the background color
 */
function getBgColor() {
    const colors = ['black', 'red', 'green', 'blue', 'white']
    return colors[Math.floor(Math.random() * colors.length)]
}

/**
 * View
 * Fills the values of the corresponding UI Elements
 * @param {string} bgColor - the given color
 */ 
function showBgColor(bgColor) {
    document.querySelector('#hex').innerHTML = bgColor
    document.body.style.backgroundColor = bgColor
}