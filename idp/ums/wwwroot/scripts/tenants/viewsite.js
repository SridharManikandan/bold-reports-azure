﻿var isUserTabLoaded = false;
var isAttributeTabLoaded = false;
var isFirstRequest = false;
var selectedUsers = [];
var selectedRecords = [];
var selectedUsersArrayPushPopAllowed = true;
var gridUserData = [];
var users = [];
var singleUserRemove = false;
var singleUserSelectedId;
var SelectedUserIdList = [];
var isSafari = navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1;
var needPush = true;
var isFreshLoad = true;
var isIsolationCodeUpdated = false;
var validateTimer;
var validateInterval = 1000;
var previousIndex = [];

function fnCreate() {
    $("#checkbox-header").change(headCheckboxOnChange);
}

$(document).ready(function () {
    addPlacehoder("#grant-users-access-dialog");
    addPlacehoder("#search-area");
    addPlacehoder("#search-app-admins");
    addPlacehoder("#add-admin-search");
    addPlacehoder("#add-user-search-area");
    $("[data-toggle='tooltip']").tooltip();
    createWaitingPopup('user-remove-confirmation-dialog');
    createWaitingPopup('add-tenant-popup');
    createWaitingPopup('grant-users-access-dialog');

    var grantUserAccessDialog = new ej.popups.Dialog({
        header: window.TM.App.LocalizationContent.GrantAccessToUsers + " - " + tenantName,
        content: document.getElementById("grant-users-access-dialog-content"),
        showCloseIcon: true,
        buttons: [
            { click: provideAccesstoUsers, buttonModel: { content: window.TM.App.LocalizationContent.GrantSiteAccessButton, isPrimary: true, cssClass: 'provide-access-button' } },
            { click: onAddUsersDialogClose, buttonModel: { content: window.TM.App.LocalizationContent.CancelButton, cssClass: 'cancel-button' } }
        ],
        width: "900px",
        height: "539px",
        isModal: true,
        visible: false,
        closeOnEscape: true,
        animationSettings: { effect: 'Zoom' },
        close: onAddUsersDialogClose,
    });
    grantUserAccessDialog.appendTo("#grant-users-access-dialog");

    $("#add-users-button").on("click", function () {
        var gridObj = document.getElementById('users_grid').ej2_instances[0];
        gridObj.clearSelection();
        $("#remove-users-button").addClass("hide").removeClass("show");
        document.getElementById("grant-users-access-dialog").ej2_instances[0].show();
        onAddUsersDialogOpen();
    });

    var removeUserAccessDialog = new ej.popups.Dialog({
        header: window.TM.App.LocalizationContent.RevokeAccess,
        content: document.getElementById("user-remove-confirmation-dialog-content"),
        showCloseIcon: true,
        buttons: [
            { click: removeConfirm, buttonModel: { content: window.TM.App.LocalizationContent.YesButton, isPrimary: true } },
            { click: onUserRemoveDialogClose, buttonModel: { content: window.TM.App.LocalizationContent.CancelButton, cssClass: 'cancel-button' } }
        ],
        width: "472px",
        height: "auto",
        isModal: true,
        visible: false,
        closeOnEscape: true,
        animationSettings: { effect: 'Zoom' },
        close: "onUserRemoveDialogClose",
    });
    removeUserAccessDialog.appendTo("#user-remove-confirmation-dialog");

    var addTenantDialog = new ej.popups.Dialog({
        width: $(window).width(),
        height: $(window).height(),
        isModal: false,
        enableResize: false,
        visible: false,
        closeOnEscape: true
    });
    addTenantDialog.appendTo("#add-tenant-popup");

    var query = window.location.search;
    if (query.includes("?tab=general")) {
        $('a[href="#application-tab"]').tab("show");
    }
    else if (query.includes("?tab=users")) {
        if (!isUserTabLoaded) {
            getAppUsers();
            isUserTabLoaded = true;
        }
        $('a[href="#users-tab"]').tab("show");
    }
    else if (query.includes("?tab=isolation-code")) {
        $('a[href="#data-security-tab"]').tab("show");
        enableIsolationCode();
    }
    else if (query.includes("?tab=attributes")) {
        if (!isAttributeTabLoaded) {
            getAttributes();
            isAttributeTabLoaded = true;
        }
        $('a[href="#custom-attribute-tab"]').tab("show");
    }
    else {
        isFreshLoad = false;
        history.replaceState(null, null, window.location.href);
    }

    window.addEventListener("popstate", function (e) {
        needPush = false;
        var tab = e.state;
        if (tab === "general") {
            $("#application a").attr("href", "#application-tab");
            $('a[href="#application-tab"]').tab('show');
        }
        else if (tab === "users") {
            $("#users a").attr("href", "#users-tab");
            $('a[href="#users-tab"]').tab('show');
        }
        else if (tab === "isolation-code") {
            $("#data-security a").attr("href", "#data-security-tab");
            $('a[href="#data-security-tab"]').tab('show');
        }
        else if (tab === "attributes") {
            $("#custom-attribute a").attr("href", "#custom-attribute-tab");
            $('a[href="#custom-attribute-tab"]').tab('show');
        }
        else {
            $("#application a").attr("href", "#application-tab");
            $('a[href="#application-tab"]').tab('show');
        }
    });

    $(document).on('click', "input#add-user", function () {
        var firstName = $("#firstname").val().trim();
        var userName = $("#username").val().trim().toLowerCase();
        var password = $("#new-password").val();
        var emailid = $('#mailid').val().trim();
        var tenantId = $("#myId").val();
        var isValid = $("#dialog-container").valid();
        $(".popover").hide();

        if (isValid) {
            $(".useradd-validation-messages").css("display", "none");
            var g = document.getElementById('users_grid').ej2_instances[0];

            showWaitingPopup('user-add-dialog');

            var lastName = $('#lastname').val().trim();
            var values = "&userName=" + userName + "&emailid=" + emailid + "&firstname=" + firstName + "&lastname=" + lastName + "&password=" + password + "&tenantId=" + tenantId;

            $.ajax({
                type: "POST", url: isPresentUserNameAndEmailId, data: { userName: userName, emailId: emailid.toLowerCase() },
                success: function (data) {
                    if (data.IsUserNameExist || data.IsEmailExist) {
                        if (data.IsUserNameExist) {
                            $('#username').closest('div').addClass("has-error");
                            $("#invalid-username").html(window.TM.App.LocalizationContent.UsernameExists).css("display", "block");
                            $(".useradd-validation-messages").css("display", "block");
                            hideWaitingPopup('user-add-dialog');
                        }
                        if (data.IsEmailExist) {
                            $('#mailid').closest('div').addClass("has-error");
                            $("#invalid-email").html(window.TM.App.LocalizationContent.EmailAddressExists).css("display", "block");
                            $(".useradd-validation-messages").css("display", "block");
                            hideWaitingPopup('user-add-dialog');
                        }
                        return;
                    }
                    else {
                        $.ajax({
                            type: "POST", url: addUserUrl, data: values,
                            success: function (data) {
                                if (data.Data) {
                                    hideWaitingPopup('user-add-dialog');
                                    $("#add-user").attr("disabled", "disabled");
                                    $("#create-new-user").removeClass("hide").addClass("show");
                                    $(".form input[type='text']").val('');
                                    onUserAddDialogClose();
                                    $.ajax({
                                        type: "POST",
                                        url: checkMailSettingUrl,
                                        success: function (result) {
                                            var messageText = "";
                                            if (result.activation == 0) {
                                                SuccessAlert(window.TM.App.LocalizationContent.AddUser, window.TM.App.LocalizationContent.UserAddedActivated, 7000)
                                            }
                                            else if (result.result == "success" && result.activation == 1) {
                                                SuccessAlert(window.TM.App.LocalizationContent.AddUser, window.TM.App.LocalizationContent.UserAdded, 7000);
                                            }
                                            else if (result.result == "failure" && result.isAdmin == true && result.activation == 1) {
                                                WarningAlert(window.TM.App.LocalizationContent.AddUser, window.TM.App.LocalizationContent.UserActivationEmailCannotSent, 7000);
                                            }
                                            g.refresh();
                                        }
                                    });
                                }
                                else {
                                    onUserAddDialogClose();
                                    WarningAlert(window.TM.App.LocalizationContent.AddUser, window.TM.App.LocalizationContent.InternalServerErrorTryAgain, data.Message, 7000);
                                    g.refresh();
                                }
                            }
                        });
                    }

                }
            });

        }
        else {
            $(".useradd-validation-messages").css("display", "block");
        }
    });

});

