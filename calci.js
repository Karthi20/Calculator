
	function numInput(number)
					{
				     document.getElementById('res').value+=number;
		            }
	function solution()
					{
						try{
						 var x=document.getElementById('res').value;
						  var y=eval(x);
						   document.getElementById('res').value=y;
					}
					catch{
						alert("Enter the correct input")
					}
                    }
	function sqrt()
	                {
	   	                var a=document.getElementById('res').value;
						 var b=Math.sqrt(a);
						  document.getElementById('res').value=b
	                }
    function back()
	                {
	                    var m=document.getElementById('res').value;
	     	             document.getElementById('res').value=m.substring(0,m.length-1);
	                }
	function clean()
	                {
	                    document.getElementById('res').value= "";
	                }
	function allowdrop(value)
	                {
	     	           value.preventdeafult();
                    }
	function dragstart(value)
	                {
		               value.dataTransfer.setData("btn", value.target.id);
	                }
	function drop(value) 
	               {
	            value.preventDefault();
	             var data = value.dataTransfer.getData("btn");
	              value.target.appendChild(document.getElementById(data));
	               }
    function calcPower()
                   {
    	               var result=document.getElementById('res').value;	
    	                var data=result.split("^");
    	                 var base=data[0]
    	                  var exponent=data[1]
    	                   var pow=power(base,exponent)
    	                    document.getElementById('res').value=pow
    	            }
    function power(base,exponent)
          {
          	if(exponent === 0) 
          	{
                return 1;
        } 
                  else   
                   {
                    var result = 1;
                      for (var i = 0; i < exponent; i++) 
                        {
                        result = result * base;
              }
                           return result;
          }
     }
        
