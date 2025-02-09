/**
 * Default [en-US] localization for report viewer.
 */
//ejDatePicker
ej.DatePicker.Locale['en-US'] = {
    watermarkText: "Select date",
    buttonText: 'Today'
};

//ejReportViewer
ej.ReportViewer.Locale["en-US"] = {
    toolbar: {
        print: {
            headerText: 'Print',
            contentText: 'Print the report.'
        },
        exportformat: {
            headerText: 'Export',
            contentText: 'Select the exported file format.',
            Pdf: 'PDF',
            Excel: 'Excel',
            Word: 'Word',
            Html: 'Html',
            PPT: 'PowerPoint',
            CSV: 'CSV',
            XML: 'XML'
        },
        first: {
            headerText: 'First',
            contentText: 'Go to the first page of the report.'
        },
        previous: {
            headerText: 'Previous',
            contentText: 'Go to the previous page of the report.'
        },
        next: {
            headerText: 'Next',
            contentText: 'Go to the next page of the report.'
        },
        last: {
            headerText: 'Last',
            contentText: 'Go to the last page of the report.'
        },
        documentMap: {
            headerText: 'Document Map',
            contentText: 'Show or hide the document map.'
        },
        parameter: {
            headerText: 'Parameter',
            contentText: 'Show or hide the parameters pane.'
        },
        zoomIn: {
            headerText: 'Zoom-In',
            contentText: 'Zoom in to the report.'
        },
        zoomOut: {
            headerText: 'Zoom-Out',
            contentText: 'Zoom out of the report.'
        },
        refresh: {
            headerText: 'Refresh',
            contentText: 'Refresh the report.'
        },
        find: {
            headerText: 'Find',
            contentText: 'Find text in the report.'
        },
        stop: {
            headerText: 'Stop',
            contentText: 'Stop processing the report.'
        },
        printLayout: {
            headerText: 'Print Layout',
            contentText: 'Change between print layout and normal modes.'
        },
        pageIndex: {
            headerText: 'Page Number',
            contentText: 'Current page number to view.'
        },
        zoom: {
            headerText: 'Zoom',
            contentText: 'Zoom in or out on the report.'
        },
        back: {
            headerText: 'Back',
            contentText: 'Go back to the parent report.'
        },
        fittopage: {
            headerText: 'Fit to Page',
            contentText: 'Fit the report page to the container.',
            pageWidth: 'Page Width',
            pageHeight: 'Whole Page'
        },
        pagesetup: {
            headerText: 'Page Setup',
            contentText: 'Choose page setup option to change paper size, orientation and margins.'
        },
        exportsetup: {
            headerText: 'Export Setup',
            contentText: 'Choose export setup option to set the image quality, save type of word, and excel document.'
        }
    },
    pagesetupDialog: {
        close: 'Close',
        paperSize: 'Paper Size',
        height: 'Height',
        width: 'Width',
        margins: 'Margins',
        top: 'Top',
        bottom: 'Bottom',
        right: 'Right',
        left: 'Left',
        pageUnits: 'Page Units',
        unitin: 'in',
        unitcm: 'cm',
        inches: 'Inches',
        centimeters: 'Centimeters',
        orientation: 'Orientation',
        portrait: 'Portrait',
        landscape: 'Landscape',
        doneButton: 'Done',
        cancelButton: 'Cancel',
        paperTypes: [{ text: "A3", value: "A3" }, { text: "A4", value: "A4" }, { text: "B4(JIS)", value: "B4(JIS)" }, { text: "B5(JIS)", value: "B5(JIS)" }, { text: "Envelope #10", value: "Envelope #10" }, { text: "Envelope Monarch", value: "Envelope Monarch" }, { text: "Executive", value: "Executive" }, { text: "Legal", value: "Legal" }, { text: "Letter", value: "Letter" }, { text: "Tabloid", value: "Tabloid" }, { text: "Custom", value: "Custom" }]
    },
    exportsetupDialog: {
        close: 'Close',
        commonOptions: {
            header: 'Common Settings',
            imageQuality: 'Image Quality',
            imageQualityTypes:
                [{ text: "Low", value: "2" },
                { text: "Medium", value: "5" },
                { text: "High", value: "10" }]
        },
        pdfOptions: {
            header: 'PDF Settings',
            complexScript: 'Complex Script',
            conformance: 'Conformance Level',
            conformanceTypes: [{ text: "None", value: 0 }, { text: "Pdf/A1B", value: 1 }, { text: "Pdf/X1A2001", value: 2 }, { text: "Pdf/A2B", value: 3 }, { text: "Pdf/A3B", value: 4 },
            { text: "Pdf/A1A", value: 5 }, { text: "Pdf/A2A", value: 6 }, { text: "Pdf/A2U", value: 7 }, { text: "Pdf/A3A", value: 8 }, { text: "Pdf/A3U", value: 9 }],
        },
        excel: 'Excel',
        securityOptions: {
            header: "Security Settings",
            enableProtection: "Enable protection",
            protect: "Password To Protect",
            edit: "Password To Edit"
        },
        wordOptions: {
            header: 'Word Settings',
            protection: 'Protection Type',
            topSpacing: 'Top Spacing',
            bottomSpacing: 'Bottom Spacing',
            formatList: [
                { text: "Word 97-2003 Document (.doc)", value: 0 },
                { text: "Word 97-2003 template (.dot)", value: 1 },
                { text: "Word Document (.docx)", value: 2 },
                { text: "Strict Open XML Document 2007 (.docx)", value: 3 },
                { text: "Strict Open XML Document 2010 (.docx)", value: 4 },
                { text: "Strict Open XML Document 2013 (.docx)", value: 5 },
                { text: "Strict Open XML Template 2007 (.dotx)", value: 6 },
                { text: "Strict Open XML Template 2010 (.dotx)", value: 7 },
                { text: "Strict Open XML Template 2013 (.dotx)", value: 8 },
                { text: "Word Macro Enabled Document 2007 (.docm)", value: 9 },
                { text: "Word Macro Enabled Document 2010 (.docm)", value: 10 },
                { text: "Word Macro Enabled Document 2013 (.docm)", value: 11 },
                { text: "Word Macro Enabled Template 2007 (.dotm)", value: 12 },
                { text: "Word Macro Enabled Template 2010 (.dotm)", value: 13 },
                { text: "Word Macro Enabled Template 2013 (.dotm)", value: 14 },
                { text: "Rich text format (.rtf)", value: 15 },
                { text: "Plain text (.txt)", value: 16 },
                { text: "Web page (.html)", value: 18 }
            ],
            layoutTypes: [{ text: "Default", value: 0 }, { text: "Top Level", value: 1 }],
            protectionTypes: [{ text: "No Protection", value: -1 }, { text: "Allow Only Revisions", value: 0 }, { text: "Allow Only Comments", value: 1 }, { text: "Allow Only Form Fields", value: 2 }, { text: "Allow Only Reading", value: 3 }],
        },
        layoutOption: 'Layout Option',
        saveType: 'Save Type',
        unit: 'in',
        exportFormat: 'Export Format',
        pptOptions: {
            header: "PowerPoint Settings",
            pptTypes: [
                { text: "PowerPoint 97to2003 Presentation (.pptx)", value: 0 },
                { text: "PowerPoint 2007 Presentation (.pptx)", value: 1 },
                { text: "PowerPoint 2010 Presentation (.pptx)", value: 2 },
                { text: "PowerPoint 2013 Presentation (.pptx)", value: 3 }
            ]
        },
        doneButton: 'OK',
        cancelButton: 'Cancel',
        csvOptions: {
            formatter: 'Formatted Values',
            header: 'CSV Settings',
            delimiter: 'Field Delimiter',
            qualifier: 'Text Qualifier',
            customVal: 'Custom Value',
            qualifierList: [{ text: "Double Quotes", value: "\"" }, { text: "Single Quotes", value: "'" }, { text: "None", value: "" }, { text: "Custom", value: "Custom" }],
            delimiterList: [{ text: "Comma", value: "," }, { text: "Space", value: " " }, { text: "Tab", value: "   " }, { text: "Semicolon", value: ";" }, { text: "Custom", value: "Custom" }]
        },
        htmlOptions: {
            header: 'HTML Settings',
            separator: 'Page Separator'
        },
        excelOptions:
        {
            header: 'Excel settings',
            sheetProtection: 'Sheet Protection',
            disableCellFormat: 'Disable Cell Format',
            readonly: 'Read Only',
            saveTypes: [
                { text: "Excel97to2003 Workbook(.xls)", value: 0 },
                { text: "Excel2007 Workbook(.xlsx)", value: 1 },
                { text: "Excel2010 Workbook (.xlsx)", value: 2 },
                { text: "Excel2013 Workbook (.xlsx)", value: 3 },
                { text: "Excel2016 Workbook(.xlsx) ", value: 4 }
            ],
            sheetProtectionTypes: [
                { text: "None", value: 0 },
                { text: "Objects", value: 1 },
                { text: "Scenarios", value: 2 },
                { text: "Formatting Cells", value: 4 },
                { text: "Formatting Columns", value: 8 },
                { text: "Formatting Rows", value: 16 },
                { text: "Inserting Columns", value: 32 },
                { text: "Inserting Rows", value: 64 },
                { text: "Inserting Hyperlinks", value: 128 },
                { text: "DeletingColumns", value: 256 },
                { text: "Deleting Rows", value: 512 },
                { text: "Locked Cells", value: 1024 },
                { text: "Sorting", value: 2048 },
                { text: "Filtering", value: 4096 },
                { text: "Using Pivot Tables", value: 8192 },
                { text: "UnLockedCells", value: 16384 },
                { text: "Content", value: 32768 },
                { text: "All", value: 65535 }
            ],
            disableCellFormatTypes: [
                { text: "None", value: 0 },
                { text: "All", value: 1 },
                { text: "Border", value: 2 },
                { text: "Style", value: 3 }
            ],
            layoutOptionTypes: [
                { text: "Default", value: 0 },
                { text: "Ignore Cell Merge", value: 2 }
            ],
        }
    },
    findAlertMessage: {
        resultsEndReached: 'You have reached the end of the search results. If you wish to continue, then close the dialog box and search again.',
        noResultsFound: 'The specified text does not match any of the contents in the report. Change your search keyword and try again.'
    },
    credential: {
        userName: 'Username',
        password: 'Password'
    },
    waterMark: {
        selectOption: 'Select option',
        selectValue: 'Select a value'
    },
    errorMessage: {
        startMessage: 'Report Viewer encountered some problems loading this report. Please',
        middleMessage: ' Click here',
        endMessage: 'to see the details of the error',
        closeMessage: 'Close this message',
        exportAjaxFailureMsg: 'Unable to export the document due to failure of connecting Report Service.',
        printAjaxFailureMsg: 'Unable to print the document due to failure of connecting Report Service.',
        reportLoadAjaxFailureMsg: 'Unable to progress the Report action due to failure of connecting Report Service.',
        cancelReportProcessMsg: 'Report processing was canceled.',
    },
    progressMessage: {
        exportLoadingMessage: 'Preparing exporting document... Please wait...',
        printLoadingMessage: 'Preparing print data... Please wait...',
        printPreparationMessage: 'Preparing print data... {0}% completed... Please wait...',
        exportPreparationMessage: 'Preparing exporting document... {0}% completed... Please wait...',
        cancelText: 'Cancel',
    },
    alertMessage: {
        close: 'Close',
        title: 'ReportViewer',
        done: 'OK',
        showDetails: 'Show details',
        hideDetails: 'Hide details',
        reportLoad: 'Report loaded:',
        RVERR0001: 'ReportViewer could not load the Report',
        RVERR0002: 'ReportViewer could not process the Report',
        RVERR0003: 'An error occurred in the return of ajax data',
        RVERR0004: 'Select a value for the parameter',
        RVERR0005: 'The parameter {parameter name} is missing a value',
        RVERR0006: 'Please enter the input of the float data type',
        RVERR0007: 'Enter the integer data type entry',
        RVERR0008: 'ReportViewer could not validate Datasource credentials',
        RVERR0009: 'The margins are superimposed or are outside the paper. Enter a different margin size.',
        RVERR0010: 'Enter a value for the parameter',
        RVERR0011: 'The parameter cannot be blank',
        RVERR0012: 'The value provided for the report parameter {parameterprompt} is not valid for its type.'
    },
    selectAll: 'Select All',
    viewButton: 'View Report',
    parameterProcessingMessage: 'Loading dependent parameters...'
};