$(document).on("shown.bs.tab", 'a[data-toggle="tab"]', function (e) {
    var target = $(e.target).attr("href"); // activated tab
    var data;

    if (target.indexOf("#application-tab") !== -1) {
        data = "general";
    }

    else if (target.indexOf("#users-tab") !== -1) {
        data = "users";
        if (!isUserTabLoaded) {
            getAppUsers();
            isUserTabLoaded = true;
        }
    }

    else if (target.indexOf("#data-security-tab") !== -1) {
        data = "isolation-code";
    }

    else if (target.indexOf("#custom-attribute-tab") !== -1) {
        data = "attributes";
        if (!isAttributeTabLoaded) {
            getAttributes();
            isAttributeTabLoaded = true;
        }
    }
    pushUrl(data);
    needPush = true;
});

function pushUrl(data) {
    if (needPush) {
        if (isFreshLoad) {
            history.replaceState(data, null, window.location.pathname + "?tab=" + data);
            isFreshLoad = false;
        }
        else {
            history.pushState(data, null, window.location.pathname + "?tab=" + data);
        }
    }
}

function fnOnApplicationGridLoad() {
    isFirstRequest = true;
    var searchValue = $("#search-tenants").val();
    if (this.properties.query.params.length > 0) {
        this.properties.query.params = [];
        this.properties.query.params.push({ key: "searchKey", value: searchValue });
    }
    else {
        this.properties.query.params.push({ key: "searchKey", value: searchValue });
    }
}

