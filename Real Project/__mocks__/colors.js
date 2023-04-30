const colors = jest.genMockFromModule('colors');

const unity = s => s

colors.yellow = unity

module.exports = colors

