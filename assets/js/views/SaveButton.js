module.exports = Backbone.View.extend({
    events: {
        'click': 'doSave',
    },
    getJSONBlob: function() {
        var data = this.model.toJSON();
        return new Blob(
            [JSON.stringify(data)],
            {type: 'application/json;charset=utf-8'}
        );
    },
    doSave: function() {
        var box = bootbox.prompt('Enter a file name for this diagram', function(result) {
            var name = result || 'History Maker Diagram';
            saveAs(this.getJSONBlob(), name + '.json');
        }.bind(this));
    },
});