function fnApplicationRowSelected() {
    var applicationgrid = document.getElementById('tenants_grid').ej2_instances[0];
    var selectedApplications = applicationgrid.getSelectedRecords();
}

function fnApplicationRecordClick(args) {
    var checkbox = args.row.find(".application-grid-chkbx");
    checkbox.prop("checked", !checkbox.prop("checked"));
}

function fnOnApplicationGridActionBegin(args) {
    isFirstRequest = true;
    var searchValue = $("#search-tenants").val();
    if (this.properties.query.params.length > 0) {
        this.properties.query.params = [];
        this.properties.query.params.push({ key: "searchKey", value: searchValue });
    }
    else {
        this.properties.query.params.push({ key: "searchKey", value: searchValue });
    }
}

function fnOnUserGridActionBegin(args) {
    isFirstRequest = true;
    var searchValue = $("#search-app-users").val();
    if (this.properties.query.params.length > 0) {
        this.properties.query.params = [];
        this.properties.query.params.push({ key: "searchKey", value: searchValue });
    }
    else {
        this.properties.query.params.push({ key: "searchKey", value: searchValue });
    }
}

function fnOnAddUserGridActionBegin(args) {
    isFirstRequest = true;
    var searchValue = $("#add-user-search").val();
    if (this.properties.query.params.length > 0) {
        this.properties.query.params = [];
        this.properties.query.params.push({ key: "searchKey", value: searchValue });
    }
    else {
        this.properties.query.params.push({ key: "searchKey", value: searchValue });
    }
}

function fnOnApplicationGridActionComplete(args) {
    $('[data-toggle="tooltip"]').tooltip({
            container: 'body'
        });
    if (this.properties.pageSettings.totalRecordsCount != null) {
        $("#application-count").text(this.properties.pageSettings.totalRecordsCount);
    }
    else {
        $("#application-count").text(0);
    }

   
    if ($("#application-list-container").is(":visible")) {
        query = (window.location.search).toString();
        if (query === "?action=create-new-site") {
            $("#add-tenant").trigger("click");
        }
    }
}

function fnOnUserGridActionComplete(args) {
    $('[data-toggle="tooltip"]').tooltip();
    var usergrid = document.getElementById('users_grid').ej2_instances[0];
    if (args.requestType == "paging" || args.requestType == "sorting") {
        if (typeof usergrid.currentViewData != 'undefined') {
            for (var i = 0; i < usergrid.currentViewData.length; i++) {
                var record = usergrid.currentViewData[i];
                var index = jQuery.inArray(JSON.stringify(record.UserId), $.map(selectedUsers, JSON.stringify));
                if (index != -1) {
                    selectedUsersArrayPushPopAllowed = false; //during pagination, pushpop operation should not be done for the users selected already 
                    usergrid.selectRows(i);
                }
            }
        }
    }
    if (args.requestType == "refresh" || args.requestType == "filtering") {
        selectedUsers = [];
    }

    if (usergrid.getSelectedRecords().length != 0) {
        $("#remove-users-button").removeClass("hide").addClass("show");
    }
    else {
        $("#remove-users-button").removeClass("show").addClass("hide");
    }
}

function rowBound() {
    if (isFirstRequest) {
        isFirstRequest = false;
    }
}

$(document).on("click", ".search-application", function () {
    var gridObj = document.getElementById('tenants_grid').ej2_instances[0];
    gridObj.pageSettings.currentPage = 1;
    gridObj.refresh();
});

