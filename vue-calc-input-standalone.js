/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
* Licensed Under MIT (http://opensource.org/licenses/MIT)
*
* Version 1.0.0 ( STAND ALONE )
* - Use it when you don't need a filters
*
*/
Vue.directive('calc-input',{
  bind: function(){
    var me = this;
    me.evt = function(e) {
      var val = me.el.value;

      // Prevent falling in undefined value
      if(val === '' || val === undefined || val === NaN ) return 0;

      // if there's a truthy number..
      if(val){

        // If the number is string..
        if(typeof val == 'string') {
          val = val.replace(/^0/ig,''); // Remove first "0"
          val = val.replace(/\D/ig,''); // Remove Non digit Char
          val = val.replace(/\W/ig,''); // Remove Non Word Char
        }

        // Make a Regex
        var re = /\d{1,3}/g; // grouping each 3 digit
        var target = val.toString();
        var matchy;

        // make an array for matchy string
        var arr = [];
        while((matchy = re.exec(target)) !== null){
          arr.push(matchy[0].length);
        }

        // Convert String to Array
        var string = target.split('');

        // Add a comma every three digit from back
        arr.splice(arr.length-1); // remove buggy first comma
        for (var i = 0; i < arr.length; i++) {
          var time = arr[i];
          var position = i*(time+1);
          string.splice(string.length-position-time,0,',');
        }

        // join Array
        me.el.value = string.join('');
      }

      // Prevent falling in undefined value
      return val;
    };

    // Add a Event listener
    me.el.addEventListener('input',me.evt, false);
  },

  unbind: function() {
    // Remove The listener
    me.el.removeEventListener('input',me.evt, false);
  }
});
