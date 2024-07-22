class Menu {
    constructor(elem) {
        this._elem = elem;
        this._inputs = $('#admin_main').find('input[type="text"], input[type="checkbox"]');
        this._editBtn = $(elem).find('[data-action="edit"]');
        this._saveBtn = $(elem).find('[data-action="save"]');
        this._cancelBtn = $(elem).find('[data-action="cancel"]');
        this._referenceBtns = $('.add-reference, .delete-reference');

        this.originalValues = {};
        this.originalHtml = '';

        elem.onclick = this.onClick.bind(this);
        this.disableInputs(); // Initialize with inputs disabled
    }

    edit() {
        this.enableInputs();
        this.storeOriginalValues();
    }

    save() {
        // TODO: Save the data
        this.disableInputs();
    }

    cancel() {
        this.disableInputs();
        this.restoreOriginalValues();
    }

    enableInputs() {
        this._inputs.prop('disabled', false);
        this._editBtn.hide();
        this._saveBtn.show();
        this._cancelBtn.show();
        this._referenceBtns.show();
    }

    disableInputs() {
        this._inputs.prop('disabled', true);
        this._editBtn.show();
        this._saveBtn.hide();
        this._cancelBtn.hide();
        this._referenceBtns.hide();
    }

    storeOriginalValues() {
        this._inputs.each(function () {
            const $input = $(this);
            this.originalValues[$input.attr('id')] = $input.is(':checkbox') ? $input.prop('checked') : $input.val();
        }.bind(this));
        this.originalHtml = $('#admin_main').html();
    }

    restoreOriginalValues() {
        this._inputs.each(function () {
            const $input = $(this);
            const originalValue = this.originalValues[$input.attr('id')];
            if ($input.is(':checkbox')) {
                $input.prop('checked', originalValue);
            } else {
                $input.val(originalValue);
            }
        }.bind(this));
        $('#admin_main').html(this.originalHtml);
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action && typeof this[action] === 'function') {
            this[action]();
        }
    }
}

// Initialize the Menu class
const menu = new Menu(document.getElementById('menu'));


new Menu(menu);