export function printToPdf() {
    const remote = window.require('electron').remote;
    const win = remote.getCurrentWindow();
    const fs = window.require('fs');

    // Use default printing options
    win.webContents.printToPDF({}).then(data => {

        const filePath = remote.dialog.showSaveDialogSync(remote.getCurrentWindow(), {
            title: 'Sauvegarde de la facture',
            filters: [{
                name: 'facture',
                defaultPath: '%USERPROFILE%/Documents',
                extensions: ['pdf']
            }]
        });

        if (filePath) { // if user cancelled, filePath is undefined
            fs.writeFile(filePath, data, (error) => {
                if (error) {
                    throw error;
                }
                console.log('Write PDF successfully.')
            });
        }



    }).catch(error => {
        console.log(error)
    })

}