function getAppUsers() {
    var requestUrl = $("meta[name='ump-app-users-link']").attr("content") + $("#application-id").val();
    var data = new ejs.data.DataManager({
        url: requestUrl,
        adaptor: new ejs.data.UrlAdaptor(),
    });
    var userGrid = new ejs.grids.Grid({
        dataSource: data,
        gridLines: 'None',
        allowPaging: true,
        allowSorting: true,
        allowSelection: true,
        selectionSettings: { type: 'Multiple' ,mode: 'Row'},
        pageSettings: { pageSize: 20 },
        rowSelecting: function (e) {
            this.multiSelectCtrlRequest = true;
        },
        enableHover: true,
        enableAltRow: false,
        rowDataBound: function (args) {
            var height = $(".e-gridcontent").height();
            if (height != null) {
                rowBound();
            }
            args.row.querySelector('.revoke-access').firstChild.style.visibility = "hidden";
            //  Mouse enter and leave events are bound to the row elements 
            args.row.addEventListener('mouseenter', function (args) {
                // Menu is shown 
                args.target.querySelector('.revoke-access').firstChild.style.visibility = "visible";
            })
            args.row.addEventListener('mouseleave', function (args) {
                // Menu is hidden 
                args.target.querySelector('.revoke-access').firstChild.style.visibility = "hidden";
            }) 
        },
        dataBound: function (args) {
            $('[data-toggle="tooltip"]').tooltip(
                {
                    container: 'body'
                });
        },
        load: fnOnUserGridActionBegin,
        actionBegin: fnOnUserGridActionBegin,
        actionComplete: fnOnUserGridActionComplete,
        rowSelected: onUserRecordSelect,
        rowDeselected: onUserRecordSelect,
        columns: [
            {
                allowFiltering: false,
                template: "#user-profile-template",
                width: 115,
                headerTemplate: "#username-header",
                field: "DisplayName",
                type: "string"
            },
            {
                field: "Username",
                allowFiltering: false,
                template: "#user-username-template",
                headerTemplate: "#user-username-header",
                type: "string",
                width: 120
            },
            {
                field: "Email",
                allowFiltering: false,
                template: "#user-email-template",
                headerTemplate: "#email-header",
                type: "string",
                width: 135
            },
            {
                field: "UserStatus",
                allowFiltering: false,
                template: "#user-status-template",
                headerTemplate: "#status-header",
                type: "string",
                width: 50
            },
            {
                template: true,
                allowSorting: false,
                allowFiltering: false,
                template: "#commandstemplate",
                headerTemplate: "#actionsheader",
                width: 80,
                customAttributes: { class: 'revoke-access' }
            }
        ]
    });
    userGrid.appendTo("#users_grid");
}

function getAttributes() {
    var attributeGrid = new ejs.grids.Grid({
        dataSource: window.siteAttributes,
        gridLines: 'None',
        allowSorting: true,
        allowSearching: false,
        allowPaging: true,
        allowSelection: true,
        allowFiltering: false,
        pageSettings: { pageSize: 10 },
        enableHover: true,
        enableAltRow: false,
        created: initialSiteGridCreate,
        dataBound: function (args) {
            $('[data-toggle="tooltip"]').tooltip(
                {
                    container: 'body'
                });
        },
        columns: [
            { field: 'Name', template: "#attribute-name-template", headerText: 'Name', width: 40, allowSorting: true, allowFiltering: true },
            { field: 'Value', template: "#attribute-value-template", headerText: 'Value', width: 60, allowSorting: true, allowFiltering: true },
            { field: 'Description', template: "#attribute-description-template", headerText: 'Description', width: 50, allowSorting: true, allowFiltering: true },
            { field: 'ModifiedDateString', headerText: 'Last Modified', width: 40, allowSorting: true, allowFiltering: false },
            { field: 'Options', headerText: '', template: "#options", width: 20, allowSorting: false, allowFiltering: false }
        ]
    });
    attributeGrid.appendTo("#SiteAttributesGrid");

    $.ajax({
        type: "GET",
        url: siteAttributesUrl,
        data: { tenantInfoId: tenantInfoId },
        success: function (result) {
            if (result.Status) {
                var siteAttributesGrid = document.getElementById('SiteAttributesGrid').ej2_instances[0];
                siteAttributesGrid.dataSource = result.Attributes;
            }
            hideWaitingPopup("SiteAttributesGrid");
        }
    });
}

