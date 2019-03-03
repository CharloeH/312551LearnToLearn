/*Saturday March 3rd, 2019
Sebastian Horton
After pressing the "Mock Your Text" button the user's text will be mocked.
*/
function onOpen() 
{
  var ui = DocumentApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Mock')
      .addItem('Mock Your Text', 'MockingText')
      .addToUi();
}

function MockingText()
{
  var isCapitalized = false;
  var i = 0;
  var doc = DocumentApp.getActiveDocument().getBody();
  var text = doc.getText();
  var txtOutput = "";

do
{
  if(isCapitalized == true)
  {
    
    if(text[i].indexOf(" ") >- 1)
    {
     txtOutput += text[i];
      i++;
    }
    
    else
    {
      txtOutput += text[i].toUpperCase();
      isCapitalized = false;
      i++;
    }
      
    
  }
  
  else
  {
    
    if(text[i].indexOf(" ") >- 1)
    {
      txtOutput += text[i];
      i++;
    }
    
    else
    {
      txtOutput += text[i].toLowerCase();
      isCapitalized = true;
      i++;
    } 
  }
}while(i < text.length)
  
  
DocumentApp.getUi().alert(txtOutput);
doc.editAsText().setText(txtOutput);
}

