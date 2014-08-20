/* jshint expr: true */
chai.should();

describe('Schema form', function() {

  describe('directive', function() {
    beforeEach(module('templates'));
    beforeEach(module('schemaForm'));
    beforeEach(
      //We don't need no sanitation. We don't need no though control.
      module(function($sceProvider) {
        $sceProvider.enabled(false);
      })
    );

    it('should return correct form type for format "color"',function(){
      inject(function($compile,$rootScope, schemaForm){
        var string_schema = {
          type: "object",
          properties: {
            color: {
              type: "string",
            }
          }
        };

        var color_schema = {
          type: "object",
          properties: {
            color: {
              type: "string",
              format: "color"
            }
          }
        };

        schemaForm.defaults(string_schema).form[0].type.should.be.eq("text");
        schemaForm.defaults(color_schema).form[0].type.should.be.eq("colorpicker");
      });
    });

  });
});