function getUsersWithoutAccess() {
    var requestUrl = $("meta[name='add-ump-app-users-link']").attr("content") + $("#application-id").val();
    var data = new ejs.data.DataManager({
        url: requestUrl,
        adaptor: new ejs.data.UrlAdaptor()
    });
    if (document.getElementById('add_users_grid').ej2_instances == null) {      
        var addUsersGrid = new ejs.grids.Grid({
            dataSource: data,
            gridLines: 'None',
            allowPaging: true,
            allowSorting: true,
            enableAltRow: false,
            allowSearching: true,
            allowSelection: true,
            allowFiltering: false,
            pageSettings: { pageSize: 20 },
            selectionSettings: { type: 'Multiple' },
            enableHover: true,
            created: fnCreate,
            load: fnOnAddUserGridActionBegin,
            actionBegin: fnOnAddUserGridActionBegin,
            actionComplete: fnOnAddUserGridActionComplete,
            rowDataBound: function () {
                var height = $(".e-gridcontent").height();
                if (height != null) {
                    rowBound();
                }
            },
            dataBound: function (args) {
                $('[data-toggle="tooltip"]').tooltip(
                    {
                        container: 'body'
                    });
            },
            columns: [
                {
                    headerTemplate: "#checkbox-header-template",
                    template: "#checkbox-row-template",
                    width: 15,
                    allowFiltering: false
                },
                {
                    allowFiltering: false,
                    template: "#user-name-template",
                    width: 115,
                    headerTemplate: "#user-name-header",
                    field: "DisplayName",
                    type: "string"
                },
                {
                    allowFiltering: false,
                    field: "Email",
                    template: "#email-template",
                    headerTemplate: "#user-email-header",
                    type: "string",
                    width: 155
                }
            ]
        });
        addUsersGrid.appendTo("#add_users_grid");
    }
    else {
        document.getElementById('add_users_grid').ej2_instances[0].dataSource = data
    }
}

function enableAccessButton() {
    $(".provide-access-button").attr("disabled", selectedUsers.length == 0);}

function fnOnAddUserGridActionComplete(args) {
    var gridObj = document.getElementById('add_users_grid').ej2_instances[0];
    var checkboxHeader = $("#checkbox-header");
    checkboxHeader.prop("disabled", true).change(headCheckboxOnChange);
    gridObj.multiSelectCtrlRequest = true;
    gridObj.clearSelection();
    if (args.requestType === "paging" || args.requestType === "sorting") {
        if (typeof gridObj.currentViewData != 'undefined') {
            for (var i = 0; i < gridObj.currentViewData.length; i++) {
                var record = gridObj.currentViewData[i];
                var rowUniId = record.UserId;
                var index = jQuery.inArray(JSON.stringify(record.UserId), $.map(selectedUsers, JSON.stringify));
                if (index != -1) {
                    var rowIndex = $($("#add_users_grid .checkbox-row[data-checked-id='" + rowUniId + "']").closest("td").parent()).index();
                    $("#add_users_grid .checkbox-row#row-check" + rowUniId).prop("checked", true);
                    gridObj.selectionModule.selectRow(rowIndex);
                }
            }
        }
        checkboxHeader.attr("disabled", gridObj.currentViewData.length == 0);
    }
    if (args.requestType == "refresh" || args.requestType == "filtering") {
        selectedUsers = [];
        checkboxHeader.attr("disabled", gridObj.currentViewData.length == 0);
    }

    if (args.requestType === "paging" || args.requestType === "sorting" || args.requestType === "refresh" || args.requestType === "filtering") {
        if ((gridObj.selectionModule.selectedRecords.length) == gridObj.currentViewData.length) {
            checkboxHeader.prop("checked", true);
        } else {
            checkboxHeader.prop("checked", false);
        }
    }

    enableAccessButton();
    $('[data-toggle="tooltip"]').tooltip();
}

$(document).on("change", ".checkbox-row", function (args) {
    var gridObj = document.getElementById('add_users_grid').ej2_instances[0];
    var checkBoxList = $(".checkbox-row");
    var index = checkBoxList.index(this);
    var checkboxHeader = $("#checkbox-header");
    var isChecked = $(this).is(":checked");
    var currentId = $(this).attr("data-checked-id");
    if (isChecked) {
        gridObj.multiSelectCtrlRequest = true;
        selectedUsers.push(currentId);
        previousIndex.push(index);
        gridObj.selectionModule.selectRows(previousIndex, index);
    }
    
    else {
        var arrayIndex = selectedUsers.indexOf(currentId);
        var previousArrayIndex = previousIndex.indexOf(index)
        selectedUsers.splice(arrayIndex, 1);
        previousIndex.splice(previousArrayIndex, 1);
        gridObj.selectionModule.selectRows(previousIndex);
    }
    gridAdminData = gridObj.currentViewData;
    var userRowCheckedCount = 0;
    for (i = 0; i <= gridAdminData.length - 1; i++) {
        if ($($("#add_users_grid .checkbox-row")[i]).is(":checked") == true) {
            userRowCheckedCount = userRowCheckedCount + 1;
        }
    }
    if (gridObj.getRows() != null) {
        checkboxHeader.prop("checked", gridAdminData.length === userRowCheckedCount);
    }
    enableAccessButton();
});

