(function(){
    "use strict";

    QUnit.module("ColorChooser", {
        beforeEach: function() {
            $.mockjax.clear();
            sessionStorage.clear();

            this.$fixture = $("#qunit-fixture");
            this.$chooserPanel = this.$fixture.find("#color-chooser");
            this.colorSelectedUrl = "/fake/color/selected/url";
        }
    });

    QUnit.test("sets initial color", function(assert) {
        var player = {is_spectator: false, color: "blue"};
        var colorChooser = new ColorChooser(this.$chooserPanel, player, this.colorSelectedUrl);

        assert.expect(10);
        assert.dom(".color-chooser.bluesquare").hasClass("chosen-color");
        this.$chooserPanel.find(".color-chooser").not(".bluesquare").each(function() {
            assert.dom($(this)[0]).doesNotHaveClass("chosen-color");
        });
    });

    QUnit.test("does not set color for spectators", function(assert) {
        var player = {is_spectator: true, color: "blue"};
        var colorChooser = new ColorChooser(this.$chooserPanel, player, this.colorSelectedUrl);

        assert.expect(10);
        this.$chooserPanel.find(".color-chooser").each(function() {
            assert.dom($(this)[0]).doesNotHaveClass("chosen-color");
        });
    });

    QUnit.test("get initial color blue", function(assert) {
        var player = {is_spectator: false, color: "blue"};
        var colorChooser = new ColorChooser(this.$chooserPanel, player, this.colorSelectedUrl);
        assert.strictEqual(colorChooser.getChosenColor(), "blue");
    });

    QUnit.test("get initial color brown", function(assert) {
        var player = {is_spectator: false, color: "brown"};
        var colorChooser = new ColorChooser(this.$chooserPanel, player, this.colorSelectedUrl);
        assert.strictEqual(colorChooser.getChosenColor(), "brown");
    });

    QUnit.test("set color purple", function(assert) {
        var player = {is_spectator: false, color: "brown"};
        var colorChooser = new ColorChooser(this.$chooserPanel, player, this.colorSelectedUrl);
        colorChooser.setChosenColor("purple");
        assert.strictEqual(colorChooser.getChosenColor(), "purple");
    });

    QUnit.test("reports chosen color color", function(assert) {
        var player = {is_spectator: false, color: "brown"};
        var colorChooser = new ColorChooser(this.$chooserPanel, player, this.colorSelectedUrl);

        window.sessionStorage.setItem("room", "some_room_id");
        $.mockjax({
            url: this.colorSelectedUrl,
            data: assert.dataJsonEquals({color: "blue", room: "some_room_id"}),
            onAfterSuccess: assert.async()
        });

        colorChooser.reportChosenColor("blue");
    });

    QUnit.test("changes color on click", function(assert) {
        var player = {is_spectator: false, color: "brown"};
        var colorChooser = new ColorChooser(this.$chooserPanel, player, this.colorSelectedUrl);

        assert.expect(10 + 1 + 1);

        window.sessionStorage.setItem("room", "some_room_id");
        $.mockjax({
            url: this.colorSelectedUrl,
            data: assert.dataJsonEquals({color: "green", room: "some_room_id"}),
            onAfterSuccess: assert.async()
        });

        this.$chooserPanel.find(".color-chooser.greensquare").click();

        assert.strictEqual(colorChooser.getChosenColor(), "green");

        assert.dom(".color-chooser.greensquare").hasClass("chosen-color");
        this.$chooserPanel.find(".color-chooser").not(".greensquare").each(function() {
            assert.dom($(this)[0]).doesNotHaveClass("chosen-color");
        });
    });
})();
