ej.ReportDesigner.Locale['en-AU'] = {
    itemPanel: {
        waterMarkText: 'Search Widgets',
        noDataFound: 'No matches found...',
        customCategory: 'Barcodes',
        dataRequirements: 'Data Requirements',
        customRptItemName: '1D Barcode',
        labelText: 'Item Panel Container',
        expandText: 'Expand',
        collapseText: 'Collapse',
        customTooltip: {
            tooltip: {
                requirements: 'Add a report item to the designer area.',
                description: 'Displays the custom report item.',
                title: 'Custom Reportitem'
            }
        },
        groupItems: {
            basicItems: {
                groupName: 'Basic Items',
                Items: {
                    'line': {
                        displayText: 'Line',
                        tooltip: {
                            requirements: 'To separate a region through a line in report sections.',
                            description: 'Graphical element to seperate the report region.',
                            title: 'Line'
                        }
                    },
                    'image': {
                        displayText: 'Image',
                        tooltip: {
                            requirements: 'To display an image from the database, embed the image.',
                            description: 'Displays the images.',
                            title: 'Image'
                        }
                    },
                    'textBox': {
                        displayText: 'TextBox',
                        tooltip: {
                            requirements: 'Add any text.',
                            description: 'Displays static and dynamic text.',
                            title: 'TextBox'
                        }
                    },
                    'rectangle': {
                        displayText: 'Rectangle',
                        tooltip: {
                            requirements: 'Combine one or more report items inside it.',
                            description: 'Graphical container element.',
                            title: 'Rectangle'
                        }
                    }
                }
            },
            comparison: {
                groupName: 'Comparison',
                Items: {
                    'column': {
                        displayText: 'Column',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Compares values for a set of unordered items across various categories using the vertical bars arranged horizontally.',
                            title: 'Column'
                        }
                    },
                    'bar': {
                        displayText: 'Bar',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Compares values for a set of unordered items across various categories using the horizontal bars arranged vertically.',
                            title: 'Bar'
                        }
                    },
                    'stackedColumn': {
                        displayText: 'Stacked Column',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Compares multiple measures using the bars stacked vertically.',
                            title: 'Stacked Column'
                        }
                    },
                    'rangeColumn': {
                        displayText: 'Range Column',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Displays a range of data by plotting two Y values per data point',
                            title: 'Range Column'
                        }
                    },
                    'rangeBar': {
                        displayText: 'Range Bar',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Displays a range of data by plotting two Y values per data point horizontally',
                            title: 'Range Bar'
                        }
                    },
                    'stackedBar': {
                        displayText: 'Stacked Bar',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Compares multiple measures using the bars stacked horizontally.',
                            title: 'Stacked Bar'
                        }
                    },
                    'stackedColumnPercent': {
                        displayText: 'Stacked Column100%',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Compares multiple measures as parts of a whole using the bars stacked vertically.',
                            title: 'Stacked Column100%'
                        }
                    },
                    'stackedBarPercent': {
                        displayText: 'Stacked Bar100%',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Compares multiple measures as parts of a whole using the bars stacked horizontally.',
                            title: 'Stacked Bar100%'
                        }
                    }
                }
            },
            kpi: {
                groupName: 'KPI',
                Items: {
                    'databar': {
                        displayText: 'Data Bar',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Represents multiple data points but typically illustrate only one, often used in tables and matrices.',
                            title: 'Data Bar'
                        }
                    },
                    'sparkline': {
                        displayText: 'Sparkline',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Presents multiple data points and its variations in a very condensed fashion, often used in tables and matrices.',
                            title: 'Sparkline'
                        }
                    },
                    'indicator': {
                        displayText: 'Indicator',
                        tooltip: {
                            requirements: '1 value.',
                            description: 'Minimal representation of gauges that visualize the state of a single data.',
                            title: 'Indicator'
                        }
                    }
                }
            },
            gauge: {
                groupName: 'Deviation',
                Items: {
                    'radialgauge': {
                        displayText: 'Radial Gauge',
                        tooltip: {
                            requirements: '1 value and 0 or 1 start/end value.',
                            description: 'Visualize trends through key performance indicators like values and goals.',
                            title: 'Radial Gauge'
                        }
                    },
                    'lineargauge': {
                        displayText: 'Linear Gauge',
                        tooltip: {
                            requirements: '1 value and 0 or 1 start/end value.',
                            description: 'Visualize trends through key performance indicators like values and goals. Often used in tables and matrices.',
                            title: 'Linear Gauge'
                        }
                    }
                }
            },
            proportion: {
                groupName: 'Proportion',
                Items: {
                    'pie': {
                        displayText: 'Pie',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Showcases the proportions of each items contribution to the total in the form of pie-slices.',
                            title: 'Pie'
                        }
                    },
                    'explodedPie': {
                        displayText: 'Exploded Pie',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Emphasizes an individual slice of a pie chart.',
                            title: 'Exploded Pie'
                        }
                    },
                    'doughnut': {
                        displayText: 'Doughnut',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Showcases the proportions of each items contribution to the total in the form of doughnut-slices.',
                            title: 'Doughnut'
                        }
                    },
                    'pyramid': {
                        displayText: 'Pyramid',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Showcases the proportional comparison between values in a progressively increasing manner.',
                            title: 'Pyramid'
                        }
                    },
                    'funnel': {
                        displayText: 'Funnel',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Showcases the proportional comparison between values in a progressively decreasing manner.',
                            title: 'Funnel'
                        }
                    }
                }
            },
            distribution: {
                groupName: 'Distribution',
                Items: {
                    'area': {
                        displayText: 'Area',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Compares values for a set of unordered items across various categories through the filled curves ordered vertically.',
                            title: 'Area'
                        }
                    },
                    'smoothArea': {
                        displayText: 'Smooth Area',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Compares values for a set of unordered items across various categories through the filled curves ordered vertically with smooth surface.',
                            title: 'Smooth Area'
                        }
                    },
                    'stackedArea': {
                        displayText: 'Stacked Area',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Compares multiple measures through the filled curves stacked vertically.',
                            title: 'Stacked Area'
                        }
                    },
                    'stackedAreaPercent': {
                        displayText: 'Stacked Area100%',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Compares multiple measures as parts of a whole through the filled curves stacked vertically.',
                            title: 'Stacked Area100%'
                        }
                    },
                    'line': {
                        displayText: 'Line',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Showcases the trends for analysis over a time with data points connected using the straight lines.',
                            title: 'Line'
                        }
                    },
                    'smoothLine': {
                        displayText: 'Smooth Line',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Compares the distribution of values over a time period connected using the smooth lines.',
                            title: 'Smooth Line'
                        }
                    },
                    'steppedLine': {
                        displayText: 'Stepped Line',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Compares the distribution of values over a time period connected using the stepped lines.',
                            title: 'Stepped Line'
                        }
                    },
                    'lineWithMarkers': {
                        displayText: 'Line with Markers',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Compare changes over the same period of time for more than one group.',
                            title: 'Line with Markers'
                        }
                    },
                    'smoothLineWithMarkers': {
                        displayText: 'SmoothLine with Markers',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Plotted values are represented with a marker point and those points are connected using a smooth line.',
                            title: 'SmoothLine with Markers'
                        }
                    },
                    'scatter': {
                        displayText: 'Scatter',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Displays a series as a set of points and values are represented by the position of points on the chart.',
                            title: 'Scatter'
                        }
                    },
                    'bubble': {
                        displayText: 'Bubble',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Displays the difference between two values of a data point based on the size of the bubble.',
                            title: 'Bubble'
                        }
                    },
                    'polar': {
                        displayText: 'Polar',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Displays a series as a set of points that are grouped by category on a 360-degree circle.',
                            title: 'Polar'
                        }
                    },
                    'radar': {
                        displayText: 'Radar',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Displays a series as a circular line or area.',
                            title: 'Radar'
                        }
                    },
                    'rangeArea': {
                        displayText: 'Range Area',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'A type of area chart where rather than starting on the axis, the area is represented by the space between two values.',
                            title: 'Range Area'
                        }
                    },
                    'smoothRangeArea': {
                        displayText: 'Smooth Range Area',
                        tooltip: {
                            requirements: '1 or more values and 1 or more columns.',
                            description: 'Curved lines to connect data points rather than straight ones.',
                            title: 'Smooth Range Area'
                        }
                    }
                }
            },
            dataRegions: {
                groupName: 'Data Regions',
                Items: {
                    'tablix': {
                        displayText: 'Table',
                        tooltip: {
                            requirements: '1 or more rows/columns.',
                            description: 'Display the paginated data in tabular format.',
                            title: 'Table'
                        }
                    },
                    'list': {
                        displayText: 'List',
                        tooltip: {
                            requirements: '1 or more rows/columns.',
                            description: 'A List displays data in a free-form format. Place fields anywhere within the list.',
                            title: 'List'
                        }
                    },
                    'matrix': {
                        displayText: 'Matrix',
                        tooltip: {
                            requirements: '1 or more values and 1 or more rows/columns.',
                            description: 'Display summarized data in cross tabular format.',
                            title: 'Matrix'
                        }
                    }
                }
            },
            maps: {
                groupName: 'Map',
                Items: {
                    'map': {
                        displayText: 'Map',
                        tooltip: {
                            requirements: 'Display a map to the report.',
                            description: 'Displays analytical data against a geographical background.',
                            title: 'Map'
                        }
                    }
                }
            },
            subReports: {
                groupName: 'Sub Reports',
                Items: {
                    'subreport': {
                        displayText: 'SubReport',
                        tooltip: {
                            requirements: 'Display/Embed the report in main report.',
                            description: 'Displays another report in the main report body.',
                            title: 'SubReport'
                        }
                    }
                }
            }
        }
    },
    toolbar: {
        newReport: 'New',
        open: 'Open',
        openMenu: {
            fromDevice: 'From Device',
            fromServer: 'From Server',
        },
        save: 'Save',
        saveMenu: {
            saveLabel: 'Save',
            saveAs: 'Save As',
            subMenu: {
                toDevice: 'To Device',
                toServer: 'To Server'
            }
        },
        cut: 'Cut',
        copy: 'Copy',
        paste: 'Paste',
        deleteItem: 'Delete',
        undo: 'Undo',
        redo: 'Redo',
        zoomIn: 'Zoom In',
        zoomOut: 'Zoom Out',
        header: 'Header',
        footer: 'Footer',
        order: 'Order',
        orderMenu: {
            sendBackward: 'Send Backward',
            bringForward: 'Bring Forward',
            sendToBack: 'Send To Back',
            bringToFront: 'Bring To Front'
        },
        left: 'Left Align',
        center: 'Center',
        right: 'Right Align',
        top: 'Top Align',
        middle: 'Middle',
        bottom: 'Bottom Align',
        distributeHorizontally: 'Distribute Horizontally',
        distributeVertically: 'Distribute Vertically',
        centerHorizontally: 'Center Horizontally',
        centerVertically: 'Center Vertically',
        sizing: 'Sizing',
        sizingMenu: {
            sameSize: 'Same Size',
            sameWidth: 'Same Width',
            sameHeight: 'Same Height'
        },
        alignToGrid: 'Align To Grid',
        sizeToGrid: 'Size To Grid',
        gridLine: 'Grid Lines',
        snapToShape: 'Snap To Shape',
        fullScreen: 'Full Screen',
        preview: 'Preview',
        reportUpload: {
            alertLabel: 'Upload',
            alertMessage: 'Error in uploading file. Please upload again'
        },
        grouping: 'Grouping',
        view: 'View'
    },
    newReport: {
        title: 'New Report',
        fileName: 'File Name',
        waterMark: 'Report Name',
        create: 'Create',
        cancel: 'Cancel',
        close: 'Close',
    },
    reportAction: {
        linkTo: 'Link To',
        report: 'Report',
        url: 'URL',
        linkUrl: 'Link Url to the Report item',
        none: 'None',
        linkBookmark: 'Bookmark'
    },
    linkReport: {
        reportCaption: 'Report',
        labelText: 'Link SubReport to the Report item',
        reportDialog: 'Open Report Dialog',
        setParameter: 'Set Parameters',
        dialogHeader: 'Report Designer',
        alertContent: 'Cannot access server reports.'
    },
    imageProperty: {
        basicSettings: {
            categoryName: 'Basic Settings',
            source: 'Source',
            sourceTypes: {
                external: 'External',
                embedded: 'Embedded',
                database: 'Database'
            },
            value: 'Value',
            mimeType: 'MIME Type',
            mimeTypes: {
                bmp: 'image/bmp',
                jpeg: 'image/jpeg',
                gif: 'image/gif',
                png: 'image/png',
                xPng: 'image/x-png'
            }
        },
        categoryName: 'Link',
        linkReport: 'Link Report',
        URL: 'URL',
        appearance: {
            categoryName: 'Appearance',
            styleTooltip: 'Style',
            colorTooltip: 'Color',
            sizeTooltip: 'Size',
            borderTypes: {
                default: 'Border',
                left: 'Left',
                top: 'Top',
                right: 'Right',
                bottom: 'Bottom'
            },
            borderStyles: {
                solid: 'Solid',
                none: 'None',
                double: 'Double',
                dashed: 'Dashed',
                dotted: 'Dotted'
            },
            borderProperties: {
                defaultColor: 'Border Color',
                defaultSize: 'Border Size',
                defaultStyle: 'Border Style',
                leftColor: 'Border Left Color',
                leftSize: 'Border Left Size',
                leftStyle: 'Border Left Style',
                topColor: 'Border Top Color',
                topSize: 'Border Top Size',
                topStyle: 'Border Top Style',
                rightColor: 'Border Right Color',
                rightSize: 'Border Right Size',
                rightStyle: 'Border Right Style',
                bottomColor: 'Border Bottom Color',
                bottomSize: 'Border Bottom Size',
                bottomStyle: 'Border Bottom Style'
            }
        },
        size: {
            categoryName: 'Size',
            paddingTypes: {
                label: 'Padding',
                left: 'Left',
                top: 'Top',
                right: 'Right',
                bottom: 'Bottom'
            },
            sizing: 'Sizing',
            sizeTypes: {
                auto: 'AutoSize',
                fit: 'Fit',
                proportional: 'FitProportional',
                clip: 'Clip'
            }
        },
        position: {
            categoryName: 'Position',
            label: 'Position',
            left: 'Left',
            top: 'Top',
            sizeLabel: 'Size',
            width: 'Width',
            height: 'Height'
        },
        visibility: {
            categoryName: 'Visibility',
            visible: 'Visible',
            toggleItem: 'Toggle Item'
        },
        miscellaneous: {
            categoryName: 'Miscellaneous',
            customAttributes: 'Custom Attributes',
            toolTip: 'Tooltip',
            documentMap: 'Document Map',
            zIndex: 'ZIndex',
            bookmark: 'Bookmark'
        }
    },
    chartProperty: {
        commonProperties: {
            showBorder: 'Show Border',
            border: {
                default: 'Border',
                left: 'Left',
                top: 'Top',
                right: 'Right',
                bottom: 'Bottom'
            },
            background: 'Background Color',
            font: 'Font',
            fontStyle: 'Font Style',
            labelRotation: 'Label Rotation',
            categoryAxis: 'Category Axis',
            valueAxis: 'Value Axis',
            defaultText: 'Default',
            auto: 'Auto',
            borderStyles: {
                solid: 'Solid',
                none: 'None',
                double: 'Double',
                dashed: 'Dashed',
                dotted: 'Dotted',
                dashDot: 'DashDot',
                dashDotDot: 'DashDotDot'
            },
            borderProperties: {
                defaultColor: 'Border Color',
                defaultSize: 'Border Size',
                defaultStyle: 'Border Style',
                leftColor: 'Border Left Color',
                leftSize: 'Border Left Size',
                leftStyle: 'Border Left Style',
                topColor: 'Border Top Color',
                topSize: 'Border Top Size',
                topStyle: 'Border Top Style',
                rightColor: 'Border Right Color',
                rightSize: 'Border Right Size',
                rightStyle: 'Border Right Style',
                bottomColor: 'Border Bottom Color',
                bottomSize: 'Border Bottom Size',
                bottomStyle: 'Border Bottom Style'
            },
            horizontalAlignments: {
                near: 'Near',
                far: 'Far',
            },
            textAlignments: {
                right: 'Right',
                bottom: 'Bottom',
                center: 'Center',
                topLeft: 'TopLeft',
                topCenter: 'TopCenter',
                topRight: 'TopRight',
                rightTop: 'RightTop',
                rightCenter: 'RightCenter',
                rightBottom: 'RightBottom',
                bottomLeft: 'BottomLeft',
                bottomCenter: 'BottomCenter',
                bottomRight: 'BottomRight',
                leftTop: 'LeftTop',
                leftCenter: 'LeftCenter',
                leftBottom: 'LeftBottom',
            },
            fontStyleTypes: {
                normal: 'Normal',
                italic: 'Italic'
            },
            fontWeightTypes: {
                light: 'Light',
                bold: 'Bold'
            }
        },
        noDataMessage: {
            categoryName: 'No Data',
            caption: 'Message',
            hidden: 'Hide No Data',
            showBorder: 'Show Border',
            borderColor: 'Border Color',
            borderSize: 'Border Size',
            fontLabel: 'Font',
            background: 'Background color',
            position: 'Position',
            font: {
                categoryName: 'Font',
                color: 'Font Color',
                family: 'Font Family',
                size: 'Font Size',
                style: 'Font Style',
                weight: 'Font Weight'
            },
            fontStyle: {
                label: 'Font Style',
                fontItem: {
                    default: 'Default',
                    normal: 'Normal',
                    italic: 'Italic'
                },
                fontWeight: {
                    default: 'Default',
                    normal: 'Normal',
                    thin: 'Thin',
                    extraLight: 'ExtraLight',
                    light: 'Light',
                    medium: 'Medium',
                    semiBold: 'SemiBold',
                    bold: 'Bold',
                    extraBold: 'ExtraBold',
                    heavy: 'Heavy',
                }
            }
        },
        basicSettings: {
            categoryName: 'Basic Settings',
            chartType: {
                categoryName: 'Chart Type',
                column: 'Column',
                stackedColumn: 'Stacked Column',
                stackedColumnPercent: 'Stacked Column100%',
                bar: 'Bar',
                stackedBar: 'Stacked Bar',
                stackedBarPercent: 'Stacked Bar100%',
                pie: 'Pie',
                explodedPie: 'Exploded Pie',
                doughnut: 'Doughnut',
                pyramid: 'Pyramid',
                funnel: 'Funnel',
                area: 'Area',
                smoothArea: 'Smooth Area',
                stackedArea: 'Stacked Area',
                stackedAreaPercent: 'Stacked Area100%',
                line: 'Line',
                smoothLine: 'Smooth Line',
                steppedLine: 'Stepped Line',
                lineWithMarkers: 'Line With Markers',
                smoothLineWithMarkers: 'Smooth Line With Markers',
                scatter: 'Scatter',
                bubble: 'Bubble',
                polar: 'Polar',
                radar: 'Radar',
                rangeArea: 'Range Area',
                rangeColumn: 'Range Column',
                rangeBar: 'Range Bar',
                smoothRangeArea: 'Smooth Range Area',
                alertSwitchChartType: 'All the Series type will be changed. Do you want to continue?'
            },
            legendProperties: {
                booleanPropertyLabel: 'Show Legend',
                title: 'Title',
                titleFont: 'Title Font',
                titleFontStyle: 'Title Font Style',
                titleAlignment: 'Title Alignment',
                position: 'Legend Position',
                enableCustomBounds: 'Enable Custom Bounds'
            },
            chooseSeries: 'Choose Series'
        },
        categoryName: 'Appearance',
        chartArea: {
            categoryName: 'Chart Area',
            colorPalette: 'Color Palette',
            colorPaletteTypes: {
                earthTones: 'EarthTones',
                excel: 'Excel',
                grayScale: 'GrayScale',
                pastel: 'Pastel',
                semiTransparent: 'SemiTransparent',
                berry: 'Berry',
                chocolate: 'Chocolate',
                fire: 'Fire',
                seaGreen: 'SeaGreen',
                brightPastel: 'BrightPastel',
                pacific: 'Pacific',
                pacificLight: 'PacificLight',
                pacificSemiTransparent: 'PacificSemiTransparent',
                custom: 'Custom'
            },
            customColors: 'Custom Colors'
        },
        forecast: {
            categoryName: 'Forecast Settings',
            enableSettings: 'Enable',
            forecastlength: 'Length (points)',
            confidenceInterval: 'Confidence Interval',
            seasonality: 'Seasonality (points)',
            enableSeries: 'Forecast',
            forecastColor: 'Forecast Color',
            confidenceEnable: 'Confidence',
            confidenceColor: 'Confidence Color',
            bandStyle: 'Confidence Band Style',
            confidenceBandTypes: {
                fill: 'Fill',
                linetype: 'Line',
                dot: 'Dot'
            }
        },
        title: {
            categoryName: 'Title',
            booleanPropertyLabel: 'Show Chart Title',
            label: 'Title Text',
            position: 'Title Position'
        },
        axis: {
            booleanPropertyLabel: 'Enable Axis',
            title: 'Axis Title',
            alignment: 'Alignment',
            lineStyle: 'Line Style',
            labelOverflowMode: 'Label Overflow Mode',
            overFlowModeTypes: {
                trim: 'Trim',
                hide: 'Hide',
            },
            labelFont: 'Label Font',
            labelFormat: 'Label Format',
            interval: 'Interval',
            intervalType: 'Interval Type',
            intervalTypes: {
                default: 'Default',
                number: 'Number',
                years: 'Years',
                months: 'Months',
                days: 'Days',
                hours: 'Hours',
                minutes: 'Minutes',
                seconds: 'Seconds',
                milliseconds: 'Milliseconds',
                weeks: 'Weeks'
            },
            enableMajorTicks: 'Enable Major Ticks',
            enableMinorTicks: 'Enable Minor Ticks',
            tickProperties: {
                sizeLabel: 'Tick Size',
                colorLabel: 'Tick Color',
                width: 'Width',
                length: 'Length'
            },
            tickPosition: 'Tick Position',
            lineProperties: {
                color: 'Line Color',
                size: 'Line Size',
                style: 'Line Style'
            },
            gridLineProperties: {
                color: 'Grid Line Color',
                size: 'Grid Line Size',
                style: 'Grid Line Style'
            },
            chartTicks: {
                length: 'Tick Length',
                width: 'Tick Width'
            },
            labelsAutofitDisabled: 'Labels AutoFit Disabled',
            margin: 'Margin',
            maximum: 'Maximum',
            minimum: 'Minimum',
            horizontalAxis: 'Horizontal Axis',
            verticalAxis: 'Vertical Axis',
            includeZero: 'Include Zero'
        },
        gridLine: {
            categoryName: 'Grid Line',
            style: {
                booleanPropertyLabel: 'Show Minor GridLine',
                major: 'Major GridLine Style',
                minor: 'Minor GridLine Style'
            }
        },
        pageBreak: {
            categoryName: 'Page Break',
            booleanPropertyLabel: 'Enable Page Break',
            breakLocation: 'Break Location',
            breakLocationTypes: {
                none: 'None',
                start: 'Start',
                end: 'End',
                startAndEnd: 'StartAndEnd',
                between: 'Between',
            },
            pageNumberReset: 'Page Number Reset',
            pageName: 'Page Name'
        },
        position: {
            categoryName: 'Position',
            label: 'Position',
            left: 'Left',
            top: 'Top',
            sizeLabel: 'Size',
            width: 'Width',
            height: 'Height'
        },
        visibility: {
            categoryName: 'Visibility',
            visible: 'Visible',
            toggleItem: 'Toggle Item'
        },
        miscellaneous: {
            categoryName: 'Miscellaneous',
            customAttributes: 'Custom Attributes',
            toolTip: 'Tooltip',
            documentMap: 'Document Map',
            alertHeader: 'Chart ReportItem',
            alertMessage: 'Invalid custom attributes format. Correct format example: \'AttrName1= Value1, AttrName2 = Value2\'.',
            bookmark: 'Bookmark'
        },
        seriesSettings: {
            headerName: 'Series Properties',
            basicSettings: {
                categoryName: 'Basic Settings',
                seriesBorder: 'Series Border',
                seriesColor: 'Series Color',
                smartLabelProperties: {
                    booleanPropertyLabel: 'Enable SmartLabel',
                    labelStyle: 'Label Style',
                    value: 'Value',
                    position: {
                        outside: 'Outside',
                        inside: 'Inside',
                        outsideInColumn: 'OutsideInColumn'
                    },
                    style: {
                        pieLabelStyle: 'PieLabelStyle',
                        funnelLabelStyle: 'FunnelLabelStyle',
                        pyramidLabelStyle: 'PyramidLabelStyle',
                        barLabelStyle: 'BarLabelStyle',
                        smartLabelStyle: 'LabelStyle'
                    }
                }
            },
            link: 'Link',
            markerProperties: {
                categoryName: 'Marker Settings',
                booleanPropertyLabel: 'Show Marker',
                color: 'Color',
                typePropertyLabel: 'Marker Type',
                types: {
                    square: 'Square',
                    circle: 'Circle',
                    diamond: 'Diamond',
                    triangle: 'Triangle',
                    cross: 'Cross',
                    star5: 'Star5',
                },
                size: 'Size'
            },
            dataLabelProperties: {
                categoryName: 'Data Label Settings',
                booleanPropertyLabel: 'Show Data Label',
                formatPropertyLabel: 'Format',
                labelPropertyText: 'Label',
                valueAsText: 'UseValueAsLabel',
                types: {
                    valueX: '#VALX',
                    valueY: '#VALY',
                    valueY2: '#VALY2',
                    valueY3: '#VALY3',
                    valueY4: '#VALY4',
                    valueY5: '#VALY5',
                    valueY6: '#VALY6',
                    index: '#INDEX',
                    percent: '#PERCENT',
                    total: '#TOTAL',
                    axisLabel: '#AXISLABEL'
                }
            },
            miscellaneous: {
                categoryName: 'Miscellaneous',
                toolTip: 'Tooltip',
                customLegendText: 'Legend Text'
            }
        },
        borderStyle: 'Border Style',
        borderColor: 'Border Color',
        borderSize: 'Border Size',
        fontStyle: 'Font Style',
        fontWeight: 'Font Weight',
        fontSize: 'Font Size',
        fontColor: 'Font Color',
        fontFamily: 'Font Family',
        fontStyleTooltip: 'Style',
        fontWeightTooltip: 'Weight',
        fontSizeTooltip: 'Size',
        fontColorTooltip: 'Color',
        fontFamilyTooltip: 'Font Family',
        styleTooltip: 'Style',
        colorTooltip: 'Color',
        sizeTooltip: 'Size',
        dataElement: {
            categoryName: 'Data Element',
            elementName: 'Name',
            elementOutput: {
                auto: 'Auto',
                noOutput: 'NoOutput',
                categoryName: 'Output',
                output: 'Output'
            }
        }
    },
    lineProperty: {
        basicSettings: {
            categoryName: 'Basic Settings',
            labelText: 'Line',
            color: 'Line Color',
            size: 'Line Size',
            style: 'Line Style',
            styleTypes: {
                solid: 'Solid',
                dashed: 'Dashed',
                dotted: 'Dotted',
            },
        },
        position: {
            categoryName: 'Position',
            label: 'Position',
            left: 'Left',
            top: 'Top',
            sizeLabel: 'Size',
            width: 'Width',
            height: 'Height',
        },
        visibility: {
            categoryName: 'Visibility',
            visible: 'Visible',
            toggleItem: 'Toggle Item'
        },
        miscellaneous: {
            categoryName: 'Miscellaneous',
            documentMap: 'Document Map',
            customAttributes: 'Custom Attributes',
            bookmark: 'Bookmark'
        },
        styleTooltip: 'Style',
        colorTooltip: 'Color',
        sizeTooltip: 'Size'
    },
    gaugeProperty: {
        basicSettingsCategory: {
            basicSettings: 'Basic Settings',
            borderTypes: {
                default: 'Border',
                left: 'Left',
                top: 'Top',
                right: 'Right',
                bottom: 'Bottom'
            },
            borderStyles: {
                solid: 'Solid',
                none: 'None',
                double: 'Double',
                dashed: 'Dashed',
                dotted: 'Dotted'
            },
            borderProperties: {
                defaultColor: 'Border Color',
                defaultSize: 'Border Size',
                defaultStyle: 'Border Style',
                leftColor: 'Border Left Color',
                leftSize: 'Border Left Size',
                leftStyle: 'Border Left Style',
                topColor: 'Border Top Color',
                topSize: 'Border Top Size',
                topStyle: 'Border Top Style',
                rightColor: 'Border Right Color',
                rightSize: 'Border Right Size',
                rightStyle: 'Border Right Style',
                bottomColor: 'Border Bottom Color',
                bottomSize: 'Border Bottom Size',
                bottomStyle: 'Border Bottom Style'
            },
            backGround: 'Background Color',
            styleTooltip: 'Style',
            colorTooltip: 'Color',
            sizeTooltip: 'Size'
        },
        positionCategory: {
            categoryName: 'Position',
            label: 'Position',
            left: 'Left',
            top: 'Top',
            sizeLabel: 'Size',
            width: 'Width',
            height: 'Height',
        },
        dataCategory: {
            label: 'Data',
            datasetName: 'Dataset',
            noneOptionLabel: 'None',
            filters: 'Filters'
        },
        labelCategory: {
            label: 'Label',
            enableLabel: 'Enable Label',
            labelTarget: 'Target',
            labelText: 'Text',
            alignment: 'Text Alignment',
            alignmentTypes: {
                leftAlignment: 'Left',
                centerAlignment: 'Center',
                rightAlignment: 'Right',
                topAlignment: 'Top',
                middleAlignment: 'Middle',
                bottomAlignment: 'Bottom'
            },
            textDecoration: 'Decoration',
            textDecorationTypes: {
                underline: 'Underline',
                lineThrough: 'LineThrough',
                overline: 'Overline'
            }
        },
        visibilityCategory: {
            categoryName: 'Visibility',
            visible: 'Visible',
            toggleItem: 'Toggle Item'
        },
        miscellaneousCategory: {
            categoryName: 'Miscellaneous',
            customattributes: 'Custom Attributes',
            documentMap: 'Document Map',
            pageName: 'Page Name',
            bookmark: 'Bookmark'
        },
        commonCategory: {
            fontCategory: {
                font: 'Font',
                fontSize: 'Font Size',
                fontFamily: 'Font Family',
                fontColor: 'Font Color',
                fontStyle: 'Font Style',
                fontWeight: 'Font Weight',
                fontWeights: {
                    default: 'Default',
                    normal: 'Normal',
                    thin: 'Thin',
                    extraLight: 'ExtraLight',
                    light: 'Light',
                    medium: 'Medium',
                    semiBold: 'SemiBold',
                    bold: 'Bold',
                    extraBold: 'ExtraBold',
                    heavy: 'Heavy',
                },
                fontStyles: {
                    italic: 'Italic'
                }
            }
        },
        dataElement: {
            categoryName: 'Data Element',
            elementName: 'Name',
            elementOutput: {
                auto: 'Auto',
                noOutput: 'NoOutput',
                categoryName: 'Output',
                output: 'Output'
            }
        }
    },
    indicatorProperty: {
        typesCategory: {
            categoryName: 'Indicator Types',
            types: {
                threeColoredArrows: 'Three Colored Arrows',
                threeGrayArrows: 'Three Gray Arrows',
                threeUpDownTriangles: 'Three UpDown Triangles',
                fourGrayArrows: 'Four Gray Arrows',
                fourColoredArrows: 'Four Colored Arrows',
                fiveGrayArrows: 'Five Gray Arrows',
                fiveColoredArrows: 'Five Colored Arrows',
                threeCircledSymbols: 'Three Circled Symbols',
                threeUncircledSymbols: 'Three Uncircled Symbols',
                threeFlags: 'Three Flags',
                threeUnrimmedTrafficLights: 'Three Unrimmed Traffic Lights',
                threeRimmedTrafficLights: 'Three Rimmed Traffic Lights',
                threeSigns: 'Three Signs',
                fourTrafficLights: 'Four Traffic Lights',
                redToBlack: 'Red To Black',
                threeStars: 'Three Stars',
                fiveStars: 'Five Stars',
                fourRatings: 'Four Ratings',
                fiveRatings: 'Five Ratings',
                fiveQuarters: 'Five Quarters',
                fiveBlocks: 'Five Blocks',
                custom: 'Custom'
            }
        },
        valueCategory: {
            categoryName: 'Indicator Value',
            value: 'Value',
            measurementUnit: 'Measurement Unit',
            min: 'Minimum',
            max: 'Maximum',
            numeric: 'Numeric',
            percentage: 'Percentage'
        },
        states: {
            categoryName: 'Indicator States',
            icons: {
                circle: 'Circle',
                flag: 'Flag',
                arrowDown: 'Arrow Down',
                arrowDownIncline: 'Arrow Down Incline',
                arrowSide: 'Arrow Side',
                arrowUp: 'Arrow Up',
                arrowUpIncline: 'Arrow Up Incline',
                boxesNoneFilled: 'Boxes None Filled',
                boxesOneFilled: 'Boxes One Filled',
                boxesTwoFilled: 'Boxes Two Filled',
                boxesThreeFilled: 'Boxes Three Filled',
                boxesAllFilled: 'Boxes All Filled',
                quartersNoneFilled: 'Quarters None Filled',
                quartersOneFilled: 'Quarters One Filled',
                quartersTwoFilled: 'Quarters Two Filled',
                quartersThreeFilled: 'Quarters Three Filled',
                quartersAllFilled: 'Quarters All Filled',
                signalMeterNoneFilled: 'Signal Meter None Filled',
                signalMeterOneFilled: 'Signal Meter One Filled',
                signalMeterTwoFilled: 'Signal Meter Two Filled',
                signalMeterThreeFilled: 'Signal Meter Three Filled',
                signalMeterFourFilled: 'Signal Meter Four Filled',
                starQuartersNoneFilled: 'Star Quarters None Filled',
                starQuartersOneFilled: 'Star Quarters One Filled',
                starQuartersTwoFilled: 'Star Quarters Two Filled',
                starQuartersThreeFilled: 'Star Quarters Three Filled',
                starQuartersAllFilled: 'Star Quarters All Filled',
                threeSignsCircle: 'Three Signs Circle',
                threeSignsDiamond: 'Three Signs Diamond',
                threeSignsTriangle: 'Three Signs Triangle',
                threeSymbolCheck: 'Three Symbol Check',
                threeSymbolCross: 'Three Symbol Cross',
                threeSymbolExclamation: 'Three Symbol Exclamation',
                threeSymbolUnCircledCheck: 'Three Symbol UnCircled Check',
                threeSymbolUnCircledCross: 'Three Symbol UnCircled Cross',
                threeSymbolUnCircledExclamation: 'Three Symbol UnCircled Exclamation',
                trafficLight: 'Traffic Light',
                trafficLightUnrimmed: 'Traffic Light Unrimmed',
                triangleDash: 'Triangle Dash',
                triangleDown: 'Triangle Down',
                triangleUp: 'Triangle Up',
                lightArrowDown: 'Light Arrow Down',
                lightArrowDownIncline: 'Light Arrow Down Incline',
                lightArrowSide: 'Light Arrow Side',
                lightArrowUp: 'Light Arrow Up',
                lightArrowUpIncline: 'Light Arrow Up Incline',
                buttonStop: 'Button Stop',
                buttonPlay: 'Button Play',
                buttonPause: 'Button Pause',
                faceSmile: 'Face Smile',
                faceNeutral: 'Face Neutral',
                faceFrown: 'Face Frown',
                none: 'None'
            }
        },
        miscellaneous: {
            categoryName: 'Miscellaneous',
            toolTip: 'Tooltip'
        }
    },
    linearGaugeProperty: {
        scaleCategory: {
            scale: 'Scale',
            min: 'Minimum',
            max: 'Maximum',
            interval: 'Interval',
            reverseDirection: 'Reverse Direction',
            scaleBarWidth: 'Width',
            scaleBarColor: 'Color',
            linearTypecategory: {
                linearType: 'Type',
                horizontal: 'Horizontal',
                vertical: 'Vertical',
                auto: 'Auto'
            },
            scaleLabelsCategory: {
                showScaleLabels: 'Labels',
                showScaleLabelsAtEnd: 'Show Labels At End'
            },
            ticksCategory: {
                tickMark: 'Tick Mark',
                majorTick: 'Major Tick',
                minorTick: 'Minor Tick',
                majorTickPlacement: 'Major Tick Placement',
                minorTickPlacement: 'Minor Tick Placement',
                tickInterval: 'Interval',
                tickLength: 'Length',
                tickWidth: 'Width',
                tickColor: 'Color'
            },
            pointerCategory: {
                pointer: 'Pointer',
                enablePointer: 'Enable Pointer',
                pointerValue: 'Value',
                pointerType: 'Type',
                pointerTypes: {
                    marker: 'Marker',
                    bar: 'Bar'
                },
                pointerWidth: 'Width',
                pointerColor: 'Color',
                markerLength: 'Marker Length',
                markerStyle: 'Marker Style',
                markerStyles: {
                    circle: 'Circle',
                    rectangle: 'Rectangle',
                    triangle: 'Triangle',
                    diamond: 'Diamond'
                }
            },
            rangeCategory: {
                range: 'Range',
                enableRange: 'Enable Range',
                rangeWidth: 'Width',
                startRange: 'Start',
                endRange: 'End',
                startWidth: 'Start',
                endWidth: 'End',
                rangeColor: 'Color'
            }
        },
        commonCategory: {
            placementCategory: {
                placement: 'Placement',
                inside: 'Inside',
                outside: 'Outside',
                cross: 'Cross'
            },
            miscellaneousCategory: {
                tooltip: 'Tooltip',
                miscellaneous: 'Miscellaneous'
            }
        }
    },
    radialGaugeProperty: {
        scaleCategory: {
            scale: 'Scale',
            min: 'Minimum',
            max: 'Maximum',
            interval: 'Interval',
            reverseDirection: 'Reverse Direction',
            angle: 'Angle',
            startAngle: 'Start',
            sweepAngle: 'Sweep',
            scaleBarWidth: 'Width',
            scaleBarColor: 'Color',
            pivotX: 'PivotX',
            pivotY: 'PivotY',
            radialTypecategory: {
                radialType: 'Type',
                radial: 'Radial',
                halfCircle: 'Half Circle',
                auto: 'Auto'
            },
            scaleLabelsCategory: {
                showScaleLabels: 'Labels',
                showScaleLabelsAtEnd: 'Show Labels At End',
                rotateScaleLabels: 'Rotate Labels'
            },
            ticksCategory: {
                tickMark: 'Tick Mark',
                majorTick: 'Major Tick',
                minorTick: 'Minor Tick',
                majorTickPlacement: 'Major Tick Placement',
                minorTickPlacement: 'Minor Tick Placement',
                tickInterval: 'Interval',
                tickLength: 'Length',
                tickWidth: 'Width',
                tickColor: 'Color'
            },
            pointerCategory: {
                pointer: 'Pointer',
                enablePointer: 'Enable Pointer',
                pointerValue: 'Value',
                pointerType: 'Type',
                pointerTypes: {
                    needle: 'Needle',
                    bar: 'Bar',
                    marker: 'Marker'
                },
                pointerWidth: 'Width',
                pointerColor: 'Color',
                markerLength: 'Marker Length',
                markerStyle: 'Marker Style',
                markerStyles: {
                    circle: 'Circle',
                    rectangle: 'Rectangle',
                    triangle: 'Triangle',
                    diamond: 'Diamond'
                },
                showPointerCap: 'Cap',
                capWidth: 'Width',
                capColor: 'Color'
            },
            rangeCategory: {
                range: 'Range',
                enableRange: 'Enable Range',
                rangeWidth: 'Width',
                startRange: 'Start',
                endRange: 'End',
                startWidth: 'Start',
                endWidth: 'End',
                rangeColor: 'Color'
            }
        },
        commonCategory: {
            placementCategory: {
                inside: 'Inside',
                outside: 'Outside',
                cross: 'Cross'
            },
            miscellaneousCategory: {
                tooltip: 'Tooltip',
                miscellaneous: 'Miscellaneous'
            }
        }
    },
    subReportProperty: {
        basicSettings: {
            categoryName: 'Basic Settings',
        },
        appearance: {
            categoryName: 'Appearance',
            borderTypes: {
                default: 'Border',
                left: 'Left',
                top: 'Top',
                right: 'Right',
                bottom: 'Bottom'
            },
            borderStyles: {
                solid: 'Solid',
                none: 'None',
                double: 'Double',
                dashed: 'Dashed',
                dotted: 'Dotted'
            },
            borderProperties: {
                defaultColor: 'Border Color',
                defaultSize: 'Border Size',
                defaultStyle: 'Border Style',
                leftColor: 'Border Left Color',
                leftSize: 'Border Left Size',
                leftStyle: 'Border Left Style',
                topColor: 'Border Top Color',
                topSize: 'Border Top Size',
                topStyle: 'Border Top Style',
                rightColor: 'Border Right Color',
                rightSize: 'Border Right Size',
                rightStyle: 'Border Right Style',
                bottomColor: 'Border Bottom Color',
                bottomSize: 'Border Bottom Size',
                bottomStyle: 'Border Bottom Style'
            }
        },
        noRows: {
            categoryName: 'No Rows',
            font: {
                categoryName: 'Font',
                color: 'Font Color',
                family: 'Font Family',
                size: 'Font Size',
                style: 'Font Style',
                weight: 'Font Weight'
            },
            fontStyle: {
                label: 'Font Style',
                fontItem: {
                    default: 'Default',
                    normal: 'Normal',
                    italic: 'Italic'
                },
                fontWeight: {
                    default: 'Default',
                    normal: 'Normal',
                    thin: 'Thin',
                    extraLight: 'ExtraLight',
                    light: 'Light',
                    medium: 'Medium',
                    semiBold: 'SemiBold',
                    bold: 'Bold',
                    extraBold: 'ExtraBold',
                    heavy: 'Heavy',
                }
            },
            textDecoration: {
                categoryName: 'Text Decoration',
                defaultStyle: 'Default',
                none: 'None',
                underLine: 'Underline',
                overLine: 'Overline',
                lineThrough: 'LineThrough'
            },
            format: 'Format',
            lineHeight: 'Line Height',
            message: 'Message',
            paddingTypes: {
                label: 'Padding',
                left: 'Left',
                right: 'Right',
                top: 'Top',
                bottom: 'Bottom',
            },
            textAlign: {
                categoryName: 'Text Align',
                default: 'Default',
                left: 'Left',
                right: 'Right',
                center: 'Center'
            },
            verticalAlign: {
                categoryName: 'Vertical Align',
                default: 'Default',
                top: 'Top',
                middle: 'Middle',
                bottom: 'Bottom'
            },
            writingMode: {
                categoryName: 'Writing Mode',
                default: 'Default',
                horizontal: 'Horizontal',
                vertical: 'Vertical',
                rotateProperty: 'Rotate270'
            }
        },
        visibility: {
            categoryName: 'Visibility',
            visible: 'Visible',
            toggleItem: 'Toggle Item'
        },
        position: {
            categoryName: 'Position',
            label: 'Position',
            left: 'Left',
            top: 'Top',
            sizeLabel: 'Size',
            width: 'Width',
            height: 'Height',
        },
        miscellaneous: {
            categoryName: 'Miscellaneous',
            keepTogether: 'Keep Together',
            toolTip: 'Tooltip',
            documentMap: 'Document Map',
            customAttributes: 'Custom Attributes',
            bookmark: 'Bookmark'
        },
        fontStyleTooltip: 'Style',
        fontWeightTooltip: 'Weight',
        fontSizeTooltip: 'Size',
        fontColorTooltip: 'Color',
        fontFamilyTooltip: 'Font Family',
        styleTooltip: 'Style',
        colorTooltip: 'Color',
        sizeTooltip: 'Size',
        dataElement: {
            categoryName: 'Data Element',
            elementName: 'Name',
            elementOutput: {
                auto: 'Auto',
                noOutput: 'NoOutput',
                categoryName: 'Output',
                output: 'Output'
            }
        }
    },
    rectangleProperty: {
        basicSettings: {
            categoryName: 'Basic Settings',
            borderTypes: {
                default: 'Border',
                left: 'Left',
                top: 'Top',
                right: 'Right',
                bottom: 'Bottom'
            },
            borderStyles: {
                solid: 'Solid',
                none: 'None',
                double: 'Double',
                dashed: 'Dashed',
                dotted: 'Dotted'
            },
            borderProperties: {
                defaultColor: 'Border Color',
                defaultSize: 'Border Size',
                defaultStyle: 'Border Style',
                leftColor: 'Border Left Color',
                leftSize: 'Border Left Size',
                leftStyle: 'Border Left Style',
                topColor: 'Border Top Color',
                topSize: 'Border Top Size',
                topStyle: 'Border Top Style',
                rightColor: 'Border Right Color',
                rightSize: 'Border Right Size',
                rightStyle: 'Border Right Style',
                bottomColor: 'Border Bottom Color',
                bottomSize: 'Border Bottom Size',
                bottomStyle: 'Border Bottom Style'
            },
            backGround: 'Background Color',
            styleTooltip: 'Style',
            colorTooltip: 'Color',
            sizeTooltip: 'Size'
        },
        backgroundImage: {
            categoryName: 'Background Image',
            source: 'Source',
            sourceTypes: {
                external: 'External',
                embedded: 'Embedded',
                database: 'Database'
            },
            value: 'Value',
            mimeTypeLabel: 'MIME Type',
            mimeTypes: {
                bmp: 'image/bmp',
                jpeg: 'image/jpeg',
                gif: 'image/gif',
                png: 'image/png',
                xPng: 'image/x-png'
            },
            repeatProperty: {
                categoryName: 'Repeat',
                repeat: 'Repeat',
                repeatX: 'RepeatX',
                repeatY: 'RepeatY',
                defaultType: 'Default',
                clip: 'Clip',
                fit: 'Fit'
            }
        },
        pageBreak: {
            categoryName: 'Page Break',
            enableProperty: {
                labelText: 'Enable Page Break',
                breakLocation: {
                    labelText: 'Break Location',
                    none: 'None',
                    start: 'Start',
                    end: 'End',
                    startAndEnd: 'StartAndEnd',
                    between: 'Between'
                },
                pageNumberReset: 'Page Number Reset'
            },
        },
        position: {
            categoryName: 'Position',
            label: 'Position',
            left: 'Left',
            top: 'Top',
            sizeLabel: 'Size',
            width: 'Width',
            height: 'Height',
        },
        visibility: {
            categoryName: 'Visibility',
            visible: 'Visible',
            toggleItem: 'Toggle Item'
        },
        miscellaneous: {
            categoryName: 'Miscellaneous',
            keepTogether: 'Keep Together',
            pageName: 'Page Name',
            toolTip: 'Tooltip',
            documentMap: 'Document Map',
            customAttributes: 'Custom Attributes',
            bookmark: 'Bookmark'
        },
        dataElement: {
            categoryName: 'Data Element',
            elementName: 'Name',
            elementOutput: {
                auto: 'Auto',
                noOutput: 'NoOutput',
                categoryName: 'Output',
                output: 'Output',
                contentsOnly: 'ContentsOnly'
            }
        }
    },
    browseFile: {
        openFile: {
            selectReport: 'Select Report',
            label: 'Open',
        },
        saveFile: {
            saveAsReport: 'Save As Report',
            name: 'Name',
            save: 'Save',
        },
        close: 'Close',
        cancel: 'Cancel',
        waterMark: 'Report Name',
        emptyMessage: 'This category is empty',
        alertMessage: {
            reportServer: 'Report Server',
            selectCategory: 'Please Select Category',
        },
        warningMessage: {
            fileNameLabel: 'An item "',
            fileNameExist: '.rdl" already exists. Do you want to replace the existing item?',
            populateCategory: 'ReportDesigner failed to retrieve the Resources from the ReportServer',
        },
        reloadAriaLabelText: 'Browse Reload',
        containerAriaLabelText: 'Browse File Container'
    },
    publishReport: {
        title: 'Publish As Report',
        publish: 'Publish',
        category: 'Category',
        selectCategory: 'Please create a category',
        createCategory: 'Create category',
        categoryPermission: 'Enable create permission to create a new category',
        categoryname: 'Name',
        emptyName: 'Please enter a name for report',
        invalidName: 'The following characters are not supported: \' + , [ ] % #',
        description: 'Description',
        maxCharacter: '*1024 characters maximum',
        markaspublic: 'Mark As Public',
        cancel: 'Cancel',
        closeToolTip: 'Close',
        tags: 'Tags',
        newTag: 'New Tag',
        tagWaterMark: 'Search Tag',
        splCharacter: 'Special characters are not supported',
        addCategory: {
            title: 'New Category',
            name: 'Name',
            description: 'Description',
            emptyValidation: 'Please enter the category name',
            duplicateNameValidation: 'Item Name already exists',
            createActionFailure: 'Failed to create category into server',
            saveLabel: 'Save'
        },
        warningMessage: {
            sameNameError: 'A report with the same name already exists in the category',
            replaceMessage: '. Do you want to replace it?',
            publishAsReport: 'Publish As Report'
        },
    },
    expressionMenu: {
        reset: 'Reset',
        label: 'Expression',
        advanced: 'Advanced',
        role: 'Expression Menu'
    },
    propertyPanel: {
        property: 'PROPERTIES',
        data: 'DATA',
        name: 'Name',
        toolTipStyle: 'Style',
        toolTipColor: 'Color',
        toolTipWidth: 'Width',
        setSorts: 'Set Sorts',
        setFilters: 'Set Filters',
        customAttributes: 'Set Attributes',
        advancedOptions: 'Advanced Options',
        closeAdvance: 'Close Advance Options',
        codemodules: 'Code',
        expressionList: {
            top: 'Top',
            right: 'Right',
            bottom: 'Bottom',
            left: 'Left',
            style: 'Style',
            color: 'Color',
            size: 'Size',
            fontFamily: 'Font Family',
            width: 'Width',
            height: 'Height',
            weight: 'Weight',
            image: 'Image'
        },
        alertMessage: {
            emptyNameValidation: 'Name cannot be empty',
            duplicateNameValidation: 'Name already exists',
            invalidCharacterValidation: 'Name should not contain spaces and special characters',
            alertDialogHeader: 'Properties',
            specialCharacterValidation: 'The property value should not contain spaces and special characters.'
        },
        unitType: {
            inchText: 'in',
            centimeterText: 'cm',
            pixelText: 'pixel',
            pointText: 'pt',
            millimeterText: 'mm',
            picaText: 'pc'
        },
        setGroups: 'Set Groups',
        addDataset: 'Add Dataset',
        dataAlertMsg: 'No dataset added !',
        NoDataFound: 'Data Not Found',
        None: 'None',
        propertyEdit: 'Edit',
        itemCountWaterMark: 'items',
        back: 'Back',
        propertyEditorAlert: {
            title: 'Property Editor',
            content: 'Do you want to cancel the property editor?'
        }
    },
    dataSource: {
        newDatasource: 'NEW DATASOURCE',
        sharedData: 'SHARED DATASOURCE',
        datasource: 'DATASOURCES',
        switchLabel: 'Switch to Data Panel',
        previousPanel: 'Previous Panel',
        datasourceLabel: 'DataSource Name',
        datasourceList: {
            data: 'Data',
            contextMenu: {
                edit: 'Edit',
                deleteItem: 'Delete',
                create: 'Create Dataset',
                clone: 'Clone'
            }
        },
        datasourceType: {
            existOption: 'Existing',
            newOption: 'Create New',
            selectDatasoure: 'Select the DataSource',
            connectDatasource: 'Connect DataSource',
            datasourceType: 'Choose the type to connect',
            sqlLabel: 'Microsoft SQL',
            azuresqldwlabel: 'Azure SQL Data Warehouse',
            sqlCeLabel: 'SQLCE',
            odbcLabel: 'ODBC',
            oracleLabel: 'Oracle',
            oledbLabel: 'OLEDB',
            xmlLabel: 'XML',
            jsonLabel: 'JSON',
            csvLabel: 'CSV',
            excelLabel: 'Excel',
            mysqlLabel: 'MySQL',
            elasticSearchLabel: 'Elastic Search',
            mariadbLabel: 'MariaDB',
            memsqlLabel: 'MemSQL',
            sharedLabel: 'Shared',
            cdataLabel: 'CDATA',
            snowflakeLabel: 'Snowflake',
            ssasLabel: 'Microsoft SQL Analysis Services',
            verticaLabel: 'Vertica',
            gcsqlLabel: 'Google Cloud SQL',
            redshiftLabel: 'Amazon Redshift',
            amazonAuroraLabel: 'Amazon Aurora',
            amazonRDSLabel: 'Amazon RDS',
            webapilabel: 'Web API',
            postgresqllabel: 'PostgreSQL',
            odatalabel: 'OData'
        },
        datasourceConnection: {
            newConnection: 'NEW CONNECTION',
            editConnection: 'EDIT CONNECTION',
            name: 'Name',
            save: 'Save',
            connect: 'Connect',
            cancel: 'Cancel',
            disclaimerText: 'By connecting you agree to these',
            disclaimerLink: 'terms',
            disclaimerTooltip: 'Customer acknowledges and agrees that by asking {customBrandName} to connect to this data source (comprising data, storage systems, environment and other constituent systems) on behalf of Customer, Customer certifies that it has adequate rights and licenses from the owners of the data source to allow Customer and {customBrandName} on behalf of the Customer to connect to, and use, the data source. Customer agrees to fully indemnify {customBrandName} for any and all claims and fees. If Customer does not agree, then Customer should not request that {customBrandName} connect to the data source.'
        },
        advanceDatasource: {
            authentication: 'Authentication',
            prompt: 'Prompt',
            none: 'None',
            userName: 'Username',
            password: 'Password',
            promptLabel: 'Prompt Text',
            savePassword: 'Save Password',
            connectionString: 'Connection String',
            authenticationType: 'Authentication Type',
            alertMessage: {
                alertUserName: 'Specify the User Name',
                alertPassword: 'Specify the Password',
                alertPrompt: 'Specify the Prompt Text',
                alertConnectionString: 'Specify the Connection string',
            }
        },
        sqlDatasource: {
            authenticationType: 'Authentication Type',
            window: 'Windows',
            sqlServer: 'SQL Server',
            userName: 'Username',
            password: 'Password',
            switchLabel: 'DataSource AdvancePanel',
            switchAlert: 'Switching to the visual designer will discard the manual changes made to the connection string. Do you want to use the visual designer anyway? ',
            basicOption: {
                serverName: 'Server Name',
                savePassword: 'Save Password',
                database: 'Database',
                advanceSwitch: 'Advanced Options'
            },
            advanceOption: {
                connectionString: 'Connection String',
                promptLabel: 'Prompt Text',
                prompt: 'Prompt',
                none: 'None',
                savePassword: 'Save Password',
                basicSwitch: 'Basic Options',
                impersonate: 'Enable Impersonate User'
            },
            alertMessage: {
                connectionString: 'Specify the Connection string',
                promptText: 'Specify the Prompt Text',
                userName: 'Specify the User Name',
                password: 'Specify the Password',
                serverName: 'Specify the server name',
                databaseName: 'Specify the database name'
            }
        },
        elasticSearchDatasource: {
            authenticationType: 'Authentication Type',
            window: 'Windows',
            server: 'ElasticSearch Server',
            none: 'None',
            basicHttp: 'Basic HTTP Authentication',
            userName: 'Username',
            password: 'Password',
            port: 'Port',
            basicOption: {
                serverName: 'Server Name',
                database: 'Database'
            },
            alertMessage: {
                port: 'Specify the Port number',
                userName: 'Specify the User Name',
                password: 'Specify the Password',
                serverName: 'Specify the server name',
                databaseName: 'Specify the database name'
            }
        },
        postgreSQLDatasource: {
            serverName: 'Server Name',
            database: 'Database',
            port: 'Port',
            userName: 'Username',
            password: 'Password',
            savePassword: 'Save Password',
            basicSwitch: 'Basic Options',
            advanceSwitch: 'Advanced Options',
            switchAlert: 'Switching to the visual designer will discard the manual changes made to the connection string. Do you want to use the visual designer anyway?',
            switchLabel: 'DataSource AdvancePanel',
            alertMessage: {
                aletServerName: 'Specify the server name',
                aletPort: 'Specify the Port number',
                alertUserName: 'Specify the User Name',
                alertPassword: 'Specify the Password',
                alertDatabase: 'Specify the database name'
            }
        },
        sqlceDatasource: {
            connectionString: 'Connection String',
            authenticationType: 'Authentication Type',
            authentication: 'Authentication',
            none: 'None',
            password: 'Password',
            savePassword: 'Save Password',
            alertMessage: {
                connectionString: 'Specify the connection string',
                password: 'Specify the Password'
            }
        },
        odbcDatasource: {
            connectionString: 'Connection String',
            authenticationType: 'Authentication Type',
            authentication: 'Authentication',
            prompt: 'Prompt',
            none: 'None',
            userName: 'Username',
            password: 'Password',
            promptLabel: 'Prompt Text',
            savePassword: 'Save Password',
            alertMessage: {
                connectionString: 'Specify the Connection string',
                promptText: 'Specify the Prompt Text',
                userName: 'Specify the User Name',
                password: 'Specify the Password'
            }
        },
        oracleDatasource: {
            connectionString: 'Connection String',
            authenticationType: 'Authentication Type',
            authentication: 'Authentication',
            prompt: 'Prompt',
            none: 'None',
            userName: 'Username',
            password: 'Password',
            promptLabel: 'Prompt Text',
            savePassword: 'Save Password',
            alertMessage: {
                connectionString: 'Specify the Connection string',
                promptText: 'Specify the Prompt Text',
                userName: 'Specify the User Name',
                password: 'Specify the Password'
            }
        },
        oledbDatasource: {
            connectionString: 'Connection String',
            authenticationType: 'Authentication Type',
            authentication: 'Authentication',
            prompt: 'Prompt',
            none: 'None',
            userName: 'Username',
            password: 'Password',
            promptLabel: 'Prompt Text',
            savePassword: 'Save Password',
            alertMessage: {
                connectionString: 'Specify the Connection string',
                prompt: 'Specify the Prompt Text',
                userName: 'Specify the User Name',
                password: 'Specify the Password'
            }
        },
        webapiDatasource: {
            url: 'URL',
            methodType: 'Method',
            get: 'GET',
            post: 'POST',
            requestBody: 'Request Body',
            requestRaw: 'Raw',
            parameter: 'Parameter(s)',
            header: 'Header(s)',
            dataFormat: 'Data Format',
            json: 'JSON',
            csv: 'CSV',
            xml: 'XML',
            firstRow: 'Consider the first row as header',
            authenticationType: 'Authentication Type',
            userName: 'Username',
            password: 'Password',
            separatorTypes: {
                comma: 'Comma',
                space: 'Space',
                tab: 'Tab',
                semicolon: 'SemiColon',
                custom: 'Custom'
            },
            separator: 'Separator',
            delimiter: 'Delimiter',
            alertMessage: {
                urlValidation: 'URL is invalid',
                userNameValidation: 'Specify the User name',
                passwordValidation: 'Specify the Password',
                fieldsValidation: 'Specify the value in Fields',
                delimiterAlert: 'Specify the delimiter'
            },
            none: 'None',
            basicHttp: 'Basic Http Authentication',
            addField: 'ADD',
            deleteField: 'Delete Field',
            key: 'Key',
            value: 'Value',
            closeToolTip: 'Close',
            pagination: {
                pagination: 'Pagination Type',
                offset: {
                    offset: 'Offset',
                    maxRow: 'Max Rows',
                    startFieldName: 'Start field name',
                    startValue: 'Start value',
                    limitFieldName: 'Limit field name',
                    limitValue: 'Limit value',
                    passHeader: 'Pass via header',
                    lookHeader: 'Look in header',
                    totalRecord: 'Total Records path',
                    dataIndicator: 'Data Indicator path',
                    limitField: 'limit',
                    resultTotalRecord: 'result.total',
                    resultDataIndicator: 'result.data.value',
                },
                nextpage: {
                    nextpage: 'Next Page',
                    maxIteration: 'Max Iterations',
                    nextPageName: 'Next Page field name',
                    nextPageValue: 'Next Page value',
                    pageSizeFieldName: 'Page Size field name',
                    pageSizeValue: 'Page Size value',
                    totalPagesPathName: 'Total Pages path',
                    page: 'page',
                    pageSize: 'pageSize',
                    resultTotalPages: 'result.totalPages',
                },
                nexttoken: {
                    nexttoken: 'Next Token',
                    nextTokenFieldName: 'Next Token field name',
                    nextTokenPathName: 'Next Token path',
                    resultNextToken: 'result.nextPageToken',
                    nextTokenPath: 'nextToken',
                },
                nexturl: {
                    nexturl: 'Next Url',
                    nextURLPathName: 'Next URL path',
                    resultNextURL: 'result.metadata.nextUrl',
                },
                alertMessage: {
                    startFieldNameWarning: 'Start field name cannot be empty',
                    limitFieldNameWarning: 'Limit field name cannot be empty',
                    dataFieldPathWarning: 'Either total records or data indicator path must be present',
                    nextPageFieldNameWarning: 'Next Page field name cannot be empty',
                    nextPageSizeFieldNameWarning: 'Page Size field name cannot be empty',
                    nextTokenFieldNameWarning: 'Next Token field name cannot be empty',
                    nextTokenFieldValueWarning: 'Next Token field value cannot be empty',
                    nextUrlPathWarning: 'Next URL field cannot be empty',
                }
            }
        },
        jsonDatasource: {
            jsonType: 'Type',
            jsonTypes: {
                inLine: 'Inline',
                upload: 'File',
                external: 'External'
            },
            inLineText: 'Inline',
            filePath: 'File Path',
            urlLabel: 'External',
            maxFileSize: 'Max file size: 20 MB',
            uploadCompleted: 'Upload Completed',
            uploadFailed: 'Upload Failed',
            uploadInitiate: 'Initiating upload...',
            fileExceed: 'The selected file exceeds the file size limit of ',
            uploadProgress: 'Uploading ',
            alertMessage: {
                jsonAlert: 'Specify JSON data',
                uploadAlert: 'Please select a file',
                urlAlert: 'URL is invalid',
                xmlAlert: 'Specify XML data',
                delimiterAlert: 'Specify the delimiter'
            },
            waterMark: {
                xmlInline: 'Paste XML data here',
                jsonInline: 'Paste JSON data here'
            },
            separatorTypes: {
                comma: 'Comma',
                space: 'Space',
                tab: 'Tab',
                semicolon: 'SemiColon',
                custom: 'Custom'
            },
            separator: 'Separator',
            delimiter: 'Delimiter',
            firstRowHeader: 'Consider the first row as header',
            extractType: 'Extract Type',
            extractTypes: {
                workSheets: 'Worksheets',
                tables: 'Tables'
            }
        },
        mysqlDatasource: {
            serverName: 'Server Name',
            port: 'Port',
            userName: 'Username',
            password: 'Password',
            savePassword: 'Save Password',
            database: 'Database',
            basicSwitch: 'Basic Options',
            advanceSwitch: 'Advanced Options',
            switchAlert: 'Switching to the visual designer will discard the manual changes made to the connection string. Do you want to use the visual designer anyway?',
            switchLabel: 'DataSource AdvancePanel',
            alertMessage: {
                serverName: 'Specify the server name',
                port: 'Specify the Port number',
                userName: 'Specify the User Name',
                password: 'Specify the Password',
                database: 'Specify the database name'
            }
        },
        googleCloudSQL: {
            dbEngine: 'Database Engine',
            mysqlEngine: 'MySQL',
            psqlEngine: 'PostgreSQL'
        },
        amazonAurora: {
            dbEngine: 'Database Engine',
            mysqlEngine: 'MySQL',
            psqlEngine: 'PostgreSQL'
        },
        snowflakeDatasource: {
            serverName: 'Server Name',
            serverWatermark: 'Example',
            database: 'Database',
            userName: 'Username',
            password: 'Password',
            savePassword: 'Save Password',
            basicSwitch: 'Basic Options',
            advanceSwitch: 'Advanced Options',
            switchAlert: 'Switching to the visual designer will discard the manual changes made to the connection string. Do you want to use the visual designer anyway?',
            switchLabel: 'DataSource AdvancePanel',
            alertMessage: {
                serverName: 'Specify the server name',
                userName: 'Specify the User Name',
                password: 'Specify the Password',
                database: 'Specify the database name'
            }
        },
        verticaDatasource: {
            serverName: 'Server Name',
            database: 'Database',
            userName: 'Username',
            password: 'Password',
            savePassword: 'Save Password',
            basicSwitch: 'Basic Options',
            port: 'Port',
            advanceSwitch: 'Advanced Options',
            switchAlert: 'Switching to the visual designer will discard the manual changes made to the connection string. Do you want to use the visual designer anyway?',
            switchLabel: 'DataSource AdvancePanel',
            alertMessage: {
                serverName: 'Specify the server name',
                userName: 'Specify the User Name',
                password: 'Specify the Password',
                port: 'Specify the Port number',
                database: 'Specify the database name'
            }
        },
        sharedDatasource: {
            datasource: 'Shared DataSource',
            alertMessage: 'Select a shared DataSource'
        },
        alertMessage: {
            headerLabel: 'DataSource',
            connectionFailed: 'ReportDesigner failed to connect the datasource',
            dataExtensionFailed: 'The selected data provider is not available. Please check the data extension.',
            dataSourceNotFound: 'Datasource is not available for the selected dataset.',
            connectStringValidation: 'As the connection string contains expressions in the data source ',
            validationMessage: ' Please update with a valid connection string.',
            executionMessage: ', we cannot execute the data set for this connection.',
            confirmMessage: ' Are you sure want to save the data source?',
            deleteValue: 'Delete data source \'',
            emptyNameVaildation: 'Specify the DataSource name',
            duplicateName: 'The specified name already exists in the DataSource list',
            invalidCharacterValidation: 'Name should not contain spaces and special characters',
            sharedPermissionValidation: 'Data source creation has been restricted except for shared data source.'
        },
        descriptionText: {
            amazonAuroraInfo: 'Amazon Aurora is a relational database service developed and offered by Amazon Web Services. The Amazon Aurora connector allows you to access data from Amazon Aurora databases within the {customBrandName} Designer.',
            azureSqlInfo: 'Azure SQL Data Warehouse is a Microsoft cloud-based enterprise data warehouse service offering. It leverages massively parallel processing to quickly run complex queries across petabytes of data. The Azure SQL Data Warehouse connector allows you to access data from Azure SQL Data Warehouse databases within the {customBrandName} Designer.',
            cdataInfo: 'CDATA is a distributed, highly-scalable SQL database that can run anywhere. It delivers maximum performance for transactional and analytical workloads with familiar relational data structures.The cdata connector allows you to access data from cdata databases with MySQL endpoint within the {customBrandName} Designer.',
            csvInfo: 'Bring your CSV files into the {customBrandName} Designer and prepare reports to see the story that lives in your data.',
            excelInfo: 'Bring your Excel files as Tables or Worksheets into the {customBrandName} Designer. Explore and play with your data, prepare reports to see the story that lives in your data.',
            googleBigQueryInfo: 'BigQuery is a RESTful web service that enables interactive analysis of massive datasets working in conjunction with Google Storage. It is a serverless Software as a Service that may be used complementarily with MapReduce.',
            jsonInfo: 'Bring your JSON files into the {customBrandName} Designer by uploading them to prepare reports and see the story that lives in your data.',
            mariadbInfo: 'MariaDB is a community-developed, commercially supported fork of the MySQL relational database management system that is guaranteed to stay open-source. The MariaDB connector allows you to access data from MariaDB databases within the {customBrandName} Designer.',
            memsqlInfo: 'MemSQL is a distributed, highly-scalable SQL database that can run anywhere. It delivers maximum performance for transactional and analytical workloads with familiar relational data structures. The MemSQL connector allows you to access data from MemSQL databases within the {customBrandName} Designer.',
            microsoftsqlInfo: 'SQL Server is Microsoft\'s relational database management system.As one of the most reliable and trusted database servers on the market, it comes with an assortment of value-added services like analysis, reporting, and more on top of the core database management system.The SQL Server connector allows you to access data from Microsoft SQL server databases within the {customBrandName} Designer.',
            ssasInfo: 'SQL Server Analysis Services (SSAS) is the technology from the Microsoft Business Intelligence stack, to develop Online Analytical Processing (OLAP) solutions. In simple terms, you can use SSAS to create cubes using data from data marts / data warehouse for deeper and faster data analysis.',
            mysqlInfo: 'MySQL is a freely available, open-source relational database management system, most noted for its quick processing, proven reliability, and ease and flexibility of use. The MySQL connector allows you to access data from MySQL databases within the {customBrandName} Designer.',
            elasticSearchInfo: 'Elasticsearch is a search engine based on the Lucene library. It provides a distributed, multitenant-capable full-text search engine with an HTTP web interface and schema-free JSON documents. Elasticsearch can be used to search all kind of documents. It also provides scalable search, has near real-time search, and supports multitenancy. The Elasticsearch connector allows you to access data from Elasticsearch clusters within the {customBrandName} Designer.',
            odataInfo: 'OData is an open protocol to allow the creation and consumption of queryable and interoperable RESTful APIs in a simple and standard way. Connect with the {customBrandName} Designer and build reports to see the story that lives in your data.',
            odbcInfo: 'An ODBC driver uses the Open Database Connectivity (ODBC) interface by Microsoft that allows applications to access data in database management systems (DBMS) using SQL as a standard for accessing the data.',
            oledbInfo: 'OLE DB is Microsoft\'s strategic low-level application program interface (API) for access to different data sources. OLE DB includes not only the Structured Query Language (SQL) capabilities of the Microsoft-sponsored standard data interface Open Database Connectivity (ODBC) but also includes access to data other than SQL data.',
            oracleInfo: 'Oracle is an enterprise-grade relational database with advanced analytics features. The Oracle connector allows you to access data from Oracle databases within the {customBrandName} Designer.',
            psqlInfo: 'PostgreSQL is a powerful and open-source object-relational database system emphasizing extensibility and standards compliance. The PostgreSQL connector allows you to access data from PostgreSQL databases within the {customBrandName} Designer.',
            snowflakeInfo: 'Snowflake is a cloud-based data warehouse that provides an unbounded platform for storing and retrieving data. Unlike traditional single-cluster shared-disk/shared-nothing architectures, Snowflake has as a multi-cluster, shared data architecture that is dynamic and highly scalable thanks to enterprise class cloud-based storage systems.',
            webAPIInfo: 'Connect with the {customBrandName} Designer using almost all data sources that have a REST API. Create reports and see the story that lives in your data.',
            xmlInfo: 'Bring your XML files into the {customBrandName} Designer and prepare reports to see the story that lives in your data.',
            verticaInfo: 'Vertica is the most advanced unified analytics warehouse, which combines the power of a high-performance, columnar storage, advanced compression, optimized projections, and massively parallel processing SQL query engine with advanced analytics and machine learning, so you can unlock the true potential of your data with no limits and compromises. The Vertica connector allows you to access the data from Vertica databases within the {customBrandName} designer.',
            gcsqlInfo: 'Google Cloud SQL is a fully-managed database service based on MySQL and PostgreSQL. The Google Cloud SQL connector allows you to access data from Google Cloud SQL databases within the {customBrandName} Designer.',
            redshiftInfo: 'Amazon Redshift is a fast, scalable data warehouse that makes it simple and cost-effective to analyze all the data across your data warehouse and data lake. It is built on top of PostgreSQL. The Amazon Redshift connector allows you to access data from Amazon Redshift databases within the {customBrandName} Designer.',
            rdsInfo: 'Amazon Relational Database Service (Amazon RDS) is a web service that makes it easy to set up, operate, and scale a relational database in the AWS Cloud. It provides cost-efficient, resizable capacity to reduce automation of administrative task. It provides database engines such as Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle Database, and Microsoft SQL Server. The Amazon RDS connector allows you to access data from Amazon RDS databases within the {customBrandName} Designer.'
        }
    },
    imageManager: {
        headerText: 'IMAGE MANAGER',
        addImageButton: 'ADD IMAGE',
        deleteImage: 'Delete embedded image',
        image: 'Image'
    },
    linkParameter: {
        title: 'Parameters',
        headerText: 'Link Parameter',
        descriptionText: 'Report Parameters',
        addText: 'ADD',
        ok: 'OK',
        cancel: 'Cancel',
        nameWaterMark: 'Parameter Name',
        valueWaterMark: 'Value',
        errorMessage: 'Enter a value for this property',
        closeToolTip: 'Close'
    },
    filter: {
        title: 'Filter',
        descriptionLable: 'Include rows where the following conditions are true.',
        add: 'ADD',
        ok: 'OK',
        cancel: 'Cancel',
        valueWaterMark: 'Value',
        fieldWaterMark: 'Choose Field',
        closeToolTip: 'Close',
        deleteField: 'Delete Field',
        errorMessage: {
            booleanValidation: 'Value is not a boolean value.',
            intValidation: 'Value is not an integer.',
            floatValidation: 'Value is not a float.',
            dateTimeValidation: 'Value is an invalid date/time format.',
            topBottomFilter: 'The Top % and Bottom % filter operators require a float or an integer datatype.',
            expressionValidation: 'Choose value for expression field'
        },
        operatorTypes: {
            like: 'Like',
            topN: 'TopN',
            bottomN: 'BottomN',
            topPercent: 'Top%',
            bottomPercent: 'Bottom%',
            between: 'Between',
            inFilter: 'In',
        }
    },
    dataField: {
        title: 'Data Fields',
        descriptionLable: 'Include the data field rows',
        add: 'ADD',
        ok: 'OK',
        cancel: 'Cancel',
        deleteField: 'Delete Field',
        fieldNameWaterMark: 'Field Name',
        closeToolTip: 'Close',
        errorMessages: {
            emptyField: 'Specify the field name',
            invalidCharacters: 'Field name should not contain spaces and special characters',
            sameCharacter: 'Field name already exists'
        },
        dsNameLabel: 'Name',
        dsNameWaterMark: 'Data Name',
        dsNameValidation: {
            emptyName: 'Specify the Dataset name',
            duplicateName: 'The specified name already exists in Dataset list',
            specialCharacter: 'Dataset name should not contain spaces and special characters'
        }
    },
    dataPanel: {
        itemTooltip: {
            properties: 'Properties',
            data: 'Data',
            parameters: 'Parameters',
            imageManager: 'Image Manager',
            expand: 'Expand',
            collapse: 'Collapse'
        },
        dataSourceNewAlert: {
            title: 'DataSource',
            contentMessage: 'Do you want to cancel the DataSource creation?',
        },
        dataSourceEditAlert: {
            title: 'DataSource',
            contentMessage: 'Do you want to cancel the DataSource editing?',
        },
        dataSetNewAlert: {
            title: 'Dataset',
            contentMessage: 'Do you want to cancel the Dataset creation?',
        },
        dataSetEditAlert: {
            title: 'Dataset',
            contentMessage: 'Do you want to cancel the Dataset editing?',
        },
        parameterNewAlert: {
            title: 'Parameter',
            contentMessage: 'Do you want to cancel the Parameter creation?',
        },
        parameterEditAlert: {
            title: 'Parameter',
            contentMessage: 'Do you want to cancel the Parameter editing?',
        },
        licenseAlert: {
            ok: 'OK',
            close: 'Close',
        }
    },
    dataSet: {
        headerText: 'DATA',
        newData: 'ADD DATASET',
        switchLabel: 'Switch to DataSource Panel',
        toggleCollapse: 'Toggle button to collapse the dataset fields',
        toggleExpand: 'Toggle button to expand the dataset fields',
        datasetLabel: 'DataSetName',
        fieldsLabel: 'Field Name',
        dataSearch: 'Dataset fields search',
        shareDataset: {
            headerText: 'NEW DATASET',
            editHeaderText: 'EDIT DATASET',
            save: 'Save',
            cancel: 'Cancel',
            nameLable: 'Name',
            sharedDatasetLabel: 'Shared Dataset',
            errorMessage: {
                nameValidation: 'Specify the Dataset name',
                datasetValidation: 'Select a shared DataSource',
                duplicateName: 'The specified name already exists in the Dataset list',
                specialCharacter: 'Name should not contain spaces and special characters'
            }
        },
        contextMenu: {
            edit: 'Edit',
            remove: 'Delete',
            cloneDataset: 'Clone',
            refreshDataset: 'Refresh',
            filter: 'Filter',
            setField: 'Fields',
            parameter: 'Parameters'
        },
        datasourceSwitcher: 'Datasources',
        deleteDataset: 'Delete dataset',
        deleteField: 'Delete field',
        newDataText: 'New Data',
        sharedDataText: 'Shared Data',
        dataRestriction: {
            dsCreateRestriction: 'DataSource creation has been restricted',
            title: 'Data'
        },
        dataFieldSearch: {
            errorMessage: 'No matches found',
            searchText: 'Search'
        },
        dataTab: {
            dataSourceTabHeader: 'DATASOURCE',
            dataSetTabHeader: 'DATASET'
        }
    },
    reportViewer: {
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
                Html: 'HTML',
                PPT: 'PowerPoint',
                CSV: 'CSV',
                XML: 'XML'
            },
            first: {
                headerText: 'Goto First',
                contentText: 'Go to the first page of the report.'
            },
            last: {
                headerText: 'Goto Last',
                contentText: 'Go to the last page of the report.'
            },
            next: {
                headerText: 'Goto Next',
                contentText: 'Go to the next page of the report.'
            },
            previous: {
                headerText: 'Goto Previous',
                contentText: 'Go to the previous page of the report.'
            },
            back: {
                headerText: 'Goto Parent',
                contentText: 'Go back to the parent report.'
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
                contentText: 'Choose export setup option to set the image quality,'
                    + 'save type of word, and excel document.'
            },
            viewDesign: 'Close Preview',
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
            paperTypes: [
                { text: 'A3', value: 'A3' },
                { text: 'A4', value: 'A4' },
                { text: 'B4(JIS)', value: 'B4(JIS)' },
                { text: 'B5(JIS)', value: 'B5(JIS)' },
                { text: 'Envelope #10', value: 'Envelope #10' },
                { text: 'Envelope Monarch', value: 'Envelope Monarch' },
                { text: 'Executive', value: 'Executive' },
                { text: 'Legal', value: 'Legal' },
                { text: 'Letter', value: 'Letter' },
                { text: 'Tabloid', value: 'Tabloid' },
                { text: 'Custom', value: 'Custom' }
            ],
            orientation: 'Orientation',
            portrait: 'Portrait',
            landscape: 'Landscape',
            doneButton: 'OK',
            cancelButton: 'Cancel'
        },
        exportsetupDialog: {
            close: 'Close',
            commonOptions: {
                header: 'Common Settings',
                imageQuality: 'Image Quality',
                imageQualityTypes: [{ text: 'Low', value: '2' },
                    { text: 'Medium', value: '5' },
                    { text: 'High', value: '10' }]
            },
            pdfOptions: {
                header: 'PDF Settings',
                complexScript: 'Complex Script',
                conformance: 'Conformance Level',
                conformanceTypes: [
                    { text: 'None', value: 0 },
                    { text: 'Pdf/A1B', value: 1 },
                    { text: 'Pdf/X1A2001', value: 2 },
                    { text: 'Pdf/A2B', value: 3 },
                    { text: 'Pdf/A3B', value: 4 },
                    { text: 'Pdf/A1A', value: 5 },
                    { text: 'Pdf/A2A', value: 6 },
                    { text: 'Pdf/A2U', value: 7 },
                    { text: 'Pdf/A3A', value: 8 },
                    { text: 'Pdf/A3U', value: 9 }
                ]
            },
            securityOptions: {
                header: 'Security Settings',
                enableProtection: 'Enable protection',
                protect: 'Password To Protect',
                edit: 'Password To Edit'
            },
            wordOptions: {
                header: 'Word Settings',
                protection: 'Protection Type',
                topSpacing: 'Top Spacing',
                bottomSpacing: 'Bottom Spacing',
                formatList: [
                    { text: 'Word 97-2003 Document (.doc)', value: 0 },
                    { text: 'Word 97-2003 template (.dot)', value: 1 },
                    { text: 'Word Document (.docx)', value: 2 },
                    { text: 'Strict Open XML Document 2007 (.docx)', value: 3 },
                    { text: 'Strict Open XML Document 2010 (.docx)', value: 4 },
                    { text: 'Strict Open XML Document 2013 (.docx)', value: 5 },
                    { text: 'Strict Open XML Template 2007 (.dotx)', value: 6 },
                    { text: 'Strict Open XML Template 2010 (.dotx)', value: 7 },
                    { text: 'Strict Open XML Template 2013 (.dotx)', value: 8 },
                    { text: 'Word Macro Enabled Document 2007 (.docm)', value: 9 },
                    { text: 'Word Macro Enabled Document 2010 (.docm)', value: 10 },
                    { text: 'Word Macro Enabled Document 2013 (.docm)', value: 11 },
                    { text: 'Word Macro Enabled Template 2007 (.dotm)', value: 12 },
                    { text: 'Word Macro Enabled Template 2010 (.dotm)', value: 13 },
                    { text: 'Word Macro Enabled Template 2013 (.dotm)', value: 14 },
                    { text: 'Rich text format (.rtf)', value: 15 },
                    { text: 'Plain text (.txt)', value: 16 },
                    { text: 'Web page (.html)', value: 18 }
                ],
                layoutTypes: [
                    { text: 'Default', value: 0 },
                    { text: 'Top Level', value: 1 }
                ],
                protectionTypes: [
                    { text: 'No Protection', value: -1 },
                    { text: 'Allow Only Revisions', value: 0 },
                    { text: 'Allow Only Comments', value: 1 },
                    { text: 'Allow Only Form Fields', value: 2 },
                    { text: 'Allow Only Reading', value: 3 }
                ]
            },
            layoutOption: 'Layout Option',
            saveType: 'Save Type',
            pptOptions: {
                header: 'PowerPoint Settings',
                pptTypes: [
                    { text: 'PowerPoint 97to2003 Presentation (.pptx)', value: 0 },
                    { text: 'PowerPoint 2007 Presentation (.pptx)', value: 1 },
                    { text: 'PowerPoint 2010 Presentation (.pptx)', value: 2 },
                    { text: 'PowerPoint 2013 Presentation (.pptx)', value: 3 }
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
                qualifierList: [
                    { text: 'Double Quotes', value: '"' },
                    { text: 'Single Quotes', value: '\'' },
                    { text: 'None', value: '' },
                    { text: 'Custom', value: 'Custom' }
                ],
                delimiterList: [
                    { text: 'Comma', value: ',' },
                    { text: 'Space', value: ' ' },
                    { text: 'Tab', value: '   ' },
                    { text: 'Semicolon', value: ';' },
                    { text: 'Custom', value: 'Custom' }
                ]
            },
            htmlOptions: {
                header: 'HTML Settings',
                separator: 'Page Separator'
            },
            excelOptions: {
                header: 'Excel settings',
                sheetProtection: 'Sheet Protection',
                disableCellFormat: 'Disable Cell Format',
                readonly: 'Read Only',
                saveTypes: [
                    { text: 'Excel97to2003 Workbook(.xls)', value: 0 },
                    { text: 'Excel2007 Workbook(.xlsx)', value: 1 },
                    { text: 'Excel2010 Workbook (.xlsx)', value: 2 },
                    { text: 'Excel2013 Workbook (.xlsx)', value: 3 },
                    { text: 'Excel2016 Workbook(.xlsx) ', value: 4 }
                ],
                sheetProtectionTypes: [
                    { text: 'None', value: 0 },
                    { text: 'Objects', value: 1 },
                    { text: 'Scenarios', value: 2 },
                    { text: 'Formatting Cells', value: 4 },
                    { text: 'Formatting Columns', value: 8 },
                    { text: 'Formatting Rows', value: 16 },
                    { text: 'Inserting Columns', value: 32 },
                    { text: 'Inserting Rows', value: 64 },
                    { text: 'Inserting Hyperlinks', value: 128 },
                    { text: 'DeletingColumns', value: 256 },
                    { text: 'Deleting Rows', value: 512 },
                    { text: 'Locked Cells', value: 1024 },
                    { text: 'Sorting', value: 2048 },
                    { text: 'Filtering', value: 4096 },
                    { text: 'Using Pivot Tables', value: 8192 },
                    { text: 'UnLockedCells', value: 16384 },
                    { text: 'Content', value: 32768 },
                    { text: 'All', value: 65535 }
                ],
                disableCellFormatTypes: [
                    { text: 'None', value: 0 },
                    { text: 'All', value: 1 },
                    { text: 'Border', value: 2 },
                    { text: 'Style', value: 3 }
                ],
                layoutOptionTypes: [
                    { text: 'Default', value: 0 },
                    { text: 'Ignore Cell Merge', value: 2 }
                ],
            }
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
            startMessage: 'Report Viewer encountered some issues loading this report. Please',
            middleMessage: ' Click here',
            endMessage: 'to see the error details',
            closeMessage: 'Close this message',
            exportAjaxFailureMsg: 'Unable to export the document due to failure of connecting Report Service.',
            printAjaxFailureMsg: 'Unable to print the document due to failure of connecting Report Service.',
            reportLoadAjaxFailureMsg: 'Unable to progress the Report action due to failure of connecting Report Service.',
            cancelReportProcessMsg: 'Report processing was canceled.'
        },
        progressMessage: {
            exportLoadingMessage: 'Preparing exporting document... Please wait...',
            printLoadingMessage: 'Preparing print data… Please wait...',
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
        reportItemLabel: {
            Tablix: 'Tablix report item',
            Textbox: 'Textbox report item',
            Chart: 'Chart report item',
            Image: 'Image report item',
            Custom: 'Custom report item',
            Rectangle: 'Rectangle report item',
            Map: 'Map report item',
            Gauge: 'Gauge report item',
            Indicator: 'Indicator report item',
            Line: 'Line report item',
            Subreport: 'Sub report item'
        },
        selectAll: 'Select All',
        viewButton: 'View Report',
        parameterBlock: 'Parameter Block',
        parameterProcessingMessage: 'Loading parameter values ...'
    },
    sortData: {
        sorting: 'Sorting',
        headerText: 'Sort Filter',
        add: 'ADD',
        changeSortingOptions: 'Change Sorting Options.',
        sortBy: 'Sort by',
        thenBy: 'Then by',
        direction: {
            ascending: 'Ascending',
            descending: 'Descending',
        },
        chooseField: 'Choose Field',
        errorMessage: 'Choose value for expression field',
        ok: 'OK',
        cancel: 'Cancel',
        close: 'Close',
        deleteField: 'Delete Field'
    },
    groupData: {
        grouping: 'Grouping',
        headerText: 'Group',
        headerTextLabel: 'Group Label',
        name: 'Name',
        label: 'Label',
        changeGroupingOptions: 'Change Grouping Options.',
        add: 'ADD',
        groupBy: 'Group by',
        andOn: 'And on',
        chooseField: 'Choose Field',
        ok: 'OK',
        cancel: 'Cancel',
        close: 'Close',
        errorMessage: {
            duplicateName: 'Please enter the valid name',
            emptyValueValidation: 'Choose value for an expression field',
        },
        deleteField: 'Delete Field'
    },
    alertMessage: {
        yes: 'Yes',
        no: 'No',
        ok: 'OK',
        showDetails: 'Show Details',
        hideDetails: 'Hide Details',
        close: 'Close'
    },
    parameter: {
        listPanel: {
            headerText: 'PARAMETERS',
            newParameter: 'NEW PARAMETER',
            submenu: {
                edit: 'Edit',
                remove: 'Delete'
            },
            alertTitle: 'Parameter'
        },
        configurationPanel: {
            newHeaderText: 'NEW PARAMETER',
            editHeaderText: 'EDIT PARAMETER',
            nameLabel: 'Name',
            promptLable: 'Prompt',
            dataTypeLable: 'Data Type',
            blankValueLable: 'Allow blank value ("")',
            nullValueLable: 'Allow null value',
            multipleValueLable: 'Allow multiple values',
            uniqueValueLabel: 'Show unique values',
            sortValueLabel: 'Enable Sorting',
            visibilityLable: 'Visibility',
            assignValueLable: 'Assign Values >>',
            save: 'Save',
            cancel: 'Cancel',
            editLayout: 'Edit Layout',
            sorting: {
                ascending: 'Ascending',
                descending: 'Descending'
            },
            visibility: {
                visible: 'Visible',
                hidden: 'Hidden',
                internal: 'Internal'
            },
            dataType: {
                stringType: 'String',
                booleanType: 'Boolean',
                dateTimeType: 'DateTime',
                integerType: 'Integer',
                floatType: 'Float'
            }
        },
        errorMessage: {
            nameField: 'Please enter the name',
            promptField: 'Please enter the value',
            nameAlreadyExists: 'The parameter name already exists'
        },
        warningMessage: {
            specialCharacter: 'Name should not contain spaces and special characters',
            multipleValueAlert: 'Multiple default values were specified. The parameter does not allow multiple values.',
            nullValueAlert: 'In value field, a null value was specified. The parameter does not allow null values. '
        },
        alertMessage: {
            confirmNullCheck: 'Available or default values might contain null value, do you want to enable the allow null value checkbox?',
            confirmBlankValue: 'Available or default values might contain blank value, do you want to enable the blank value checkbox?',
            dataTypeChange: 'Changing the datatype will discard the changes made to the available and default values. Do you want to change the datatype anyway?',
            deleteConfirmation: 'Delete report parameter'
        },
        assignData: {
            title: 'Parameter',
            availableValue: 'Available Value',
            defaultValue: 'Default Value',
            none: 'None',
            specify: 'Specify',
            query: 'Query Value',
            ok: 'OK',
            cancel: 'Cancel',
            availableFields: {
                specifyDescriptionText: 'Add the available values for the parameters:',
                queryDescriptionText: 'Choose the dataset and fields for the available values:',
                nameFieldWaterMark: 'Label',
                valueFieldWaterMark: 'Value'
            },
            defaultFields: {
                specifyDescriptionText: 'Add the default values for the parameters:',
                queryDescriptionText: 'Choose the dataset and fields for the default values:',
                defValueWaterMark: 'Choose Default Value'
            },
            datasetWaterMark: 'Choose Dataset Value',
            valueWaterMark: 'Choose Value',
            lableWaterMark: 'Choose Label',
            add: 'ADD',
            datasetLableText: 'Dataset',
            valueLableText: 'Value Field',
            labelFieldText: 'Label Field',
            errorMessage: {
                boolTypeCheck: 'Value is not a boolean value.',
                dateTypeCheck: 'Value is an invalid date format.',
                intTypeCheck: 'Value is not an integer.',
                floatTypeCheck: 'Value is not a float.',
                multipleValuesCheck: 'A multi-value parameter cannot include null values',
                emptyDatasetField: 'Dataset field is required.',
                emptyDatasetValue: 'Value field is required.',
                labelFieldSyntax: 'The entered value in the label field is not a valid token syntax.',
                valueFieldSyntax: 'The entered value in the value field is not a valid token syntax.',
                emptyValue: 'The value field is blank. The parameter does not allow blank values.',
                nullValue: 'In value field, a null value was specified. The parameter does not allow null values. '
            },
            closeToolTip: 'Close',
            deleteField: 'Delete Field'
        }
    },
    formatData: {
        title: 'Format Dialog',
        typeSelect: 'Type',
        typeFormat: {
            numberType: {
                labelText: 'Number',
                decimalPlaces: 'Decimal Places',
                decimalWatermark: 'Enter value',
                negativeValues: 'Negative values',
                showZeroAs: {
                    showZeroAs: 'Show zero as',
                    none: '(none)'
                },
                representationLabel: 'Representation',
                representationTypes: {
                    thousands: 'Thousands',
                    millions: 'Millions',
                    billions: 'Billions',
                },
                useRegionFormating: 'Use regional formatting',
                use1000Separator: 'Use 1000 Separator (,)'
            },
            currency: {
                labelText: 'Currency',
                decimalPlaces: 'Decimal Places',
                negativeValues: 'Negative values',
                culture: 'Currency Culture',
                showZeroAs: {
                    none: '(none)'
                },
                representationLabel: 'Representation',
                representationTypes: {
                    thousands: 'Thousands',
                    millions: 'Millions',
                    billions: 'Billions',
                },
                useRegionFormating: 'Use regional formatting',
                use1000Separator: 'Use 1000 Separator (,)',
                includeSpace: 'Include a space'
            },
            date: {
                typeLabel: 'Date',
                valueTypeLabel: 'Date'
            },
            time: {
                typeLabel: 'Time',
                valueTypeLabel: 'Time'
            },
            percentage: {
                typeLabel: 'Percentage',
                decimalPlaces: 'Decimal Places',
                includeSpace: 'Include a space'
            },
            scientific: {
                typeLabel: 'Scientific',
                decimalPlaces: 'Decimal Places'
            },
            custom: {
                typeLabel: 'Custom',
                customFormat: 'Custom format'
            },
        },
        preview: 'Preview',
        ok: 'OK',
        cancel: 'Cancel',
        close: 'Close',
        deleteField: 'Delete Field'
    },
    expression: {
        title: 'Expression',
        descriptionText: 'Set Expression for: ',
        optionLabel: 'Options',
        dataLabel: 'Data',
        descritionLabel: 'Description',
        exampleLabelText: 'Example',
        ok: 'OK',
        cancel: 'Cancel',
        closeToolTip: 'Close',
        textAreaWaterMark: 'Expression',
        category: {
            builtInFields: 'Built-in Fields',
            operators: 'Operators',
            functions: 'Functions'
        },
        parameters: 'Parameters',
        variables: 'Variables',
        optionWaterMark: 'Select an option',
        dataWaterMark: 'Select a data',
        reportData: 'No report data found',
        description: {
            executionTime: 'The date and time that the reports start to run.',
            overallPageNumber: 'The current overall page number can be used only in the page header or footer.',
            overallTotalPages: 'The total number of pages in the report can be used only in the page header and footer.',
            pageName: 'The name of the current page in the report can be used only in the page header or footer.',
            pageNumber: 'The current page number that can be reset through the use of page breaks',
            reportFolder: 'The full path to the folder containing the report does not include the report server URL.',
            reportName: 'The URL of the report server where the report is run.',
            reportServerUrl: 'The URL of the report server on which the report is being run.',
            totalPages: 'The total number of pages in the current continuous page sequence can be used only in the page header and footer. The number can be reset by using page breaks.',
            language: 'The language ID of the client running the report.',
            userID: 'The ID of the user running the report.',
            powerNumberType: 'Raises a number to the power of another number.',
            multiply: 'Multiplies two numbers.',
            integerDivision: 'Divides two numbers and returns an integer.',
            floatDivision: 'Divides two numbers and returns a floating-point.',
            modulus: 'Divides two numbers and returns only the remainder.',
            add: 'Adds two numbers and can be used to concatenate two strings.',
            difference: 'Yields the difference between two numbers or indicates the negative value of a numeric expression.',
            lesser: 'Less than.',
            lesserOrEqual: 'Less than or equal to.',
            greater: 'Greater than.',
            greaterOrEqual: 'Greater than or equal to.',
            equal: 'Equal to.',
            notEqual: 'Not equal to.',
            like: 'Compares two strings.',
            isOperator: 'Compares two object reference variables.',
            expression: 'Generates a string concatenation of two expressions.',
            stringType: 'Adds two numbers, and it can be used to concatenate two strings.',
            and: 'Performs a logical conjunction on two Boolean expressions, or bitwise conjunction on two ',
            not: 'Performs logical negation on a Boolean expression, or bitwise negation on a numeric expression.',
            or: 'Used to perform a logical disjunction on two Boolean expressions, or bitwise disjunction on two numeric values.',
            xor: 'Performs a logical exclusion operation on two Boolean expressions, or a bitwise exclusion on two numeric expressions.',
            andAlso: 'Performs short-circuiting logical conjunction on two expressions.',
            orElse: 'Used to perform short-circuiting logical disjunction on two expressions.',
            left: 'Performs an arithmetic left shift on a bit pattern.',
            right: 'Performs an arithmetic right shift on a bit pattern.',
            asc: 'Returns an integer value representing the character code corresponding to a character.',
            ascW: 'Returns an integer value representing the character code corresponding to a character.',
            chr: 'Returns the character associated with the specified character code.',
            chrW: 'Returns the character associated with the specified character code.',
            filter: 'Returns a zero-based array containing a subset of a string array based on specified filter criteria.',
            formatStringType: 'Returns a formatted string according to the instructions in a format string expression.',
            currency: 'Returns an expression formatted as a currency value using the currency symbol defined in the system control panel.',
            dateTime: 'Returns a string expression representing a date/time value.',
            numberType: 'Returns an expression formatted as a number.',
            percent: 'Returns an expression formatted as a percentage (that is, multiplied by 100).',
            getChar: 'Returns a char value representing the character from the specified index in the supplied string.',
            inStr: 'Returns an integer specifying the start position of the first occurrence of one string within another.',
            inStrRev: 'Returns the position of the first occurrence of one string within another, starting from the right side of the string.',
            join: 'Returns a string created by joining a number of substrings in an array.',
            lCase: 'Returns a string or character converted to lowercase.',
            leftStringType: 'Returns a string containing a specified number of characters from the left side of a string.',
            stringLength: 'Returns an integer containing either the number of characters in a string or the number.',
            lSet: 'Returns a left-aligned string containing the specified string adjusted to the specified length.',
            leftTrim: 'Returns the string without left side trailing spaces in the given string.',
            middle: 'Returns a string containing a specified number of characters from a string.',
            replace: 'Returns a string in which a specified substring has been replaced with another.',
            rightString: 'Returns a string containing a specified number of characters from the right side of a string.',
            rightSet: 'Returns a right-aligned string containing the specified string adjusted to the specified length.',
            rightTrim: 'Returns the string without right side trailing spaces in the given string.',
            stringSpace: 'Returns a string consisting of the specified number of spaces.',
            splitString: 'Returns a zero-based, one-dimensional array containing a specified number of substrings.',
            strComp: 'Returns -1, 0, or 1, based on the result of a string comparison.',
            strConv: 'Returns a string converted as specified.',
            duplicateString: 'Returns a string or object consisting of the specified character repeated the specified number of times.',
            strReverse: 'Returns a string in which the character order of a specified string is reversed.',
            trim: 'Returns the string without trailing spaces in the given string',
            upperCase: 'Returns a string or character containing the specified string converted to uppercase.',
            cDate: 'Convert to date.',
            dateAdd: 'Returns a date value containing date and time values to which a specified time interval has been added.',
            dateDiff: 'Returns a long value specifying the number of time intervals between two date values.',
            datePart: 'Returns an integer value containing the specified component of a given date value.',
            dateSerial: 'Returns a date value representing a specified year, month, and day, with the time information set to midnight (00:00:00).',
            dateString: 'Returns or sets a string value representing the current date according to your system.',
            dateValue: 'Returns a date value containing the date information represented by a string, with the time information.',
            day: 'Returns an integer value from 1 through 31 representing the day of the month.',
            format: 'Returns a string expression representing date/time value.',
            hour: 'Returns an integer value from 0 through 23 representing the hour of the day.',
            minute: 'Returns an integer value from 0 through 59 representing the minute of the hour.',
            month: 'Returns an integer value from 1 through 12 representing the month of the year.',
            monthName: 'Returns a string value containing the name of the specified month.',
            now: 'Returns a date value containing the current date and time according to your system.',
            second: 'Returns an integer value from 0 through 59 representing the second of the minute.',
            timeOfDay: 'Returns or sets a date value containing the current time of day according to your system.',
            timer: 'Returns a double value representing the number of seconds elapsed since midnight.',
            timeSerial: 'Returns a date value representing a specified hour, minute, and second, with the date information set relative to January 1 of the year 1.',
            timeString: 'Returns or sets a string value representing the current time of day according to your system.',
            timeValue: 'Returns a date value containing the time information represented by a string, with the date information set to January 1 of the year 1.',
            timeToday: 'Returns or sets a date value containing the current date according to your system.',
            timeWeekday: 'Returns an integer value containing a number that represents the day of the week.',
            timeWeekdayName: 'Returns a string value containing the name of the specified weekday.',
            year: 'Returns an integer value from 1 through 9999 representing the year.',
            abs: 'Returns the absolute value of a single-precision floating-point number.',
            acos: 'Returns the angle whose cosine is the specified number.',
            asin: 'Returns the angle whose sine is the specified number.',
            atan: 'Returns the angle whose tangent is the specified number.',
            atan2: 'Returns the angle whose tangent is the quotient of two specified numbers.',
            bigMultiply: 'Produces the full product of two 32-bit numbers.',
            ceiling: 'Returns the smallest integer that is greater than or equal to the specified integer.',
            cos: 'Returns the cosine of the specified angle.',
            cosh: 'Returns the hyperbolic cosine of the specified angle.',
            exponent: 'Returns e raised to the specified power.',
            fixNumberType: 'Returns an integer portion of a number.',
            floor: 'Returns the largest integer less than or equal to the specified integer.',
            integer: 'Returns an integer portion of a number.',
            logrithm: 'Returns the natural (base e) logarithm of a specified number.',
            logrithm10: 'Returns the base 10 logarithm of a specified number.',
            maximum: 'Returns the maximum value from all non-null values of the specified expression.',
            minimum: 'Returns the minimum value from all non-null values of the specified expression.',
            power: 'Returns a specified number raised to the specified power.',
            random: 'Returns a random number of single type.',
            round: 'Rounds a double-precision floating-point value to the nearest integer.',
            sign: 'Returns a value indicating the sign of an 8-bit signed integer.',
            sin: 'Returns the sine of the specified angle.',
            sinh: 'Returns the hyperbolic sine of the specified angle.',
            squareRoot: 'Returns the square root of a specified number.',
            tangent: 'Returns the tangent of the specified angle.',
            tangentH: 'Returns the hyperbolic tangent of the specified angle.',
            isArray: 'Returns a Boolean value indicating whether variable points to an array.',
            isDate: 'Returns a Boolean value indicating whether an expression represents a valid.',
            isNothing: 'Returns a Boolean value indicating whether an expression has no object.',
            isNumeric: 'Returns a Boolean value indicating whether an expression can be evaluated as a number.',
            flowChoose: 'Selects and returns a value from a list of arguments.',
            flowIIf: 'Returns one of two objects depending upon the evaluation of an expression.',
            switchFlow: 'Evaluates a list of expressions and returns an object value corresponding to the first expression in the list that is true.',
            avg: 'Returns the average of all non-null values from the specified expression.',
            count: 'Returns a count of the values from the specified expression.',
            countDistinct: 'Returns a count of all distinct values from the specified expression.',
            countRows: 'Returns a count of rows within the specified scope.',
            first: 'Returns the first value from the specified expression.',
            last: 'Returns the last value from the specified expression.',
            standardDev: 'Returns the standard deviation of all non-null values of the specified expression.',
            standardDevP: 'Returns the population standard deviation of all non-null values of the specified expression.',
            sum: 'Returns a sum of the values of the specified expression.',
            variance: 'Returns the variance of all non-null values of the specified expression.',
            varianceP: 'Returns the population variance of all non-null values of the specified expression.',
            runningValue: 'Uses a specified function to return a running aggregate of the specified expression.',
            aggregate: 'Returns a custom aggregate of the specified expression, as defined by the data provider.',
            doubleDeclining: 'Returns a double value specifying the depreciation of an asset for a specific time period using the double-declining balance method or some other method you specify.',
            futureValue: 'Returns double value specifying the future value of an annuity based on periodic fixed payments and a fixed interest rate.',
            interestPayment: 'Returns double value specifying the interest payment for a given period of an annuity based on periodic, fixed payments and a fixed interest rate.',
            numberOfPeriods: 'Returns a double value specifying the number of periods for an annuity based on periodic fixed payments and a fixed interest rate.',
            annuityPayment: 'Returns a double value specifying the payment for an annuity based on periodic, fixed payments and a fixed interest rate.',
            principalPayment: 'Returns a double value specifying the principal payment for a given period of an annuity based on periodic fixed payments and a fixed interest rate.',
            presentValue: 'Returns a double value specifying the present value of an annuity based on periodic, fixed payments to be paid in the future and a fixed interest rate.',
            rateOfInterest: 'Returns a double value specifying the interest rate per period for an annuity.',
            straightLine: 'Returns a double value specifying the straight-line depreciation of an asset for a single period.',
            sumOfYearsDigits: 'Returns a double value specifying the sum-of-years digits depreciation of an asset for a specified period.',
            convertBool: 'Convert to Boolean.',
            convertByte: 'Convert to byte.',
            convertChar: 'Convert to char.',
            convertDate: 'Convert to date.',
            convertDouble: 'Convert to double.',
            convertDecimal: 'Convert to decimal.',
            convertInteger: 'Convert to integer.',
            convertLong: 'Convert to long.',
            convertObject: 'Convert to object.',
            convertShort: 'Convert to short.',
            convertSingle: 'Convert to single.',
            convertString: 'Convert to string.',
            fix: 'Returns an integer portion of a number.',
            hexaDecimal: 'Returns a string representing the hexadecimal value of a number.',
            integerPortion: 'Returns an integer portion of a number.',
            octal: 'Returns a string representing the octal value of a number.',
            stringOfNumber: 'Returns a string that represents a number.',
            stringAsNumeric: 'Returns numbers in a string as a numeric value of appropriate type.',
            inScope: 'Returns true if the current instance is within the specified scope.',
            depthLevel: 'Returns a zero-based integer representing the current depth level.',
            lookup: 'Use Lookup to retrieve the value from the specified dataset for a name-value pair where there is a 1-to-1 relationship. For example, for an ID field in a table, you can use Lookup to retrieve the corresponding Name field from a dataset that is not bound to the data region.',
            lookupSet: 'Use LookupSet to retrieve a set of values from the specified dataset for a name-value pair where there is a 1-to-many relationship. For example, for a customer identifier in a table, you can use LookupSet to retrieve all the associated phone numbers for that customer from a dataset that is not bound to the data region.',
            previous: 'Returns the value of the expression for the previous row of data.',
            rowNumber: 'Returns a running count of all rows in the specified scope.',
            renderInteractive: 'A boolean that indicates whether the current rendering request uses an interactive format.',
            renderFormatName: 'The name of the renderer as registered in the ReportServer configuration file.'
        },
        errorMessage: {
            emptyValue: 'Value cannot be empty',
            invalidValue: 'is not a valid value'
        }
    },
    dataAssign: {
        measures: 'Measures',
        dimensions: 'Dimensions',
        addDataset: 'Add Dataset',
        errorMessagePrefix: 'You have not configured a dataset yet.',
        errorMessageSuffix: 'Add a dataset to bind data to report items in your designer.',
        search: 'Search',
        dragOnDrop: 'Drag & Drop',
        categoryList: ' Category List',
        removeDataField: 'Remove Data Field',
        dataFieldSettings: 'Data Field Settings'
    },
    reportProperty: {
        header: 'Header',
        body: 'Body',
        footer: 'Footer',
        report: 'Report',
        basicSettings: {
            categoryName: 'Basic Settings',
            background: 'Background Color',
            borderTypes: {
                default: 'Border',
                left: 'Left',
                top: 'Top',
                right: 'Right',
                bottom: 'Bottom'
            },
            borderStyles: {
                solid: 'Solid',
                none: 'None',
                double: 'Double',
                dashed: 'Dashed',
                dotted: 'Dotted'
            },
            borderProperties: {
                defaultColor: 'Border Color',
                defaultSize: 'Border Size',
                defaultStyle: 'Border Style',
                leftColor: 'Border Left Color',
                leftSize: 'Border Left Size',
                leftStyle: 'Border Left Style',
                topColor: 'Border Top Color',
                topSize: 'Border Top Size',
                topStyle: 'Border Top Style',
                rightColor: 'Border Right Color',
                rightSize: 'Border Right Size',
                rightStyle: 'Border Right Style',
                bottomColor: 'Border Bottom Color',
                bottomSize: 'Border Bottom Size',
                bottomStyle: 'Border Bottom Style'
            }
        },
        generalSettings: {
            categoryName: 'General',
            printFirstPage: 'Print on First Page',
            printLastPage: 'Print on Last Page'
        },
        size: {
            sizeLabel: 'Size',
            paddingTypes: {
                label: 'Padding',
                left: 'Left',
                top: 'Top',
                right: 'Right',
                bottom: 'Bottom'
            }
        },
        position: {
            categoryName: 'Position',
            label: 'Position',
            left: 'Left',
            top: 'Top',
            sizeLabel: 'Size',
            width: 'Width',
            height: 'Height'
        },
        codeModule: {
            code: 'Code',
            variables: 'Variables'
        },
        margin: {
            categoryName: 'Margin',
            categoryHeader: 'Margin',
            types: {
                left: 'Left',
                right: 'Right',
                bottom: 'Bottom',
                top: 'Top'
            }
        },
        pageUnit: {
            header: 'Page Units',
            label: 'Page Unit',
            types: {
                inches: 'Inches',
                centimeters: 'Centimeters',
                pixels: 'Pixels',
                points: 'Points',
                millimeters: 'Millimeters',
                picas: 'Picas'
            }
        },
        columns: {
            header: 'Page Column',
            label: 'Columns',
            columnSpacing: 'Column Spacing'
        },
        interactiveSize: {
            categoryName: 'Interactive Size',
            enable: 'Enable',
            width: 'Width',
            height: 'Height'
        },
        paperSize: {
            orientation: 'Orientation',
            header: 'PaperSize',
            label: 'Paper size',
            orientationTypes: {
                landScape: 'Landscape',
                portrait: 'Portrait'
            },
            types: {
                a3Size: 'A3',
                a4Size: 'A4',
                b4Size: 'B4(JIS)',
                b5Size: 'B5(JIS)',
                envelope: 'Envelope #10',
                envelopeMonarch: 'Envelope Monarch',
                executive: 'Executive',
                legal: 'Legal',
                letter: 'Letter',
                tabloid: 'Tabloid',
                custom: 'Custom'
            }
        },
        styleTooltip: 'Style',
        colorTooltip: 'Color',
        sizeTooltip: 'Size',
        reportLanguage: {
            categoryName: 'Language',
            labelText: 'Language'
        },
        backgroundImage: {
            categoryName: 'Background Image',
            source: 'Source',
            sourceTypes: {
                external: 'External',
                embedded: 'Embedded',
                database: 'Database'
            },
            value: 'Value',
            mimeTypeLabel: 'MIME Type',
            mimeTypes: {
                bmp: 'image/bmp',
                jpeg: 'image/jpeg',
                gif: 'image/gif',
                png: 'image/png',
                xPng: 'image/x-png'
            },
            repeatProperty: {
                categoryName: 'Repeat',
                repeat: 'Repeat',
                repeatX: 'RepeatX',
                repeatY: 'RepeatY',
                defaultType: 'Default',
                clip: 'Clip',
                fit: 'Fit'
            }
        },
        reportMiscellaneous: {
            categoryName: 'Miscellaneous',
            consumeWhiteSpace: 'ConsumeContainerWhitespace',
            customAttributes: 'Custom Attributes',
            reportVersion: 'Version',
            reportversions: {
                default: 'Default',
                RDL2010: 'RDL2010',
                RDL2016: 'RDL2016'
            }
        }
    },
    textBoxProperty: {
        contents: {
            categoryName: 'Content',
            content: 'Content'
        },
        basicSettings: {
            categoryName: 'Basic Settings',
            font: {
                categoryName: 'Font',
                defaultStyle: 'Default',
                normal: 'Normal',
                italic: 'Italic'
            },
            fontStyle: {
                categoryName: 'Font Style',
                defaultStyle: 'Default',
                normal: 'Normal',
                thin: 'Thin',
                extraLight: 'ExtraLight',
                light: 'Light',
                medium: 'Medium',
                semiBold: 'SemiBold',
                bold: 'Bold',
                extraBold: 'ExtraBold',
                heavy: 'Heavy'
            },
            textDecoration: {
                categoryName: 'Text Decoration',
                defaultStyle: 'Default',
                none: 'None',
                underline: 'Underline',
                lineThrough: 'LineThrough',
                overline: 'Overline'
            },
            format: 'Format',
            markupType: {
                categoryName: 'Markup Type',
                plaintext: 'Plain Text',
                html: 'HTML'
            }
        },
        alignment: {
            categoryName: 'Alignment',
            textAlignment: {
                categoryName: 'Text Alignment',
                defaultStyle: 'Default',
                left: 'Left',
                center: 'Center',
                right: 'Right'
            },
            verticalAlignment: {
                categoryName: 'Vertical Alignment',
                defaultStyle: 'Default',
                top: 'Top',
                middle: 'Middle',
                bottom: 'Bottom'
            },
            lineSpacing: 'Line Height'
        },
        appearance: {
            categoryName: 'Appearance',
            borderTypes: {
                default: 'Border',
                left: 'Left',
                top: 'Top',
                right: 'Right',
                bottom: 'Bottom'
            },
            borderStyles: {
                solid: 'Solid',
                none: 'None',
                double: 'Double',
                dashed: 'Dashed',
                dotted: 'Dotted'
            },
            borderProperties: {
                defaultColor: 'Border Color',
                defaultSize: 'Border Size',
                defaultStyle: 'Border Style',
                leftColor: 'Border Left Color',
                leftSize: 'Border Left Size',
                leftStyle: 'Border Left Style',
                topColor: 'Border Top Color',
                topSize: 'Border Top Size',
                topStyle: 'Border Top Style',
                rightColor: 'Border Right Color',
                rightSize: 'Border Right Size',
                rightStyle: 'Border Right Style',
                bottomColor: 'Border Bottom Color',
                bottomSize: 'Border Bottom Size',
                bottomStyle: 'Border Bottom Style'
            },
            background: 'Background Color'
        },
        link: 'Link',
        linkReport: 'Link Report',
        URL: 'URL',
        position: {
            categoryName: 'Position',
            label: 'Position',
            sizeLabel: 'Size',
            left: 'Left',
            top: 'Top',
            width: 'Width',
            height: 'Height'
        },
        visibility: {
            categoryName: 'Visibility',
            visible: 'Visible',
            toggleItem: 'Toggle Item',
            intialToggleState: 'Initial Toggle State'
        },
        miscellaneous: {
            categoryName: 'Miscellaneous',
            canGrow: 'Can Grow',
            canShrink: 'Can Shrink',
            toolTip: 'Tooltip',
            documentMap: 'Document Map',
            customAttributes: 'Custom Attributes',
            bookmark: 'Bookmark',
        },
        paragraphSettings: {
            categoryName: 'Paragraph Settings',
            textAlignment: {
                categoryName: 'Text Alignment',
                defaultStyle: 'Default',
                left: 'Left',
                center: 'Center',
                right: 'Right'
            },
            indent: {
                categoryName: 'Indent',
                leftIndent: 'Left',
                rightIndent: 'Right'
            },
            space: {
                categoryName: 'Space',
                topSpace: 'Top',
                bottomSpace: 'Bottom'
            },
            listLevel: {
                categoryName: 'List Level',
                zeroLevel: '',
                oneLevel: '',
                twoLevel: '',
                threeLevel: '',
                fourLevel: ''
            },
            listStyle: {
                categoryName: 'List Style',
                none: 'None',
                numbered: 'Numbered',
                bulleted: 'Bulleted'
            }
        },
        padding: {
            label: 'Padding',
            left: 'Left',
            top: 'Top',
            right: 'Right',
            bottom: 'Bottom'
        },
        contextMenu: {
            cut: 'Cut',
            copy: 'Copy',
            paste: 'Paste',
            expression: 'Expression',
            pasteAlert: 'Your browser doesn\'t support direct access to the clipboard. Please use the Ctrl+V keyboard shortcut instead of paste operation.'
        },
        fontStyle: 'Font Style',
        fontWeight: 'Font Weight',
        fontSize: 'Font Size',
        fontColor: 'Font Color',
        fontFamily: 'Font Family',
        fontStyleTooltip: 'Style',
        fontWeightTooltip: 'Weight',
        fontSizeTooltip: 'Size',
        fontColorTooltip: 'Color',
        fontFamilyTooltip: 'Font Family',
        styleTooltip: 'Style',
        colorTooltip: 'Color',
        sizeTooltip: 'Size',
        selectedText: 'Selected Text',
        interActiveSort: {
            categoryName: 'User Sort',
            userSort: {
                labelText: 'Sort Expression',
                scopePropertyLabel: 'Sort Expression Scope',
                targetPropertyLabel: 'Sort Target'
            }
        },
        localization: {
            categoryName: 'Localization',
            labelText: 'Language',
            direction: {
                directionLabel: 'Direction',
                leftToRight: 'LTR',
                rightToLeft: 'RTL',
                default: 'Default'
            },
            writingMode: {
                labelText: 'Writing Mode',
                types: {
                    default: 'Default',
                    horizontal: 'Horizontal',
                    vertical: 'Vertical',
                    rotate: 'Rotate270'
                }
            }
        },
        dataElement: {
            categoryName: 'Data Element',
            elementName: 'Name',
            elementOutput: {
                auto: 'Auto',
                noOutput: 'NoOutput',
                categoryName: 'Output',
                output: 'Output'
            },
            elementStyle: {
                auto: 'Auto',
                attribute: 'Attribute',
                element: 'Element',
                categoryName: 'Style'
            }
        }
    },
    designPanel: {
        headerText: 'Header',
        footerText: 'Footer',
        pasteAlert: 'Only basic item are supported in header and footer area',
        pasteTitle: 'Paste',
        headerAreaLabel: 'Design Area Header',
        bodyAreaLabel: 'Design Area Body',
        footerAreaLabel: 'Design Area Footer',
        rdlSwitcherAlert: {
            headerContent: 'Report',
            bodyContent: 'The report is a downgrading to the lower version from the current version and some features are not supported in this version. Do you want to continue ?'
        }
    },
    designContextMenu: {
        cutItem: 'Cut',
        copyItem: 'Copy',
        pasteItem: 'Paste',
        deleteItem: 'Delete',
        insertItem: 'Insert',
        addHeader: 'Add Header',
        removeHeader: 'Remove Header',
        addFooter: 'Add Footer',
        removeFooter: 'Remove Footer',
        chartItem: 'Chart',
    },
    customProperty: {
        position: {
            categoryName: 'Position',
            label: 'Position',
            left: 'Left',
            top: 'Top',
            sizeLabel: 'Size',
            width: 'Width',
            height: 'Height'
        },
        appearance: {
            categoryName: 'Appearance',
            borderTypes: {
                default: 'Border',
                left: 'Left',
                top: 'Top',
                right: 'Right',
                bottom: 'Bottom'
            },
            borderStyles: {
                solid: 'Solid',
                none: 'None',
                double: 'Double',
                dashed: 'Dashed',
                dotted: 'Dotted'
            },
            borderProperties: {
                defaultColor: 'Border Color',
                defaultSize: 'Border Size',
                defaultStyle: 'Border Style',
                leftColor: 'Border Left Color',
                leftSize: 'Border Left Size',
                leftStyle: 'Border Left Style',
                topColor: 'Border Top Color',
                topSize: 'Border Top Size',
                topStyle: 'Border Top Style',
                rightColor: 'Border Right Color',
                rightSize: 'Border Right Size',
                rightStyle: 'Border Right Style',
                bottomColor: 'Border Bottom Color',
                bottomSize: 'Border Bottom Size',
                bottomStyle: 'Border Bottom Style'
            },
            backGround: 'Background Color'
        },
        visibility: {
            categoryName: 'Visibility',
            visible: 'Visible'
        },
        miscellaneous: {
            categoryName: 'Miscellaneous',
            toolTip: 'Tooltip',
            bookmark: 'Bookmark'
        },
        styleTooltip: 'Style',
        colorTooltip: 'Color',
        sizeTooltip: 'Size'
    },
    tablixProperty: {
        data: {
            categoryName: 'Data',
            datasetName: 'Dataset',
            datasetNone: 'None'
        },
        noRows: {
            categoryName: 'No Rows',
            font: {
                categoryName: 'Font',
                color: 'Font Color',
                family: 'Font Family',
                size: 'Font Size',
                style: 'Font Style',
                weight: 'Font Weight'
            },
            fontStyle: {
                label: 'Font Style',
                fontItem: {
                    default: 'Default',
                    normal: 'Normal',
                    italic: 'Italic'
                },
                fontWeight: {
                    default: 'Default',
                    normal: 'Normal',
                    thin: 'Thin',
                    extraLight: 'ExtraLight',
                    light: 'Light',
                    medium: 'Medium',
                    semiBold: 'SemiBold',
                    bold: 'Bold',
                    extraBold: 'ExtraBold',
                    heavy: 'Heavy',
                }
            },
            textDecoration: {
                categoryName: 'Text Decoration',
                defaultStyle: 'Default',
                none: 'None',
                underline: 'Underline',
                overline: 'Overline',
                lineThrough: 'LineThrough'
            },
            format: 'Format',
            lineHeight: 'Line Height',
            message: 'Message',
            paddingTypes: {
                label: 'Padding',
                left: 'Left',
                right: 'Right',
                top: 'Top',
                bottom: 'Bottom',
            },
            textAlign: {
                categoryName: 'Text Align',
                default: 'Default',
                left: 'Left',
                right: 'Right',
                center: 'Center'
            },
            verticalAlign: {
                categoryName: 'Vertical Align',
                default: 'Default',
                top: 'Top',
                middle: 'Middle',
                bottom: 'Bottom'
            },
            writingMode: {
                categoryName: 'Writing Mode',
                default: 'Default',
                horizontal: 'Horizontal',
                vertical: 'Vertical',
                rotateProperty: 'Rotate270'
            }
        },
        appearance: {
            categoryName: 'Appearance',
            borderTypes: {
                default: 'Border',
                left: 'Left',
                top: 'Top',
                right: 'Right',
                bottom: 'Bottom'
            },
            borderStyles: {
                solid: 'Solid',
                none: 'None',
                double: 'Double',
                dashed: 'Dashed',
                dotted: 'Dotted'
            },
            borderProperties: {
                defaultColor: 'Border Color',
                defaultSize: 'Border Size',
                defaultStyle: 'Border Style',
                leftColor: 'Border Left Color',
                leftSize: 'Border Left Size',
                leftStyle: 'Border Left Style',
                topColor: 'Border Top Color',
                topSize: 'Border Top Size',
                topStyle: 'Border Top Style',
                rightColor: 'Border Right Color',
                rightSize: 'Border Right Size',
                rightStyle: 'Border Right Style',
                bottomColor: 'Border Bottom Color',
                bottomSize: 'Border Bottom Size',
                bottomStyle: 'Border Bottom Style'
            },
            backGround: 'Background Color'
        },
        miscellaneous: {
            categoryName: 'Miscellaneous',
            noRowsMessage: 'No Rows Message',
            pageName: 'Page Name',
            keepTogether: 'Keep Together',
            customAttributes: 'Custom Attributes',
            toolTip: 'Tooltip',
            documentMap: 'Document Map',
            bookmark: 'Bookmark'
        },
        headers: {
            categoryName: 'Headers',
            fixedRow: 'Fixed Row',
            fixedColumn: 'Fixed Column',
            repeatRow: 'Repeat Row',
            repeatColumn: 'Repeat Column'
        },
        font: {
            categoryName: 'Font',
            defaultStyle: 'Default',
            normal: 'Normal',
            italic: 'Italic'
        },
        fontStyle: {
            categoryName: 'Font Style',
            defaultStyle: 'Default',
            normal: 'Normal',
            thin: 'Thin',
            extraLight: 'ExtraLight',
            light: 'Light',
            medium: 'Medium',
            semiBold: 'SemiBold',
            bold: 'Bold',
            extraBold: 'ExtraBold',
            heavy: 'Heavy'
        },
        textDecoration: {
            categoryName: 'Text Decoration',
            defaultStyle: 'Default',
            none: 'None',
            underline: 'Underline',
            lineThrough: 'LineThrough',
            overline: 'Overline'
        },
        alignment: {
            categoryName: 'Alignment',
            textAlignment: {
                categoryName: 'Text Alignment',
                defaultStyle: 'Default',
                left: 'Left',
                center: 'Center',
                right: 'Right'
            },
            verticalAlignment: {
                categoryName: 'Vertical Alignment',
                defaultStyle: 'Default',
                top: 'Top',
                middle: 'Middle',
                bottom: 'Bottom'
            }
        },
        padding: {
            label: 'Padding',
            left: 'Left',
            top: 'Top',
            right: 'Right',
            bottom: 'Bottom'
        },
        position: {
            categoryName: 'Position',
            label: 'Position',
            left: 'Left',
            top: 'Top',
            sizeLabel: 'Size',
            width: 'Width',
            height: 'Height'
        },
        visibility: {
            categoryName: 'Visibility',
            visible: 'Visible',
            toggleItem: 'Toggle Item'
        },
        staticGroupProp: {
            categoryName: 'Basic Settings',
            filters: 'Filters',
            sorts: 'Sorts',
            fixedData: 'Fixed Data',
            groupExp: 'Groups',
            hideIfNoRows: 'Hide If No Rows',
            keepWithGroup: 'Keep With Group',
            repeatOnNewPage: 'Repeat On New Page',
            afterGroup: 'After',
            beforeGroup: 'Before',
            pageBreak: {
                categoryName: 'Page Break',
                enablePageBreak: 'Enable Page Break',
                breakLocation: {
                    categoryName: 'Break Location',
                    none: 'None',
                    start: 'Start',
                    end: 'End',
                    startAndEnd: 'StartAndEnd',
                    between: 'Between'
                },
                pageNumberReset: 'Page Number Reset',
            }
        },
        waterMark: {
            matrix: {
                rows: 'Rows',
                columns: 'Columns',
                data: 'Data'
            }
        },
        fontStyleTooltip: 'Style',
        fontWeightTooltip: 'Weight',
        fontSizeTooltip: 'Size',
        fontColorTooltip: 'Color',
        fontFamilyTooltip: 'Font Family',
        styleTooltip: 'Style',
        colorTooltip: 'Color',
        sizeTooltip: 'Size',
        tablixMember: 'Tablix Member',
        dataElement: {
            categoryName: 'Data Element',
            elementName: 'Name',
            elementOutput: {
                auto: 'Auto',
                noOutput: 'NoOutput',
                categoryName: 'Output',
                output: 'Output'
            }
        }
    },
    rowColumnGroup: {
        rowGroupLable: 'Row Groups',
        columnGroupLable: 'Column Groups',
        tablixAlertHeader: 'Tablix',
        alertMessage: 'Enable the expand option to select the tablix report item',
        contextMenu: {
            addgroup: 'Add Group',
            advanced: 'Advanced',
            deletegroup: 'Delete Group',
            addtotal: 'Add Total',
            groupProperties: 'Group Properties',
            addColumnGroup: 'Add Column Group',
            addRowGroup: 'Add Row Group'
        },
        contextSubMenu: {
            adjacentafter: 'Adjacent After',
            adjacentbefore: 'Adjacent Before',
            childgroup: 'Child Group',
            parentgroup: 'Parent Group',
            totalafter: 'After',
            totalbefore: 'Before'
        },
        errorMessage: {
            createData: 'The report has no dataset. Create data to add group in tablix.',
            assignData: 'Data is not assigned for tablix. Assign data in tablix to add group.',
            dataNotAvailable: 'Assigned data does not exist in the report. Create new or bind the existing data to tablix.',
            detailGroup: 'Cannot insert group inside detail group.'
        },
        tablixGroupingPanel: 'Tablix Grouping Panel',
        tablixRowColumnContainer: 'Tablix row and column group container',
        tablixRowGroup: 'Tablix Row Group container',
        tablixColumnGroup: 'Tablix Column Group container',
        tablixAddGroupMenu: 'Tablix Add Group Menu',
        groupAdvanceMenu: 'Tablix Grouping Panel Advanced Menu'
    },
    tablixContextMenu: {
        rowMenu: {
            insertRow: 'Insert Row',
            above: 'Above',
            below: 'Below'
        },
        columnMenu: {
            insertColumn: 'Insert Column',
            left: 'Left',
            right: 'Right'
        },
        rowGroupMenu: {
            insideGroupAbove: 'Inside Group - Above',
            insideGroupBelow: 'Inside Group - Below',
            outsideGroupAbove: 'Outside Group - Above',
            outsideGroupBelow: 'Outside Group - Below'
        },
        columnGroupMenu: {
            insideGroupLeft: 'Inside Group - Left',
            insideGroupRight: 'Inside Group - Right',
            outsideGroupLeft: 'Outside Group - Left',
            outsideGroupRight: 'Outside Group - Right',
        },
        deleteRows: 'Delete Rows',
        deleteColumns: 'Delete Columns',
        rowVisibility: 'Row Visibility',
        columnVisibility: 'Column Visibility',
        tablixProperties: 'Tablix Properties',
        splitcells: 'Split Cells',
        mergecells: 'Merge Cells',
        groupMenu: {
            adjacentAbove: 'Adjacent Above',
            adjacentleft: 'Adjacent Left',
            adjacentright: 'Adjacent Right',
            adjacentBelow: 'Adjacent Below',
            childGroup: 'Child Group',
            parentGroup: 'Parent Group',
            deleteRowGroup: 'Delete Row Group',
            deleteColGroup: 'Delete Column Group',
            addRowGroup: 'Row Group',
            addColGroup: 'Column Group'
        },
        reportItemMenu: {
            insertItem: 'Insert',
            chart: 'Chart'
        },
        totalMenu: {
            total: 'Add Total',
            row: 'Row',
            column: 'Column',
            before: 'Before',
            after: 'After'
        },
        cellMenu: {
            addExpression: 'Add Expression',
            editExpression: 'Edit Expression',
            datasource: 'Add Data Source',
            noFields: 'No Fields',
            addText: 'Add Text',
            editText: 'Edit Text'
        },
        basicItems: {
            deleteItem: 'Delete',
            cut: 'Cut',
            copy: 'Copy',
            paste: 'Paste'
        }
    },
    tablixAlertDialog: {
        ok: 'OK',
        cancel: 'Cancel',
        closeToolTip: 'Close',
        deleteRowTitle: 'Delete Rows',
        deleteRow: 'Delete rows only',
        deleteRowGroup: 'Delete rows and associated groups',
        deleteRowContent: 'Delete row options',
        deleteBodyRow: 'Tablix body must contain at least one row.',
        deleteColumnTitle: 'Delete Columns',
        deleteColumn: 'Delete columns only',
        deleteColumnGroup: 'Delete columns and associated groups',
        deleteColumnContent: 'Delete column options',
        deleteBodyColumn: 'Tablix body must contain at least one column.',
        deleteGroup: 'Delete group only',
        deleteGroupRowColumn: 'Delete group and related rows and columns',
        deleteGroupTitle: 'Delete Group',
        deleteGroupContent: 'Delete group options',
        deleteStructure: 'Group structure not available.',
        removeRowAlert: 'Failed to remove row in tablix report item',
        removeRow: 'Remove Rows',
        removeColumn: 'Remove Columns',
        addRow: 'Add Row',
        addColumn: 'Add Column',
        removeColumnAlert: 'Failed to remove column in tablix report item',
        addRowAlert: 'Failed to add row in tablix report item',
        addColumnAlert: 'Failed to add column in tablix report item'
    },
    cellMergingAlertInfo: {
        merge: 'Merge Cells',
        mergeAlert: 'Failed to merge cells in tablix report item',
        split: 'Split Cells',
        splitAlert: 'Failed to split cells in tablix report item'
    },
    tablixAlertInfo: {
        addGroup: 'Add Group',
        removeGroup: 'Remove Group',
        adjacentAfterAlert: 'Failed to add adjacent group in hierarchy structure',
        adjacentBeforeAlert: 'Failed to add adjacent group in hierarchy structure',
        childGroupALert: 'Failed to add child group in hierarchy structure',
        title: 'Tablix ReportItem',
        parentGroupAlert: 'Failed to add parent group in hierarchy structure',
        removeGroupAlert: 'Failed to remove group in hierarchy structure',
        selectedMemberAlert: 'Selected member is not a group member',
        pasteActionAlert: 'The information cannot be posted because the copy area and the paste area are not the same size and shape.',
        pasteTitle: 'Paste'
    },
    tablixGroup: {
        title: 'Tablix Group',
        headerTxt: 'Group Label',
        groupBy: 'Group by:',
        chooseField: 'Choose Field',
        showDetailData: 'Show detail data',
        addGroupHeader: 'Add header',
        addGroupFooter: 'Add footer',
        ok: 'OK',
        cancel: 'Cancel',
        closeToolTip: 'Close'
    },
    tablixDataAssignMenu: {
        datasource: 'Add Data Source',
        addExpression: 'Add Expression',
        editExpression: 'Edit Expression',
        addText: 'Add Text',
        editText: 'Edit Text',
        search: 'Search',
        noFieldsFound: 'No Fields Found'
    },
    tablixTotalAlert: {
        headerLabel: 'Add Total Header',
        staticLabel: 'Add Total',
        headerMessage: 'Failed to add total row or column to the group header in tablix report item',
        staticMessage: 'Failed to add total row or column to the tablix body in tablix report item'
    },
    tablixAddTextDialog: {
        save: 'Save',
        add: 'Add',
        cancel: 'Cancel',
        closeToolTip: 'Close',
        addText: 'Add Text',
        editText: 'Edit Text'
    },
    reportParameter: {
        title: 'Parameters',
        validationMessage: 'Specify the valid Query Parameter',
        descriptionText: 'Report Parameters',
        addText: 'ADD',
        ok: 'OK',
        cancel: 'Cancel',
        nameWaterMark: 'Parameter Name',
        valueWaterMark: 'Value',
        closeToolTip: 'Close',
        deleteField: 'Delete Field'
    },
    queryDesigner: {
        storeParameter: {
            title: 'Parameters',
            ok: 'OK',
            cancel: 'Cancel',
            parameterLable: 'Parameter',
            nullLable: 'Null',
            valueLable: 'Value',
            dataTypeLable: 'DataType',
            closeToolTip: 'Close'
        },
        parameter: {
            title: 'Parameters',
            ok: 'OK',
            cancel: 'Cancel',
            parameterLable: 'Parameter',
            nullLable: 'Null',
            valueLable: 'Value',
            dataTypeLable: 'DataType',
            auto: 'Auto',
            text: 'Text',
            closeToolTip: 'Close'
        },
        filter: {
            title: 'Query Filters',
            descriptionLable: 'List of Table Filters',
            add: 'ADD',
            save: 'OK',
            cancel: 'Cancel',
            nullLable: 'Null',
            trueLable: 'True',
            falseLable: 'False',
            parameterTooltip: 'Include as Parameter',
            closeToolTip: 'Close',
            numberType: 'Number',
            stringType: 'String',
            intOperatorType: {
                equals: 'Equals',
                doesNotEqual: 'Does Not Equal',
                greaterThan: 'Greater Than',
                greaterThanOrEqual: 'Greater Than or Equal To',
                lessThan: 'Less Than',
                lessThanOrEqual: 'Less Than or Equal To',
                between: 'Between',
                notBetween: 'Not Between'
            },
            stringOpertorType: {
                equals: 'Equals',
                startsWith: 'Starts With',
                endWith: 'Ends With',
                contains: 'Contains',
                notContains: 'Not Contains'
            },
            errorMessage: {
                dateValidation: 'Value is an invalid date format.',
                commonContent: 'The filter on ',
                booleanValidation: ' does not have any values to filter on. Please provide the values for the filter.',
                stringValidation: ' does not have proper values to filter on. '
            }
        },
        previewArea: {
            dataPreview: 'Data Preview',
            noRecords: 'No records to display',
            generatePreview: 'Generate Preview',
            executeRecords: 'Execute to preview records',
            record: 'Record',
            records: 'Records',
            retrieved: 'Retrieved',
            loadRecord: 'Load More',
            update: 'Update',
            previewContainer: 'Data Preview Container'
        },
        schemaArea: {
            search: 'Search',
            matchesFound: 'No matches found',
            rename: 'Rename',
            searchInfo: 'Retrieves the matching information from currently fetched schema',
            aggregation: 'Aggregate',
            dialogHeader: 'Dataset',
            alertMessage: {
                datasourceAlert: 'Select a DataSource to Configure Report Dataset',
                removeTable: 'The below associated tables will remove with this',
                duplicateName: 'The specified column name already exists',
                duplicateDatasetName: 'The specified name already exists in Dataset list',
                datasetSpecialCharacter: 'Name should not contain spaces and special characters',
                specialCharacter: 'Column name should not contain special characters.',
                switcherAlert: 'Switching to the visual designer will discard manual changes made to the query. Do you want to use the visual designer anyway?'
            },
            errorMessage: {
                specifyName: 'Specify the column name',
                specifyDatasetName: 'Specify the Dataset name',
                previewFailed: 'Dataset failed to preview the selected table',
                specifyQuery: 'Specify the Dataset query',
                selectTable: 'Select the table to save the Dataset',
                queryFailed: 'Dataset failed to save the Query of selected table',
                refreshFailed: 'Failed to refresh the dataset {datasetName}, it requires one or more input values. Please edit and save the dataset.',
                tableProcedure: 'Dataset failed to retrieve the selected table procedure',
                deleteTableFailure: 'Failed to delete the selected table',
                joinTableFailure: 'Failed to join the selected tables',
                confirmPermission: 'Retrieved huge records, rendering will take time. Would you like to load anyway ?'
            },
            dragSurface: 'Drag Surface Container',
            searchSchema: 'Search Schema',
            fieldTable: 'Field Table',
            closeFieldTable: 'Close Table',
            fieldSelection: 'Field Chooser',
            selectAndDeselectAll: 'Select and Deselect All Columns'
        },
        toolBar: {
            datasourceLable: 'DataSource',
            datasetName: 'Name',
            run: 'Run',
            join: 'Join',
            expression: 'Expression',
            filter: 'Filter',
            code: 'Code',
            finish: 'Finish',
            cancel: 'Cancel',
            parameter: 'Parameter',
            datasourceWaterMark: 'Select a DataSource',
            autoPreview: 'Auto Preview'
        },
        joiner: {
            title: 'Query Joiner',
            descriptionLable: 'List of Table Relations',
            add: 'ADD',
            save: 'OK',
            cancel: 'Cancel',
            closeToolTip: 'Close',
            addField: 'Add Field',
            leftTableWaterMark: 'Left Table',
            rightTableWaterMark: 'Right Table',
            leftFieldWaterMark: 'Left Field',
            rightFieldWaterMark: 'Right Field',
            operatorWaterMark: 'Operator',
            joinTypeWaterMark: 'Join Type',
            joinTypes: {
                inner: 'Inner',
                outer: 'Left Outer',
                rightOuter: 'Right Outer',
                fullOuter: 'Full Outer'
            },
            errorMessage: {
                removeField: 'Each relation must have one field condition. So, it does not allow deleting this field',
                noRelationAlert: ' is no relation with other tables',
                selectLeftTable: 'Select the left table value',
                selectRightTable: 'Select the right table value',
                selectRelation: 'Select the relation for tables',
                selectLeftColumn: 'Select the left column value of field row #',
                selectRightColumn: 'Select the right column value of field row #',
                selectOperator: 'Select the operator of field row #',
                relationExists: 'Already relation exists between tables',
                saveJoinerAlert: 'Failed to join the selected tables'
            }
        },
        credentialDialog: {
            title: 'Credential Dialog',
            userName: 'Username',
            password: 'Password',
            userNameErrorMessage: 'Please enter Username',
            passwordErrorMessage: 'Please enter Password',
            connect: 'Connect',
            close: 'Close',
            credentialLabel: 'Data Source Credentials'
        },
        queryExpression: {
            title: 'Query Expressions',
            functionLabel: 'Functions',
            columnLabel: 'Column Settings',
            expressionLabel: 'Expression',
            nameLabel: 'Name',
            descriptionLabel: 'Description ',
            exampleLabelText: 'Example',
            ok: 'Save',
            cancel: 'Cancel',
            add: 'Add',
            textAreaWaterMark: 'Query Expression',
            nameFieldWaterMark: 'Expression Name',
            closeToolTip: 'Close',
            errorMessage: {
                saveAlert: 'Expression is not saved. Do you want to save and continue?',
                bracketSyntax: 'Incorrect Syntax near open/close bracket(s).',
                parseAlert: 'ReportDesigner failed to parse the specified expression.',
                nameAlert: 'Name field should not be empty.',
                emptyAlert: 'Expression field should not be empty',
                duplicateName: 'The specified expression name already exists',
                specialCharacter: 'Expression name should not contain special characters.',
                referenceError: 'Column cannot be referred within its own expression!',
                invalidSyntax: 'Invalid syntax near open/close bracket(s).',
                retrieveExpression: 'ReportDesigner failed to retrieve the specified expression.',
            },
            datasetTitle: 'Dataset',
            expressions: {
                all: 'All',
                numbers: 'Numbers',
                logical: 'Logical',
                conditional: 'Conditional',
                date: 'Date',
                stringType: 'String',
                text: 'Text',
                miscellenuous: 'Miscellaneous ',
                abs: 'Returns the absolute value of the given expression.',
                acos: 'Returns the inverse cosine (also known as arccosine) of the given numeric expression.',
                asin: 'Returns the inverse sine (also known as arcsine) of the given numeric expression.',
                atan: 'Returns the inverse tangent (also known as arctangent) of the given numeric expression.',
                cos: 'Returns the cosine of the angle specified in radians of the given expression.',
                degree: 'Returns the angle in degrees for the one which specified in radians of the given numeric expression.',
                exponent: 'Returns the exponential value of the given expression.',
                logrithm: 'Returns the logarithm of the given expression to the specified base.',
                pi: 'Returns the constant value of PI.',
                power: 'Returns the value of the given expression (expression1) to the specified power (expression2).',
                radians: 'Returns the angle in radians for the one which specified in degrees in the given numeric expression.',
                round: 'Returns a rounded value.',
                sign: 'Returns a value representing the positive (+1), zero (0), or negative (-1) sign of the given numeric expression.',
                sin: 'Returns the sine of the angle specified in radians of the given expression.',
                squareRoot: 'Returns the square root of the given numeric expression.',
                tan: 'Returns the tangent of the given numeric expression.',
                ifCondition: 'Returns either true part or false part, depending upon the evaluation of the expression.',
                ifNull: 'If the expression is numeric/string/date, returns the first expression. If the first expression is NULL, returns the second expression.',
                isNotNull: 'If the numeric/ string / date_expression is NULL, returns a string representing false; otherwise represents true.',
                isNull: 'If the numeric/string/date_expression is NULL, returns a string representing true; otherwise represents false.',
                and: 'Returns true if both the expressions evaluate to true.',
                notOperation: 'Returns the reversal logical value of the expression being evaluated.',
                orOperation: 'Returns true if any of the expressions evaluates to true.',
                addDate: 'Adds the number of days to the specified date.',
                name: 'Returns a string representing the specified datepart of the given date expression.',
                part: 'Returns an integer value representing the specified date part of the given date expression.',
                sub: 'Returns the date subtracted from the specified date.',
                day: 'Returns a numeric value representing the day part of the specified date.',
                dateDiff: 'Returns a numeric value representing the difference between two specified dates.',
                hour: 'Returns the hour of the given date as an integer.',
                minute: 'Returns a numeric value representing the minute part of the date resulting from specified date expression.',
                month: 'Returns a numeric value representing the month part of the date resulting from specified date expression.',
                now: 'Returns the current date and time.',
                today: 'Returns the current date.',
                year: 'Returns a numeric value representing the year part of the date resulting from the specified date expression.',
                char: 'Converts the given integer ASCII code into a character.',
                concat: 'Returns a string value resulting from the concatenation of two or more string values.',
                contains: 'Returns true if the given string expression contains the specified substring expression.',
                endsWith: 'Returns true if the given string expression ends with the specified substring expression.',
                left: 'Returns the specified number of characters from starting of the given string expression.',
                length: 'Returns the natural logarithm of the given expression.',
                lower: 'Returns a lower case converted string value from the given string expression.',
                leftTrim: 'Returns the string value with leading blanks removed from string expression.',
                maximum: 'Returns the maximum value in the given expression.',
                minimum: 'Returns the minimum value in the given expression.',
                right: 'Returns the specified number of characters from the end of the given string expression.',
                rightTrim: 'Returns the string without right side trailing spaces in the given string.',
                startswith: 'Returns true if the given string expressions starts with the specified substring expression.',
                subString: 'Returns a specific length of string starting from specific index of the given string expression.',
                upper: 'Returns an upper case converted string value from a given string expression.'
            }
        }
    },
    chartItem: {
        categoryItems: {
            yvalue: 'Y Value(s)',
            size: 'Size(s)',
            xvalue: 'X Value(s)',
            column: 'Column',
            row: 'Row(s)',
            high: 'High(s)',
            low: 'Low(s)'
        },
        categoryItemsMenu: {
            filter: 'Filters',
            sort: 'Sorts',
            group: 'Groups',
            expression: 'Expression',
            aggregate: 'Aggregate',
            none: 'None'
        },
        validationMessage: 'Chart type does not supported in designer.'
    },
    codeDialog: {
        title: 'Code Module',
        ok: 'OK',
        cancel: 'Cancel',
        add: 'ADD',
        closeToolTip: 'Close',
        reference: {
            title: 'References',
            waterMark: 'Reference',
            errorMessage: 'The field is empty',
            headerText: 'List of assembly references',
            referenceTooltip: 'Add an assembly reference to utilize your assembly functions in report.',
            referenceSuffixToolTip: ' about RDL assembly references.'
        },
        classes: {
            title: 'Classes',
            nameFieldWaterMark: 'Class Name',
            instanceFieldWaterMark: 'Instance Name',
            emptyFieldValidation: 'The fields are empty',
            emptyInstanceValueValidation: 'The field is empty',
            headerText: 'List of class instances',
            toolTip: 'Add class instances to access your object functions in report.',
            toolTipSuffix: ' about RDL classes.'
        },
        code: {
            title: 'Code',
            headerText: 'VB code function for report',
            tooltip: '{customBrandName} reporting engine supports VB code functions to integrate with report element and data.',
            toolTipSuffix: ' about RDL code module.'
        },
        customCode: 'CustomCode Editor',
        deleteReference: 'Delete Reference Field',
        deleteClass: 'Delete Class Field',
        refer: ' Refer to the ',
        article: 'MSDN article'
    },
    customAttributeDialog: {
        title: 'Custom Attributes',
        propertyName: 'Name',
        propertyValue: 'Value',
        ok: 'OK',
        cancel: 'Cancel',
        add: 'ADD',
        nameField: 'Name field is empty',
        sameNameAlert: 'The specified name already exists in the list',
        closeToolTip: 'Close',
        headerText: 'Change custom properties',
        deleteField: 'Delete Field'
    },
    previewData: {
        title: 'Preview Data',
        ok: 'OK',
        cancel: 'Cancel',
        description: 'Bind JSON data for Preview',
        close: 'Close',
        infoToolTip: 'Report requires JSON format data to preview and it contains the key and value in the list of array format.',
        jsonHeader: 'JSON Data :',
        errorMessage: 'Specify the valid JSON format',
        previewDataAlert: {
            title: 'Preview Data',
            alertMessage: 'Are you want switch to report designer ?'
        }
    },
    sampleDataSource: {
        sampleDSHeader: 'IMPORT SAMPLE DATA',
        addText: 'Add',
        searchText: 'Search',
        noDataFound: 'No Data found.',
        welcomeContentPrefix: 'Start by creating a data source',
        welcomeContentSuffix: 'You can connect to your own custom data or can import one from the predefined shared data that we offer.',
        sampleDSText: 'import sample data',
        exploreSampleText: 'Explore Sample Data',
        accordionText: 'Kickstart your first report and explore the customization options using the sample data.',
        errorMessage: 'Network Error',
        alertHeaderText: 'Import Data',
        alertMessage: 'ReportDesigner failed to import the data from the ReportServer',
        refreshButton: 'Datasource Refresh',
        exploreContainer: 'Datasource Explore Container',
        showHide: 'Show Hide'
    },
    field: {
        title: 'Fields',
        nameWaterMark: 'Field Name',
        sourceWaterMark: 'Field Source',
        ok: 'OK',
        cancel: 'Cancel',
        description: 'Change query and calculated fields',
        query: 'Query Field',
        calculated: 'Calculated Field',
        fieldError: 'Field is empty',
        fieldsError: 'Fields are empty',
        add: 'ADD',
        closeToolTip: 'Close',
        invalidFormat: 'Field name should not contain spaces and special characters',
        sameFieldName: 'Field Name already exists',
        deleteField: 'Delete Field'
    },
    parameterLayout: {
        title: 'Parameters Layout',
        ok: 'OK',
        cancel: 'Cancel',
        closeToolTip: 'Close',
        deleteConfirmation: {
            title: 'Parameter',
            deleteCell: 'Delete report parameter',
            deleteCells: 'Delete report parameters'
        }
    },
    parameterContextMenu: {
        rowMenu: {
            insertRow: 'Insert Row',
            above: 'Above',
            below: 'Below'
        },
        columnMenu: {
            insertColumn: 'Insert Column',
            left: 'Left',
            right: 'Right'
        },
        deleteCell: 'Delete',
        deleteColumn: 'Delete Column',
        deleteRow: 'Delete Row'
    },
    commonProperty: {
        commonProperties: 'Common Properties',
        basicSettings: {
            categoryName: 'Basic Settings',
            borderTypes: {
                default: 'Border',
                left: 'Left',
                top: 'Top',
                right: 'Right',
                bottom: 'Bottom'
            },
            borderStyles: {
                solid: 'Solid',
                none: 'None',
                double: 'Double',
                dashed: 'Dashed',
                dotted: 'Dotted'
            },
            borderProperties: {
                defaultColor: 'Border Color',
                defaultSize: 'Border Size',
                defaultStyle: 'Border Style',
                leftColor: 'Border Left Color',
                leftSize: 'Border Left Size',
                leftStyle: 'Border Left Style',
                topColor: 'Border Top Color',
                topSize: 'Border Top Size',
                topStyle: 'Border Top Style',
                rightColor: 'Border Right Color',
                rightSize: 'Border Right Size',
                rightStyle: 'Border Right Style',
                bottomColor: 'Border Bottom Color',
                bottomSize: 'Border Bottom Size',
                bottomStyle: 'Border Bottom Style'
            },
            backGround: 'Background Color',
            styleTooltip: 'Style',
            colorTooltip: 'Color',
            sizeTooltip: 'Size'
        },
        fontSettings: {
            categoryName: 'Font Settings',
            fontLabel: 'Font',
            fontStyleLabel: 'Font Style',
            fontFamily: 'Font Family',
            fontColor: 'Font Color',
            fontSize: 'Font Size',
            fontStyle: 'Font Style',
            fontWeight: 'Font Weight',
            fontStyles: {
                normal: 'Normal',
                default: 'Default',
                italic: 'Italic'
            },
            fontWeights: {
                normal: 'Normal',
                default: 'Default',
                bold: 'Bold',
                light: 'Light'
            }
        },
        position: {
            categoryName: 'Position',
            label: 'Position',
            left: 'Left',
            top: 'Top'
        },
        visibility: {
            categoryName: 'Visibility',
            visible: 'Visible'
        }
    },
    mapProperty: {
        fontFamilyTooltip: 'Font Family',
        fontWeightTooltip: 'Weight',
        commonProperties: {
            font: 'Font',
            fontStyle: 'Font Style',
            fontWeight: 'Font Weight',
            fontSize: 'Font Size',
            fontColor: 'Font Color',
            fontFamily: 'Font Family',
            fontStyles: {
                normal: 'Normal',
                default: 'Default',
                italic: 'Italic',
            },
            fontWeights: {
                normal: 'Normal',
                default: 'Default',
                bold: 'Bold',
                light: 'Light',
            },
            textAlignments: {
                center: 'Center',
                right: 'Right',
                left: 'Left'
            },
            mapColorRule: {
                categoryName: 'Shape Color Rule',
                colorRuleEnable: 'Enable Color Rule',
                dataValue: 'Data Value',
                colorType: 'Type',
                colorRuleType: {
                    colorRange: 'Color Range',
                    colorPalette: 'Color Palette',
                    custom: 'Custom'
                },
                distribution: 'Distribution Type',
                distributionTypes: {
                    optimal: 'Optimal',
                    equalDistribution: 'Equal Distribution',
                    equalInterval: 'Equal Interval',
                    custom: 'Custom'
                },
                startValue: 'Start Value',
                endValue: 'End Value',
                bucketCount: 'Bucket Count',
                buckets: 'Buckets',
                palette: 'Palette',
                paletteTypes: {
                    random: 'Random',
                    light: 'Light',
                    semiTransparent: 'SemiTransparent',
                    brightPastel: 'BrightPastel',
                    pacific: 'Pacific'
                },
                customColors: 'Custom Colors',
                startColor: 'Start Color',
                middleColor: 'Middle Color',
                endColor: 'End Color',
                legendName: 'Legend Name',
                legendText: 'Legend Text',
                showInColorScale: 'Show In Color Scale'
            },
            position: {
                topLeft: 'TopLeft',
                topCenter: 'TopCenter',
                topRight: 'TopRight',
                rightTop: 'RightTop',
                rightCenter: 'RightCenter',
                rightBottom: 'RightBottom',
                bottomLeft: 'BottomLeft',
                bottomCenter: 'BottomCenter',
                bottomRight: 'BottomRight',
                leftTop: 'LeftTop',
                leftCenter: 'LeftCenter',
                leftBottom: 'LeftBottom'
            }
        },
        mapTitle: {
            categoryName: 'Title',
            position: 'Position',
            text: 'Text',
            enableTitle: 'Enable Title'
        },
        basicSettings: {
            categoryName: 'Basic Settings',
            shapeType: 'Shapes',
            datasetName: 'Dataset',
            bindData: 'Binding Data',
            mapProjection: {
                projectionType: 'Projection Type',
                mapProjectionTypes: {
                    equirectangular: 'Equirectangular',
                    mercator: 'Mercator',
                    eckert1: 'Eckert1',
                    eckert3: 'Eckert3',
                    hammerAitoff: 'HammerAitoff',
                    fahey: 'Fahey',
                    bonne: 'Bonne'
                }
            },
            filters: 'Filters',
            groupExp: 'Groups'
        },
        appearance: {
            categoryName: 'Appearance',
            borderTypes: {
                default: 'Border',
                left: 'Left',
                top: 'Top',
                right: 'Right',
                bottom: 'Bottom'
            },
            borderStyles: {
                solid: 'Solid',
                none: 'None',
                double: 'Double',
                dashed: 'Dashed',
                dotted: 'Dotted'
            },
            backGround: 'Background Color'
        },
        legendSettings: {
            categoryLegend: 'Legend',
            showLegend: 'Enable Legend',
            showBorder: 'Show Border',
            border: 'Border',
            backgroundColor: 'Background Color',
            legendPosition: 'Position',
            mapLegendMode: {
                legendMode: 'Legend Mode',
                mapLegendTypes: {
                    default: 'Default',
                    interactive: 'Interactive'
                }
            },
            legendFont: 'Font',
            legendFontStyle: 'Font Style',
            legendTitle: 'Title',
            titleFont: 'Title Font',
            titleFontStyle: 'Title Font Style',
        },
        pageBreak: {
            categoryName: 'Page Break',
            enablePageBreak: 'Enable Page Break',
            breakLocation: 'Break Location',
            breakLocationTypes: {
                none: 'None',
                start: 'Start',
                end: 'End',
                startAndEnd: 'StartAndEnd',
                between: 'Between'
            },
            pageNumberReset: 'Page Number Reset',
            pageName: 'Page Name'
        },
        polygonTemplate: {
            categoryName: 'Shape Settings',
            showLabel: 'Show Label',
            backgroundColor: 'Background Color',
            border: 'Border',
            font: 'Font',
            fontStyle: {
                categoryName: 'Font Style',
                defaultStyle: 'Default',
                normal: 'Normal',
                italic: 'Italic'
            },
            fontWeight: {
                default: 'Default',
                normal: 'Normal',
                thin: 'Thin',
                extraLight: 'ExtraLight',
                light: 'Light',
                medium: 'Medium',
                semiBold: 'SemiBold',
                bold: 'Bold',
                extraBold: 'ExtraBold',
                heavy: 'Heavy',
            },
            label: 'Label Text',
            tooltip: 'Tooltip',
            visibility: 'Visibility'
        },
        position: {
            categoryName: 'Position',
            label: 'Position',
            top: 'Top',
            left: 'Left',
            sizeLabel: 'Size',
            height: 'Height',
            width: 'Width'
        },
        visibility: {
            categoryName: 'Visibility',
            visible: 'Visible',
            toggleItem: 'Toggle Item'
        },
        styleTooltip: 'Style',
        colorTooltip: 'Color',
        sizeTooltip: 'Size',
        fontcolortooltip: 'Color',
        fontsizetooltip: 'Size',
        fontstyletooltip: 'Font Style',
        miscellaneous: {
            categoryMiscellaneous: 'Miscellaneous',
            toolTip: 'Tooltip',
            documentMap: 'Document Map',
            customAttributes: 'Custom Attributes',
            bookmark: 'Bookmark'
        },
        spatial: {
            categoryName: 'Spatial',
            fielddefinitions: 'Field Definitions',
            polygons: 'Polygons'
        },
        mapErrorMessage: {
            headerText: 'Map',
            polygonErrorMessage: 'Failed to convert the geojson with updated polygons.',
            vectorDataToGeoJson: 'Failed to fetch the geojson from vector data',
            shapeData: 'Map shape data not configured in designer',
            shapeDateToGeoJson: 'Failed to fetch the geojson from shape data',
            multiLayer: 'Map does not support multiple layers in designer',
            polygonLayer: 'Map supports only polygon layer in the designer',
            fileTypes: 'Map supports only embedded and shape file types in the designer',
            unSupported: 'Map does not supported in designer'
        },
        mapMarker: {
            colorRule: 'Marker Color Rule',
            markerRule: 'Marker Rule',
            enableMarkerRule: 'Enable Marker Rule',
            enableSizeRule: 'Enable Size Rule',
            sizeRule: {
                categoryName: 'Marker Size Rule',
                startSize: 'Start Size',
                endSize: 'End Size',
                markers: 'Markers'
            },
            markerTemplate: {
                categoryName: 'Marker Settings',
                showMarker: 'Enable Marker',
                background: 'Background',
                markerStyle: 'Style',
                markerSize: 'Size',
                tooltip: 'Tooltip',
                latitude: 'Latitude',
                longitude: 'Longitude',
                markerStyles: {
                    circle: 'Circle',
                    none: 'None',
                    rectangle: 'Rectangle',
                    diamond: 'Diamond',
                    star: 'Star',
                    triangle: 'Triangle',
                    image: 'Image',
                    pentagon: 'Pentagon'
                },
                markerImage: {
                    type: 'MIMEType',
                    mode: 'ResizeMode',
                    source: 'Source',
                    color: 'TransparentColor',
                    value: 'Value',
                    sourceTypes: {
                        external: 'External',
                        embedded: 'Embedded',
                        database: 'Database'
                    },
                    resizeModes: {
                        autofit: 'AutoFit',
                        none: 'None'
                    }
                }
            }
        },
        dataElement: {
            categoryName: 'Data Element',
            elementName: 'Name',
            elementOutput: {
                auto: 'Auto',
                noOutput: 'NoOutput',
                categoryName: 'Output',
                output: 'Output'
            }
        }
    },
    mapBindingFields: {
        headerText: 'BindingField Pairs',
        addText: 'ADD',
        updateText: 'Update',
        fieldName: 'Field Name',
        bindingExpression: 'Binding Expression',
        deletefield: 'Delete Field',
        errorMessage: {
            bindingExpError: 'Choose value for binding expression',
            fieldNameError: 'Choose value for field name',
            warningMessage: 'The changes that you have made might not be updated. Do you still want to continue?'
        }
    },
    mapBucket: {
        headerText: 'MapBucket',
        addText: 'ADD',
        updateText: 'Update',
        startValue: 'Start Value',
        endValue: 'End Value',
        deletefield: 'Delete Field',
        errorMessage: {
            warningMessage: 'The changes that you have made might not be updated. Do you still want to continue?'
        }
    },
    mapPolygons: {
        headerText: 'Polygons',
        addText: 'ADD',
        polygonText: 'Map Polygon',
        updateText: 'Update',
        editPolygon: 'Edit',
        deletePolygon: 'Delete Polygon',
        properties: 'Polygon Properties',
        closeText: 'Close',
        saveText: 'Save',
        data: 'Data',
        spatial: 'Spatial',
        vectorData: 'Vector Data',
        errorMessage: {
            warningMessage: 'The changes that you have made might not be updated. Do you still want to continue?'
        }
    },
    mapMarkerStyle: {
        headerText: 'Map Marker',
        updateText: 'Update',
        add: 'ADD',
        label: 'Marker Style',
        deletefield: 'Delete',
        errorMessage: 'The changes that you have made might not be updated. Do you still want to continue?',
        styles: {
            circle: 'Circle',
            none: 'None',
            rectangle: 'Rectangle',
            diamond: 'Diamond',
            star: 'Star',
            triangle: 'Triangle',
            image: 'Image',
            pentagon: 'Pentagon'
        }
    },
    mapFieldDefinition: {
        mapFieldTitle: 'Map Field Definitions',
        fieldName: 'Field Name',
        dataType: 'Data Type',
        mapAlertMessage: 'The changes that you have made might not be saved. Do you still want to continue?',
        addText: 'ADD',
        errorMessage: {
            errorEmptyMessage: 'Specify the field name',
            sameCharacterMessage: 'Field name already exists'
        },
        updateText: 'UPDATE'
    },
    mapCustomColors: {
        headerText: 'Custom Colors',
        updateText: 'Update',
        add: 'ADD',
        label: 'Color',
        deletefield: 'Delete',
        errorMessage: 'The changes that you have made might not be updated. Do you still want to continue?',
    },
    reportVariable: {
        headerText: 'Variables',
        addText: 'ADD',
        updateText: 'Update',
        name: 'Name',
        value: 'Value',
        deletefield: 'Delete Field',
        checkBoxTooltip: 'Read Only',
        errorMessage: {
            warningMessage: 'The changes that you have made might not be updated. Do you still want to continue?',
            emptyAlert: 'Name cannot be empty',
            duplicateName: 'Name already exists',
            specialCharacter: 'Name should not contain spaces and special characters'
        }
    },
    indicatorStates: {
        headerText: 'Indicator States',
        addText: 'ADD',
        updateText: 'Update',
        deletefield: 'Delete Field',
        indicatorStyle: 'Icon',
        color: 'Color',
        start: 'Start',
        end: 'End',
        scaleFactor: 'Scale Factor',
        indicatorStateValue: 'Indicator State Value',
        errorMessage: {
            warningMessage: 'The changes that you have made might not be updated. Do you still want to continue?'
        }
    },
    webDataExpression: {
        title: 'Connection Data',
        ok: 'OK',
        cancel: 'Cancel',
        closeToolTip: 'Close',
        url: 'URL',
        rawData: 'Raw Data',
        parameters: 'Parameter(s)',
        headers: 'Header(s)',
        username: 'Username',
        password: 'Password',
        valueWaterMark: 'Value',
        emptyValue: 'Specify the expression value'
    }
};
