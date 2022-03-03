'use strict';

const { BrowserWindow } = require('electron');

//default window settings
const defaultProps = {
    width: 950,
    height: 540,
    show: false,
};

class Window extends BrowserWindow {
    constructor({ file, ...windowSettings }) {
        //calls new BrowserWindow with props
        super({ ...defaultProps, ...windowSettings });

        //load html and open devtools
        this.loadFile(file);
        this.webContents.openDevTools();

        //show when ready
        this.once('ready-to-show', () => {
            this.show();
        });
    }
}
module.exports = Window;