function onAddUsersDialogOpen() {
    $(".provide-access-button").attr("disabled", "diasabled");
    selectedUsers = [];
    getUsersWithoutAccess();
}

function onAddUsersDialogClose() {
    var gridObj = document.getElementById('add_users_grid').ej2_instances[0];
    gridObj.clearSelection();
    selectedUsers = [];
    $("#add-user-search").val("");
    $("#add-user-clear-search").css("display", "none");
    $(".search-icon").css("display", "block");
    $(".checkbox-header").prop("checked", false);
    $(".checkbox-row").prop("checked", false);
    gridObj.pageSettings.currentPage = 1;
    gridObj.refresh();
    document.getElementById("grant-users-access-dialog").ej2_instances[0].hide();
}

function refreshTemplate() {
    $("#checkbox-header").change(headCheckboxOnChange);
}

function headCheckboxOnChange() {
    var gridObj = document.getElementById('add_users_grid').ej2_instances[0];
    gridUserData = gridObj.currentViewData;
    if ($("#checkbox-header").prop("checked") == true) {
        $(".checkbox-row").prop("checked", true);
        gridObj.multiSelectCtrlRequest = true;
        gridObj.selectRowsByRange(0, $(".checkbox-row").length);
        for (var i = 0; i < gridUserData.length; i++) {
            var index = jQuery.inArray(JSON.stringify(gridUserData[i].UserId), $.map(selectedUsers, JSON.stringify));
            if (index == -1) {
                selectedUsers.push(gridUserData[i].UserId);
            }
        }
        if (isSafari) {
            $(".checkbox-header-label").addClass("check");
        }
    }
    else {
        $(".checkbox-row").prop("checked", false);
        gridObj.clearSelection();
        for (var i = 0; i < gridUserData.length; i++) {
            var index = jQuery.inArray(JSON.stringify(gridUserData[i].UserId), $.map(selectedUsers, JSON.stringify));
            if (index != -1) {
                selectedUsers.splice(index, 1);
            }
        }
        if (isSafari) {
            $(".checkbox-header-label").removeClass("check");
        }
    }
    enableAccessButton();
}

function provideAccesstoUsers() {
    var requestUrl = $("meta[name='provide-app-access-link']").attr("content") + $("#application-id").val();
    if (selectedUsers.length > 0) {
        $("#grant-users-access-dialog").children(".e-spinner-pane").addClass("e-spin-show").addClass("e-spinner-bg").removeClass("e-spin-hide");
        $.ajax({
            type: "POST",
            data: { selectedUsers: selectedUsers },
            url: requestUrl,
            success: function (result) {
                $("#grant-users-access-dialog").children(".e-spinner-pane").removeClass("e-spin-show").removeClass("e-spinner-bg").addClass("e-spin-hide");
                $(".provide-access-button").attr("disabled", "disabled");
                var userGridObj = document.getElementById('users_grid').ej2_instances[0];
                userGridObj.refresh();
                onAddUsersDialogClose();
                if (result.status) {
                    var content = window.TM.App.LocalizationContent.GrantedAccessTo + " " + result.count + " " + window.TM.App.LocalizationContent.UsersSuccessfully;
                    SuccessAlert(window.TM.App.LocalizationContent.GrantSiteAccess, content, 7000);
                } else {
                    WarningAlert(window.TM.App.LocalizationContent.GrantSiteAccess, window.TM.App.LocalizationContent.GrantSiteAccessError, result.Message, 7000);
                }
            }
        });
    }
}

////Remove user Access
$(document).on("click", ".delete-permission", function () {
    singleUserSelectedId = $(this).attr("data-user-id");
    document.getElementById("user-remove-confirmation-dialog").ej2_instances[0].show();
    singleUserRemove = true;
});

function onUserRemoveDialogClose() {
    document.getElementById("user-remove-confirmation-dialog").ej2_instances[0].hide();
}

function removeConfirm() {
    if (singleUserRemove) {
        users = singleUserSelectedId;
    } else {
        var usergrid = document.getElementById('users_grid').ej2_instances[0];
        selectedRecords = usergrid.getSelectedRecords();
        jQuery.each(selectedRecords, function (index, record) {
            selectedUsers.push(record.UserId)
        });
        users = selectedUsers;
    }
    removeUserAccess(users);
}

