ej.ReportDesigner.Locale['zh-CN'] = {
    itemPanel: {
        waterMarkText: '搜索小工具',
        noDataFound: '找不到匹配项...',
        customCategory: '条形码',
        customRptItemName: '1D条码',
        dataRequirements: '數據要求',
        labelText: '项目面板容器',
        expandText: '扩大',
        collapseText: '坍方',
        customTooltip: {
            tooltip: {
                requirements: '將報表項添加到設計器區域。',
                description: '顯示自定義報告項目。',
                title: '自定義報告項目'
            }
        },
        groupItems: {
            basicItems: {
                groupName: '基本项目',
                Items: {
                    'line': {
                        displayText: '線',
                        tooltip: {
                            requirements: '通過報告部分中的線分隔區域。',
                            description: '用於分隔報告區域的圖形元素。',
                            title: '線'
                        }
                    },
                    'image': {
                        displayText: '圖片',
                        tooltip: {
                            requirements: '要顯示數據庫中的圖像，請嵌入圖像。',
                            description: '顯示圖像。',
                            title: '圖片'
                        }
                    },
                    'textBox': {
                        displayText: '文本框',
                        tooltip: {
                            requirements: '添加任何文字。',
                            description: '显示静态和动态文本。',
                            title: '文本框'
                        }
                    },
                    'rectangle': {
                        displayText: '長方形',
                        tooltip: {
                            requirements: '將一個或多個報表項合併到其中。',
                            description: '圖形容器元素。',
                            title: '長方形'
                        }
                    }
                }
            },
            comparison: {
                groupName: '對照',
                Items: {
                    'column': {
                        displayText: '柱',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '使用水平排列的垂直條比較各種類別中的一組無序項的值。',
                            title: '柱'
                        }
                    },
                    'bar': {
                        displayText: '酒吧',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '使用垂直排列的水平條比較各種類別中的一組無序項的值。',
                            title: '酒吧'
                        }
                    },
                    'stackedColumn': {
                        displayText: '堆積柱',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '使用垂直堆疊的條比較多個度量。',
                            title: '堆積柱'
                        }
                    },
                    'stackedBar': {
                        displayText: '堆積吧',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '使用水平堆疊的條比較多個度量。',
                            title: '堆積吧'
                        }
                    },
                    'rangeColumn': {
                        displayText: '範圍列',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '通過為每個數據點繪製兩個 Y 值來顯示數據范圍',
                            title: '範圍列'
                        }
                    },
                    'rangeBar': {
                        displayText: '範圍欄',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '通過水平繪製每個數據點的兩個 Y 值來顯示數據范圍',
                            title: '範圍欄'
                        }
                    },
                    'stackedColumnPercent': {
                        displayText: '堆積柱100％',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '使用垂直堆疊的條將多個度量作為整體的一部分進行比較。',
                            title: '堆積柱100％'
                        }
                    },
                    'stackedBarPercent': {
                        displayText: '堆積條100％',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '使用水平堆疊的條將多個度量作為整體的一部分進行比較。',
                            title: '堆積條100％'
                        }
                    }
                }
            },
            kpi: {
                groupName: '关键绩效指标',
                Items: {
                    'databar': {
                        displayText: '资料列',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '表示多个数据点，但通常仅说明一个数据点，通常在表和矩阵中使用。',
                            title: '资料列'
                        }
                    },
                    'sparkline': {
                        displayText: '迷你图',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '以非常简洁的方式显示多个数据点及其变体，通常在表和矩阵中使用。',
                            title: '迷你图'
                        }
                    },
                    'indicator': {
                        displayText: '指示符',
                        tooltip: {
                            requirements: '1个值.',
                            description: '可视化单个数据状态的量规的最小表示.',
                            title: '指示符'
                        }
                    }
                }
            },
            gauge: {
                groupName: '偏差',
                Items: {
                    'radialgauge': {
                        displayText: '径向规',
                        tooltip: {
                            requirements: '1个值和0或1个开始/结束值。',
                            description: '通过关键绩效指标（例如价值和目标）可视化趋势。',
                            title: '径向规'
                        }
                    },
                    'lineargauge': {
                        displayText: '线规',
                        tooltip: {
                            requirements: '1个值和0或1个开始/结束值。',
                            description: '通过关键绩效指标（例如价值和目标）可视化趋势。常用于表和矩阵。',
                            title: '线规'
                        }
                    }
                }
            },
            proportion: {
                groupName: '比例',
                Items: {
                    'pie': {
                        displayText: '餡餅',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '以餅圖的形式展示每個項目對總數的貢獻比例。',
                            title: '餡餅'
                        }
                    },
                    'explodedPie': {
                        displayText: '爆炸的餡餅',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '強調餅圖的單個切片。',
                            title: '爆炸的餡餅'
                        }
                    },
                    'doughnut': {
                        displayText: '甜甜圈',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '以甜甜圈切片的形式展示每個項目對總數的貢獻比例。',
                            title: '甜甜圈'
                        }
                    },
                    'pyramid': {
                        displayText: '金字塔',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '以逐步增加的方式展示值之間的比例比較。',
                            title: '金字塔'
                        }
                    },
                    'funnel': {
                        displayText: '漏斗',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '以逐漸減少的方式展示值之間的比例比較。',
                            title: '漏斗'
                        }
                    }
                }
            },
            distribution: {
                groupName: '分配',
                Items: {
                    'area': {
                        displayText: '區',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '通過垂直排序的填充曲線比較不同類別的一組無序項的值。',
                            title: '區'
                        }
                    },
                    'smoothArea': {
                        displayText: '光滑的區域',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '通過垂直排列的具有光滑表面的填充曲線，比較不同類別中的一組無序項的值。',
                            title: '光滑的區域'
                        }
                    },
                    'stackedArea': {
                        displayText: '堆積區域',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '通過垂直堆疊的填充曲線比較多個度量。',
                            title: '堆積區域'
                        }
                    },
                    'stackedAreaPercent': {
                        displayText: '堆積面積100％',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '通過垂直堆疊的填充曲線將多個度量作為整體的一部分進行比較。',
                            title: '堆積面積100％'
                        }
                    },
                    'line': {
                        displayText: '線',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '展示使用直線連接數據點的一段時間內的分析趨勢。',
                            title: '線'
                        }
                    },
                    'smoothLine': {
                        displayText: '流暢的線條',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '比較使用平滑線連接的時間段內的值分佈。',
                            title: '流暢的線條'
                        }
                    },
                    'steppedLine': {
                        displayText: '階梯線',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '比較使用階梯線連接的時間段內的值分佈。',
                            title: '階梯線'
                        }
                    },
                    'lineWithMarkers': {
                        displayText: '與標記線',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '比較多個組在同一時間段內的更改。',
                            title: '與標記線'
                        }
                    },
                    'smoothLineWithMarkers': {
                        displayText: '標記線條流暢',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '繪製的值用標記點表示，這些點用平滑線連接。',
                            title: '標記線條流暢'
                        }
                    },
                    'scatter': {
                        displayText: '分散',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '將一系列顯示為一組點，並且值由圖表上的點的位置表示。',
                            title: '分散'
                        }
                    },
                    'bubble': {
                        displayText: '泡沫',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '根據氣泡的大小顯示數據點的兩個值之間的差異。',
                            title: '泡沫'
                        }
                    },
                    'polar': {
                        displayText: '極性',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '將一系列顯示為一組在360度圓上按類別分組的點。',
                            title: '極性'
                        }
                    },
                    'radar': {
                        displayText: '雷達',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '將系列顯示為圓形線或區域。',
                            title: '雷達'
                        }
                    },
                    'rangeArea': {
                        displayText: '範圍區域',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '一種面積圖，其面積不是從軸開始，而是由兩個值之間的空間表示。',
                            title: '範圍區域'
                        }
                    },
                    'smoothRangeArea': {
                        displayText: '平滑範圍區域',
                        tooltip: {
                            requirements: '1個或更多個值和1個或更多列。',
                            description: '連接數據點的曲線而不是直線。',
                            title: '平滑範圍區域'
                        }
                    }
                }
            },
            dataRegions: {
                groupName: '數據區域',
                Items: {
                    'tablix': {
                        displayText: '表',
                        tooltip: {
                            requirements: '1行或多行。',
                            description: '以表格格式显示分页数据。',
                            title: '表'
                        }
                    },
                    'list': {
                        displayText: '名单',
                        tooltip: {
                            requirements: '1行或多行。',
                            description: '列表以自由格式显示数据。将字段放在列表中的任何位置。',
                            title: '名单'
                        }
                    },
                    'matrix': {
                        displayText: '矩阵',
                        tooltip: {
                            requirements: '1个或多个值和1个或多个行/列。',
                            description: '以交叉表格格式显示汇总数据。',
                            title: '矩阵'
                        }
                    }
                }
            },
            maps: {
                groupName: '地圖',
                Items: {
                    'map': {
                        displayText: '地圖',
                        tooltip: {
                            requirements: '顯示報告的地圖',
                            description: '顯示地理背景下的分析數據',
                            title: '地圖'
                        }
                    }
                }
            },
            subReports: {
                groupName: '數據要求',
                Items: {
                    'subreport': {
                        displayText: '子報表',
                        tooltip: {
                            requirements: '在主報告中顯示/嵌入報告。',
                            description: '在主報表正文中顯示另一個報表。',
                            title: '子報表'
                        }
                    }
                }
            }
        }
    },
    toolbar: {
        newReport: '新',
        open: '打开',
        openMenu: {
            fromDevice: '从设备',
            fromServer: '从服务器',
        },
        save: '保存',
        saveMenu: {
            saveLabel: '保存',
            saveAs: '另存为',
            subMenu: {
                toDevice: '到设备',
                toServer: '到服务器'
            }
        },
        cut: '切',
        copy: '复制',
        paste: '糊',
        deleteItem: '删除',
        undo: '解开',
        redo: '重做',
        zoomIn: '放大',
        zoomOut: '缩小',
        header: '头',
        footer: '页脚',
        order: '订购',
        orderMenu: {
            sendBackward: '向後發送',
            bringForward: '向前進',
            sendToBack: '發送回',
            bringToFront: '帶到前面'
        },
        left: '左对齐',
        center: '中央',
        right: '对齐',
        top: '顶部对齐',
        middle: '中间',
        bottom: '底部对齐',
        distributeHorizontally: '水平分布',
        distributeVertically: '垂直分布',
        centerHorizontally: '水平居中',
        centerVertically: '垂直居中',
        sizing: '浆纱',
        sizingMenu: {
            sameSize: '相同的大小',
            sameWidth: '相同的宽度',
            sameHeight: '同样的高度'
        },
        alignToGrid: '对齐网格',
        sizeToGrid: '尺寸到网格',
        gridLine: '网格线',
        snapToShape: '捕捉形状',
        fullScreen: '全屏',
        preview: '预习',
        reportUpload: {
            alertLabel: '上传',
            alertMessage: '上传文件时出错。请重新上传'
        },
        grouping: '分组',
        view: '視圖'
    },
    newReport: {
        cancel: '取消',
        create: '创建',
        title: '新报告',
        fileName: '文件名',
        waterMark: '报告名称',
        close: '关',
    },
    reportAction: {
        linkTo: '链接到',
        report: '报告',
        url: '网址',
        linkUrl: '将网址链接到报告项',
        none: '没有',
        linkBookmark: '书签'
    },
    linkReport: {
        reportCaption: '报告',
        labelText: '将子报表链接到报表项',
        reportDialog: '打开报告对话框',
        setParameter: '设置参数',
        dialogHeader: '报表设计器',
        alertContent: '无法访问服务器报告。'
    },
    imageProperty: {
        basicSettings: {
            categoryName: '基本设置',
            source: '资源',
            sourceTypes: {
                external: '外部',
                embedded: '嵌入式',
                database: '数据库'
            },
            value: '值',
            mimeType: 'MIME类型',
            mimeTypes: {
                bmp: '图像/ BMP',
                jpeg: '图像/ JPEG',
                gif: '图像/ GIF',
                png: '图像/ PNG',
                xPng: '图像/ X-PNG'
            }
        },
        categoryName: '链接',
        linkReport: '链接报告',
        URL: '网址',
        appearance: {
            categoryName: '出现',
            styleTooltip: '樣式',
            colorTooltip: '顏色',
            sizeTooltip: '尺寸',
            borderTypes: {
                default: '边境',
                left: '剩下',
                top: '最佳',
                right: '对',
                bottom: '底部'
            },
            borderStyles: {
                solid: '固体',
                none: '没有',
                double: '双',
                dashed: '虚线',
                dotted: '带点'
            },
            borderProperties: {
                defaultColor: '邊框顏色',
                defaultSize: '邊框尺寸',
                defaultStyle: '邊框樣式',
                leftColor: '邊框左側顏色',
                leftSize: '邊框左尺寸',
                leftStyle: '邊框左樣式',
                topColor: '邊框頂部顏色',
                topSize: '邊框最大尺寸',
                topStyle: '邊框樣式',
                rightColor: '邊框右顏色',
                rightSize: '邊框右尺寸',
                rightStyle: '邊框右樣式',
                bottomColor: '邊框底色',
                bottomSize: '邊框底邊尺寸',
                bottomStyle: '邊框底樣式'
            }
        },
        size: {
            categoryName: '尺寸',
            paddingTypes: {
                label: '填充',
                left: '剩下',
                top: '最佳',
                right: '对',
                bottom: '底部'
            },
            sizing: '浆纱',
            sizeTypes: {
                auto: '自动尺寸',
                fit: '适合',
                proportional: '适合比例',
                clip: '夹'
            }
        },
        position: {
            categoryName: '位置',
            label: '位置',
            left: '剩下',
            top: '最佳',
            sizeLabel: '尺寸',
            width: '宽度',
            height: '高度'
        },
        visibility: {
            categoryName: '能见度',
            visible: '可见',
            toggleItem: '切換項目'
        },
        miscellaneous: {
            categoryName: '杂',
            toolTip: '工具提示',
            documentMap: '文件图',
            customAttributes: '自定义属性',
            zIndex: '指数',
            bookmark: '书签'
        }
    },
    chartProperty: {
        commonProperties: {
            showBorder: '显示边框',
            border: {
                default: '边境',
                left: '剩下',
                top: '最佳',
                right: '对',
                bottom: '底部'
            },
            background: '背景颜色',
            font: '字形',
            fontStyle: '字体样式',
            labelRotation: '标签旋转',
            categoryAxis: '类别轴',
            valueAxis: '价值轴',
            defaultText: '默认',
            auto: '汽车',
            borderStyles: {
                solid: '固体',
                none: '没有',
                double: '双',
                dashed: '虚线',
                dotted: '带点',
                dashDot: '短跑点',
                dashDotDot: '点划线点'
            },
            borderProperties: {
                defaultColor: '邊框顏色',
                defaultSize: '邊框尺寸',
                defaultStyle: '邊框樣式',
                leftColor: '邊框左側顏色',
                leftSize: '邊框左尺寸',
                leftStyle: '邊框左樣式',
                topColor: '邊框頂部顏色',
                topSize: '邊框最大尺寸',
                topStyle: '邊框樣式',
                rightColor: '邊框右顏色',
                rightSize: '邊框右尺寸',
                rightStyle: '邊框右樣式',
                bottomColor: '邊框底色',
                bottomSize: '邊框底邊尺寸',
                bottomStyle: '邊框底樣式'
            },
            horizontalAlignments: {
                near: '近',
                far: '远',
            },
            textAlignments: {
                right: '对',
                bottom: '底部',
                center: '中央',
                topLeft: '左上方',
                topCenter: '顶尖中心',
                topRight: '右上',
                rightTop: '右上角',
                rightCenter: '正确的中心',
                rightBottom: '右下',
                bottomLeft: '左下方',
                bottomCenter: '底部中心',
                bottomRight: '底部右侧',
                leftTop: '左上方',
                leftCenter: '左中心',
                leftBottom: '左下',
            },
            fontStyleTypes: {
                normal: '正常',
                italic: '斜体'
            },
            fontWeightTypes: {
                light: '光',
                bold: '胆大'
            }
        },
        noDataMessage: {
            categoryName: '没有数据信息',
            caption: '信息',
            hidden: '隐藏任何数据',
            showBorder: '显示边框',
            borderColor: '边框颜色',
            borderSize: '边框尺寸',
            fontLabel: '字形',
            background: '背景颜色',
            position: '位置',
            font: {
                categoryName: '字形',
                color: '字體顏色',
                family: '字體系列',
                size: '字體大小',
                style: '字體樣式',
                weight: '字體粗細'
            },
            fontStyle: {
                label: '字体样式',
                fontItem: {
                    default: '默认',
                    normal: '正常',
                    italic: '斜体'
                },
                fontWeight: {
                    default: '默认',
                    normal: '正常',
                    thin: '瘦',
                    extraLight: '额外的光',
                    light: '光',
                    medium: '中',
                    semiBold: '半粗体',
                    bold: '胆大',
                    extraBold: '特大号',
                    heavy: '重',
                }
            }
        },
        basicSettings: {
            categoryName: '基本设置',
            chartType: {
                categoryName: '图表类型',
                column: '柱',
                stackedColumn: '堆积柱',
                stackedColumnPercent: '堆积柱100％',
                bar: '酒吧',
                stackedBar: '叠杆',
                stackedBarPercent: '堆积条100％',
                pie: '馅饼',
                explodedPie: '爆炸派',
                doughnut: '甜甜圈',
                pyramid: '金字塔',
                funnel: '漏斗',
                area: '区域',
                smoothArea: '平滑区域',
                stackedArea: '堆积面积',
                stackedAreaPercent: '堆积面积100％',
                line: '线',
                smoothLine: '平滑线',
                steppedLine: '阶梯线',
                lineWithMarkers: '线与标记',
                smoothLineWithMarkers: '带有标记的平滑线',
                scatter: '分散',
                bubble: '气泡',
                polar: '极性',
                radar: '雷达',
                rangeArea: '範圍區域',
                rangeColumn: '範圍列',
                rangeBar: '範圍欄',
                smoothRangeArea: '平滑範圍區域',
                alertSwitchChartType: '所有系列类型都将被更改。 你要继续吗？'
            },
            legendProperties: {
                booleanPropertyLabel: '显示图例',
                title: '标题',
                titleFont: '标题字体',
                titleFontStyle: '标题字体样式',
                titleAlignment: '标题对齐',
                position: '传奇位置',
                enableCustomBounds: '启用自定义边界'
            },
            chooseSeries: '选择系列'
        },
        categoryName: '出现',
        chartArea: {
            categoryName: '图表区域',
            colorPalette: '调色板',
            colorPaletteTypes: {
                earthTones: '地球色调',
                excel: '高强',
                grayScale: '灰阶',
                pastel: '粉彩',
                semiTransparent: '半透明',
                berry: '浆果',
                chocolate: '巧克力',
                fire: '火',
                seaGreen: '海绿色',
                brightPastel: '明亮的粉彩',
                pacific: '和平的',
                pacificLight: '太平洋之光',
                pacificSemiTransparent: '和平的 半透明',
                custom: '自訂'
            },
            customColors: '自定義顏色'
        },
        forecast: {
            categoryName: '預測設置',
            enableSettings: '使能夠',
            forecastlength: '長度（點）',
            confidenceInterval: '置信區間',
            seasonality: '季節性（點）',
            enableSeries: '預報',
            forecastColor: '預測顏色',
            confidenceEnable: '信心',
            confidenceColor: '信心顏色',
            bandStyle: '信心帶風格',
            confidenceBandTypes: {
                fill: '充滿',
                linetype: '線',
                dot: '點'
            }
        },
        title: {
            categoryName: '标题',
            booleanPropertyLabel: '显示图表标题',
            label: '标题文本',
            position: '标题位置'
        },
        axis: {
            booleanPropertyLabel: '启用轴',
            title: '轴标题',
            alignment: '对准',
            lineStyle: '线条样式',
            labelOverflowMode: '标签溢出模式',
            overFlowModeTypes: {
                trim: '修剪',
                hide: '隐藏',
            },
            labelFont: '标签字体',
            labelFormat: '標籤格式',
            interval: '间隔',
            intervalType: '间隔类型',
            intervalTypes: {
                default: '默认',
                number: '数',
                years: '年份',
                months: '月数',
                days: '天',
                hours: '小时',
                minutes: '分钟',
                seconds: '秒',
                milliseconds: '毫秒',
                weeks: '周数'
            },
            enableMajorTicks: '启用主要蜱虫',
            enableMinorTicks: '启用小窍门',
            tickProperties: {
                sizeLabel: '勾号大小',
                colorLabel: '勾选颜色',
                width: '宽度',
                length: '长度'
            },
            tickPosition: '勾号位置',
            lineProperties: {
                color: '線色',
                size: '行大小',
                style: '線型'
            },
            gridLineProperties: {
                color: '網格線顏色',
                size: '網格線尺寸',
                style: '網格線樣式'
            },
            chartTicks: {
                length: '長度',
                width: '刻度線寬度'
            },
            labelsAutofitDisabled: '标签自动调整已禁用',
            margin: '余量',
            maximum: '最大限度',
            minimum: '最低限度',
            horizontalAxis: '横轴',
            verticalAxis: '纵轴',
            includeZero: '包括零'
        },
        gridLine: {
            categoryName: '网格线',
            style: {
                booleanPropertyLabel: '显示小网格线',
                major: '主要网格线样式',
                minor: '次要网格线样式'
            }
        },
        pageBreak: {
            categoryName: '分页符',
            booleanPropertyLabel: '启用分页符',
            breakLocation: '休息地点',
            breakLocationTypes: {
                none: '没有',
                start: '开始',
                end: '结束',
                startAndEnd: '开始和结束',
                between: '之间',
            },
            pageNumberReset: '页码重置',
            pageName: '页面名称'
        },
        position: {
            categoryName: '位置',
            label: '位置',
            left: '剩下',
            top: '最佳',
            sizeLabel: '尺寸',
            width: '宽度',
            height: '高度'
        },
        visibility: {
            categoryName: '能见度',
            visible: '可见',
            toggleItem: '切換項目'
        },
        miscellaneous: {
            categoryName: '杂',
            toolTip: '工具提示',
            documentMap: '文件图',
            customAttributes: '自定义属性',
            alertHeader: '圖表報告項目',
            bookmark: '书签',
            alertMessage: '自定义属性格式无效。正确的格式示例：\'AttrName1 = Value1，AttrName2 = Value2 \'.'
        },
        seriesSettings: {
            headerName: '系列属性',
            basicSettings: {
                categoryName: '基本设置',
                seriesBorder: '系列边框',
                seriesColor: '系列颜色',
                smartLabelProperties: {
                    booleanPropertyLabel: '启用智能标签',
                    labelStyle: '标签样式',
                    value: '值',
                    position: {
                        outside: '外',
                        inside: '内',
                        outsideInColumn: '列在外面'
                    },
                    style: {
                        pieLabelStyle: '馅饼标签样式',
                        funnelLabelStyle: '漏斗标签样式',
                        pyramidLabelStyle: '金字塔标签样式',
                        barLabelStyle: '酒吧标签样式',
                        smartLabelStyle: '标签样式'
                    }
                }
            },
            link: '链接',
            markerProperties: {
                categoryName: '标记设定',
                booleanPropertyLabel: '显示标记',
                color: '颜色',
                typePropertyLabel: '标记类型',
                types: {
                    square: '广场',
                    circle: '圈',
                    diamond: '钻石',
                    triangle: '三角形',
                    cross: '交叉',
                    star5: '明星5',
                },
                size: '尺寸'
            },
            dataLabelProperties: {
                categoryName: '数据标签设置',
                booleanPropertyLabel: '显示数据标签',
                formatPropertyLabel: '格式',
                labelPropertyText: '标签',
                valueAsText: '使用值作为标签',
                types: {
                    valueX: '#VALX',
                    valueY: '#VALY',
                    valueY2: '#VALY2',
                    valueY3: '#VALY3',
                    valueY4: '#VALY4',
                    valueY5: '#VALY5',
                    valueY6: '#VALY6',
                    index: '#指数',
                    percent: '#百分',
                    total: '#总',
                    axisLabel: '#轴标签'
                }
            },
            miscellaneous: {
                categoryName: '杂',
                toolTip: '工具提示',
                customLegendText: '图例文本'
            }
        },
        borderStyle: '邊框樣式',
        borderColor: '邊框顏色',
        borderSize: '邊框尺寸',
        fontStyle: '字體樣式',
        fontWeight: '字體粗細',
        fontSize: '字體大小',
        fontColor: '字體顏色',
        fontFamily: '字體系列',
        fontStyleTooltip: '樣式',
        fontWeightTooltip: '重量',
        fontSizeTooltip: '尺寸',
        fontColorTooltip: '顏色',
        fontFamilyTooltip: '字體系列',
        styleTooltip: '樣式',
        colorTooltip: '顏色',
        sizeTooltip: '尺寸',
        dataElement: {
            categoryName: '数据元素',
            elementName: '名称',
            elementOutput: {
                auto: '汽车',
                noOutput: '无输出',
                categoryName: '输出量',
                output: '输出量'
            }
        }
    },
    lineProperty: {
        basicSettings: {
            categoryName: '基本设置',
            labelText: '线',
            color: '線色',
            size: '行大小',
            style: '線型',
            styleTypes: {
                solid: '固体',
                dashed: '虚线',
                dotted: '带点'
            },
        },
        position: {
            categoryName: '位置',
            label: '位置',
            left: '剩下',
            top: '最佳',
            sizeLabel: '尺寸',
            width: '宽度',
            height: '高度'
        },
        visibility: {
            categoryName: '能见度',
            visible: '可见',
            toggleItem: '切換項目'
        },
        miscellaneous: {
            categoryName: '杂',
            customAttributes: '自定义属性',
            documentMap: '文件图',
            bookmark: '书签'
        },
        styleTooltip: '樣式',
        colorTooltip: '顏色',
        sizeTooltip: '尺寸'
    },
    gaugeProperty: {
        basicSettingsCategory: {
            basicSettings: '基本设置',
            borderTypes: {
                default: '边境',
                left: '剩下',
                top: '最佳',
                right: '对',
                bottom: '底部'
            },
            borderStyles: {
                solid: '固体',
                none: '没有',
                double: '双',
                dashed: '虚线',
                dotted: '带点'
            },
            borderProperties: {
                defaultColor: '邊框顏色',
                defaultSize: '邊框尺寸',
                defaultStyle: '邊框樣式',
                leftColor: '邊框左側顏色',
                leftSize: '邊框左尺寸',
                leftStyle: '邊框左樣式',
                topColor: '邊框頂部顏色',
                topSize: '邊框最大尺寸',
                topStyle: '邊框樣式',
                rightColor: '邊框右顏色',
                rightSize: '邊框右尺寸',
                rightStyle: '邊框右樣式',
                bottomColor: '邊框底色',
                bottomSize: '邊框底邊尺寸',
                bottomStyle: '邊框底樣式'
            },
            backGround: '背景颜色',
            styleTooltip: '樣式',
            colorTooltip: '顏色',
            sizeTooltip: '尺寸'
        },
        positionCategory: {
            categoryName: '位置',
            label: '位置',
            left: '剩下',
            top: '最佳',
            sizeLabel: '尺寸',
            width: '宽度',
            height: '高度'
        },
        dataCategory: {
            label: '数据',
            datasetName: '数据集',
            noneOptionLabel: '没有',
            filters: '筛选器'
        },
        labelCategory: {
            label: '标签',
            enableLabel: '启用标签',
            labelTarget: '目标',
            labelText: '文本',
            alignment: '文字对齐',
            alignmentTypes: {
                leftAlignment: '剩下',
                centerAlignment: '中央',
                rightAlignment: '对',
                topAlignment: '最佳',
                middleAlignment: '中间',
                bottomAlignment: '底部'
            },
            textDecoration: '装饰',
            textDecorationTypes: {
                underline: '强调',
                lineThrough: '直通',
                overline: '上线'
            }
        },
        visibilityCategory: {
            categoryName: '能见度',
            visible: '可见',
            toggleItem: '切換項目'
        },
        miscellaneousCategory: {
            categoryName: '杂',
            customattributes: '自定义属性',
            documentMap: '文件图',
            pageName: '页面名称',
            bookmark: '书签'
        },
        commonCategory: {
            fontCategory: {
                font: '字形',
                fontSize: '字体大小',
                fontFamily: '字体系列',
                fontColor: '字体颜色',
                fontStyle: '字体样式',
                fontWeight: '字体粗细',
                fontWeights: {
                    default: '默认',
                    normal: '正常',
                    thin: '瘦',
                    extraLight: '超轻',
                    light: '光',
                    medium: '介质',
                    semiBold: '半粗体',
                    bold: '胆大',
                    extraBold: '超粗体',
                    heavy: '重',
                },
                fontStyles: {
                    italic: '斜体'
                }
            }
        },
        dataElement: {
            categoryName: '数据元素',
            elementName: '名称',
            elementOutput: {
                auto: '汽车',
                noOutput: '无输出',
                categoryName: '输出量',
                output: '输出量'
            }
        }
    },
    indicatorProperty: {
        typesCategory: {
            categoryName: '指标类型',
            types: {
                threeColoredArrows: '三个彩色的箭头',
                threeGrayArrows: '三个灰色箭头',
                threeUpDownTriangles: '三个上下三角形',
                fourGrayArrows: '四个灰色箭头',
                fourColoredArrows: '四个彩色的箭头',
                fiveGrayArrows: '五个灰色箭头',
                fiveColoredArrows: '五个彩色的箭头',
                threeCircledSymbols: '三个带圆圈的符号',
                threeUncircledSymbols: '三个不带圆圈的符号',
                threeFlags: '三旗',
                threeUnrimmedTrafficLights: '三个无框交通灯',
                threeRimmedTrafficLights: '三个镶边交通信号灯',
                threeSigns: '三个标志',
                fourTrafficLights: '四个交通信号灯',
                redToBlack: '红变黑',
                threeStars: '三颗星',
                fiveStars: '五星',
                fourRatings: '四个评级',
                fiveRatings: '五级',
                fiveQuarters: '五分之四',
                fiveBlocks: '五块',
                custom: '自订'
            }
        },
        valueCategory: {
            categoryName: '指标值',
            value: '值',
            measurementUnit: '计量单位',
            min: '最低要求',
            max: '最大值',
            numeric: '数字',
            percentage: '百分比'
        },
        states: {
            categoryName: '指标国家',
            icons: {
                circle: '圈',
                flag: '旗',
                arrowDown: '向下箭头',
                arrowDownIncline: '向下箭头倾斜',
                arrowSide: '箭侧',
                arrowUp: '向上箭头',
                arrowUpIncline: '向上箭头',
                boxesNoneFilled: '盒子没有装满',
                boxesOneFilled: '一盒装满',
                boxesTwoFilled: '盒子两个装满',
                boxesThreeFilled: '盒子三满',
                boxesAllFilled: '盒子都装满了',
                quartersNoneFilled: '宿舍未填',
                quartersOneFilled: '一季度宿舍',
                quartersTwoFilled: '宿舍两满',
                quartersThreeFilled: '四分之三宿舍',
                quartersAllFilled: '宿舍全部装满',
                signalMeterNoneFilled: '信号表未填充',
                signalMeterOneFilled: '信号表一满',
                signalMeterTwoFilled: '信号计两充',
                signalMeterThreeFilled: '信号表三充',
                signalMeterFourFilled: '信号表四充',
                starQuartersNoneFilled: '星空区未填满',
                starQuartersOneFilled: '充满星空的宿舍',
                starQuartersTwoFilled: '充满星空的宿舍',
                starQuartersThreeFilled: '充满星空的宿舍',
                starQuartersAllFilled: '满天星宿舍',
                threeSignsCircle: '三个标志圈',
                threeSignsDiamond: '三招钻石',
                threeSignsTriangle: '三个标志三角形',
                threeSymbolCheck: '三符号检查',
                threeSymbolCross: '三个符号交叉',
                threeSymbolExclamation: '三符号感叹号',
                threeSymbolUnCircledCheck: '三符号无圈支票',
                threeSymbolUnCircledCross: '三个符号无圆圈交叉',
                threeSymbolUnCircledExclamation: '三符号无感叹号',
                trafficLight: '红绿灯',
                trafficLightUnrimmed: '红绿灯',
                triangleDash: '三角短跑',
                triangleDown: '三角向下',
                triangleUp: '三角向上',
                lightArrowDown: '向下轻箭头',
                lightArrowDownIncline: '轻箭头向下倾斜',
                lightArrowSide: '轻箭头侧',
                lightArrowUp: '向上轻箭头',
                lightArrowUpIncline: '向上轻箭头',
                buttonStop: '按钮停止',
                buttonPlay: '按钮播放',
                buttonPause: '按钮暂停',
                faceSmile: '面对微笑',
                faceNeutral: '面对中立',
                faceFrown: '皱眉',
                none: '没有'
            }
        },
        miscellaneous: {
            categoryName: '杂',
            toolTip: '工具提示'
        }
    },
    linearGaugeProperty: {
        scaleCategory: {
            scale: '规模',
            min: '最低要求',
            max: '最大值',
            interval: '间隔',
            reverseDirection: '反方向',
            scaleBarWidth: '宽度',
            scaleBarColor: '颜色',
            linearTypecategory: {
                linearType: '类型',
                horizontal: '卧式',
                vertical: '垂直',
                auto: '汽车'
            },
            scaleLabelsCategory: {
                showScaleLabels: '标签',
                showScaleLabelsAtEnd: '在结尾显示标签'
            },
            ticksCategory: {
                tickMark: '刻度线',
                majorTick: '大T',
                minorTick: '小T',
                majorTickPlacement: '刻度线的主要位置',
                minorTickPlacement: '小刻度线放置',
                tickInterval: '间隔',
                tickLength: '长度',
                tickWidth: '宽度',
                tickColor: '颜色'
            },
            pointerCategory: {
                pointer: '指针',
                enablePointer: '启用指针',
                pointerValue: '值',
                pointerType: '类型',
                pointerTypes: {
                    marker: '记号笔',
                    bar: '酒吧'
                },
                pointerWidth: '宽度',
                pointerColor: '颜色',
                markerLength: '标记长度',
                markerStyle: '标记样式',
                markerStyles: {
                    circle: '圈',
                    rectangle: '长方形',
                    triangle: '三角形',
                    diamond: '钻石'
                }
            },
            rangeCategory: {
                range: '范围',
                enableRange: '启用范围',
                rangeWidth: '宽度',
                startRange: '开始',
                endRange: '结束',
                startWidth: '开始',
                endWidth: '结束',
                rangeColor: '颜色'
            }
        },
        commonCategory: {
            placementCategory: {
                placement: '放置',
                inside: '内',
                outside: '外',
                cross: '交叉'
            },
            miscellaneousCategory: {
                tooltip: '工具提示',
                miscellaneous: '杂'
            }
        }
    },
    radialGaugeProperty: {
        scaleCategory: {
            scale: '规模',
            min: '最低要求',
            max: '最大值',
            interval: '间隔',
            reverseDirection: '反方向',
            angle: '角度',
            startAngle: '开始',
            sweepAngle: '扫',
            scaleBarWidth: '宽度',
            scaleBarColor: '颜色',
            pivotX: '枢轴X',
            pivotY: '关键点',
            radialTypecategory: {
                radialType: '类型',
                radial: '径向的',
                halfCircle: '半圈',
                auto: '汽车'
            },
            scaleLabelsCategory: {
                showScaleLabels: '标签',
                showScaleLabelsAtEnd: '在结尾显示标签',
                rotateScaleLabels: '旋转标签'
            },
            ticksCategory: {
                tickMark: '刻度线',
                majorTick: '大T',
                minorTick: '小T',
                majorTickPlacement: '刻度线的主要位置',
                minorTickPlacement: '小刻度线放置',
                tickInterval: '间隔',
                tickLength: '长度',
                tickWidth: '宽度',
                tickColor: '颜色'
            },
            pointerCategory: {
                pointer: '指针',
                enablePointer: '启用指针',
                pointerValue: '值',
                pointerType: '类型',
                pointerTypes: {
                    needle: '针',
                    bar: '酒吧',
                    marker: '记号笔'
                },
                pointerWidth: '宽度',
                pointerColor: '颜色',
                markerLength: '标记长度',
                markerStyle: '标记样式',
                markerStyles: {
                    circle: '圈',
                    rectangle: '长方形',
                    triangle: '三角形',
                    diamond: '钻石'
                },
                showPointerCap: '帽',
                capWidth: '宽度',
                capColor: '颜色'
            },
            rangeCategory: {
                range: '范围',
                enableRange: '启用范围',
                rangeWidth: '宽度',
                startRange: '开始',
                endRange: '结束',
                startWidth: '开始',
                endWidth: '结束',
                rangeColor: '颜色'
            }
        },
        commonCategory: {
            placementCategory: {
                inside: '内',
                outside: '外',
                cross: '交叉'
            },
            miscellaneousCategory: {
                tooltip: '工具提示',
                miscellaneous: '杂'
            }
        }
    },
    subReportProperty: {
        basicSettings: {
            categoryName: '基本设置',
        },
        appearance: {
            categoryName: '出现',
            borderTypes: {
                default: '边境',
                left: '剩下',
                top: '最佳',
                right: '对',
                bottom: '底部'
            },
            borderStyles: {
                solid: '固体',
                none: '没有',
                double: '双',
                dashed: '虚线',
                dotted: '带点'
            },
            borderProperties: {
                defaultColor: '邊框顏色',
                defaultSize: '邊框尺寸',
                defaultStyle: '邊框樣式',
                leftColor: '邊框左側顏色',
                leftSize: '邊框左尺寸',
                leftStyle: '邊框左樣式',
                topColor: '邊框頂部顏色',
                topSize: '邊框最大尺寸',
                topStyle: '邊框樣式',
                rightColor: '邊框右顏色',
                rightSize: '邊框右尺寸',
                rightStyle: '邊框右樣式',
                bottomColor: '邊框底色',
                bottomSize: '邊框底邊尺寸',
                bottomStyle: '邊框底樣式'
            }
        },
        noRows: {
            categoryName: '没有行',
            font: {
                categoryName: '字形',
                color: '字體顏色',
                family: '字體系列',
                size: '字體大小',
                style: '字體樣式',
                weight: '字體粗細'
            },
            fontStyle: {
                label: '字体样式',
                fontItem: {
                    default: '默认',
                    normal: '正常',
                    italic: '斜体'
                },
                fontWeight: {
                    default: '默认',
                    normal: '正常',
                    thin: '瘦',
                    extraLight: '额外的光',
                    light: '光',
                    medium: '中',
                    semiBold: '半粗体',
                    bold: '胆大',
                    extraBold: '特大号',
                    heavy: '重',
                }
            },
            textDecoration: {
                categoryName: '文本装饰',
                defaultStyle: '默认',
                none: '没有',
                underLine: '强调',
                overLine: '上划线',
                lineThrough: '通过'
            },
            format: '格式',
            lineHeight: '线条高度',
            message: '信息',
            paddingTypes: {
                label: '填充',
                left: '剩下',
                right: '对',
                top: '最佳',
                bottom: '底部',
            },
            textAlign: {
                categoryName: '文本对齐',
                default: '默认',
                left: '剩下',
                right: '对',
                center: '中央'
            },
            verticalAlign: {
                categoryName: '垂直对齐',
                default: '默认',
                top: '最佳',
                middle: '中间',
                bottom: '底部'
            },
            writingMode: {
                categoryName: '写模式',
                default: '默认',
                horizontal: '横',
                vertical: '垂直',
                rotateProperty: '旋转270'
            }
        },
        visibility: {
            categoryName: '能见度',
            visible: '可见',
            toggleItem: '切換項目'
        },
        position: {
            categoryName: '位置',
            label: '位置',
            left: '剩下',
            top: '最佳',
            sizeLabel: '尺寸',
            width: '宽度',
            height: '高度'
        },
        miscellaneous: {
            categoryName: '杂',
            keepTogether: '保持在一起',
            toolTip: '工具提示',
            documentMap: '文件图',
            customAttributes: '自定义属性',
            bookmark: '书签'
        },
        fontStyleTooltip: '樣式',
        fontWeightTooltip: '重量',
        fontSizeTooltip: '尺寸',
        fontColorTooltip: '顏色',
        fontFamilyTooltip: '字體系列',
        styleTooltip: '樣式',
        colorTooltip: '顏色',
        sizeTooltip: '尺寸',
        dataElement: {
            categoryName: '数据元素',
            elementName: '名称',
            elementOutput: {
                auto: '汽车',
                noOutput: '无输出',
                categoryName: '输出量',
                output: '输出量'
            }
        }
    },
    rectangleProperty: {
        basicSettings: {
            categoryName: '基本设置',
            styleTooltip: '樣式',
            colorTooltip: '顏色',
            sizeTooltip: '尺寸',
            borderTypes: {
                default: '边境',
                left: '剩下',
                top: '最佳',
                right: '对',
                bottom: '底部'
            },
            borderStyles: {
                solid: '固体',
                none: '没有',
                double: '双',
                dashed: '虚线',
                dotted: '带点'
            },
            borderProperties: {
                defaultColor: '邊框顏色',
                defaultSize: '邊框尺寸',
                defaultStyle: '邊框樣式',
                leftColor: '邊框左側顏色',
                leftSize: '邊框左尺寸',
                leftStyle: '邊框左樣式',
                topColor: '邊框頂部顏色',
                topSize: '邊框最大尺寸',
                topStyle: '邊框樣式',
                rightColor: '邊框右顏色',
                rightSize: '邊框右尺寸',
                rightStyle: '邊框右樣式',
                bottomColor: '邊框底色',
                bottomSize: '邊框底邊尺寸',
                bottomStyle: '邊框底樣式'
            },
            backGround: '背景颜色'
        },
        backgroundImage: {
            categoryName: '背景图',
            source: '资源',
            sourceTypes: {
                external: '外部',
                embedded: '嵌入式的',
                database: '数据库'
            },
            value: '值',
            mimeTypeLabel: 'MIME类型',
            mimeTypes: {
                bmp: '图像/ BMP',
                jpeg: '图像/ JPEG',
                gif: '图像/ GIF',
                png: '图像/ PNG',
                xPng: '图像/ X-PNG'
            },
            repeatProperty: {
                categoryName: '重复',
                repeat: '重复',
                repeatX: '重复X',
                repeatY: '重复Y',
                defaultType: '默认',
                clip: '夹',
                fit: '适合'
            }
        },
        pageBreak: {
            categoryName: '分页符',
            enableProperty: {
                labelText: '启用分页符',
                breakLocation: {
                    labelText: '休息地点',
                    none: '没有',
                    start: '开始',
                    end: '结束',
                    startAndEnd: '开始和结束',
                    between: '之间'
                },
                pageNumberReset: '页码重置'
            },
        },
        position: {
            categoryName: '位置',
            label: '位置',
            left: '剩下',
            top: '最佳',
            sizeLabel: '尺寸',
            width: '宽度',
            height: '高度'
        },
        visibility: {
            categoryName: '能见度',
            visible: '可见',
            toggleItem: '切換項目'
        },
        miscellaneous: {
            categoryName: '杂',
            keepTogether: '保持在一起',
            pageName: '页面名称',
            toolTip: '工具提示',
            documentMap: '文件图',
            customAttributes: '自定义属性',
            bookmark: '书签'
        },
        dataElement: {
            categoryName: '数据元素',
            elementName: '名称',
            elementOutput: {
                auto: '汽车',
                noOutput: '无输出',
                categoryName: '输出量',
                output: '输出量',
                contentsOnly: '仅内容'
            }
        }
    },
    browseFile: {
        openFile: {
            selectReport: '选择报告',
            label: '打开',
        },
        saveFile: {
            saveAsReport: '另存为报告',
            name: '名称',
            save: '保存',
        },
        close: '关',
        cancel: '取消',
        waterMark: '报告名称',
        emptyMessage: '此类别为空',
        alertMessage: {
            reportServer: '报表服务器',
            selectCategory: '请选择类别',
        },
        warningMessage: {
            fileNameLabel: '一个物品',
            fileNameExist: '.rdl“已经存在，你想替换现有的项目吗？',
            populateCategory: '报表设计器无法从报表服务器检索资源',
        },
        reloadAriaLabelText: '浏览刷新',
        containerAriaLabelText: '浏览文件容器'
    },
    publishReport: {
        title: '发布为报告',
        publish: '发布',
        category: '类别',
        selectCategory: '請創建一個類別',
        createCategory: '建立類別',
        categoryPermission: '启用创建权限以创建新类别',
        categoryname: '名称',
        emptyName: '请输入报告名称t',
        invalidName: '不支持以下字符：\'+，[]％＃',
        description: '描述',
        maxCharacter: '*最多1024个字符',
        markaspublic: '标记为公开',
        cancel: '取消',
        closeToolTip: '关',
        tags: '标签',
        newTag: '新的一天',
        tagWaterMark: '搜索标签',
        splCharacter: '不支持特殊字符',
        addCategory: {
            title: '新类别',
            name: '名称',
            description: '描述',
            emptyValidation: '请输入类别名称',
            duplicateNameValidation: '项目名称已存在',
            createActionFailure: '無法將類別創建到服務器',
            saveLabel: '保存'
        },
        warningMessage: {
            sameNameError: '类别中已经存在具有相同名称的报告',
            replaceMessage: '。您要更换吗？',
            publishAsReport: '发布为报告'
        },
    },
    expressionMenu: {
        reset: '重启',
        label: '表达',
        advanced: '高级',
        role: '表情菜单'
    },
    propertyPanel: {
        property: '性能',
        data: '数据',
        name: '名称',
        toolTipStyle: '样式',
        toolTipColor: '颜色',
        toolTipWidth: '宽度',
        setSorts: '设置分类',
        setFilters: '设置过滤器',
        customAttributes: '设定属性',
        advancedOptions: '高级选项',
        closeAdvance: '关闭高级选项',
        codemodules: '码',
        expressionList: {
            top: '最佳',
            right: '对',
            bottom: '底部',
            left: '剩下',
            style: '样式',
            color: '颜色',
            size: '尺寸',
            fontFamily: '字体系列',
            width: '宽度',
            height: '高度',
            weight: '重量',
            image: '图片'
        },
        alertMessage: {
            emptyNameValidation: '名称不能为空',
            duplicateNameValidation: '名称已存在',
            invalidCharacterValidation: '名称不应包含空格和特殊字符',
            alertDialogHeader: '特性',
            specialCharacterValidation: '该属性值不应包含空格和特殊字符。'
        },
        unitType: {
            inchText: '在',
            centimeterText: '厘米',
            pixelText: '像素',
            pointText: '點',
            millimeterText: '毫米',
            picaText: '異食癖'
        },
        setGroups: '设置组',
        addDataset: '添加數據集',
        dataAlertMsg: '未添加數據集 ！',
        NoDataFound: '找不到數據',
        None: '没有',
        propertyEdit: '编辑',
        itemCountWaterMark: '项目',
        back: '背部',
        propertyEditorAlert: {
            title: '物业编辑',
            content: '您要取消属性编辑器吗？'
        }
    },
    dataSource: {
        newDatasource: '新数据库',
        sharedData: '共享數據源',
        datasource: '数据源',
        switchLabel: '切换到数据面板',
        previousPanel: '前面板',
        datasourceLabel: '数据源名称',
        datasourceList: {
            data: '数据',
            contextMenu: {
                edit: '编辑',
                deleteItem: '删除',
                create: '创建数据集',
                clone: '克隆'
            }
        },
        datasourceType: {
            existOption: '现有',
            newOption: '创建新的',
            selectDatasoure: '选择数据源',
            connectDatasource: '连接数据源',
            datasourceType: '选择要连接的类型',
            sqlLabel: 'Microsoft SQL',
            azuresqldwlabel: 'Azure SQL 數據倉庫',
            sqlCeLabel: 'SQLCE',
            odbcLabel: 'ODBC',
            oracleLabel: 'Oracle',
            oledbLabel: 'OLEDB',
            xmlLabel: 'XML',
            jsonLabel: 'JSON',
            csvLabel: 'CSV',
            excelLabel: '电子表格',
            mysqlLabel: '的MySQL',
            elasticSearchLabel: 'Elastic Search',
            mariadbLabel: '玛丽亚数据库',
            memsqlLabel: '内存SQL',
            sharedLabel: '共享',
            cdataLabel: '数据',
            snowflakeLabel: '雪花',
            ssasLabel: 'Microsoft SQL 分析服务',
            verticaLabel: '维蒂卡',
            gcsqlLabel: '谷歌云 SQL',
            redshiftLabel: '亚马逊红移',
            amazonAuroraLabel: '亚马逊极光',
            amazonRDSLabel: 'Amazon RDS',
            webapilabel: '网页接口',
            postgresqllabel: 'PostgreSQL',
            odatalabel: '数据'
        },
        datasourceConnection: {
            newConnection: '新的连接',
            editConnection: '编辑连接',
            name: '名称',
            save: '保存',
            connect: '连',
            cancel: '取消',
            disclaimerText: '通过连接，您同意这些',
            disclaimerLink: '条款',
            disclaimerTooltip: '客户承认并同意，通过要求{customBrandName}代表客户连接到此数据源（包括数据，存储系统，环境和其他组成系统），客户证明其具有数据源所有者的足够权利和许可以允许 客户和{customBrandName}代表客户连接并使用数据源。 客户同意对{customBrandName}的任何及所有索赔和费用全额赔偿。 如果客户不同意，则客户不应请求{customBrandName}连接到数据源。'
        },
        advanceDatasource: {
            authentication: '认证',
            prompt: '提示',
            none: '没有',
            userName: '用户名',
            password: '密码',
            savePassword: '保存密码',
            connectionString: '连接字符串',
            authenticationType: '验证类型',
            promptLabel: '提示文字',
            alertMessage: {
                alertUserName: '指定用户名',
                alertPassword: '指定密码',
                alertConnectionString: '指定连接字符串',
                alertPrompt: '指定提示文字'
            }
        },
        sqlDatasource: {
            authenticationType: '认证类型',
            window: '视窗',
            sqlServer: 'SQL 服务器',
            userName: '用户名',
            password: '密码',
            switchLabel: '数据源 预先小组',
            switchAlert: '切换到视觉设计师将放弃手动更改 连接字符串。你是否想要使用视觉设计师?',
            basicOption: {
                serverName: '服务器名称',
                savePassword: '保存密码',
                database: '数据库',
                advanceSwitch: '高级选项'
            },
            advanceOption: {
                connectionString: '连接字符串',
                promptLabel: '提示文字',
                prompt: '提示',
                none: '没有',
                savePassword: '保存密码',
                basicSwitch: '基本选项',
                impersonate: '启用模拟用户'
            },
            alertMessage: {
                connectionString: '指定连接字符串',
                promptText: '指定提示文本',
                userName: '指定用户名',
                password: '指定密码',
                serverName: '指定服务器名称',
                databaseName: '指定数据库名称'
            }
        },
        elasticSearchDatasource: {
            authenticationType: '认证类型',
            window: '视窗',
            server: 'ElasticSearch 服务器',
            none: '没有',
            basicHttp: '基本 HTTP 身份验证',
            userName: '用户名',
            password: '密码',
            port: '港口',
            basicOption: {
                serverName: '服务器名称',
                database: '数据库'
            },
            alertMessage: {
                port: '指定端口号',
                userName: '指定用户名',
                password: '指定密码',
                serverName: '指定服务器名称',
                databaseName: '指定数据库名称'
            }
        },
        postgreSQLDatasource: {
            serverName: '服务器名称',
            database: '数据库',
            port: '港口',
            userName: '用户名',
            password: '密码',
            savePassword: '保存密码',
            basicSwitch: '基本选项',
            advanceSwitch: '高级选项',
            switchAlert: '切换到视觉设计器将放弃对连接字符串进行的手动更改。您是否仍要使用视觉设计师？',
            switchLabel: '数据源高级面板',
            alertMessage: {
                aletServerName: '指定服务器名称',
                aletPort: '指定端口号',
                alertUserName: '指定用户名',
                alertPassword: '指定密码',
                alertDatabase: '指定数据库名称'
            }
        },
        sqlceDatasource: {
            connectionString: '连接字符串',
            authenticationType: '认证类型',
            authentication: '认证',
            none: '没有',
            password: '密码',
            savePassword: '保存密码',
            alertMessage: {
                connectionString: '指定连接字符串',
                password: '指定密码'
            }
        },
        odbcDatasource: {
            connectionString: '连接字符串',
            authenticationType: '认证类型',
            authentication: '认证',
            prompt: '提示',
            none: '没有',
            userName: '用户名',
            password: '密码',
            promptLabel: '提示文字',
            savePassword: '保存密码',
            alertMessage: {
                connectionString: '指定连接字符串',
                promptText: '指定提示文本',
                userName: '指定用户名',
                password: '指定密码',
            }
        },
        oracleDatasource: {
            connectionString: '连接字符串',
            authenticationType: '认证类型',
            authentication: '认证',
            prompt: '提示',
            none: '没有',
            userName: '用户名',
            password: '密码',
            promptLabel: '提示文字',
            savePassword: '保存密码',
            alertMessage: {
                connectionString: '指定连接字符串',
                promptText: '指定提示文本',
                userName: '指定用户名',
                password: '指定密码',
            }
        },
        oledbDatasource: {
            connectionString: '连接字符串',
            authenticationType: '认证类型',
            authentication: '认证',
            prompt: '提示',
            none: '没有',
            userName: '用户名',
            password: '密码',
            promptLabel: '提示文字',
            savePassword: '保存密码',
            alertMessage: {
                connectionString: '指定连接字符串',
                prompt: '指定提示文本',
                userName: '指定用户名',
                password: '指定密码',
            }
        },
        webapiDatasource: {
            url: '网址',
            methodType: '方法',
            get: '得到',
            post: '开机自检',
            requestBody: '请求正文',
            requestRaw: '生的',
            parameter: '参数',
            header: '标头',
            dataFormat: '资料格式',
            json: 'JSON',
            csv: 'CSV',
            xml: 'XML',
            firstRow: '将第一行视为标题',
            authenticationType: '认证类型',
            userName: '用户名',
            password: '密码',
            separatorTypes: {
                comma: '逗号',
                space: '空间',
                tab: '标签',
                semicolon: '分号',
                custom: '自订'
            },
            separator: '分隔器',
            delimiter: '定界符',
            alertMessage: {
                urlValidation: '网址无效',
                userNameValidation: '指定用户名',
                passwordValidation: '指定密码',
                fieldsValidation: '在字段中指定值',
                delimiterAlert: '指定定界符'
            },
            none: '没有',
            basicHttp: '基本的Http身份验证',
            addField: '加',
            deleteField: '删除栏位',
            key: '键',
            value: '值',
            closeToolTip: '关',
            pagination: {
                pagination: '分页类型',
                offset: {
                    offset: '偏移量',
                    maxRow: '最大行数',
                    startFieldName: '起始字段名称',
                    startValue: '起始值',
                    limitFieldName: '限制栏位名称',
                    limitValue: '极限值',
                    passHeader: '通过标题传递',
                    lookHeader: '查看标题',
                    totalRecord: '总记录路径',
                    dataIndicator: '数据指标路径',
                    limitField: '限制',
                    resultTotalRecord: '结果.总计',
                    resultDataIndicator: '结果.数据.值',
                },
                nextpage: {
                    nextpage: '下一页',
                    maxIteration: '最大迭代',
                    nextPageName: '下一页字段名称',
                    nextPageValue: '下一页值',
                    pageSizeFieldName: '页面大小字段名称',
                    pageSizeValue: '页面大小值',
                    totalPagesPathName: '总页面路径',
                    page: '页',
                    pageSize: '页面大小',
                    resultTotalPages: '结果.totalPages',
                },
                nexttoken: {
                    nexttoken: '下一个令牌',
                    nextTokenFieldName: '下一个令牌字段名称',
                    nextTokenPathName: '下一个令牌路径',
                    resultNextToken: 'result.nextPageToken',
                    nextTokenPath: '下一个令牌',
                },
                nexturl: {
                    nexturl: '下一个网址',
                    nextURLPathName: '下一个网址路径',
                    resultNextURL: 'result.metadata.nextUrl',
                },
                alertMessage: {
                    startFieldNameWarning: '起始字段名称不能为空',
                    limitFieldNameWarning: '限制字段​​名称不能为空',
                    dataFieldPathWarning: '总记录或数据指示器路径必须存在',
                    nextPageFieldNameWarning: '下一页字段名称不能为空',
                    nextPageSizeFieldNameWarning: '页面大小字段名称不能为空',
                    nextTokenFieldNameWarning: '下一个令牌字段名称不能为空',
                    nextTokenFieldValueWarning: '下一个令牌字段值不能为空',
                    nextUrlPathWarning: '下一个网址字段不能为空',
                }
            }
        },
        jsonDatasource: {
            jsonType: '类型',
            jsonTypes: {
                inLine: '排队',
                upload: '文件',
                external: '外部'
            },
            inLineText: '排队',
            filePath: '文件路径',
            urlLabel: '外部',
            maxFileSize: '档案大小上限：20 MB',
            uploadCompleted: '上传完成',
            uploadFailed: '上传失败',
            uploadInitiate: '开始上传...',
            fileExceed: '所选文件超出了文件大小限制 ',
            uploadProgress: '上载中 ',
            alertMessage: {
                jsonAlert: '指定JSON数据',
                uploadAlert: '请选择一个文件',
                urlAlert: '网址无效',
                xmlAlert: '指定XML数据',
                delimiterAlert: '指定定界符'
            },
            waterMark: {
                xmlInline: '在此处粘贴XML数据',
                jsonInline: '在此处粘贴JSON数据'
            },
            separatorTypes: {
                comma: '逗号',
                space: '空间',
                tab: '标签',
                semicolon: '分号',
                custom: '自订'
            },
            separator: '分隔器',
            delimiter: '定界符',
            firstRowHeader: '将第一行视为标题',
            extractType: '提取物类型',
            extractTypes: {
                workSheets: '工作表',
                tables: '桌子'
            }
        },
        mysqlDatasource: {
            serverName: '服务器名称',
            port: '港口',
            userName: '用户名',
            password: '密码',
            savePassword: '保存密码',
            database: '数据库',
            basicSwitch: '基本选项',
            advanceSwitch: '高级选项',
            switchAlert: '切换到视觉设计器将放弃对连接字符串进行的手动更改。您是否仍要使用视觉设计师？',
            switchLabel: '数据源高级面板',
            alertMessage: {
                userName: '指定用户名',
                password: '指定密码',
                serverName: '指定服务器名称',
                port: '指定端口号',
                database: '指定数据库名称',
            }
        },
        googleCloudSQL: {
            dbEngine: '数据库引擎',
            mysqlEngine: 'MySQL',
            psqlEngine: 'PostgreSQL'
        },
        amazonAurora: {
            dbEngine: '数据库引擎',
            mysqlEngine: 'MySQL',
            psqlEngine: 'PostgreSQL'
        },
        amazonRDS: {
            dbEngine: '数据库引擎',
            mysqlEngine: 'MySQL',
            psqlEngine: 'PostgreSQL',
            auroraMysqlEngine: '亚马逊极光 MySQL',
            auroraPsqlEngine: '亚马逊极光 PostgreSQL',
            mariaDbEngine: '玛丽亚数据库',
            sqlserver: '数据库服务器',
            oracle: '甲骨文'
        },
        snowflakeDatasource: {
            serverName: '服务器名称',
            serverWatermark: '例子',
            database: '数据库',
            userName: '用户名',
            password: '密码',
            savePassword: '保存密码',
            basicSwitch: '基本选项',
            advanceSwitch: '高级选项',
            switchAlert: '切换到视觉设计器将放弃对连接字符串进行的手动更改。您是否仍要使用视觉设计师？',
            switchLabel: '数据源高级面板',
            alertMessage: {
                serverName: '指定服务器名称',
                userName: '指定用户名',
                password: '指定密码',
                database: '指定数据库名称'
            }
        },
        verticaDatasource: {
            serverName: '服务器名称',
            port: '港口',
            database: '数据库',
            userName: '用户名',
            password: '密码',
            savePassword: '保存密码',
            basicSwitch: '基本选项',
            advanceSwitch: '高级选项',
            switchAlert: '切换到视觉设计器将放弃对连接字符串进行的手动更改。您是否仍要使用视觉设计师？',
            switchLabel: '数据源高级面板',
            alertMessage: {
                serverName: '指定服务器名称',
                userName: '指定用户名',
                password: '指定密码',
                port: '指定端口号',
                database: '指定数据库名称'
            }
        },
        sharedDatasource: {
            datasource: '共享数据源',
            alertMessage: '选择一个共享的数据源'
        },
        alertMessage: {
            headerLabel: '数据源',
            deleteValue: '删除数据源 \'',
            connectionFailed: '报表设计器 无法连接数据源',
            dataExtensionFailed: '所选数据提供程序不可用。 请检查数据扩展名。',
            dataSourceNotFound: '数据源不适用于所选数据集。',
            connectStringValidation: '由于连接字符串包含数据源中的表达式 ',
            validationMessage: ' 请使用有效的连接字符串进行更新.',
            executionMessage: ', 我们无法执行此连接的数据集.',
            confirmMessage: ' 您确定要保存数据源吗？',
            emptyNameVaildation: '指定数据源名称',
            duplicateName: '指定的名称已存在于“数据源”列表中',
            invalidCharacterValidation: '名称不应包含空格和特殊字符',
            sharedPermissionValidation: '除共享數據源外，數據源的創建受到限制。'
        },
        descriptionText: {
            amazonAuroraInfo: 'Amazon Aurora 是由 Amazon Web Services 开发和提供的关系数据库服务。 Amazon Aurora 连接器允许您在 {customBrandName} Designer 中访问来自 Amazon Aurora 数据库的数据。',
            azureSqlInfo: 'Azure SQL 数据仓库是一种基于 Microsoft 云的企业数据仓库服务产品。 它利用大规模并行处理来快速运行 PB 级数据的复杂查询。 Azure SQL 数据仓库连接器允许你在 {customBrandName} 设计器中访问来自 Azure SQL 数据仓库数据库的数据。',
            cdataInfo: 'CDATA 是一个分布式、高度可扩展的 SQL 数据库，可以在任何地方运行。它使用熟悉的关系数据结构为事务和分析工作负载提供最高性能。cdata 连接器允许您使用 {customBrandName} Designer 中的 MySQL 端点访问 cdata 数据库中的数据。',
            csvInfo: '将您的 CSV 文件放入 {customBrandName} 设计器并准备报告以查看数据中的故事。',
            excelInfo: '将您的 Excel 文件作为表格或工作表放入 {customBrandName} 设计器。 探索和使用您的数据，准备报告以查看数据中的故事。',
            googleBigQueryInfo: 'BigQuery 是一种 RESTful Web 服务，可与 Google Storage 结合使用，对海量数据集进行交互式分析。它是一种无服务器软件即服务，可以与 MapReduce 互补使用。',
            jsonInfo: '将您的 JSON 文件上传到 {customBrandName} 设计器中，以准备报告并查看数据中的故事。',
            mariadbInfo: 'MariaDB 是 MySQL 关系数据库管理系统的一个社区开发的、商业支持的分支，保证保持开源。 MariaDB 连接器允许您在 {customBrandName} 设计器中访问来自 MariaDB 数据库的数据。',
            memsqlInfo: 'MemSQL 是一种分布式、高度可扩展的 SQL 数据库，可以在任何地方运行。 它使用熟悉的关系数据结构为事务和分析工作负载提供最高性能。 MemSQL 连接器允许您在 {customBrandName} 设计器中访问 MemSQL 数据库中的数据。',
            microsoftsqlInfo: 'SQL Server 是 Microsoft\ 的关系数据库管理系统。作为市场上最可靠和最值得信赖的数据库服务器之一，它在核心数据库管理之上提供各种增值服务，如分析、报告等 系统。SQL Server 连接器允许您在 {customBrandName} 设计器中访问来自 Microsoft SQL Server 数据库的数据。',
            ssasInfo: 'SQL Server 分析服务 (SSAS) 是来自 Microsoft 商业智能堆栈的技术，用于开发在线分析处理 (OLAP) 解决方案。简单来说，您可以使用 SSAS 使用来自数据集市/数据仓库的数据创建多维数据集，以进行更深入、更快速的数据分析。',
            mysqlInfo: 'MySQL 是一个免费提供的开源关系数据库管理系统，以其快速处理、久经考验的可靠性以及易用性和灵活性而著称。 MySQL 连接器允许您在 {customBrandName} 设计器中访问 MySQL 数据库中的数据。',
            elasticSearchInfo: 'Elasticsearch 是一个基于 Lucene 库的搜索引擎。它提供了一个分布式的、支持多租户的全文搜索引擎，具有 HTTP Web 界面和无模式 JSON 文档。 Elasticsearch 可用于搜索所有类型的文档。它还提供可扩展的搜索，具有近乎实时的搜索，并支持多租户。 Elasticsearch 连接器允许您访问来自 Elasticsearch 集群的数据 {customBrandName} Designer.',
            odataInfo: 'OData 是一种开放协议，允许以简单和标准的方式创建和使用可查询和可互操作的 RESTful API。 与 {customBrandName} Designer 连接并构建报告以查看数据中的故事。',
            odbcInfo: 'ODBC 驱动程序使用 Microsoft 的开放式数据库连接 (ODBC) 接口，该接口允许应用程序使用 SQL 作为访问数据的标准来访问数据库管理系统 (DBMS) 中的数据。',
            oledbInfo: 'OLE DB 是 Microsoft 用于访问不同数据源的战略性低级应用程序接口 (API)。 OLE DB 不仅包括 Microsoft 赞助的标准数据接口开放式数据库连接 (ODBC) 的结构化查询语言 (SQL) 功能，还包括对 SQL 数据以外的数据的访问。',
            oracleInfo: 'Oracle 是具有高级分析功能的企业级关系数据库。 Oracle 连接器允许您在 {customBrandName} 设计器中访问来自 Oracle 数据库的数据。',
            psqlInfo: 'PostgreSQL 是一个强大的开源对象关系数据库系统，强调可扩展性和标准合规性。 PostgreSQL 连接器允许您在 {customBrandName} 设计器中访问来自 PostgreSQL 数据库的数据。',
            snowflakeInfo: 'Snowflake 是一个基于云的数据仓库，它为存储和检索数据提供了一个无限的平台。与传统的单集群共享磁盘/无共享架构不同，Snowflake 具有多集群、共享数据架构，由于企业级基于云的存储系统，该架构具有动态性和高度可扩展性。',
            webAPIInfo: '使用几乎所有具有 REST API 的数据源与 {customBrandName} Designer 连接。创建报告并查看数据中的故事。',
            xmlInfo: '将您的 XML 文件放入 {customBrandName} 设计器并准备报告以查看数据中的故事。',
            verticaInfo: 'Vertica 是最先进的统一分析仓库，它将高性能、列式存储、高级压缩、优化投影和大规模并行处理 SQL 查询引擎的强大功能与高级分析和机器学习相结合，因此您可以释放真正的潜力您的数据没有限制和妥协。 Vertica 连接器允许您访问 Vertica 数据库中的数据 {customBrandName} Designer.',
            gcsqlInfo: 'Google Cloud SQL 是基于 MySQL 和 PostgreSQL 的完全托管的数据库服务。 Google Cloud SQL 连接器允许您访问来自 Google Cloud SQL 数据库的数据 {customBrandName} Designer.',
            redshiftInfo: 'Amazon Redshift 是一个快速、可扩展的数据仓库，可让您轻松且经济高效地分析数据仓库和数据湖中的所有数据。它建立在 PostgreSQL 之上。 Amazon Redshift 连接器允许您访问 Amazon Redshift 数据库中的数据 {customBrandName} Designer.',
            rdsInfo: 'Amazon Relational Database Service (Amazon RDS) 是一种 Web 服务，可让您轻松地在 AWS 云中设置、操作和扩展关系数据库。它提供了具有成本效益、可调整大小的容量，以减少管理任务的自动化。它提供数据库引擎，例如 Amazon Aurora、PostgreSQL、MySQL、MariaDB、Oracle 数据库和 Microsoft SQL Server。 Amazon RDS 连接器允许您访问 Amazon RDS 数据库中的数据 {customBrandName} Designer.'
        }
    },
    imageManager: {
        headerText: '图像管理器',
        addImageButton: '添加图片',
        deleteImage: '删除嵌入的图像',
        image: '图片',
    },
    linkParameter: {
        title: '参数',
        headerText: '链接参数',
        descriptionText: '报告参数',
        addText: '加',
        ok: '好',
        cancel: '取消',
        nameWaterMark: '参数名称',
        valueWaterMark: '值',
        errorMessage: '为此属性输入一个值',
        closeToolTip: '关'
    },
    filter: {
        title: '过滤',
        descriptionLable: '包含满足以下条件的行.',
        add: '加',
        ok: '好',
        cancel: '取消',
        valueWaterMark: '值',
        fieldWaterMark: '选择字段',
        closeToolTip: '关',
        deleteField: '删除栏位',
        errorMessage: {
            booleanValidation: '值不是布尔值.',
            intValidation: '值不是整数.',
            floatValidation: '价值不是浮动.',
            dateTimeValidation: '值是无效的日期/时间格式.',
            topBottomFilter: 'Top％和Bottom％过滤器运算符需要float或integer数据类型。',
            expressionValidation: '为表达式字段选择值'
        },
        operatorTypes: {
            like: '喜欢',
            topN: '最佳N',
            bottomN: '底部N',
            topPercent: '最佳%',
            bottomPercent: '底部%',
            between: '之间',
            inFilter: '在',
        }
    },
    dataField: {
        title: '数据字段',
        descriptionLable: '包括数据字段行',
        add: '加',
        ok: '好',
        cancel: '取消',
        fieldNameWaterMark: '字段名称',
        closeToolTip: '关',
        deleteField: '删除栏位',
        errorMessages: {
            emptyField: '指定字段名称',
            invalidCharacters: '字段名称不应包含空格和特殊字符',
            sameCharacter: '字段名称已存在'
        },
        dsNameLabel: '名稱',
        dsNameWaterMark: '數據名稱',
        dsNameValidation: {
            emptyName: '指定數據集名稱',
            duplicateName: '指定的名稱已存在於“數據集”列表中',
            specialCharacter: '數據集名稱不應包含空格和特殊字符'
        }
    },
    dataPanel: {
        itemTooltip: {
            properties: '属性',
            data: '数据',
            parameters: '参数',
            imageManager: '图像管理器',
            expand: '扩大',
            collapse: '坍方'
        },
        dataSourceNewAlert: {
            title: '数据源',
            contentMessage: '你想取消创建数据源吗？?',
        },
        dataSourceEditAlert: {
            title: '数据源',
            contentMessage: '你想取消数据源编辑?',
        },
        dataSetNewAlert: {
            title: '数据集',
            contentMessage: '你想取消创建 数据集 吗?',
        },
        dataSetEditAlert: {
            title: '数据集',
            contentMessage: '你想取消 数据集 编辑吗?',
        },
        parameterNewAlert: {
            title: '参数',
            contentMessage: '你想取消参数创建?',
        },
        parameterEditAlert: {
            title: '参数',
            contentMessage: '你想取消参数编辑?',
        },
        licenseAlert: {
            ok: '好',
            close: '关',
        }
    },
    dataSet: {
        headerText: '数据',
        newData: '添加数据集',
        switchLabel: '切换到数据源面板',
        toggleCollapse: '切换按钮以折叠数据集字段',
        toggleExpand: '切换按钮以展开数据集字段',
        datasetLabel: '数据集名称',
        fieldsLabel: '栏位名称',
        dataSearch: '数据集字段搜索',
        shareDataset: {
            headerText: '新数据',
            editHeaderText: '編輯數據集',
            save: '保存',
            cancel: '取消',
            nameLable: '名称',
            sharedDatasetLabel: '共享数据集',
            errorMessage: {
                nameValidation: '指定 数据集 名称',
                datasetValidation: '选择一个共享的数据源',
                duplicateName: '指定的名称已经存在于数据集列表中',
                specialCharacter: '名称不应包含空格和特殊字符'
            }
        },
        contextMenu: {
            edit: '编辑',
            remove: '删除',
            cloneDataset: '克隆',
            refreshDataset: '刷新',
            filter: '过滤',
            setField: '字段',
            parameter: '参量'
        },
        datasourceSwitcher: '数据源',
        deleteDataset: '删除数据集',
        deleteField: '删除字段',
        newDataText: '新數據',
        sharedDataText: '共享數據',
        dataRestriction: {
            dsCreateRestriction: '數據源創建受到限制',
            title: '數據'
        },
        dataFieldSearch: {
            errorMessage: '找不到匹配项',
            searchText: '搜索'
        },
        dataTab: {
            dataSourceTabHeader: '數據源',
            dataSetTabHeader: '數據集'
        }
    },
    reportViewer: {
        toolbar: {
            print: {
                headerText: '打印',
                contentText: '打印报告。'
            },
            exportformat: {
                headerText: '出口',
                contentText: '选择导出的文件格式。',
                Pdf: 'PDF',
                Excel: '高强',
                Word: '字',
                Html: 'HTML',
                PPT: '幻灯片',
                CSV: 'CSV',
                XML: 'XML'
            },
            first: {
                headerText: '转到第一',
                contentText: '转至报告的第一页。'
            },
            last: {
                headerText: '转到最后',
                contentText: '转至报告的最后一页。'
            },
            next: {
                headerText: '转到下一步',
                contentText: '进入报告的下一页。'
            },
            previous: {
                headerText: '转到上一页',
                contentText: '转至报告的前一页。'
            },
            back: {
                headerText: '转到父母',
                contentText: '返回到父报告。'
            },
            documentMap: {
                headerText: '文档结构图',
                contentText: '显示或隐藏文档结构图。'
            },
            parameter: {
                headerText: '参数',
                contentText: '显示或隐藏参数窗格。'
            },
            zoomIn: {
                headerText: '放大',
                contentText: '放大到报告中。'
            },
            zoomOut: {
                headerText: '缩小',
                contentText: '缩小的报告。'
            },
            refresh: {
                headerText: '刷新',
                contentText: '刷新报表。'
            },
            stop: {
                headerText: '停止',
                contentText: '停止处理报告。'
            },
            printLayout: {
                headerText: '打印布局',
                contentText: '打印布局模式和正常模式之间切换。'
            },
            pageIndex: {
                headerText: '页码',
                contentText: '当前页编号，以查看。'
            },
            zoom: {
                headerText: '放大',
                contentText: '放大或缩小在报告中。'
            },
            fittopage: {
                headerText: '适合页面',
                contentText: '适合报表页到容器。',
                pageWidth: '页面宽度',
                pageHeight: '整页'
            },
            pagesetup: {
                headerText: '页面设置',
                contentText: '选择页面设置选项来改变纸张大小，方向和页边距。'
            },
            exportsetup: {
                headerText: '导出设置',
                contentText: '选择导出设置选项以设置图像质量、保存字类型和 Excel 文档。'
            },
            find: {
                headerText: '找',
                contentText: '在报告中查找文本。'
            },
            viewDesign: '关闭预览',
        },
        pagesetupDialog: {
            close: '关',
            paperSize: '纸张大小',
            height: '高度',
            width: '宽度',
            margins: '边距',
            top: '最佳',
            bottom: '底部',
            right: '对',
            left: '剩下',
            pageUnits: '页面单位',
            unitin: '英寸',
            unitcm: '厘米',
            inches: '英寸',
            centimeters: '厘米',
            paperTypes: [
                { text: 'A3', value: 'A3' },
                { text: 'A4', value: 'A4' },
                { text: 'B4(JIS)', value: 'B4(JIS)' },
                { text: 'B5(JIS)', value: 'B5(JIS)' },
                { text: '信封 #10', value: 'Envelope #10' },
                { text: '信封君主', value: 'Envelope Monarch' },
                { text: '管理人员', value: 'Executive' },
                { text: '合法的', value: 'Legal' },
                { text: '信件', value: 'Letter' },
                { text: '小报', value: 'Tabloid' },
                { text: '风俗', value: 'Custom' }
            ],
            orientation: '方向',
            portrait: '肖像',
            landscape: '景观',
            doneButton: '好',
            cancelButton: '取消'
        },
        exportsetupDialog: {
            close: '关',
            commonOptions: {
                header: '常用設置',
                imageQuality: '畫面質量',
                imageQualityTypes: [{ text: '低的', value: '2' },
                    { text: '中等的', value: '5' },
                    { text: '高的', value: '10' }]
            },
            pdfOptions: {
                header: 'PDF 設置',
                complexScript: '複雜腳本',
                conformance: '一致性等級',
                conformanceTypes: [
                    { text: '沒有', value: 0 },
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
                header: '安全设定',
                enableProtection: '啟用保護',
                protect: '密码保护',
                edit: '编辑密码',
            },
            wordOptions: {
                header: '字设置',
                protection: '保护类型',
                topSpacing: '顶部间距',
                bottomSpacing: '底部间距',
                formatList: [
                    { text: 'Word 97-2003 文档 (.doc)', value: 0 },
                    { text: 'Word 97-2003 模板 (.dot)', value: 1 },
                    { text: 'Word 文档 (.docx)', value: 2 },
                    { text: '严格打开 XML 文档 2007 (.docx)', value: 3 },
                    { text: '严格打开 XML 文档 2010 (.docx)', value: 4 },
                    { text: '严格打开 XML 文档 2013 (.docx)', value: 5 },
                    { text: '严格开放的 XML 模板 2007 (.dotx)', value: 6 },
                    { text: '严格开放的 XML 模板 2010 (.dotx)', value: 7 },
                    { text: '严格开放的 XML 模板 2013 (.dotx)', value: 8 },
                    { text: '启用 Word 宏的文档 2007 (.docm)', value: 9 },
                    { text: '启用 Word 宏的文档 2010 (.docm)', value: 10 },
                    { text: '启用 Word 宏的文档 2013 (.docm)', value: 11 },
                    { text: 'Word 宏启用模板 2007 (.dotm)', value: 12 },
                    { text: 'Word 宏启用模板 2010 (.dotm)', value: 13 },
                    { text: 'Word 宏启用模板 2013 (.dotm)', value: 14 },
                    { text: '富文本格式 (.rtf)', value: 15 },
                    { text: '纯文本 (.txt)', value: 16 },
                    { text: '网页 (.html)', value: 18 }
                ],
                layoutTypes: [
                    { text: '默认', value: 0 },
                    { text: '顶层', value: 1 }
                ],
                protectionTypes: [
                    { text: '没有保护', value: -1 },
                    { text: '仅允许修订', value: 0 },
                    { text: '只允许评论', value: 1 },
                    { text: '只允许表单域', value: 2 },
                    { text: '允许只读', value: 3 }
                ]
            },
            layoutOption: '布局选项',
            saveType: '保存类型',
            pptOptions: {
                header: '微软幻灯片软件 环境',
                pptTypes: [
                    { text: '微软幻灯片软件 97to2003 介绍 (.pptx)', value: 0 },
                    { text: '微软幻灯片软件 2007 介绍 (.pptx)', value: 1 },
                    { text: '微软幻灯片软件 2010 介绍 (.pptx)', value: 2 },
                    { text: '微软幻灯片软件 2013 介绍 (.pptx)', value: 3 }
                ]
            },
            doneButton: '好',
            cancelButton: '取消',
            csvOptions: {
                delimiter: '字段分隔符',
                formatter: '格式化的值',
                header: 'CSV 设置',
                qualifier: '文本限定符',
                customVal: '自定义值',
                qualifierList: [
                    { text: '双引号', value: '"' },
                    { text: '单引号', value: '\'' },
                    { text: '没有', value: '' },
                    { text: '风俗', value: 'Custom' }
                ],
                delimiterList: [
                    { text: '逗号', value: ',' },
                    { text: '空间', value: ' ' },
                    { text: '标签', value: '   ' },
                    { text: '分号', value: ';' },
                    { text: '风俗', value: 'Custom' }
                ]
            },
            htmlOptions: {
                header: 'HTML 设置',
                separator: '页面分隔符'
            },
            excelOptions: {
                header: 'Excel 设置',
                sheetProtection: '片材保護',
                disableCellFormat: '禁用單元格格式',
                readonly: '只讀',
                saveTypes: [
                    { text: 'Excel97to2003 工作簿(.xls)', value: 0 },
                    { text: 'Excel2007 工作簿(.xlsx)', value: 1 },
                    { text: 'Excel2010 工作簿 (.xlsx)', value: 2 },
                    { text: 'Excel2013 工作簿 (.xlsx)', value: 3 },
                    { text: 'Excel2016 工作簿(.xlsx)', value: 4 }
                ],
                sheetProtectionTypes: [
                    { text: '没有', value: 0 },
                    { text: '对象', value: 1 },
                    { text: '场景', value: 2 },
                    { text: '格式化单元格', value: 4 },
                    { text: '格式化列', value: 8 },
                    { text: '格式化行', value: 16 },
                    { text: '插入列', value: 32 },
                    { text: '插入行', value: 64 },
                    { text: '插入超链接', value: 128 },
                    { text: '删除列', value: 256 },
                    { text: '删除行', value: 512 },
                    { text: '锁定单元格', value: 1024 },
                    { text: '排序', value: 2048 },
                    { text: '过滤', value: 4096 },
                    { text: '使用数据透视表', value: 8192 },
                    { text: '解锁单元格', value: 16384 },
                    { text: '内容', value: 32768 },
                    { text: '全部', value: 65535 }
                ],
                disableCellFormatTypes: [
                    { text: '没有', value: 0 },
                    { text: '全部', value: 1 },
                    { text: '边境', value: 2 },
                    { text: '风格', value: 3 }
                ],
                layoutOptionTypes: [
                    { text: '默认', value: 0 },
                    { text: '忽略单元格合并', value: 1 }
                ],
            }
        },
        findAlertMessage: {
            resultsEndReached: '您已到達搜索結果的末尾。 如果您想繼續，請關閉對話框並再次搜索。',
            noResultsFound: '指定的文本與報告中的任何內容都不匹配。 更改您的搜索關鍵字，然後重試。'
        },
        credential: {
            userName: '用户名',
            password: '密码'
        },
        waterMark: {
            selectOption: '选择选项',
            selectValue: '选择一个值'
        },
        errorMessage: {
            startMessage: '报告查看器遇到一些加载此报告的问题。请',
            middleMessage: ' 点击这里',
            endMessage: '查看错误的详细信息',
            closeMessage: '关闭此消息',
            exportAjaxFailureMsg: '由于连接报告服务失败，无法导出文档。',
            printAjaxFailureMsg: '由于连接报告服务失败，无法打印文档。',
            reportLoadAjaxFailureMsg: '由于连接报告服务失败，无法推进报告操作。',
            cancelReportProcessMsg: '报表处理被取消。',
        },
        progressMessage: {
            exportLoadingMessage: '准备出口文件......请稍候......',
            printLoadingMessage: '准备打印数据......请稍候......',
            printPreparationMessage: '准备打印数据... {0}已完成...请稍候...',
            exportPreparationMessage: '准备导出文档... {0}％已完成...请稍候...',
            cancelText: '取消',
        },
        alertMessage: {
            close: '关',
            title: '報告查看器',
            done: '好',
            showDetails: '显示详细资料',
            hideDetails: '隐藏细节',
            reportLoad: '已加载报告:',
            RVERR0001: '報表查看器無法加載報表',
            RVERR0002: '報告查看器無法處理報告',
            RVERR0003: 'ajax回发中发生错误',
            RVERR0004: '请为参数选择一个值',
            RVERR0005: '{参数名称}参数缺少一个值',
            RVERR0006: '请给出浮点数据类型输入',
            RVERR0007: '请给出整数数据类型输入',
            RVERR0008: '報表查看器無法驗證數據源憑據',
            RVERR0009: '他的利润率是重叠的或者他们不在报纸上。输入不同的保证金大小.',
            RVERR0010: '请为参数输入一个值',
            RVERR0011: '该参数不能为空',
            RVERR0012: '为报告参数{參數提示}提供的值对其类型无效.'
        },
        reportItemLabel: {
            Tablix: 'Tablix报告项目',
            Textbox: '文本框的报告元素',
            Chart: '图表报告项目',
            Image: '图像报告项目',
            Custom: '自定义报告项目',
            Rectangle: '矩形报告项目',
            Map: '地图报告项目',
            Gauge: '量具报告项目',
            Indicator: '指标报告项目',
            Line: '报告订单项',
            Subreport: '子报告项目'
        },
        selectAll: '全选',
        viewButton: '查看报告',
        parameterBlock: '参数块',
        parameterProcessingMessage: '加載參數值 ...'
    },
    sortData: {
        sorting: '排序',
        headerText: '排序过滤器',
        add: '加',
        changeSortingOptions: '更改排序选项.',
        sortBy: '排序方式',
        thenBy: '然后通过',
        direction: {
            ascending: '上升',
            descending: '降序',
        },
        chooseField: '选择字段',
        errorMessage: '为表达式字段选择值',
        ok: '好',
        cancel: '取消',
        close: '关',
        deleteField: '删除栏位'
    },
    groupData: {
        grouping: '分组',
        headerText: '组',
        headerTextLabel: '组标签',
        name: '名称',
        label: '标签',
        changeGroupingOptions: '更改分组选项.',
        add: '加',
        groupBy: '通过...分组',
        andOn: '并且',
        chooseField: '选择字段',
        ok: '好',
        cancel: '取消',
        close: '关',
        errorMessage: {
            duplicateName: '請輸入有效名稱',
            emptyValueValidation: '为表达式字段选择值'
        },
        deleteField: '删除栏位'
    },
    alertMessage: {
        yes: '是',
        no: '没有',
        showDetails: '显示详细资料',
        hideDetails: '隐藏细节',
        close: '关'
    },
    parameter: {
        listPanel: {
            headerText: '参数',
            newParameter: '新参数',
            submenu: {
                edit: '编辑',
                remove: '删除'
            },
            alertTitle: '参数'
        },
        configurationPanel: {
            newHeaderText: '新参数',
            editHeaderText: '编辑参数',
            nameLabel: '名称',
            promptLable: '提示',
            dataTypeLable: '数据类型',
            blankValueLable: '允许空白值 ("")',
            nullValueLable: '允许空值',
            multipleValueLable: '允许多个值',
            uniqueValueLabel: '显示唯一值',
            sortValueLabel: '启用排序',
            visibilityLable: '能见度',
            assignValueLable: '赋值 >>',
            save: '保存',
            cancel: '取消',
            editLayout: '编辑版面',
            sorting: {
                ascending: '上升',
                descending: '降序'
            },
            visibility: {
                visible: '可见',
                hidden: '隐',
                internal: '内部'
            },
            dataType: {
                stringType: '串',
                booleanType: '布尔',
                dateTimeType: '约会时间',
                integerType: '整数',
                floatType: '浮动'
            }
        },
        errorMessage: {
            nameField: '请输入名称',
            promptField: '请输入值',
            nameAlreadyExists: '参数名称已存在',
        },
        warningMessage: {
            specialCharacter: '名称不应包含空格和特殊字符',
            multipleValueAlert: '指定了多个默认值。该参数不允许多个值.',
            nullValueAlert: '在值字段中，指定了空值。该参数不允许空值.',
        },
        alertMessage: {
            confirmNullCheck: '可用或默认值可能包含空值。是否要启用允许空值复选框？',
            confirmBlankValue: '可用或默认值可能包含空白值。是否要启用空白值复选框？',
            dataTypeChange: '更改数据类型将放弃对可用值和默认值所做的更改. 无论如何，你是否想改变数据类型?',
            deleteConfirmation: '删除报告参数'
        },
        assignData: {
            title: '参数',
            availableValue: '可用值',
            defaultValue: '默认值',
            none: '没有',
            specify: '指定',
            query: '查询值',
            ok: '好',
            cancel: '取消',
            availableFields: {
                specifyDescriptionText: '添加参数的可用值:',
                queryDescriptionText: '为可用值选择数据集和字段:',
                nameFieldWaterMark: '标签',
                valueFieldWaterMark: '值'
            },
            defaultFields: {
                specifyDescriptionText: '添加参数的默认值:',
                queryDescriptionText: '选择数据集和字段作为默认值:',
                defValueWaterMark: '选择默认值'
            },
            datasetWaterMark: '选择数据集值',
            valueWaterMark: '选择价值',
            lableWaterMark: '选择标签',
            add: '加',
            datasetLableText: '数据集',
            valueLableText: '值字段',
            labelFieldText: '标签字段',
            errorMessage: {
                boolTypeCheck: '值不是布尔值.',
                dateTypeCheck: '值是无效的日期格式.',
                intTypeCheck: '值不是整数.',
                floatTypeCheck: '价值不是浮动.',
                multipleValuesCheck: '多值参数不能包含空值',
                emptyDatasetField: '数据集字段是必需的.',
                emptyDatasetValue: '值字段是必需的.',
                labelFieldSyntax: '标签字段中输入的值不是有效的标记语法.',
                valueFieldSyntax: '值字段中输入的值不是有效的标记语法.',
                emptyValue: '值字段为空。该参数不允许空白值.',
                nullValue: '在值字段中，指定了空值。该参数不允许空值.',
            },
            closeToolTip: '关',
            deleteField: '删除栏位'
        }
    },
    formatData: {
        title: '格式对话框',
        typeSelect: '类型',
        typeFormat: {
            numberType: {
                labelText: '数',
                decimalPlaces: '小数位',
                decimalWatermark: '输入值',
                negativeValues: '负值',
                showZeroAs: {
                    showZeroAs: '显示为零',
                    none: '(没有)'
                },
                representationLabel: '表示',
                representationTypes: {
                    thousands: '成千上万',
                    millions: '百万',
                    billions: '数十亿',
                },
                useRegionFormating: '使用区域格式',
                use1000Separator: '使用1000分隔符 (,)'
            },
            currency: {
                labelText: '货币',
                decimalPlaces: '小数位',
                negativeValues: '负值',
                culture: '货币文化',
                showZeroAs: {
                    none: '(没有)'
                },
                representationLabel: '表示',
                representationTypes: {
                    thousands: '成千上万',
                    millions: '百万',
                    billions: '数十亿',
                },
                useRegionFormating: '使用区域格式',
                use1000Separator: '使用1000分隔符 (,)',
                includeSpace: '包含一个空格'
            },
            date: {
                typeLabel: '日期',
                valueTypeLabel: '日期'
            },
            time: {
                typeLabel: '时间',
                valueTypeLabel: '时间'
            },
            percentage: {
                typeLabel: '百分比',
                decimalPlaces: '小数位',
                includeSpace: '包含一个空格'
            },
            scientific: {
                typeLabel: '科学',
                decimalPlaces: '小数位'
            },
            custom: {
                typeLabel: '习惯',
                customFormat: '自定义格式'
            },
        },
        preview: '预习',
        ok: '好',
        cancel: '取消',
        close: '关',
        deleteField: '删除栏位'
    },
    expression: {
        title: '表达',
        descriptionText: '设置表达式 : ',
        optionLabel: '选项',
        dataLabel: '数据',
        descritionLabel: '描述',
        exampleLabelText: '例',
        ok: '好',
        cancel: '取消',
        textAreaWaterMark: '表达',
        parameters: '参数',
        variables: '变数',
        optionWaterMark: '选择一个选项',
        dataWaterMark: '选择一个数据',
        reportData: '没有找到报告数据',
        closeToolTip: '关',
        category: {
            builtInFields: '内置字段',
            operators: '运营商',
            functions: '功能'
        },
        description: {
            executionTime: '报告开始运行的日期和时间。',
            overallPageNumber: '当前整体页码只能用于页眉或页脚.',
            overallTotalPages: '报告中的页面总数只能用于页眉和页脚.',
            pageName: '报告中当前页面的名称只能用于页眉或页脚.',
            pageNumber: '当前页码可通过使用分页符重置',
            reportFolder: '包含报告的文件夹的完整路径不包含报告服务器URL.',
            reportName: '运行报告的报告服务器的URL',
            reportServerUrl: '运行报表的报表服务器的URL.',
            totalPages: '当前连续页面序列中的页面总数 只能在页眉和页脚中使用. 该号码可以通过使用分页符重置.',
            language: '运行报表的客户端的语言ID.',
            userID: '运行报告的用户的ID.',
            powerNumberType: '将数字提高到另一个数字的大小.',
            multiply: '相乘两个数字.',
            integerDivision: '将两个数字相除并返回一个整数.',
            modulus: '将两个数字相除并仅返回余数.',
            add: '添加两个数字，可用于连接两个字符串.',
            floatDivision: '将两个数字相除并返回一个浮点数.',
            difference: '产生两个数字之间的差异或指示数字表达式的负值.',
            lesser: '少于.',
            lesserOrEqual: '小于或等于.',
            greater: '比...更棒.',
            greaterOrEqual: '大于或等于.',
            equal: '等于',
            notEqual: '不等于.',
            like: '比较两个字符串.',
            isOperator: '比较两个对象引用变量.',
            expression: '生成两个表达式的字符串连接.',
            stringType: '添加两个数字，它可以用来连接两个字符串。',
            and: '对两个布尔表达式执行逻辑连接，或对两个布尔表达式执行逻辑连接',
            not: '对布尔表达式执行逻辑否定或按位否定在数字表达式上.',
            or: '用于对两个布尔表达式执行逻辑异或，或者对两个数字值.',
            xor: '对两个布尔表达式执行逻辑排除操作，或按位排除在两个数字表达式上.',
            andAlso: '对两个表达式执行短路逻辑连接.',
            orElse: '用于对两个表达式执行短路逻辑析取.',
            left: '对位模式执行算术左移.',
            right: '对位模式执行算术右移.',
            asc: '返回表示与某个字符对应的字符代码的整数值.',
            ascW: '返回表示与某个字符对应的字符代码的整数值.',
            chr: '返回与指定字符代码关联的字符.',
            chrW: '返回与指定字符代码关联的字符.',
            filter: '根据指定的过滤条件返回包含字符串数组子集的从零开始的数组.',
            formatStringType: '根据格式字符串表达式中的指令返回格式化的字符串.',
            currency: '返回使用货币符号格式化为货币值的表达式.在系统控制面板中定义.',
            dateTime: '返回表示日期/时间值的字符串表达式.',
            numberType: '返回格式为数字的表达式.',
            percent: '返回格式为百分比的表达式（即乘以100）.',
            getChar: '返回一个char值，表示来自提供的字符串中指定索引的字符.',
            inStr: '返回一个整数，指定在另一个字符串中第一次出现的起始位置.',
            inStrRev: '从右侧开始，返回一个字符串中第一次出现的位置.的字符串.',
            join: '返回通过连接数组中的多个子字符串而创建的字符串.',
            lCase: '返回转换为小写字符串或字符.',
            leftStringType: '返回一个字符串，其中包含字符串左侧的指定数量的字符.',
            stringLength: '返回一个整数，其中包含字符串中的字符数或数字.',
            lSet: '返回包含调整为指定长度的指定字符串的左对齐字符串.',
            leftTrim: '返回给定字符串中没有左侧尾随空格的字符串.',
            middle: '返回包含字符串中指定数量字符的字符串.',
            replace: '返回指定的子字符串已被另一个字符串替换的字符串.',
            rightString: '从字符串的右侧返回一个包含指定数量字符的字符串.',
            rightSet: '返回包含调整为指定长度的指定字符串的右对齐字符串.',
            rightTrim: '返回给定字符串中没有右侧尾随空格的字符串.',
            stringSpace: '返回由指定数量的空格组成的字符串.',
            splitString: '返回包含指定数量的子字符串的基于零的一维数组.',
            strComp: '根据字符串比较的结果返回-1,0或1.',
            strConv: '返回按照指定转换的字符串.',
            duplicateString: '返回由指定字符组成的字符串或对象，重复指定的次数.',
            strReverse: '返回指定字符串的字符顺序颠倒的字符串.',
            trim: '返回给定字符串中没有尾随空格的字符串.',
            upperCase: '返回包含转换为大写字符的指定字符串的字符串或字符.',
            cDate: '转换为日期.',
            dateAdd: '返回包含添加了指定时间间隔的日期和时间值的日期值.',
            dateDiff: '返回一个长整型值，指定两个日期值之间的时间间隔数.',
            datePart: '返回包含给定日期值的指定组件的整数值.',
            dateSerial: '返回表示指定年份，月份和日期的日期值，并将时间信息设置为.午夜（00:00:00.',
            dateString: '根据您的系统返回或设置表示当前日期的字符串值.',
            dateValue: '返回包含日期信息的日期值，该日期信息由字符串表示，并带有时间信息',
            day: '返回从1到31的整数值，表示月份的某一天.',
            format: '返回表示日期/时间值的字符串表达式.',
            hour: '返回从0到23的整数值，表示一天中的小时.',
            minute: '返回从0到59的整数值，表示小时的分钟数.',
            month: '返回1到12的整数值，表示一年中的月份.',
            monthName: '返回包含指定月份名称的字符串值.',
            now: '根据您的系统返回包含当前日期和时间的日期值.',
            second: '返回从0到59的整数值，表示分钟的秒数.',
            timeOfDay: '根据您的系统返回或设置包含当前时间的日期值.',
            timer: '返回一个double值，表示从午夜开始经过的秒数.',
            timeSerial: '返回代表指定小时，分钟和秒的日期值，并设置日期信息.相对于1年1月1日.',
            timeString: '根据您的系统返回或设置表示当前时间的字符串值.',
            timeValue: '返回一个日期值，其中包含由字符串表示的时间信息，并设置日期信息.到第1年的1月1日.',
            timeToday: '根据您的系统返回或设置包含当前日期的日期值.',
            timeWeekday: '返回一个包含表示星期几的数字的整数值。',
            timeWeekdayName: '返回包含指定星期几的名称的字符串值.',
            year: '返回代表年份的从1到9999的整数值.',
            abs: '返回单精度浮点数的绝对值.',
            acos: '返回余弦为指定数字的角度.',
            asin: '返回其正弦为指定数字的角度.',
            atan: '返回其切线是指定数字的角度.',
            atan2: '返回其切线是两个指定数字的商的角度.',
            bigMultiply: '生成两个32位数字的完整产品.',
            ceiling: '返回大于或等于指定整数的最小整数。',
            cos: '返回指定角度的余弦.',
            cosh: '返回指定角度的双曲余弦.',
            exponent: '将e提升到指定的功率.',
            fixNumberType: '返回数字的整数部分.',
            floor: '返回小于或等于指定的最大整数',
            integer: '返回数字的整数部分.',
            logrithm: '返回指定数字的自然对数（基数e）.',
            logrithm10: '返回指定数字的10进制对数.',
            maximum: '返回指定表达式的所有非空值的最大值.',
            minimum: '返回指定表达式的所有非空值中的最小值.',
            power: '返回指定的数字，并将其提升到指定的功率.',
            random: '返回一个单一类型的随机数.',
            round: '将双精度浮点值舍入为最接近的整数.',
            sign: '返回一个值，指示8位有符号整数的符号.',
            sin: '返回指定角度的正弦值.',
            sinh: '返回指定角度的双曲正弦.',
            squareRoot: '返回指定数字的平方根.',
            tangent: '返回指定角度的正切值.',
            tangentH: '返回指定角度的双曲正切值.',
            isArray: '返回一个布尔值，指示变量是否指向数组.',
            isDate: '返回一个布尔值，指示表达式是否表示有效',
            isNothing: '返回一个布尔值，指示表达式是否没有对象',
            isNumeric: '返回一个布尔值，指示表达式是否可以评估为一个数字.',
            flowChoose: '从参数列表中选择并返回一个值.',
            flowIIf: '根据对表达式的评估返回两个对象中的一个.',
            switchFlow: '计算表达式列表并返回相应的对象值到列表中的第一个表达式是真实的.',
            avg: '返回指定表达式中所有非空值的平均值.',
            count: '返回指定表达式中值的计数.',
            countDistinct: '返回指定表达式中所有不同值的计数。',
            countRows: '返回指定范围内的行数.',
            first: '返回指定表达式的第一个值.',
            last: '返回指定表达式的最后一个值.',
            standardDev: '返回指定表达式的所有非空值的标准偏差。',
            standardDevP: '返回指定表达式的所有非空值的总体标准偏差。',
            sum: '返回指定表达式的值的总和.',
            variance: '返回指定表达式的所有非空值的方差.',
            varianceP: '返回指定表达式的所有非空值的总体方差.',
            runningValue: '使用指定的函数来返回指定表达式的正在运行的聚合.',
            aggregate: '按照数据提供者的定义返回指定表达式的自定义聚合.',
            doubleDeclining: '使用双倍余额递减方法或您指定的其他方法，返回一个double值，用于指定特定时间段内资产的折旧。',
            futureValue: '基于定期固定支付和固定利率，返回指定年金未来价值的双倍值。',
            interestPayment: '根据定期付款，固定付款和固定利率返回指定给定期间年金利息支付的双倍值。',
            numberOfPeriods: '根据定期固定支付和固定利率返回一个double值，指定年金的期数',
            annuityPayment: '根据定期，固定付款和固定利率返回一个双重值，指定年金支付。',
            principalPayment: '基于定期固定支付和固定利率，返回指定给定期间年金本金的双倍值。',
            presentValue: '基于将来支付的定期，固定支付和固定利率，返回指定年金现值的双重值。',
            rateOfInterest: '返回一个double值，指定年金的每期利率。',
            straightLine: '返回一个double值，指定单个期间的资产的直线折旧。',
            sumOfYearsDigits: '返回一个double值，用于指定指定时间段内资产的年数总和折旧。',
            convertBool: '转换为布尔值.',
            convertByte: '转换为字节.',
            convertChar: '转换为字符.',
            convertDate: '转换为日期.',
            convertDouble: '转换为双倍.',
            convertDecimal: '转换为十进制.',
            convertInteger: '转换为整数.',
            convertLong: '转换为长.',
            convertObject: '转换为对象',
            convertShort: '转换为空格.',
            convertSingle: '转换为单个.',
            convertString: '转换为字符串.',
            fix: '返回数字的整数部分.',
            hexaDecimal: '返回表示数字的十六进制值的字符串.',
            integerPortion: '返回数字的整数部分.',
            octal: '返回表示数字的八进制值的字符串.',
            stringOfNumber: '返回表示数字的字符串。',
            stringAsNumeric: '返回字符串中的数字作为适当类型的数值.',
            inScope: '如果当前实例在指定范围内，则返回true.',
            depthLevel: '返回表示当前深度级别的从零开始的整数.',
            lookup: '使用查找从一对一关系的名称/值对的指定数据集中检索值。例如，对于表中的ID字段，可以使用Lookup从未绑定到数据区域的数据集中检索相应的Name字段。.',
            lookupSet: '使用LookupSet检索一组从一个名称 - 值对指定的数据集值的，那里是一个1对多的关系。例如，对于表中的客户标识符，可以使用LookupSet检索所有相关的电话号码从一个数据集的客户未绑定到数据区域.',
            previous: '返回前一行数据的表达式的值.',
            rowNumber: '返回指定范围内所有行的运行计数.'
        },
        errorMessage: {
            emptyValue: '值不能为空',
            invalidValue: '不是有效值'
        }
    },
    dataAssign: {
        measures: '措施',
        dimensions: '外形尺寸',
        addDataset: '添加数据集',
        errorMessagePrefix: '您尚未配置数据集.',
        errorMessageSuffix: '添加数据集以将数据绑定到设计器中的报表项.',
        search: '搜索',
        dragOnDrop: '拖放',
        categoryList: ' 类别清单',
        removeDataField: '删除数据字段',
        dataFieldSettings: '数据字段设置'
    },
    reportProperty: {
        header: '头',
        body: '身体',
        footer: '页脚',
        report: '报告',
        basicSettings: {
            categoryName: '基本设置',
            background: '背景颜色',
            borderTypes: {
                default: '边境',
                left: '剩下',
                top: '最佳',
                right: '对',
                bottom: '底部'
            },
            borderStyles: {
                solid: '固体',
                none: '没有',
                double: '双',
                dashed: '虚线',
                dotted: '带点'
            },
            borderProperties: {
                defaultColor: '邊框顏色',
                defaultSize: '邊框尺寸',
                defaultStyle: '邊框樣式',
                leftColor: '邊框左側顏色',
                leftSize: '邊框左尺寸',
                leftStyle: '邊框左樣式',
                topColor: '邊框頂部顏色',
                topSize: '邊框最大尺寸',
                topStyle: '邊框樣式',
                rightColor: '邊框右顏色',
                rightSize: '邊框右尺寸',
                rightStyle: '邊框右樣式',
                bottomColor: '邊框底色',
                bottomSize: '邊框底邊尺寸',
                bottomStyle: '邊框底樣式'
            }
        },
        generalSettings: {
            categoryName: '一般',
            printFirstPage: '在第一页打印',
            printLastPage: '在最后一页打印'
        },
        size: {
            sizeLabel: '尺寸',
            paddingTypes: {
                label: '填充',
                left: '剩下',
                right: '对',
                top: '最佳',
                bottom: '底部',
            }
        },
        position: {
            categoryName: '位置',
            label: '位置',
            left: '剩下',
            top: '最佳',
            sizeLabel: '尺寸',
            width: '宽度',
            height: '高度'
        },
        margin: {
            categoryName: '余量',
            categoryHeader: '余量',
            types: {
                left: '剩下',
                right: '对',
                bottom: '底部',
                top: '最佳'
            }
        },
        pageUnit: {
            header: '頁面單位',
            label: '頁面單位',
            types: {
                inches: '英寸',
                centimeters: '公分',
                pixels: '像素',
                points: '點',
                millimeters: '毫米',
                picas: '異食癖'
            }
        },
        columns: {
            header: '页面列',
            label: '列',
            columnSpacing: '列间距'
        },
        interactiveSize: {
            categoryName: '互动尺寸',
            enable: '启用',
            width: '宽度',
            height: '高度'
        },
        codeModule: {
            code: '码',
            variables: '变数'
        },
        paperSize: {
            orientation: '方向',
            header: '纸张大小',
            label: '纸张大小',
            orientationTypes: {
                landScape: '景观',
                portrait: '肖像'
            },
            types: {
                a3Size: 'A3',
                a4Size: 'A4',
                b4Size: 'B4(JIS)',
                b5Size: 'B5(JIS)',
                envelope: '信封 #10',
                envelopeMonarch: '信封君主',
                executive: '行政人员',
                legal: '法律',
                letter: '信',
                tabloid: '小报',
                custom: '习惯'
            }
        },
        styleTooltip: '樣式',
        colorTooltip: '顏色',
        sizeTooltip: '尺寸',
        reportLanguage: {
            categoryName: '语言',
            labelText: '语言'
        },
        backgroundImage: {
            categoryName: '背景图',
            source: '资源',
            sourceTypes: {
                external: '外部',
                embedded: '嵌入式的',
                database: '数据库'
            },
            value: '值',
            mimeTypeLabel: 'MIME类型',
            mimeTypes: {
                bmp: '图像/ BMP',
                jpeg: '图像/ JPEG',
                gif: '图像/ GIF',
                png: '图像/ PNG',
                xPng: '图像/ X-PNG'
            },
            repeatProperty: {
                categoryName: '重复',
                repeat: '重复',
                repeatX: '重复X',
                repeatY: '重复Y',
                defaultType: '默认',
                clip: '夹',
                fit: '适合'
            }
        },
        reportMiscellaneous: {
            categoryName: '杂',
            consumeWhiteSpace: '使用容器空白',
            customAttributes: '自定义属性',
            reportVersion: '版',
            reportversions: {
                default: '默認',
                RDL2010: 'RDL2010',
                RDL2016: 'RDL2016'
            }
        }
    },
    textBoxProperty: {
        contents: {
            categoryName: '內容',
            content: '內容'
        },
        basicSettings: {
            categoryName: '基本设置',
            font: {
                categoryName: '字形',
                defaultStyle: '默认',
                normal: '正常',
                italic: '斜体'
            },
            fontStyle: {
                categoryName: '字体样式',
                defaultStyle: '默认',
                normal: '正常',
                thin: '瘦',
                extraLight: '额外的光',
                light: '光',
                medium: '中',
                semiBold: '半粗体',
                bold: '胆大',
                extraBold: '特大号',
                heavy: '重',
            },
            textDecoration: {
                categoryName: '文本装饰',
                defaultStyle: '默认',
                none: '没有',
                underline: '强调',
                lineThrough: '通过',
                overline: '上划线'
            },
            format: '格式',
            markupType: {
                categoryName: '标记类型',
                plaintext: '纯文本',
                html: '的HTML'
            }
        },
        alignment: {
            categoryName: '对准',
            textAlignment: {
                categoryName: '文本对齐',
                defaultStyle: '默认',
                left: '剩下',
                center: '中央',
                right: '对'
            },
            verticalAlignment: {
                categoryName: '垂直对齐',
                defaultStyle: '默认',
                top: '最佳',
                middle: '中间',
                bottom: '底部'
            },
            lineSpacing: '线高'
        },
        appearance: {
            categoryName: 'Appearance',
            borderTypes: {
                default: '边境',
                left: '剩下',
                top: '最佳',
                right: '对',
                bottom: '底部'
            },
            borderStyles: {
                solid: '固体',
                none: '没有',
                double: '双',
                dashed: '虚线',
                dotted: '带点'
            },
            borderProperties: {
                defaultColor: '邊框顏色',
                defaultSize: '邊框尺寸',
                defaultStyle: '邊框樣式',
                leftColor: '邊框左側顏色',
                leftSize: '邊框左尺寸',
                leftStyle: '邊框左樣式',
                topColor: '邊框頂部顏色',
                topSize: '邊框最大尺寸',
                topStyle: '邊框樣式',
                rightColor: '邊框右顏色',
                rightSize: '邊框右尺寸',
                rightStyle: '邊框右樣式',
                bottomColor: '邊框底色',
                bottomSize: '邊框底邊尺寸',
                bottomStyle: '邊框底樣式'
            },
            background: '背景颜色'
        },
        link: '链接',
        linkReport: '链接报告',
        URL: '网址',
        position: {
            categoryName: '位置',
            label: '位置',
            left: '剩下',
            top: '最佳',
            sizeLabel: '尺寸',
            width: '宽度',
            height: '高度'
        },
        visibility: {
            categoryName: '能见度',
            visible: '可见',
            toggleItem: '切換項目',
            intialToggleState: '初始切換狀態'
        },
        miscellaneous: {
            categoryName: '杂',
            canGrow: '可以增长',
            canShrink: '可以收缩',
            toolTip: '工具提示',
            documentMap: '文件图',
            customAttributes: '自定义属性',
            bookmark: '书签'
        },
        paragraphSettings: {
            categoryName: '段落设置',
            textAlignment: {
                categoryName: '文本对齐',
                defaultStyle: '默认',
                left: '剩下',
                center: '中央',
                right: '对'
            },
            indent: {
                categoryName: '缩进',
                leftIndent: '剩下',
                rightIndent: '对'
            },
            space: {
                categoryName: '空间',
                topSpace: '最佳',
                bottomSpace: '底部'
            },
            listLevel: {
                categoryName: '列表级别',
                zeroLevel: '',
                oneLevel: '',
                twoLevel: '',
                threeLevel: '',
                fourLevel: ''
            },
            listStyle: {
                categoryName: '列表样式',
                none: '没有',
                numbered: '编号',
                bulleted: '项目符号'
            }
        },
        padding: {
            label: '填充',
            left: '剩下',
            right: '对',
            top: '最佳',
            bottom: '底部',
        },
        contextMenu: {
            cut: '切',
            copy: '复制',
            paste: '糊',
            expression: '表达',
            pasteAlert: '您的瀏覽器不支持直接訪問剪貼板。請使用Ctrl + V鍵盤快捷鍵而不是粘貼操作。'
        },
        fontStyle: '字體樣式',
        fontWeight: '字體粗細',
        fontSize: '字體大小',
        fontColor: '字體顏色',
        fontFamily: '字體系列',
        fontStyleTooltip: '樣式',
        fontWeightTooltip: '重量',
        fontSizeTooltip: '尺寸',
        fontColorTooltip: '顏色',
        fontFamilyTooltip: '字體系列',
        styleTooltip: '樣式',
        colorTooltip: '顏色',
        sizeTooltip: '尺寸',
        selectedText: '选定的文字',
        interActiveSort: {
            categoryName: '用戶排序',
            userSort: {
                labelText: '排序表達',
                scopePropertyLabel: '排序表達範圍',
                targetPropertyLabel: '排序目標'
            }
        },
        localization: {
            categoryName: '本土化',
            labelText: '语言',
            direction: {
                directionLabel: '方向',
                leftToRight: '左到右',
                rightToLeft: '右到左',
                default: '默认'
            },
            writingMode: {
                labelText: '写模式',
                types: {
                    default: '默认',
                    horizontal: '横',
                    vertical: '垂直',
                    rotate: '旋转270'
                }
            }
        },
        dataElement: {
            categoryName: '数据元素',
            elementName: '名称',
            elementOutput: {
                auto: '汽车',
                noOutput: '无输出',
                categoryName: '输出量',
                output: '输出量'
            },
            elementStyle: {
                auto: '汽车',
                attribute: '属性',
                element: '元件',
                categoryName: '风格'
            }
        }
    },
    designPanel: {
        headerText: '头',
        footerText: '页脚',
        pasteAlert: '页眉和页脚区域仅支持基本项目',
        pasteTitle: '糊',
        headerAreaLabel: '设计区域标题',
        bodyAreaLabel: '设计区主体',
        footerAreaLabel: '设计区域页脚',
        rdlSwitcherAlert: {
            headerContent: '报告',
            bodyContent: '该报告已从当前版本降级到较低版本，并且此版本不支持某些功能。 你想继续吗 ？'
        }
    },
    designContextMenu: {
        cutItem: '切',
        copyItem: '复制',
        pasteItem: '糊',
        deleteItem: '删除',
        insertItem: '插入',
        addHeader: '添加标题',
        removeHeader: '删除标题',
        addFooter: '添加页脚',
        removeFooter: '删除页脚',
        chartItem: '图表',
    },
    customProperty: {
        position: {
            categoryName: '位置',
            label: '位置',
            left: '剩下',
            top: '最佳',
            sizeLabel: '尺寸',
            width: '宽度',
            height: '高度'
        },
        appearance: {
            categoryName: '出现',
            borderTypes: {
                default: '边境',
                left: '剩下',
                top: '最佳',
                right: '对',
                bottom: '底部'
            },
            borderStyles: {
                solid: '固体',
                none: '没有',
                double: '双',
                dashed: '虚线',
                dotted: '带点'
            },
            borderProperties: {
                defaultColor: '邊框顏色',
                defaultSize: '邊框尺寸',
                defaultStyle: '邊框樣式',
                leftColor: '邊框左側顏色',
                leftSize: '邊框左尺寸',
                leftStyle: '邊框左樣式',
                topColor: '邊框頂部顏色',
                topSize: '邊框最大尺寸',
                topStyle: '邊框樣式',
                rightColor: '邊框右顏色',
                rightSize: '邊框右尺寸',
                rightStyle: '邊框右樣式',
                bottomColor: '邊框底色',
                bottomSize: '邊框底邊尺寸',
                bottomStyle: '邊框底樣式'
            },
            backGround: '背景颜色'
        },
        visibility: {
            categoryName: '能见度',
            visible: '可见'
        },
        miscellaneous: {
            categoryName: '杂',
            toolTip: '工具提示',
            bookmark: '书签'
        },
        styleTooltip: '樣式',
        colorTooltip: '顏色',
        sizeTooltip: '尺寸'
    },
    tablixProperty: {
        data: {
            categoryName: '数据',
            datasetName: '数据集',
            datasetNone: '没有'
        },
        noRows: {
            categoryName: '没有行',
            font: {
                categoryName: '字形',
                color: '字體顏色',
                family: '字體系列',
                size: '字體大小',
                style: '字體樣式',
                weight: '字體粗細'
            },
            fontStyle: {
                label: '字体样式',
                fontItem: {
                    default: '默认',
                    normal: '正常',
                    italic: '斜体'
                },
                fontWeight: {
                    default: '默认',
                    normal: '正常',
                    thin: '瘦',
                    extraLight: '额外的光',
                    light: '光',
                    medium: '中',
                    semiBold: '半粗体',
                    bold: '胆大',
                    extraBold: '特大号',
                    heavy: '重',
                }
            },
            textDecoration: {
                categoryName: '文本装饰',
                defaultStyle: '默认',
                none: '没有',
                underline: '强调',
                overline: '上划线',
                lineThrough: '通过'
            },
            format: '格式',
            lineHeight: '线条高度',
            message: '信息',
            paddingTypes: {
                label: '填充',
                left: '剩下',
                right: '对',
                top: '最佳',
                bottom: '底部',
            },
            textAlign: {
                categoryName: '文本对齐',
                default: '默认',
                left: '剩下',
                right: '对',
                center: '中央'
            },
            verticalAlign: {
                categoryName: '垂直对齐',
                default: '默认',
                top: '最佳',
                middle: '中间',
                bottom: '底部'
            },
            writingMode: {
                categoryName: '写模式',
                default: '默认',
                horizontal: '横',
                vertical: '垂直',
                rotateProperty: '旋转270'
            }
        },
        appearance: {
            categoryName: '出现',
            borderTypes: {
                default: '边境',
                left: '剩下',
                top: '最佳',
                right: '对',
                bottom: '底部'
            },
            borderStyles: {
                solid: '固体',
                none: '没有',
                double: '双',
                dashed: '虚线',
                dotted: '带点'
            },
            borderProperties: {
                defaultColor: '邊框顏色',
                defaultSize: '邊框尺寸',
                defaultStyle: '邊框樣式',
                leftColor: '邊框左側顏色',
                leftSize: '邊框左尺寸',
                leftStyle: '邊框左樣式',
                topColor: '邊框頂部顏色',
                topSize: '邊框最大尺寸',
                topStyle: '邊框樣式',
                rightColor: '邊框右顏色',
                rightSize: '邊框右尺寸',
                rightStyle: '邊框右樣式',
                bottomColor: '邊框底色',
                bottomSize: '邊框底邊尺寸',
                bottomStyle: '邊框底樣式'
            },
            backGround: '背景颜色'
        },
        miscellaneous: {
            categoryName: '杂',
            noRowsMessage: '没有行消息',
            pageName: '页面名称',
            keepTogether: '保持在一起',
            customAttributes: '自定义属性',
            toolTip: '工具提示',
            documentMap: '文件图',
            bookmark: '书签'
        },
        headers: {
            categoryName: '标头',
            fixedRow: '固定排',
            fixedColumn: '固定柱',
            repeatRow: '重复行',
            repeatColumn: '重复列'
        },
        font: {
            categoryName: '字形',
            defaultStyle: '默认',
            normal: '正常',
            italic: '斜体'
        },
        fontStyle: {
            categoryName: '字体样式',
            defaultStyle: '默认',
            normal: '正常',
            thin: '瘦',
            extraLight: '额外的光',
            light: '光',
            medium: '中',
            semiBold: '半粗体',
            bold: '胆大',
            extraBold: '特大号',
            heavy: '重',
        },
        textDecoration: {
            categoryName: '文本装饰',
            defaultStyle: '默认',
            none: '没有',
            underline: '强调',
            lineThrough: '通过',
            overline: '上划线'
        },
        alignment: {
            categoryName: '对准',
            textAlignment: {
                categoryName: '文本对齐',
                defaultStyle: '默认',
                left: '剩下',
                center: '中央',
                right: '对'
            },
            verticalAlignment: {
                categoryName: '垂直对齐',
                defaultStyle: '默认',
                top: '最佳',
                middle: '中间',
                bottom: '底部'
            }
        },
        padding: {
            label: '填充',
            left: '剩下',
            top: '最佳',
            right: '对',
            bottom: '底部'
        },
        position: {
            categoryName: '位置',
            label: '位置',
            left: '剩下',
            top: '最佳',
            sizeLabel: '尺寸',
            width: '宽度',
            height: '高度'
        },
        visibility: {
            categoryName: '能见度',
            visible: '可见',
            toggleItem: '切換項目'
        },
        staticGroupProp: {
            categoryName: '基本设置',
            filters: '过滤器',
            sorts: '排序',
            fixedData: '固定数据',
            groupExp: '组',
            hideIfNoRows: '隐藏如果没有行',
            keepWithGroup: '与群体保持联系',
            repeatOnNewPage: '在新页面上重复',
            afterGroup: '后',
            beforeGroup: '之前',
            pageBreak: {
                categoryName: '分页符',
                enablePageBreak: '启用分页符',
                breakLocation: {
                    categoryName: '休息地点',
                    none: '没有',
                    start: '开始',
                    end: '结束',
                    startAndEnd: '开始和结束',
                    between: '之间'
                },
                pageNumberReset: '页码重置'
            }
        },
        waterMark: {
            matrix: {
                rows: '行數',
                columns: '列',
                data: '數據'
            }
        },
        fontStyleTooltip: '樣式',
        fontWeightTooltip: '重量',
        fontSizeTooltip: '尺寸',
        fontColorTooltip: '顏色',
        fontFamilyTooltip: '字體系列',
        styleTooltip: '樣式',
        colorTooltip: '顏色',
        sizeTooltip: '尺寸',
        tablixMember: '表矩阵 会员',
        tablixReportItem: '表报告项目 ',
        dataElement: {
            categoryName: '数据元素',
            elementName: '名称',
            elementOutput: {
                auto: '汽车',
                noOutput: '无输出',
                categoryName: '输出量',
                output: '输出量'
            }
        }
    },
    rowColumnGroup: {
        rowGroupLable: '行组',
        columnGroupLable: '列组',
        tablixAlertHeader: '表矩阵',
        alertMessage: '启用展开选项以选择Tablix报表项',
        contextMenu: {
            addgroup: '添加组',
            advanced: '高级',
            deletegroup: '删除组',
            addtotal: '添加总计',
            groupProperties: '组属性',
            addColumnGroup: '添加列组',
            addRowGroup: '添加行组'
        },
        contextSubMenu: {
            adjacentafter: '相邻之后',
            adjacentbefore: '相邻之前',
            childgroup: '儿童组',
            parentgroup: '家长小组',
            totalafter: '后',
            totalbefore: '之前'
        },
        errorMessage: {
            createData: '该报告没有数据集。创建数据以在Tablix中添加组',
            assignData: '没有为Tablix分配数据。在tablix中分配数据以添加组。',
            dataNotAvailable: '报告中不存在分配的数据。创建新数据或将现有数据绑定到tablix。',
            detailGroup: '无法在详细信息组内插入组。'
        },
        tablixGroupingPanel: '表分組面板',
        tablixRowColumnContainer: '表行和列組容器',
        tablixRowGroup: '表行組容器',
        tablixColumnGroup: '表列組容器',
        tablixAddGroupMenu: '表添加組菜單',
        groupAdvanceMenu: '表分組面板高級菜單'
    },
    tablixContextMenu: {
        rowMenu: {
            insertRow: '插入行',
            above: '以上',
            below: '下面'
        },
        columnMenu: {
            insertColumn: '插入列',
            left: '剩下',
            right: '对'
        },
        rowGroupMenu: {
            insideGroupAbove: '内部组 - 上方',
            insideGroupBelow: '内部组 - 下面',
            outsideGroupAbove: '外部团体 - 以上',
            outsideGroupBelow: '外部团体 - 下面'
        },
        columnGroupMenu: {
            insideGroupLeft: '内部组 - 左',
            insideGroupRight: '内部集团 - 权利',
            outsideGroupLeft: '外部组 - 左',
            outsideGroupRight: '外部集团 - 对',
        },
        deleteRows: '删除行',
        deleteColumns: '删除列',
        rowVisibility: '行可见性',
        columnVisibility: '列可见性',
        tablixProperties: 'Tablix属性',
        splitcells: '分裂细胞',
        mergecells: '合并单元格',
        groupMenu: {
            adjacentAbove: '相邻的上方',
            adjacentleft: '相邻的左边',
            adjacentright: '相邻的右边',
            adjacentBelow: '相邻下方',
            childGroup: '儿童组',
            parentGroup: '家长小组',
            deleteRowGroup: '删除行组',
            deleteColGroup: '删除列组',
            addRowGroup: '行组',
            addColGroup: '专栏组'
        },
        reportItemMenu: {
            insertItem: '插入',
            chart: '圖表'
        },
        totalMenu: {
            total: 'Add Total',
            row: 'Row',
            column: 'Column',
            before: 'Before',
            after: 'After'
        },
        cellMenu: {
            addExpression: '添加表达式',
            editExpression: '编辑表达式',
            datasource: '添加数据源',
            noFields: '没有领域',
            addText: '添加文字',
            editText: '编辑文字'
        },
        basicItems: {
            deleteItem: '删除',
            cut: '切',
            copy: '复制',
            paste: '糊'
        }
    },
    tablixAlertDialog: {
        ok: '好',
        cancel: '取消',
        closeToolTip: '關',
        deleteRowTitle: '刪除行',
        deleteRow: '僅刪除行',
        deleteRowGroup: '刪除行和關聯的組',
        deleteRowContent: '刪除行選項',
        deleteBodyRow: 'Tablix主体必须至少包含一行。',
        deleteColumnTitle: '刪除列',
        deleteColumn: '僅刪除列',
        deleteColumnGroup: '刪除列和關聯的組',
        deleteColumnContent: '刪除列選項',
        deleteBodyColumn: 'Tablix主体必须至少包含一列。',
        deleteGroup: '僅刪除組',
        deleteGroupRowColumn: '刪除組及相關的行和列',
        deleteGroupTitle: '刪除組',
        deleteGroupContent: '刪除組選項',
        deleteStructure: '组结构不可用。',
        removeRowAlert: '无法删除Tablix报表项中的行',
        removeRow: '删除行',
        removeColumn: '删除列',
        addRow: '添加行',
        addColumn: '添加列',
        removeColumnAlert: '无法删除tablix报表项中的列',
        addRowAlert: '无法在tablix报表项中添加行',
        addColumnAlert: '无法在tablix报表项中添加列'
    },
    tablixAlertInfo: {
        addGroup: '添加组',
        removeGroup: '删除组',
        adjacentAfterAlert: '无法在层次结构中添加相邻组',
        adjacentBeforeAlert: '无法在层次结构中添加相邻组',
        childGroupALert: '无法在层次结构中添加子组',
        title: 'Tablix报告项目',
        parentGroupAlert: '无法在层次结构中添加父组',
        removeGroupAlert: '无法删除层次结构中的组',
        selectedMemberAlert: '选定的成员不是组成员',
        pasteActionAlert: '无法发布信息，因为复制区域和粘贴区域的大小和形状不同。',
        pasteTitle: '糊'
    },
    cellMergingAlertInfo: {
        merge: '合并单元格',
        mergeAlert: '无法合并tablix报表项中的单元格',
        split: '分裂细胞',
        splitAlert: '无法在Tablix报表项中拆分单元格'
    },
    tablixGroup: {
        title: 'Tablix集團',
        headerTxt: '组标签',
        groupBy: '通過...分組：',
        chooseField: '選擇字段',
        showDetailData: '顯示詳細數據',
        addGroupHeader: '添加標題',
        addGroupFooter: '添加頁腳',
        ok: '好',
        cancel: '取消',
        closeToolTip: '關'
    },
    tablixDataAssignMenu: {
        datasource: '添加数据源',
        addExpression: '添加表达式',
        editExpression: '编辑表达式',
        addText: '添加文字',
        editText: '编辑文字',
        search: '搜索',
        noFieldsFound: '找不到任何领域'
    },
    tablixTotalAlert: {
        headerLabel: '添加总标题',
        staticLabel: '添加总计',
        headerMessage: '无法将总行数或列添加到tablix报告项目中的组标题',
        staticMessage: '无法在Tablix报表项中向Tablix主体添加总行数或列数'
    },
    tablixAddTextDialog: {
        save: '保存',
        add: '加',
        cancel: '取消',
        closeToolTip: '關',
        addText: '添加文字',
        editText: '編輯文字'
    },
    reportParameter: {
        title: '参数',
        validationMessage: '指定有效的查询参数',
        descriptionText: '报告参数',
        addText: '加',
        ok: '好',
        cancel: '取消',
        nameWaterMark: '参数名称',
        valueWaterMark: '值',
        closeToolTip: '关',
        deleteField: '删除栏位'
    },
    queryDesigner: {
        storeParameter: {
            title: '参数',
            ok: '好',
            cancel: '取消',
            parameterLable: '参数',
            nullLable: '空值',
            valueLable: '值',
            dataTypeLable: '数据类型',
            closeToolTip: '关'
        },
        parameter: {
            title: '参数',
            ok: '好',
            cancel: '取消',
            parameterLable: '参数',
            nullLable: '空值',
            valueLable: '值',
            dataTypeLable: '数据类型',
            auto: '汽车',
            text: '文本',
            closeToolTip: '关'
        },
        filter: {
            title: '查询过滤器',
            descriptionLable: '表格过滤器列表',
            add: '加',
            save: '好',
            cancel: '取消',
            nullLable: '空值',
            trueLable: '真正',
            falseLable: '假',
            parameterTooltip: '包含作为参数',
            closeToolTip: '关',
            numberType: '数字',
            stringType: '细绳',
            intOperatorType: {
                equals: '等于',
                doesNotEqual: '不相等',
                greaterThan: '比...更棒',
                greaterThanOrEqual: '大于或等于',
                lessThan: '少于',
                lessThanOrEqual: '小于或等于',
                between: '之间',
                notBetween: '不在'
            },
            stringOpertorType: {
                equals: '等于',
                startsWith: '以。。开始',
                endWith: '以。。结束',
                contains: '包含',
                notContains: '不包含'
            },
            errorMessage: {
                dateValidation: '值是无效的日期格式.',
                commonContent: '过滤器 ',
                booleanValidation: ' 没有任何值可以过滤。请提供过滤器的值.',
                stringValidation: ' 没有适当的值来过滤. '
            }
        },
        previewArea: {
            dataPreview: '数据预览',
            noRecords: '无记录可显示',
            generatePreview: '生成预览',
            executeRecords: '执行以预览记录',
            record: '记录',
            records: '记录',
            retrieved: '检索',
            loadRecord: '装载更多',
            update: '更新',
            previewContainer: '数据预览容器'
        },
        schemaArea: {
            search: '搜索',
            rename: '改名',
            searchInfo: '从当前获取的架构中检索匹配信息',
            aggregation: '骨料',
            dialogHeader: '数据集',
            matchesFound: '找不到匹配项',
            alertMessage: {
                datasourceAlert: '选择一个 数据源 来配置 报告 数据集',
                removeTable: '下面的关联表将随此删除',
                duplicateName: '指定的列名已存在',
                specialCharacter: '列名不应包含特殊字符.',
                switcherAlert: '切换到可视化设计器将放弃对查询进行的手动更改。你想要使用视觉设计师吗？',
                duplicateDatasetName: '指定的名称已存在于 数据集 列表中',
                datasetSpecialCharacter: '名称不应包含空格和特殊字符'
            },
            errorMessage: {
                specifyName: '指定列名称',
                specifyDatasetName: '指定 数据集 名称',
                previewFailed: '数据集 无法预览选定的表',
                specifyQuery: '指定 数据集 查询',
                selectTable: '选择表来保存 数据集',
                queryFailed: '数据集 无法保存所选表的查询',
                refreshFailed: '未能刷新数据集 {datasetName}，它需要一个或多个输入值。 请编辑并保存数据集。',
                tableProcedure: '数据集 无法检索选定的表过程',
                deleteTableFailure: '删除所选表失败',
                joinTableFailure: '无法加入所选表格',
                confirmPermission: '检索大量记录，渲染将需要时间。您仍然要加载吗？'
            },
            dragSurface: '拖曳表面容器',
            searchSchema: '搜索架构',
            fieldTable: '字段表',
            closeFieldTable: '关闭表',
            fieldSelection: '字段选择器',
            selectAndDeselectAll: '选择和取消选择所有列'
        },
        toolBar: {
            datasourceLable: '数据源',
            datasetName: '名称',
            run: '跑',
            join: '加入',
            expression: '表达',
            filter: '过滤',
            code: '码',
            finish: '完',
            cancel: '取消',
            parameter: '参数',
            datasourceWaterMark: '选择一个数据源',
            autoPreview: '自动预览'
        },
        joiner: {
            title: '查询连接器',
            descriptionLable: '表关系列表',
            add: '加',
            save: '好',
            cancel: '取消',
            addField: '添加字段',
            closeToolTip: '关',
            leftFieldWaterMark: '左场',
            rightFieldWaterMark: '右场',
            operatorWaterMark: '操作者',
            joinTypeWaterMark: '加入类型',
            leftTableWaterMark: '左表',
            rightTableWaterMark: '右表',
            joinTypes: {
                inner: '内',
                outer: '左外',
                rightOuter: '正确的外面',
                fullOuter: '完全外面'
            },
            errorMessage: {
                removeField: '每个关系必须有一个现场条件。所以，它不允许删除这个字段',
                noRelationAlert: ' 与其他表格无关',
                selectLeftTable: '选择左表值',
                selectRightTable: '选择正确的表值',
                selectRelation: '选择表格的关系',
                selectLeftColumn: '选择字段行的左列值 #',
                selectRightColumn: '选择字段行的右列值 #',
                selectOperator: '选择字段行的运算符 #',
                relationExists: '表之间已经存在关系',
                saveJoinerAlert: '删除所选表失败'
            }
        },
        credentialDialog: {
            title: '凭据对话框',
            userName: '用户名',
            password: '密码',
            userNameErrorMessage: '请输入用户名',
            passwordErrorMessage: '请输入密码',
            connect: '连',
            close: '关',
            credentialLabel: '数据源凭证'
        },
        queryExpression: {
            title: '查询表达式',
            functionLabel: '功能',
            columnLabel: '列设置',
            expressionLabel: '表达',
            nameLabel: '名称',
            descriptionLabel: '描述 ',
            exampleLabelText: '例',
            ok: '保存',
            cancel: '取消',
            add: '加',
            textAreaWaterMark: '查询表达式',
            nameFieldWaterMark: '表达式名称',
            closeToolTip: '关',
            errorMessage: {
                saveAlert: '表达式不被保存。你想保存并继续?',
                bracketSyntax: '打开/关闭支架附近的语法不正确（s）.',
                parseAlert: '报表设计器 无法解析指定的表达式.',
                nameAlert: '姓名字段不能为空',
                emptyAlert: '表达字段不应该是空的',
                duplicateName: '指定的表达式名称已经存在',
                specialCharacter: '表达式名称不应包含特殊字符.',
                referenceError: '列不能在其自己的表达式中引用!',
                invalidSyntax: '打开/关闭括号附近的语法无效.',
                retrieveExpression: '报表设计器 无法检索指定的表达式'
            },
            datasetTitle: '数据集',
            expressions: {
                all: '所有',
                numbers: '数字',
                logical: '合乎逻辑',
                conditional: '条件',
                date: '日期',
                stringType: '串',
                text: '文本',
                miscellenuous: '杂 ',
                abs: '返回给定表达式的绝对值.',
                acos: '返回给定数字表达式的反余弦（也称为反余弦）.',
                asin: '返回给定数字表达式的反正弦（也称为反正弦）.',
                atan: '返回给定数字表达式的反正切（也称为反正切）.',
                cos: '返回以给定表达式的弧度指定的角度的余弦.',
                degree: '以给定数值表达式的弧度指定的角度返回角度度数.',
                exponent: '返回给定表达式的指数值.',
                logrithm: '将给定表达式的对数返回给指定的基数.',
                pi: '返回PI的常量值.',
                power: '将给定表达式（表达式1）的值返回到指定的功率（表达式2）.',
                radians: '返回给定数字表达式中以度数指定的角度的弧度角度.',
                round: '返回一个舍入值.',
                sign: '返回表示给定数字表达式的正数（+1），零（0）或负数（-1）符号的值.',
                sin: '返回以给定表达式的弧度指定的角度的正弦值.',
                squareRoot: '返回给定数字表达式的平方根.',
                tan: '返回给定数字表达式的正切值.',
                ifCondition: '根据对表达式的评估，返回true部分或false部分.',
                ifNull: '如果表達式是數字 / 串 / 日期，则返回第一个表达式. 如果第一个表达式为空值，则返回第二个表达式.',
                isNotNull: '如果數字 / 串 / 日期表達为空值，则返回表示false的字符串; 否则表示为true.',
                isNull: '如果數字 / 串 / 日期表達为空值，则返回表示true的字符串; 否则表示false.',
                and: '如果两个表达式求值为true，则返回true。',
                notOperation: '返回正在评估的表达式的反转逻辑值.',
                orOperation: '如果任何表达式的计算结果为true，则返回true.',
                addDate: '将天数添加到指定的日期.',
                name: '返回表示给定日期表达式的指定日期部分的字符串.',
                part: '返回表示给定日期表达式的指定日期部分的整数值.',
                sub: '返回从指定日期减去的日期.',
                day: '返回表示指定日期的日期部分的数值.',
                dateDiff: '返回表示两个指定日期之间差异的数字值.',
                hour: '以整数形式返回给定日期的小时.',
                minute: '返回一个数字值，表示由指定的日期表达式产生的日期的分钟部分.',
                month: '返回表示指定日期表达式的日期的月份部分的数值.',
                now: '返回当前的日期和时间.',
                today: '返回当前日期.',
                year: '返回表示指定日期表达式所产生日期的年份部分的数值.',
                char: '将给定的整数ASCII码转换为一个字符.',
                concat: '返回由两个或更多字符串值连接产生的字符串值.',
                contains: '如果给定的字符串表达式包含指定的字符串表达式，则返回true.',
                endsWith: '如果给定的字符串表达式以指定的子字符串表达式结束，则返回true.',
                left: '返回给定字符串表达式开始处的指定字符数.',
                length: '返回给定表达式的自然对数.',
                lower: '从给定的字符串表达式中返回小写字母转换后的字符串值.',
                leftTrim: '返回从字符串表达式中删除前导空白的字符串值.',
                maximum: '返回给定表达式中的最大值.',
                minimum: '返回给定表达式中的最小值.',
                right: '返回给定字符串表达式末尾的指定字符数.',
                rightTrim: '返回给定字符串中没有右侧尾随空格的字符串.',
                startswith: '如果给定的字符串表达式以指定的子字符串表达式开头，则返回true.',
                subString: '返回从给定字符串表达式的特定索引开始的特定字符串长度.',
                upper: '从给定的字符串表达式中返回大写字母转换后的字符串值.'
            }
        }
    },
    chartItem: {
        categoryItems: {
            yvalue: 'Y值(s)',
            size: '尺寸(s)',
            xvalue: 'X值(s)',
            column: '柱',
            row: '行(s)',
            high: '高的(s)',
            low: '低的(s)'
        },
        categoryItemsMenu: {
            filter: '过滤器',
            sort: '排序',
            group: '组',
            expression: '表达',
            aggregate: '骨料',
            none: '没有任何'
        },
        validationMessage: '设计器中不支持图表类型.'
    },
    codeDialog: {
        title: '代码模块',
        ok: '好',
        cancel: '取消',
        add: '加',
        closeToolTip: '关 ',
        reference: {
            title: '参考',
            waterMark: '参考',
            errorMessage: '该字段为空',
            headerText: '裝配參考列表',
            referenceTooltip: '添加裝配參考以在報告中使用裝配功能。',
            referenceSuffixToolTip: ' 关于RDL程序集引用。'
        },
        classes: {
            title: '类',
            nameFieldWaterMark: '班级名称',
            instanceFieldWaterMark: '实例名称',
            emptyFieldValidation: '该字段为空',
            emptyInstanceValueValidation: '该字段为空',
            headerText: '類實例列表',
            toolTip: '添加類實例以訪問報表中的對象函數。',
            toolTipSuffix: ' 关于RDL类。'
        },
        code: {
            title: '码',
            headerText: '用於報告的VB代碼功能',
            tooltip: '{customBrandName}報告引擎支持VB代碼函數與報表元素和數據集成。',
            toolTipSuffix: ' 关于RDL代码模块。'
        },
        customCode: '自定义代码编辑器',
        deleteReference: '删除参考栏',
        deleteClass: '删除班级字段',
        refer: ' 请参阅 ',
        article: 'MSDN文章'
    },
    customAttributeDialog: {
        title: '自定义属性',
        propertyName: '名称',
        propertyValue: '值',
        ok: '好',
        cancel: '取消',
        add: '加',
        nameField: '名称字段为空',
        sameNameAlert: '指定的名称已经存在于列表中',
        closeToolTip: '关',
        headerText: '更改自定义属性',
        deleteField: '删除栏位'
    },
    previewData: {
        title: '预览数据',
        ok: '好',
        cancel: '取消',
        description: '綁定JSON數據以進行預覽',
        close: '关',
        infoToolTip: '報告需要預覽JSON格式數據，它包含數組格式列表中的鍵和值。',
        jsonHeader: 'JSON数据：',
        errorMessage: '指定有效的JSON格式',
        previewDataAlert: {
            title: '预览数据',
            alertMessage: '您想切換到報表設計器嗎？'
        }
    },
    sampleDataSource: {
        sampleDSHeader: '進口樣品數據',
        addText: '加',
        searchText: '搜索',
        noDataFound: '沒有找到數據。',
        welcomeContentPrefix: '首先創建一個數據源',
        welcomeContentSuffix: '您可以連接到自己的自定義數據，也可以從我們提供的預定義共享數據中導入一個。',
        sampleDSText: '導入樣本數據',
        exploreSampleText: '探索樣本數據',
        accordionText: '啟動您的第一個報告並使用示例數據探索自定義選項。',
        errorMessage: '網絡錯誤',
        alertHeaderText: '導入數據',
        alertMessage: '報表設計器無法從報表服務器導入數據',
        refreshButton: '数据源刷新',
        exploreContainer: '数据源探索容器',
        showHide: '显示隐藏'
    },
    field: {
        title: '字段',
        nameWaterMark: '字段名称',
        sourceWaterMark: '场源',
        ok: '好',
        cancel: '取消',
        description: '更改查询和计算字段',
        query: '查询字段',
        calculated: '计算字段',
        fieldError: '场是空的',
        fieldsError: '字段是空的',
        add: '加',
        closeToolTip: '关',
        invalidFormat: '字段名称不应包含空格和特殊字符',
        sameFieldName: '字段名称已存在',
        deleteField: '删除栏位'
    },
    parameterLayout: {
        title: '参数布局',
        ok: '好',
        cancel: '取消',
        closeToolTip: '取消',
        deleteConfirmation: {
            title: '參數',
            deleteCell: '刪除報告參數',
            deleteCells: '刪除報告參數'
        }
    },
    parameterContextMenu: {
        rowMenu: {
            insertRow: '插入行',
            above: '以上',
            below: '下面'
        },
        columnMenu: {
            insertColumn: '插入列',
            left: '剩下',
            right: '对'
        },
        deleteCell: '删除',
        deleteColumn: '删除栏',
        deleteRow: '删除行'
    },
    commonProperty: {
        commonProperties: '共同属性',
        basicSettings: {
            categoryName: '基本设置',
            borderTypes: {
                default: '边境',
                left: '剩下',
                top: '最佳',
                right: '对',
                bottom: '底部'
            },
            borderStyles: {
                solid: '固体',
                none: '没有',
                double: '双',
                dashed: '虚线',
                dotted: '带点'
            },
            borderProperties: {
                defaultColor: '邊框顏色',
                defaultSize: '邊框尺寸',
                defaultStyle: '邊框樣式',
                leftColor: '邊框左側顏色',
                leftSize: '邊框左尺寸',
                leftStyle: '邊框左樣式',
                topColor: '邊框頂部顏色',
                topSize: '邊框最大尺寸',
                topStyle: '邊框樣式',
                rightColor: '邊框右顏色',
                rightSize: '邊框右尺寸',
                rightStyle: '邊框右樣式',
                bottomColor: '邊框底色',
                bottomSize: '邊框底邊尺寸',
                bottomStyle: '邊框底樣式'
            },
            backGround: '背景颜色',
            styleTooltip: '樣式',
            colorTooltip: '顏色',
            sizeTooltip: '尺寸',
        },
        fontSettings: {
            categoryName: '字型设定',
            fontLabel: '字形',
            fontStyleLabel: '字型',
            fontFamily: '字体系列',
            fontColor: '字体颜色',
            fontSize: '字体大小',
            fontStyle: '字型',
            fontWeight: '字体粗细',
            fontStyles: {
                normal: '正常',
                default: '默认',
                italic: '斜体'
            },
            fontWeights: {
                normal: '正常',
                default: '默认',
                bold: '胆大',
                light: '光'
            }
        },
        position: {
            categoryName: '位置',
            label: '位置',
            left: '剩下',
            top: '最佳'
        },
        visibility: {
            categoryName: '能见度',
            visible: '可见',
        }
    },
    mapProperty: {
        fontFamilyTooltip: '字体系列',
        fontWeightTooltip: '重量',
        commonProperties: {
            font: '字形',
            fontStyle: '字体样式',
            fontWeight: '字體粗細',
            fontSize: '字體大小',
            fontColor: '字體顏色',
            fontFamily: '字體系列',
            fontStyles: {
                normal: '正常',
                default: '默认',
                italic: '斜体',
            },
            fontWeights: {
                normal: '正常',
                default: '默认',
                bold: '胆大',
                light: '光',
            },
            textAlignments: {
                center: '中央',
                right: '对',
                left: '剩下'
            },
            mapColorRule: {
                categoryName: '形状颜色规则',
                colorRuleEnable: '启用颜色规则',
                dataValue: '资料值',
                colorType: '类型',
                colorRuleType: {
                    colorRange: '颜色范围',
                    colorPalette: '调色板',
                    custom: '自订'
                },
                distribution: '发行类型',
                distributionTypes: {
                    optimal: '最佳',
                    equalDistribution: '平均分配',
                    equalInterval: '等间隔',
                    custom: '自订'
                },
                startValue: '起始值',
                endValue: '最终价值',
                bucketCount: '斗数',
                buckets: '水桶',
                palette: '调色板',
                paletteTypes: {
                    random: '随机',
                    light: '光',
                    semiTransparent: '半透明',
                    brightPastel: '明亮的粉彩',
                    pacific: '和平的'
                },
                customColors: '自定义颜色',
                startColor: '起始色',
                middleColor: '中间色',
                endColor: '底色',
                legendName: '图例名称',
                legendText: '图例文字',
                showInColorScale: '以色阶显示'
            },
            position: {
                topLeft: '左上方',
                topCenter: '顶尖中心',
                topRight: '右上',
                rightTop: '右上角',
                rightCenter: '正确的中心',
                rightBottom: '右下',
                bottomLeft: '左下方',
                bottomCenter: '底部中心',
                bottomRight: '底部右侧',
                leftTop: '左上方',
                leftCenter: '左中心',
                leftBottom: '左下'
            }
        },
        mapTitle: {
            categoryName: '标题',
            position: '位置',
            text: '文本',
            enableTitle: '启用标题'
        },
        basicSettings: {
            categoryName: '基本設置',
            polygonLayerName: '多边形层名称',
            shapeType: '形狀',
            datasetName: '數據集',
            bindData: '綁定數據',
            mapProjection: {
                projectionType: '投影类型',
                mapProjectionTypes: {
                    equirectangular: '等角矩形',
                    mercator: '墨卡托',
                    eckert1: '埃克特1号',
                    eckert3: '埃克特3',
                    hammerAitoff: '哈默·艾托夫',
                    fahey: '法赫',
                    bonne: '邦纳'
                }
            },
            filters: '篩選器',
            groupExp: '團體'
        },
        appearance: {
            categoryName: '出現',
            borderTypes: {
                default: '边境',
                left: '剩下',
                top: '最佳',
                right: '对',
                bottom: '底部'
            },
            borderStyles: {
                solid: '固体',
                none: '没有',
                double: '双',
                dashed: '虚线',
                dotted: '带点'
            },
            backGround: '背景颜色'
        },
        legendSettings: {
            categoryLegend: '传说',
            showLegend: '启用图例',
            showBorder: '显示边框',
            border: '边境',
            backgroundColor: '背景颜色',
            legendPosition: '位置',
            mapLegendMode: {
                legendMode: '图例模式',
                mapLegendTypes: {
                    default: '默认',
                    interactive: '互动'
                }
            },
            legendFont: '字形',
            legendFontStyle: '字型',
            legendTitle: '标题',
            titleFont: '标题字体',
            titleFontStyle: '标题字体样式',
        },
        pageBreak: {
            categoryName: '分页符',
            enablePageBreak: '启用分页符',
            breakLocation: '休息地點',
            breakLocationTypes: {
                none: '没有',
                start: '开始',
                end: '结束',
                startAndEnd: '开始和结束',
                between: '之间'
            },
            pageNumberReset: '页码重置',
            pageName: '頁面名稱'
        },
        polygonTemplate: {
            categoryName: '形状设定',
            showLabel: '顯示標籤',
            backgroundColor: '背景顏色',
            border: '邊境',
            font: '字形',
            fontStyle: {
                categoryName: '字體樣式',
                defaultStyle: '默认',
                normal: '正常',
                italic: '斜体'
            },
            fontWeight: {
                default: '默认',
                normal: '正常',
                thin: '瘦',
                extraLight: '额外的光',
                light: '光',
                medium: '中',
                semiBold: '半粗体',
                bold: '胆大',
                extraBold: '特大号',
                heavy: '重',
            },
            label: '標籤文字',
            tooltip: '工具提示',
            visibility: '可见'
        },
        position: {
            categoryName: '位置',
            label: '位置',
            left: '剩下',
            top: '最佳',
            sizeLabel: '尺寸',
            width: '宽度',
            height: '高度'
        },
        visibility: {
            categoryName: '能见度',
            visible: '可见',
            toggleItem: '切換項目'
        },
        styleTooltip: '樣式',
        colorTooltip: '顏色',
        sizeTooltip: '尺寸',
        fontcolortooltip: '顏色',
        fontsizetooltip: '尺寸',
        fontstyletooltip: '字體樣式',
        miscellaneous: {
            categoryMiscellaneous: '杂',
            toolTip: '工具提示',
            documentMap: '文件图',
            customAttributes: '自定义属性',
            bookmark: '书签'
        },
        spatial: {
            categoryName: '空间空间',
            fielddefinitions: '栏位定义',
            polygons: '多边形'
        },
        mapErrorMessage: {
            headerText: '地圖',
            polygonErrorMessage: '無法使用更新的多邊形轉換geojson。',
            vectorDataToGeoJson: '无法从矢量数据获取geojson',
            shapeData: '未在设计器中配置地图形状数据',
            shapeDateToGeoJson: '无法从形状数据中获取geojson',
            multiLayer: '无法从形状数据中获取geojson',
            polygonLayer: '地图在设计器中仅支持多边形图层',
            fileTypes: '地图在设计器中仅支持嵌入式和形状文件类型',
            unSupported: '设计器不支持地图'
        },
        mapMarker: {
            colorRule: '标记颜色规则',
            markerRule: '标记规则',
            enableMarkerRule: '啟用標記規則',
            enableSizeRule: '啟用大小規則',
            sizeRule: {
                categoryName: '标记大小规则',
                startSize: '起始尺寸',
                endSize: '端部尺寸',
                markers: '标记物'
            },
            markerTemplate: {
                categoryName: '标记设定',
                showMarker: '隱',
                background: '背景',
                markerStyle: '樣式',
                markerSize: '尺寸',
                tooltip: '工具提示',
                latitude: '緯度',
                longitude: '經度',
                markerStyles: {
                    circle: '圈',
                    none: '沒有',
                    rectangle: '長方形',
                    diamond: '鑽石',
                    star: '星',
                    triangle: '三角形',
                    image: '圖片',
                    pentagon: '五角大樓'
                },
                markerImage: {
                    type: 'MIME类型',
                    mode: '调整大小模式',
                    source: '资源',
                    color: '透明色',
                    value: '值',
                    sourceTypes: {
                        external: '外部',
                        embedded: '嵌入式的',
                        database: '数据库'
                    },
                    resizeModes: {
                        autofit: '自动调整',
                        none: '没有'
                    }
                }
            }
        },
        dataElement: {
            categoryName: '数据元素',
            elementName: '名称',
            elementOutput: {
                auto: '汽车',
                noOutput: '无输出',
                categoryName: '输出量',
                output: '输出量'
            }
        }
    },
    mapBindingFields: {
        headerText: '綁定字段對',
        addText: '加',
        updateText: '更新資料',
        fieldName: '欄位名稱',
        bindingExpression: '綁定表達',
        deletefield: '刪除欄位',
        errorMessage: {
            bindingExpError: '選擇綁定表達式的值',
            fieldNameError: '選擇字段名稱的值',
            warningMessage: '您所做的更改可能不會更新。您仍然要繼續嗎？'
        }
    },
    mapBucket: {
        headerText: '地圖桶',
        addText: '加',
        updateText: '更新資料',
        startValue: '起始值',
        endValue: '最終價值',
        deletefield: '刪除欄位',
        errorMessage: {
            warningMessage: '您所做的更改可能不會更新。您仍然要繼續嗎？'
        }
    },
    mapPolygons: {
        headerText: '多邊形',
        addText: '加',
        polygonText: '地图多边形',
        updateText: '更新資料',
        editPolygon: '編輯',
        deletePolygon: '刪除多邊形',
        properties: '多邊形屬性',
        closeText: '關',
        saveText: '保存',
        data: '數據',
        spatial: '空間的',
        vectorData: '矢量數據',
        errorMessage: {
            warningMessage: '您所做的更改可能不會更新。您仍然要繼續嗎？'
        }
    },
    mapMarkerStyle: {
        headerText: '地圖標記',
        updateText: '更新資料',
        add: '加',
        label: '標記樣式',
        deletefield: '刪除',
        errorMessage: '您所做的更改可能不會更新。您仍然要繼續嗎？',
        styles: {
            circle: '圈',
            none: '沒有',
            rectangle: '長方形',
            diamond: '鑽石',
            star: '星',
            triangle: '三角形',
            image: '圖片',
            pentagon: '五角大樓'
        }
    },
    mapFieldDefinition: {
        mapFieldTitle: '地图字段定义',
        fieldName: '栏位名称',
        dataType: '数据类型',
        mapAlertMessage: '您所做的更改可能不会保存。 您仍然要继续吗？',
        addText: '加',
        errorMessage: {
            errorEmptyMessage: '指定字段名称',
            sameCharacterMessage: '字段名称已存在'
        },
        updateText: '更新'
    },
    mapCustomColors: {
        headerText: '自定義顏色',
        updateText: '更新資料',
        add: '加',
        label: '颜色',
        deletefield: '刪除',
        errorMessage: '您所做的更改可能不會更新。您仍然要繼續嗎？',
    },
    reportVariable: {
        headerText: '变数',
        addText: '加',
        updateText: '更新',
        name: '名称',
        value: '值',
        deletefield: '刪除',
        checkBoxTooltip: '只读',
        errorMessage: {
            warningMessage: '您所做的更改可能不會更新。您仍然要繼續嗎？',
            emptyAlert: '名称不能为空',
            duplicateName: '名称已存在',
            specialCharacter: '名称不应包含空格和特殊字符'
        }
    },
    indicatorStates: {
        headerText: '指标国家',
        addText: '加',
        updateText: '更新资料',
        deletefield: '删除栏位',
        indicatorStyle: '图标',
        color: '颜色',
        start: '开始',
        end: '结束',
        scaleFactor: '比例因子',
        indicatorStateValue: '指标状态值',
        errorMessage: {
            warningMessage: '您所做的更改可能不会更新。您仍然要继续吗？'
        }
    },
    webDataExpression: {
        title: '連接數據',
        ok: '好',
        cancel: '取消',
        closeToolTip: '關',
        url: '網址',
        rawData: '原始數據',
        parameters: '参数',
        headers: '标头',
        username: '用户名',
        password: '密码',
        valueWaterMark: '值',
        emptyValue: '指定表達式值'
    }
};
