/**
 * Default [tr-TR] localization for report viewer.
 */
//ejDatePicker
ej.DatePicker.Locale["tr-TR"] = {
    watermarkText: "seçin tarih",
    buttonText: "Bugün"
};

//ejReportViewer
ej.ReportViewer.Locale["tr-TR"] = {
    toolbar: {
        print: {
            headerText: "baskı",
            contentText: "raporu yazdırın."
        },
        exportformat: {
            headerText: "İhracat",
            contentText: "Verilen dosya biçimini seçin.",
            Pdf: "PDF",
            Excel: "Excel",
            Word: "sözcük",
            Html: "HTML",
            PPT: "Priz",
            CSV: "CSV",
            XML: "XML"
        },
        first: {
            headerText: "İlk",
            contentText: "Raporun ilk sayfaya gidin."
        },
        previous: {
            headerText: "Önceki",
            contentText: "Raporun önceki sayfaya gidin."
        },
        next: {
            headerText: "Sonraki",
            contentText: "Raporun bir sonraki sayfaya gidin."
        },
        last: {
            headerText: "Son",
            contentText: "Raporun son sayfasına gidin."
        },
        documentMap: {
            headerText: "Belge Haritası",
            contentText: "Göster veya belge haritası gizlemek."
        },
        parameter: {
            headerText: "Parametre",
            contentText: "Göster veya parametreler bölmesini gizlemek."
        },
        zoomIn: {
            headerText: "Yakınlaştır",
            contentText: "Rapora yakınlaştırmak."
        },
        zoomOut: {
            headerText: "Uzaklaştır",
            contentText: "Raporun uzaklaştır."
        },
        refresh: {
            headerText: "Yenile",
            contentText: "raporu yenileyin."
        },
        find: {
            headerText: 'Bul',
            contentText: 'Rapordaki metni bulun.'
        },
        stop: {
            headerText: "durdurmak",
            contentText: "Raporu işlemeyi bırak."
        },
        printLayout: {
            headerText: "Baskı düzeni",
            contentText: "Baskı düzeni ve normal modları arasında geçiş."
        },
        pageIndex: {
            headerText: "Sayfa numarası",
            contentText: "Şu anki sayfa numarası görüntülemek için."
        },
        zoom: {
            headerText: "yakınlaştırma",
            contentText: "Raporda Yakınlaştırma veya uzaklaştırma."
        },
        back: {
            headerText: "geri",
            contentText: "geri ana rapora gidin."
        },
        fittopage: {
            headerText: "Sayfaya sığdır",
            contentText: "kaba rapor sayfasına sığdırmak.",
            pageWidth: "Sayfa Genişliği",
            pageHeight: "Tüm sayfa"
        },
        pagesetup: {
            headerText: "Sayfa ayarı",
            contentText: "Kağıt boyutunu, yönünü ve kenar boşluklarını değiştirmek için sayfa ayarları seçeneğini seçin."
        },
        exportsetup: {
            headerText: 'Dışa Aktarma Kurulumu',
            contentText: "Görüntü kalitesini ayarlamak, sözcük türünü kaydetmek ve belgeyi excel'de ayarlamak için dışa aktarma kurulumu seçeneğini seçin."
        }
    },
    pagesetupDialog: {
        close: 'Kapat',
        paperSize: 'Kağıt boyutu',
        height: 'Yükseklik',
        width: 'genişlik',
        margins: 'Kenar boşlukları',
        top: 'Üst',
        bottom: 'Alt',
        right: 'Sağ',
        left: 'Sol',
        pageUnits: 'Sayfa Birimleri',
        unitin: 'inç',
        unitcm: 'santimetre',
        inches: 'inç',
        centimeters: 'santimetre',
        orientation: 'Oryantasyon',
        portrait: 'Portre',
        landscape: 'peyzaj',
        doneButton: 'tamam',
        cancelButton: 'İptal etmek',
        paperTypes: [{ text: "A3", value: "A3" }, { text: "A4", value: "A4" }, { text: "B4(JIS)", value: "B4(JIS)" }, { text: "B5(JIS)", value: "B5(JIS)" }, { text: "Zarf #10", value: "Envelope #10" }, { text: "Zarf Hükümdarı", value: "Envelope Monarch" }, { text: "Yönetici", value: "Executive" }, { text: "Yasal", value: "Legal" }, { text: "Mektup", value: "Letter" }, { text: "tabloid", value: "Tabloid" }, { text: "Gelenek", value: "Custom" }]
    },
    exportsetupDialog: {
        close: 'Kapat',
        commonOptions: {
            header: 'Genel Ayarlar',
            imageQuality: 'Görüntü kalitesi',
            imageQualityTypes:
                [{ text: "Düşük", value: "2" },
                { text: "Orta", value: "5" },
                { text: "Yüksek", value: "10" }]
       },
        findAlertMessage: {
            resultsEndReached: 'Arama sonuçlarının sonuna ulaştınız. Devam etmek istiyorsanız, iletişim kutusunu kapatın ve tekrar arayın.',
            noResultsFound: 'Belirtilen metin, rapordaki hiçbir içerikle eşleşmiyor. Arama anahtar kelimenizi değiştirin ve tekrar deneyin.'
        },
        pdfOptions: {
            header: 'PDF Ayarları',
            complexScript: 'Karmaşık Komut Dosyası',
            conformance: 'Uygunluk Seviyesi',
            conformanceTypes: [{ text: "Hiçbiri", value: 0 }, { text: "Pdf/A1B", value: 1 }, { text: "Pdf/X1A2001", value: 2 }, { text: "Pdf/A2B", value: 3 }, { text: "Pdf/A3B", value: 4 },
            { text: "Pdf/A1A", value: 5 }, { text: "Pdf/A2A", value: 6 }, { text: "Pdf/A2U", value: 7 }, { text: "Pdf/A3A", value: 8 }, { text: "Pdf/A3U", value: 9 }],
        },
        excel: 'Excel',
        securityOptions: {
            header: "Güvenlik ayarları",
            enableProtection: "Korumayı Etkinleştir",
            protect: "Şifre Korumak için",
            edit: "Düzenlemek İçin Şifre",
        },
        wordOptions: {
            header: 'kelime Ayarları',
            protection: 'Koruma Türü',
            topSpacing: 'Üst Boşluk',
            bottomSpacing: 'Alt Boşluk',
            formatList: [
                { text: "Word 97-2003 Belgesi (.doc)", value: 0 },
                { text: "Word 97-2003 Şablonu (.dot)", value: 1 },
                { text: "Word belgesi (.docx)", value: 2 },
                { text: "Kesin açık XML belgesi 2007 (.docx)", value: 3 },
                { text: "Kesin açık XML belgesi 2010 (.docx)", value: 4 },
                { text: "Kesin açık XML belgesi 2013 (.docx)", value: 5 },
                { text: "Kesin açık XML Şablonu 2007 (.dotx)", value: 6 },
                { text: "Kesin açık XML Şablonu 2010 (.dotx)", value: 7 },
                { text: "Kesin açık XML Şablonu 2013 (.dotx)", value: 8 },
                { text: "Word Makro Etkin Belge 2007 (.docm)", value: 9 },
                { text: "Word Makro Etkin Belge 2010 (.docm)", value: 10 },
                { text: "Word Makro Etkin Belge 2013 (.docm)", value: 11 },
                { text: "Word Makro Etkin Şablon 2007 (.dotm)", value: 12 },
                { text: "Word Makro Etkin Şablon 2010 (.dotm)", value: 13 },
                { text: "Word Makro Etkin Şablon 2013 (.dotm)", value: 14 },
                { text: "Zengin metin formatı (.rtf)", value: 15 },
                { text: "düz metin (.txt)", value: 16 },
                { text: "web sayfası (.html)", value: 18 }
            ],
            layoutTypes: [{ text: "Varsayılan", value: 0 }, { text: "Üst düzey", value: 1 }],
            protectionTypes: [{ text: "Koruma yok", value: -1 }, { text: "Yalnızca revizyonlara izin ver", value: 0 }, { text: "Yalnızca yorumlara izin ver", value: 1 }, { text: "Yalnızca form alanlarına izin ver", value: 2 }, { text: "Salt okunura izin ver", value: 3 }],
        },
        layoutOption: 'Düzen Seçeneği',
        saveType: 'Türü Kaydet',
        unit: 'içinde',
        exportFormat: 'Dışa Aktarma Formatı',
        pptOptions: {
            header: "PowerPoint Ayarları",
            pptTypes: [
                { text: "Priz 97to2003 Sunum (.ppt)", value: 0 },
                { text: "Priz 2007 Sunum (.ppt)", value: 1 },
                { text: "Priz 2010 Sunum (.pptx)", value: 2 },
                { text: "Priz 2013 Sunum (.pptx)", value: 3 }
            ]
        },
        doneButton: 'tamam',
        cancelButton: 'İptal etmek',
        csvOptions: {
            delimiter: 'Alan Sınırlayıcı',
            formatter: 'Biçimlendirilmiş Değerler',
            header: 'CSV Ayarları',
            qualifier: 'Metin Niteleyici',
            customVal: 'Özel değer',
            qualifierList: [{ text: "İkili alıntı", value: "\"" }, { text: "Tek Alıntılar", value: "'" }, { text: "Hiçbiri", value: "" }, { text: "Gelenek", value: "Custom" }],
            delimiterList: [{ text: "Virgül", value: "," }, { text: "Uzay", value: " " }, { text: "Sekme", value: "   " }, { text: "Noktalı virgül", value: ";" }, { text: "Gelenek", value: "Custom" }]
        },
        htmlOptions: {
            header: 'HTML Ayarları',
            separator: 'Sayfa Ayırıcı'
        },
        excelOptions:
        {
            header: 'Excel Ayarları',
            sheetProtection: 'Sac Koruma',
            disableCellFormat: 'Hücre Formatını Devre Dışı Bırak',
            readonly: 'Sadece oku',
            saveTypes: [
                { text: "Excel97to2003 Çalışma Kitabı(.xls)", value: 0 },
                { text: "Excel2007 Çalışma Kitabı(.xlsx)", value: 1 },
                { text: "Excel2010 Çalışma Kitabı (.xlsx)", value: 2 },
                { text: "Excel2013 Çalışma Kitabı (.xlsx)", value: 3 },
                { text: "Excel2016 Çalışma Kitabı(.xlsx)", value: 4 }],
            sheetProtectionTypes: [
                { text: "Hiçbiri", value: 0 },
                { text: "nesneler", value: 1 },
                { text: "senaryolar", value: 2 },
                { text: "Hücreleri Biçimlendirme", value: 4 },
                { text: "Sütunları Biçimlendirme", value: 8 },
                { text: "Satırları Biçimlendirme", value: 16 },
                { text: "Sütun Ekleme", value: 32 },
                { text: "Satır Ekleme", value: 64 },
                { text: "Köprü Ekleme", value: 128 },
                { text: "Sütunları Silme", value: 256 },
                { text: "Satırları Silme", value: 512 },
                { text: "Kilitli Hücreler", value: 1024 },
                { text: "sıralama", value: 2048 },
                { text: "filtreleme", value: 4096 },
                { text: "Pivot Tabloları Kullanma", value: 8192 },
                { text: "Kilitlenmemiş Hücreler", value: 16384 },
                { text: "İçerik", value: 32768 },
                { text: "Tüm", value: 65535 }
            ],
            disableCellFormatTypes: [
                { text: "Hiçbiri", value: 0 },
                { text: "Tüm", value: 1 },
                { text: "Sınır", value: 2 },
                { text: "stil", value: 3 }
            ],
            layoutOptionTypes: [
                { text: "Varsayılan", value: 0 },
                { text: "Hücre Birleştirmeyi Yoksay", value: 1 }
            ],
        }
    },
    credential: {
        userName: 'Kullanıcı adı',
        password: 'Parola'
    },
    waterMark: {
        selectOption: 'Seçeneği Seç',
        selectValue: 'Bir değer seçin'
    },
    errorMessage: {
        startMessage: 'Rapor Görüntüleyici bu raporu yükleyen bazı sorunlarla karşılaştı. Lütfen',
        middleMessage: ' Buraya TIKLAYIN',
        endMessage: 'hata ayrıntılarını görmek için',
        closeMessage: 'Bu mesajı kapat',
        exportAjaxFailureMsg: 'Det gick inte att exportera dokumentet på grund av att det inte gick att ansluta Report Service.',
        printAjaxFailureMsg: 'Det gick inte att skriva ut dokumentet på grund av att det inte gick att ansluta Report Service.',
        reportLoadAjaxFailureMsg: 'Det gick inte att göra rapporteringsåtgärden på grund av misslyckande att ansluta Report Service.',
        cancelReportProcessMsg: 'Rapor işleme iptal edildi.',
    },
    progressMessage: {
        exportLoadingMessage: 'Förbereder exporterande dokument ... Vänligen vänta ...',
        printLoadingMessage: 'Preparing print data… Please wait...',
        printPreparationMessage: 'Preparing print data... {0}% completed... Please wait...',
        exportPreparationMessage: 'Preparing exporting document... {0}% completed... Please wait...',
        cancelText: 'iptal etmek',
    },
    alertMessage: {
        close: 'Kapat',
        title: 'ReportViewer',
        done: 'tamam',
        showDetails: 'Detayları göster',
        hideDetails: 'Detayları gizle',
        reportLoad: 'Raporu Yüklendi:',
        RVERR0001: 'ReportViewer Raporu yüklenemedi',
        RVERR0002: 'ReportViewer Raporu oluşturmayı başaramadı',
        RVERR0003: 'Ajax geri dönüşünde bir hata oluştu',
        RVERR0004: 'Lütfen parametre için bir değer seçin',
        RVERR0005: '{Parameterername} parametresinin bir değeri eksik',
        RVERR0006: 'Lütfen şamandıra veri tipi girişi verin',
        RVERR0007: 'Lütfen tamsayı veri tipi girişi verin',
        RVERR0008: 'ReportViewer Veri kaynağı kimlik bilgilerini doğrulayamadı',
        RVERR0009: 'Kenar boşlukları çakışıyor veya kağıttan çıkıyorlar. Farklı bir kenar boşluğu boyutu girin.',
        RVERR0010: 'Lütfen parametre için bir değer girin',
        RVERR0011: 'Parametre boş bırakılamaz',
        RVERR0012: 'Rapor parametresi {parameterprompt} için verilen değer, türü için geçerli değil.'
    },
    selectAll: 'Hepsini seç',
    viewButton: "Raporu görüntüle",
    parameterProcessingMessage: 'Laddar beroende parametrar ...'
};