function removeUserAccess(users) {
    var requestUrl = $("meta[name='remove-app-access-link']").attr("content") + $("#application-id").val();
    if (users.length > 0) {
        showWaitingPopup('user-remove-confirmation-dialog');
        $.ajax({
            type: "POST",
            data: { selectedUsers: users },
            url: requestUrl,
            success: function (result) {
                hideWaitingPopup('user-remove-confirmation-dialog');
                var userGridObj = document.getElementById('users_grid').ej2_instances[0];
                userGridObj.clearSelection();
                userGridObj.pageSettings.currentPage = getCurrentPageNumber(userGridObj.pageSettings.pageSize, selectedUsers.length, userGridObj.pageSettings.totalRecordsCount, userGridObj.pageSettings.currentPage);
                selectedUsers = [];
                userGridObj.refresh();
                $("#remove-users-button").removeClass("show").addClass("hide");
                document.getElementById("user-remove-confirmation-dialog").ej2_instances[0].hide();
                if (result.status) {
                    var content = window.TM.App.LocalizationContent.RevokedAccessFor + " " + result.count + " " + window.TM.App.LocalizationContent.UsersSuccessfully;
                    SuccessAlert(window.TM.App.LocalizationContent.RevokeSiteAccess, content, 7000);
                } else {
                    WarningAlert(window.TM.App.LocalizationContent.RevokeSiteAccess, window.TM.App.LocalizationContent.RevokeSiteAccessError, result.Message, 7000);
                }
                singleUserRemove = false;
                users = [];
            }
        });
    }
}

$(document).on("click", "#remove-users-button", function () {
    document.getElementById("user-remove-confirmation-dialog").ej2_instances[0].show();
});

function onUserRecordSelect(args) {
    var usergrid = document.getElementById('users_grid').ej2_instances[0];
    selectedRecords = usergrid.getSelectedRecords();
    selectedUsersArrayPushPopAllowed = true;
    if (selectedRecords.length >= 1) {
        $("#remove-users-button").removeClass("hide").addClass("show");
    }
    else {
        $("#remove-users-button").addClass("hide").removeClass("show");
    }
}

$(document).on("click", "#application-clientid", function () {
    $("#application-clientid").select();
});

$(document).on("click", "#application-accesstoken", function () {
    $("#application-accesstoken").select();
});

$(document).on("click", "#add-tenant", function () {
    var tenantId = "";
    $("#add-tenant-iframe").attr("src", addTenantUrl + "?actionType=create" + "&tenantId=" + tenantId);
    document.getElementById("add-tenant-popup").ej2_instances[0].show();
    showWaitingPopup('add-tenant-popup');
});

$(document).on("click", ".tenant-action", function (e) {
    var action = $(this).attr("data-action").trim();
    var tenantId = $(this).attr("data-tenant-id").trim();
    var tenantName = $(this).attr("data-tenant-name").trim();
    var messageContent = "Are you sure you want " + action + " site - <span class='tenant-name'>" + tenantName + "</span> ?";
    if (action === "activate") {
        headerIcon = "tick";
        headerText = window.TM.App.LocalizationContent.Activate;
        actionUrl = activateTenantUrl;
    }
    else if (action === "suspend") {
        headerIcon = "suspend";
        headerText = window.TM.App.LocalizationContent.Suspend;
        actionUrl = suspendTenantUrl;
    }
    else if (action === "edit") {
        $("#add-tenant-iframe").attr("src", addTenantUrl + "?actionType=" + action + "&tenantId=" + tenantId);
        document.getElementById("add-tenant-popup").ej2_instances[0].show();
        showWaitingPopup('add-tenant-popup');
    }
    else if (action === "delete") {
        headerIcon = "delete";
        headerText = window.TM.App.LocalizationContent.Delete;
        actionUrl = deleteTenantUrl;
        messageContent += "<br/><br/><div><span><input type='checkbox' class='material-checkbox' id='delete-database-checkbox' /><input id='delete-database-checkbox' type='hidden'/><label for='delete-database-checkbox' class='label-database'>" + window.TM.App.LocalizationContent.DeleteDatabase + "</label></span ></div><div class='tenant-delete-warning'> <span>" + window.TM.App.LocalizationContent.WarningColon + "</span><div class = 'warning-content'> " + window.TM.App.LocalizationContent.DeleteAllResourceWithoutDataBase + "</div></div>";
    }
    if (action !== "edit") {
        messageBox("su-" + headerIcon, headerText + " " + window.TM.App.LocalizationContent.SiteLetter, messageContent, "error", function () {
            updateTenantStatus(actionUrl, tenantId, action);
        });
    }
});

$(document).on("change", "#delete-database-checkbox", function () {
    if ($(this).is(":checked")) {
        $(".warning-content").html(window.TM.App.LocalizationContent.DeleteAllResource);
    } else {
        $(".warning-content").html(window.TM.App.LocalizationContent.DeleteAllResourceWithoutDataBase);
    }
});

