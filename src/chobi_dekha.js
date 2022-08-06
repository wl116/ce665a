var img = new Image();
var newWin;


/*************************************
 * Function: loadImage(arg1, arg2)
 * Purpose: Loads a new thumbnail for
 * preview.
 *************************************/
function loadImage(fileName, url)
{
  this.url = url;
  img.src = fileName;
  document.preview.src = img.src;
}


/**********************************************
 * Function: bigImage()
 * Purpose: Displays the bigger version of the
 * current thumbnail in a popup window.
 **********************************************/
function bigImage()
{
  newWin = window.open(url,"big","menubar=0,toolbar=0,status=1,resizable=1,scrollbars=1, width=600, height=400");
}