function updateTenantStatus(actionUrl, tenantId, action) {
    showWaitingPopup('messageBox');
    var actionName = action === "suspend" ? window.TM.App.LocalizationContent.Suspend : action === "delete" ? window.TM.App.LocalizationContent.Delete : window.TM.App.LocalizationContent.Activate;
    var isDeleteDatabase = $("#delete-database-checkbox").is(":checked");
    var input = {}
    if (action === "delete") {
        input = {
            tenantId: tenantId,
            isDeleteDatabase: isDeleteDatabase

        };

    } else {
        input = { tenantId: tenantId }
    }
    $.ajax({
        type: "POST",
        url: actionUrl,
        data: input,
        success: function (data) {
            if (data.Success) {
                if (action === "suspend") {
                    SuccessAlert(actionName + " " + window.TM.App.LocalizationContent.SiteLetter, window.TM.App.LocalizationContent.SiteSuspendSuccess, 7000);
                }
                else if (action === "delete") {
                    if (!data.Value) {
                        SuccessAlert(actionName + " " + window.TM.App.LocalizationContent.SiteLetter,
                            window.TM.App.LocalizationContent.SiteDeleteSuccesswithoutdatabase,
                            7000);
                    } else {
                        SuccessAlert(actionName + " " + window.TM.App.LocalizationContent.SiteLetter,
                            window.TM.App.LocalizationContent.SiteDeleteSuccess,
                            7000);
                    }
                }
                else if (action === "activate") {
                    SuccessAlert(actionName + " " + window.TM.App.LocalizationContent.SiteLetter, window.TM.App.LocalizationContent.SiteActivatedSuccess, 7000);
                }

                var tenantGridObj = document.getElementById('tenants_grid').ej2_instances[0];
                tenantGridObj.refresh();
            }
            else {
                WarningAlert(actionName + " " + window.TM.App.LocalizationContent.SiteLetter, window.TM.App.LocalizationContent.InternalServerErrorTryAgain, data.Message, 7000);
            }
        },
        complete: function () {
            hideWaitingPopup('messageBox');
            onCloseMessageBox();
        }
    });
}


function enableIsolationCode() {
    isolationCode = isIsolationCodeUpdated ? $("#isolation-code").val().trim() : isolationCode;
    var isEnabled = $("#isolation-enable-switch").is(":checked");
    if (isEnabled) {
        $("#isolation-code").removeAttr("disabled");
        $("#isolation-code").focus();
    } else {
        $("#isolation-code").attr('disabled', 'disabled');
        $("#isolation-code").val(isolationCode);
        $("#isolation-code-validation").html("");
        $("#isolation-code").removeClass("has-error");
        isIsolationCodeUpdated = false;
    }

    if ($("#isolation-code").val() == "" && isEnabled) {
        $("#update-isolation-code").attr("disabled", true);
        $("#isolation-code-validation").html(window.TM.App.LocalizationContent.IsolationCodeValidator);
    }
    else {
        $("#isolation-code-validation").html("");
        $("#update-isolation-code").attr("disabled", false);
    }
}

$(document).on("click", "#update-isolation-code", function (e) {
    var isolationCode = $("#isolation-code").val().trim();
    var tenantInfoId = $(".isolation-code-value").attr("data-tenant-id");
    var isIsolationCodeEnabled = $("#isolation-enable-switch").is(":checked");
    showWaitingPopup('content-area');
    $.ajax({
        type: "POST",
        data: { tenantInfoId: tenantInfoId, isolationCode: isolationCode, isIsolationCodeEnabled: isIsolationCodeEnabled },
        url: updateIsolationCodeUrl,
        success: function (result) {
            if (result.Status) {
                isIsolationCodeUpdated = true;
                SuccessAlert(window.TM.App.LocalizationContent.IsolationCode, window.TM.App.LocalizationContent.IsolationCodeSucess, 7000);
                $("#update-isolation-code").attr("disabled", true);
            } else {
                WarningAlert(window.TM.App.LocalizationContent.IsolationCode, window.TM.App.LocalizationContent.IsolationCodeError, result.Message,  7000);
            }
            hideWaitingPopup('content-area');
        }
    });
});



$(document).on("keyup", "#isolation-code", function (e) {
    clearTimeout(validateTimer);
    validateTimer = setTimeout(validateCode, validateInterval);
});

$(document).on("keydown", "#isolation-code", function (e) {
    clearTimeout(validateTimer);
});

function validateCode() {
    ValidateIsolationCode($("#isolation-code").val(), "#isolation-code");
}

$(document).on("click", "#data-security", function (e) {
    enableIsolationCode();
});
